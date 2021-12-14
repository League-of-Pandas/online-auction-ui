import axios from 'axios'
import useSWR from 'swr'
import jwt from 'jsonwebtoken'
export const apiUrl = process.env.NEXT_PUBLIC_RESOURCE_URL_ITEMS;

import { useAuth } from '../contexts/auth'

export default function useItems() {

    const { tokens, logout } = useAuth()

    const { data, error, mutate } = useSWR([apiUrl, tokens], fetchResource);

    async function fetchResource(url) {
        try {
            const response = await axios.get(url);

            return response.data;

        } catch (error) {
            handleError(error);
        }
    }

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

    async function updateResource(resource,id) {
        try {
            const url = apiUrl + id + "/";
            await axios.put(url, resource, config());
            mutate(); // mutate causes complete collection to be refetched
        } catch (error) {
            handleError(error);
        }
    }

    // helper function to handle getting Authorization headers EXACTLY right
    function config() {

        return {
            headers: {
                'Authorization': 'Bearer ' + tokens.access
            }
        }
    }

    async function handleError(error) {
        logout()
        return(error)
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


