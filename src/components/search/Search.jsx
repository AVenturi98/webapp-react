import GlobalContext from "../../context/GlobalContext"
import { useContext } from "react"
import st from "./Search.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export default function Search() {

    const { fetchData, search, setSearch } = useContext(GlobalContext)

    function searchMovie(e) {
        e.preventDefault()
        fetchData()
    }


    return (
        <>
            <form onSubmit={searchMovie} className={st.form}>
                <input type="text" placeholder="Search.." value={search} onChange={(e) => { setSearch(e.target.value) }} className={st.input} />
                <button type="submit" className={st.btn}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </>
    )
}