import { useContext } from "react"
import { quackContext } from "../contexts/QuacContex"

export const useQuacProvider = () => {
    return useContext(quackContext)
}