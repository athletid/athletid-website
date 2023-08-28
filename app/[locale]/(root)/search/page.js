import React from 'react';
import SearchResult from "@/components/Blog/Search/SearchResults/SearchResult";
import HeaderBlog from "@/components/Blog/HeaderBlog";

const Search = () => {
	
	return (
		<>
			<div className={'max-w-[350px] md:max-w-[1170px] mx-auto px-4'}>
				<HeaderBlog/>
				<SearchResult/>
			</div>
		</>
	);
};

export default Search;