'use client'
import React, {useEffect, useRef, useState} from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import {useTranslations} from 'next-intl';
import {BsSearch} from 'react-icons/bs';

const SearchBar = (props) => {
	const t = useTranslations('blog');
	const [searchQuery, setSearchQuery] = useState('');
	const [postType, setPostType] = useState(props.postTypeClick || null);
	const router = useRouter();
	const search = useSearchParams();
	const searchInputRef = useRef(null);
	
	useEffect(() => {
		const searchQuery = search ? search.get('q') : null;
		setSearchQuery(searchQuery || '');
		
		if (searchInputRef.current) {
			searchInputRef.current.focus();
		}
	}, [search]);
	
	useEffect(() => {
		if (props.postTypeClick) {
			setPostType(props.postTypeClick);
		}
	}, [props.postTypeClick]);
	
	const handleInputChange = (event) => {
		const inputValue = event.target.value;
		setSearchQuery(inputValue);
		
		const encodedSearchQuery = encodeURI(inputValue);
		if (encodedSearchQuery === ""){
			router.replace("/blog");
		} else {
			const path = `/search?q=${encodedSearchQuery}&type=${postType ? postType.toLowerCase() : 'articles'}`;
			router.replace(path);
		}

	};
	
	useEffect(() => {
		if (search.get('type') === 'workouts') {
			setPostType('workouts');
		}else {
			setPostType('articles');
		}
	}, [search]);
	
	
	return (
		<form className="flex" onSubmit={(event) => event.preventDefault()}>
			<div className="relative md:w-1/3 w-full">
				<input
					ref={searchInputRef}
					value={searchQuery}
					onChange={handleInputChange}
					className="focus:ring-1 focus:ring-white w-full"
					type="text"
					required
					placeholder={t('searchForm.placeholder')}
				/>
				<BsSearch
					size={16}
					color="black"
					onClick={handleInputChange}
					className="absolute transform -translate-y-1/2 top-1/2 right-[10px] cursor-pointer"
				/>
			</div>
		</form>
	);
};


export default SearchBar;

