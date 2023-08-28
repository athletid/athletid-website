'use client'
import fetcher from '@/lib/fetcher'
import React, {useEffect, useState} from 'react'
import CircleSpinner from '@/components/UI/Spinner/CircleSpinner'
import Error from '@/components/Blog/_child/Error'
import {Post} from '@/components/Blog/ArchivePosts/Post'
import ToggleButton from '@/components/UI/Button/ToggleButton'
import Image from 'next/image'
import SortFilter from '@/components/Blog/Filter/SortFilter'
import TabMenu from "@/components/Blog/ArchivePosts/TabMenu";
import {RelatedWorkout} from "@/components/Blog/Workout/RelatedWorkout";
import HeaderBlog from "@/components/Blog/HeaderBlog";

const ArchivePost = () => {
	let [countLoadMore, setCountLoadMore] = useState(0)
	let [postsToShow, setPostsToShow] = useState(6)
	const [posts, setPosts] = useState([])
	const [categories, setCategories] = useState({
		postCategories: [],
		workoutCategories: [],
	})
	const [postsCategory, setPostsCategory] = useState([])
	const [workouts, setWorkouts] = useState([])
	const [actualWorkoutCategories, setActualWorkoutCategories] = useState([])
	const [categoriesFound, setCategoriesFound] = useState([])
	const [workoutCategoriesFound, setWorkoutCategoriesFound] = useState([])
	const [postsInfosToShow, setPostsInfosToShow] = useState([])
	const [workoutInfosToShow, setWorkoutInfosToShow] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const [categoryClick, setCategoryClick] = useState(null)
	const [postTypeClick, setPostTypeClick] = useState("Articles")
	const [ascendingOrder, setAscendingOrder] = useState(false)
	
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			try {
				const [postsResponse, categoriesResponse, workoutCategoriesResponse, workoutsResponse] = await Promise.all([
					fetcher('api/posts'),
					fetcher('api/categories'),
					fetcher('api/workoutCategories'),
					fetcher('api/workouts')
				])
				
				setCategories({
					postCategories: categoriesResponse.data,
					workoutCategories: workoutCategoriesResponse.data,
				})
				setPosts(postsResponse.data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)))
				setWorkouts(workoutsResponse.data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)))
				setIsError(false)
			} catch (error) {
				setIsError(true)
			} finally {
				setIsLoading(false)
			}
		}
		
		fetchData()
	}, [])
	
	useEffect(() => {
		const postsCategories = posts.map((post) => ({id: post.categoryId}))
		setPostsCategory(postsCategories)
		
		const workoutCategories = workouts.map((workout) => ({id: workout.workoutCategoryId}))
		setActualWorkoutCategories(workoutCategories)
	}, [posts, workouts])
	
	useEffect(() => {
		const matchingCategories = categories.postCategories.filter((category) =>
			postsCategory.some((postCategory) => postCategory.id === category.id)
		)
		const matchingWorkoutCategories = categories.workoutCategories.filter((category) =>
			actualWorkoutCategories.some((actualWorkoutCategory) => actualWorkoutCategory.id === category.id)
		)
		
		setCategoriesFound(matchingCategories)
		setWorkoutCategoriesFound(matchingWorkoutCategories)
	}, [actualWorkoutCategories, categories, postsCategory])
	
	useEffect(() => {
		if (categoryClick && postTypeClick === "Articles") {
			const postsInCategory = posts.filter(
				(post) => post.categoryId === categoryClick && post.status === "PUBLISHED"
			)
			setPostsInfosToShow(postsInCategory)
		} else {
			const workoutsInCategory = workouts.filter(
				(workout) =>
					workout.workoutCategoryId === categoryClick && workout.status === "PUBLISHED"
			)
			setWorkoutInfosToShow(workoutsInCategory)
		}
	}, [categoryClick, posts, postTypeClick, workouts])
	
	useEffect(() => {
		if (workouts && workouts.filter((workout) => workout.status === 'PUBLISHED')) {
			if (categoryClick && postTypeClick === "Workouts") {
				const workoutsInCategory = workouts.filter(
					(workout) => workout.workoutCategoryId === categoryClick
				)
				setWorkoutInfosToShow(workoutsInCategory)
			} else {
				setWorkoutInfosToShow(workouts)
			}
		} else {
			console.log('Error, impossible to set WorkoutsCategory')
		}
	}, [categoryClick, postTypeClick, workouts, categories.workoutCategories])
	
	
	useEffect(() => {
		setPostsToShow(6 + countLoadMore * 6)
	}, [countLoadMore])
	
	useEffect(() => {
		const sortFunction = ascendingOrder
			? (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt)
			: (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
		
		setPostsInfosToShow(Array.isArray(postsInfosToShow) ? [...postsInfosToShow].sort(sortFunction) : [])
		setWorkoutInfosToShow(Array.isArray(workoutInfosToShow) ? [...workoutInfosToShow].sort(sortFunction) : [])
	}, [ascendingOrder])
	
	
	const handleSortToggle = () => {
		setAscendingOrder((prevState) => !prevState)
	}
	if (isLoading) return <CircleSpinner/>
	if (isError) return <Error/>
	
	return (
		<div>
			<HeaderBlog postTypeClick={postTypeClick}/>
			<SortFilter onSortToggle={handleSortToggle} ascendingOrder={ascendingOrder}/>
			<TabMenu
				categories={categories.postCategories}
				workoutCategories={workoutCategoriesFound}
				categoryClick={categoryClick}
				setCategoryClick={setCategoryClick}
				setPostTypeClick={setPostTypeClick}
				postTypeClick={postTypeClick}
			/>
			<div className={'space-y-[68px] md:space-y-0 flex flex-col md:grid md:grid-cols-2 md:gap-[30px]'}>
				{postTypeClick === "Articles" && categoryClick === null ? (
					posts.slice(0, postsToShow).map((value, index) => <Post data={value} key={index} />)
				) : (
					postTypeClick === "Articles" ? (
						postsInfosToShow.slice(0, postsToShow).map((value, index) => <Post data={value} key={index} />)
					) : (
						workoutInfosToShow.slice(0, postsToShow).map((value, index) => <RelatedWorkout data={value} key={index} />)
					)
				)}
			</div>
			{(posts.length > postsToShow || postsToShow < postsInfosToShow.length || postsToShow < workoutInfosToShow.length || posts > postsToShow) && (
				<ToggleButton
					variant={'red'}
					className={'mx-auto mt-[68px] py-4 px-8 !rounded-full'}
					content={
						<div className={'flex space-x-2 items-center'}>
							<Image
								src={'/assets/icons/arrowdown.svg'}
								width={24}
								height={24}
								sizes={'10vw'}
								alt={''}
							/>
							<p className={'text-[16px] leading-[19px]'}>Load more</p>
						</div>
					}
					link={'/'}
					onClick={() => {
						setCountLoadMore(countLoadMore + 1);
					}}
				/>
			)}
		</div>
	)
}

export default ArchivePost
