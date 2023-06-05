import { useContext } from 'react'
import {authContext} from '../contexts/'

export const useAuthContext = () => {
    if(!authContext)  throw new Error ('useAuthProvider must be used within a AuthProvider')

    return useContext(authContext)
}