import axios from "axios";

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;
const response = (...args) => fetch(...args).then(res => res.json())


export default async function fetcher(endpoint){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    try {
        const response = await axios.get(`${baseURL}${endpoint}`);
        return {
            data: response.data,
            isLoading: false,
            isError: false,
        };
    } catch (error) {
        console.log(error);
        return {
            data: null,
            isLoading: false,
            isError: true,
        };
    }
}