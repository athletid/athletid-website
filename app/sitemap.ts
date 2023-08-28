import getPosts, {fetchWorkouts} from "@/lib/helper";

export default async function sitemap() {
    const baseUrl = "https://athletid.com"

    const posts = await getPosts();
    const postsUrls = posts.map((post) => {
        return {
            url: `${baseUrl}/posts/${post.slug}`,
            lastModified: new Date(post.updatedAt)
        }
    }) ?? []

    const workouts = await fetchWorkouts();
    const workoutsUrls = workouts.map((workout) => {
        return {
            url: `${baseUrl}/workouts/${workout.slug}`,
            lastModified: new Date(workout.updatedAt)
        }
    }) ?? []

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/athletid`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/timer`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
        },
        ...postsUrls,
        ...workoutsUrls
    ]
}
