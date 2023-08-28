import {headers} from "next/headers";
import fetcher from "@/lib/fetcher";

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}api/posts`

export default async function getPosts() {
    const res = await fetch(`${baseURL}`);
    const posts = await res.json()

    if (posts.length > 0) {
        return posts
    }

    return posts;
}


export const fetchPost = async (pathname) => {
    try {
        const post =  await fetcher(`api/posts/${pathname}`)
        return post.data
    }catch (e) {
        console.log(e)
    }
}

export const fetchWorkout = async (pathname) => {
    try {
        const workout =  await fetcher(`api/workouts/${pathname}`)
        return workout.data
    }catch (e) {
        console.log(e)
    }
}

export const fetchPosts = async () => {
    try {
        const posts =  await fetcher(`api/posts`)
        return posts.data
    }catch (e) {
        console.log(e)
    }
}

export const fetchWorkouts = async () => {
    try {
        const workouts =  await fetcher(`api/workouts`)
        return workouts.data
    }catch (e) {
        console.log(e)
    }
}

export const fetchSections = async (post) => {
    try {
        if (post){
            const sections = 	await fetcher(`api/sections/${post?.id}`);
            return sections.data;
        }
    }catch (e) {
        console.log(e)
    }
}

export const fetchWorkoutSections = async (workout) => {
    try {
        if (workout){
            const workoutSections = 	await fetcher(`api/workoutSections/${workout?.id}`);
            return workoutSections.data;
        }
    }catch (e) {
        console.log(e)
    }
}

export const fetchAuthor = async (post) => {
    try {
        if (post){
            const sections = 	await fetcher(`api/users/${post?.authorId}`);
            return sections.data;
        }
    }catch (e) {
        console.log(e)
    }
}