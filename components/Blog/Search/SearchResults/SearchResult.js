'use client'
import React, {useEffect, useState} from 'react';
import {useSearchParams} from 'next/navigation';
import {Post} from '@/components/Blog/ArchivePosts/Post';
import SortFilter from '@/components/Blog/Filter/SortFilter';
import fetcher from '@/lib/fetcher';
import {RelatedWorkout} from "@/components/Blog/Workout/RelatedWorkout";
import CircleSpinner from "@/components/UI/Spinner/CircleSpinner";


const SearchResult = ({params}) => {
	const baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;
	const search = useSearchParams();
	const searchQuery = search ? search.get('q') : null;
	const encodedSearchQuery = encodeURI(searchQuery || '');
	const [ascendingOrder, setAscendingOrder] = useState(false);
	const [posts, setPosts] = useState([]);
	const [workouts, setWorkouts] = useState([]);
	const [postsInfosToShow, setPostsInfosToShow] = useState([]);
	const [workoutsInfosToShow, setWorkoutsInfosToShow] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	
	const searchParams = useSearchParams()
	const searchType = searchParams.get('type')
	
	console.log(postsInfosToShow)
	
	useEffect(() => {
		setPostsInfosToShow(posts);
		setWorkoutsInfosToShow(workouts)
	}, [posts, workouts]);
	
	
	useEffect(() => {
		if (ascendingOrder === false) {
			setPostsInfosToShow((prevState) =>
				prevState ? [...prevState].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)) : []
			);
		} else {
			setPostsInfosToShow((prevState) =>
				prevState ? [...prevState].sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt)) : []
			);
		}
	}, [ascendingOrder]);
	
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;
			try {
				if (searchType === "articles") {
					const postsResponse = await fetcher(`api/posts/search?q=${encodedSearchQuery}`);
					setPosts(postsResponse.data.posts.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)));
				} else if (searchType === "workouts") {
					const workoutsResponse = await fetcher(`api/workouts/search?q=${encodedSearchQuery}`);
					setWorkouts(workoutsResponse.data.workouts.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)));
				}
				setIsError(false);
			} catch (error) {
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		};
		
		fetchData();
	}, [encodedSearchQuery, searchType]);
	
	
	const handleSortToggle = () => {
		setAscendingOrder((prevState) => !prevState);
	};
	
	if (isLoading) return <CircleSpinner/>
	
	return (
		<div className={'mt-[72px] md:mt-[120px]'}>
			<SortFilter onSortToggle={handleSortToggle} ascendingOrder={ascendingOrder}/>
			<div className={'space-y-[68px] md:space-y-0 flex flex-col md:grid md:grid-cols-2 md:gap-[30px]'}>
				
				{
					searchType === "articles" ?
						postsInfosToShow.length >= 1 &&
						postsInfosToShow.map((value, index) => {
							return <Post data={value} key={index}/>;
						}) :
						workoutsInfosToShow.length >= 1 &&
						workoutsInfosToShow.map((value, index) => {
							return <RelatedWorkout data={value} key={index}/>;
						})
				}
			
			</div>
		</div>
	);
};

export default SearchResult;
