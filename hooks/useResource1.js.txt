import axios from 'axios'
import useSWR from 'swr'

export const apiUrl = process.env.NEXT_PUBLIC_RESOURCE_URLS_ITEMS;
// export const tokenURL = `${apiUrl}api/v1/cookie_stands`

import { useAuth } from '../contexts/auth'

export default function useResource() {

    const { tokens, logout } = useAuth()

    const { data, error, mutate } = useSWR([apiUrl, tokens], fetchResource);

    async function fetchResource(url) {

        // if (!tokens) {
        //     return;
        // }

        try {
            const response = await axios.get(url);

            return response.data;

        } catch (error) {
            handleError(error);
        }
    }
    // http://127.0.0.1:8000/accounts/signup/
    // async function createUser(info) {

    //     try {
    //         await axios.post("http://127.0.0.1:8000/user/", info, config());
    //         mutate(); // mutate causes complete collection to be refetched
    //     } catch (error) {
    //         handleError(error);
    //     }
    // }
    async function createResource(info) {

        try {
            await axios.post(apiUrl, info, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }

    async function deleteResource(id) {

        try {
            const url = apiUrl + id;
            await axios.delete(url, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }

    async function updateResource(resource) {
        // STRETCH
        // Add ability for user to update an existing resource
    }
    
    // helper function to handle getting Authorization headers EXACTLY right
    function config() {

        return {
            headers: {
                'Authorization': 'Bearer ' + tokens.access
            }
        }
    }

    function handleError(error) {
        console.error(error);
        // console.log(error);
        // currently just log out on error
        // but a common error will be short lived token expiring
        // STRETCH: refresh the access token when it has expired
        logout();
    }

    return {
        resources: data,
        error,
        loading: tokens && !error && !data,
        createResource,
        deleteResource,
        updateResource,
        // createUser,
    }
}

/* STRETCH
This approach works, but it's not very snappy for the user.
Check the SWR docs to see if you can "optomistically" render updated state while the API response is pending.
*/

