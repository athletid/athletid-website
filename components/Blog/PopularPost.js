import Link from "next/link";
import Image from "next/image";
import React from "react";
import Author from "@/components/Blog/_child/Author";
import fetcher from "@/lib/fetcher";
import Spinner from "@/components/UI/Spinner/CircleSpinner";
import Error from "@/components/Blog/_child/Error";
import useMediaQuery from "@/components/Hooks/useMediaQuery"


const PopularPost = () => {

    const isMobile = useMediaQuery('(max-width: 700px)');
    const {data, isLoading, isError} = fetcher('api/trending');
    if (isLoading) return <Spinner></Spinner>
    if (isError) return <Error></Error>

    return (<div className={'md:max-w-[1024px] max-w-[350px]  mx-auto lg:pt-40 pt-28'}>
        <h2 className={'pb-12 text-center'}>Articles populaires</h2>
        <div className={'grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-6'}>
            {
                isMobile ? data.slice(0, 1).map((value, index) => (
                    <Post data={value} key={index}></Post>)) : data.slice(0, 6).map((value, index) => (
                    <Post data={value} key={index}></Post>))
            }
        </div>
    </div>);
};

export default PopularPost;

function Post({data}) {

    const {title, category, img, published, author, slug} = data;
    return (
        <Link href={`/posts/${slug}`}>
            <div className={"rounded-medium md:p-6 p-4 shadow-medium hover:shadow-mediumHover duration-300 h-full"}>
                <div className="images">

                    <div className={`w-full relative overflow-hidden h-[200px]`}>
                        <Image layout={'fill'} className={'object-cover rounded-medium'} src={img || "/"} alt={""}/>
                    </div>
                </div>
                <div className="flex justify-center flex-col mt-4">
                    <div className={`flex space-x-4 text-timeRed text-xl font-semibold`}>
                        {category || "Inconnue"}
                    </div>
                    <div className={`my-4 font-semibold text-xl hover:text-black text-gray-700 duration-300`}>
                        {title || "Titre"}
                    </div>
                    <div className={``}>
                        {author ? <Author {...author} fontSize={'!text-sm !leading-6'}
                                          published={published}></Author> : <></>}
                    </div>


                </div>
            </div>
        </Link>
    )
}