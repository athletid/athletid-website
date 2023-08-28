import React, { useEffect, useState } from 'react'

const TabMenu = (props) => {
	const [categories, setCategories] = useState([])
	
	useEffect(() => {
		if (props.postTypeClick === "Articles") {
			setCategories(props.categories)
		} else {
			setCategories(props.workoutCategories)
		}
	}, [props.categories, props.postTypeClick, props.workoutCategories])
	
	const handleCategoryClick = (category) => {
		props.setCategoryClick(category)
	}
	
	const handlePostTypeClick = (postType) => {
		props.setPostTypeClick(postType)
	}
	
	return (
		<div>
			<div className="flex space-x-4 border-b border-darkWhite cursor-pointer overflow-x-auto pb-6">
				<div
					onClick={() => handlePostTypeClick("Articles")}
					className={`relative text-[14px] leading-[24px] ${
						props.postTypeClick === "Articles"
							? "text-black font-[500]"
							: "text-darkGrey"
					}`}
				>
					Articles
				</div>
				<div
					onClick={() => handlePostTypeClick("Workouts")}
					className={`relative text-[14px] leading-[24px] ${
						props.postTypeClick === "Workouts"
							? "text-black font-[500]"
							: "text-darkGrey"
					}`}
				>
					Workouts
				</div>
			</div>
			<div className="flex space-x-4 border-b border-darkWhite mb-[72px] md:mb-[65px] cursor-pointer overflow-x-auto py-6">
				<div
					onClick={() => handleCategoryClick(null)}
					className={`relative text-[14px] leading-[24px] whitespace-nowrap ${
						props.categoryClick === null
							? "text-black font-[500]"
							: "text-darkGrey"
					}`}
				>
					View all
				</div>
				{categories.map((category) => (
					<CategoryItem
						key={category.id}
						category={category}
						categoryClick={props.categoryClick}
						handleCategoryClick={handleCategoryClick}
					/>
				))}
			</div>
		</div>
	)
}

const CategoryItem = ({ category, categoryClick, handleCategoryClick }) => {
	const isActive = category.id === categoryClick
	
	return (
		<div
			onClick={() => handleCategoryClick(category.id)}
			className="relative"
		>
			<div
				className={`text-[14px] leading-[24px] ${
					isActive ? "text-black font-[500]" : "text-darkGrey"
				}`}
			>
				{category.name}
			</div>
		</div>
	)
}

export default TabMenu
