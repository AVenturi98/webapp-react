import { useContext, useEffect } from "react"
import Card from "../components/Card"
import GlobalContext from "../context/GlobalContext"
import Loader from "../components/loader/Loader"

export default function Index() {

    const { fetchData, posts, loading } = useContext(GlobalContext)


    useEffect(() => {
        fetchData()
    }, [])

    return (
        <main>
            <div className="container flex">
                {posts.length !== 0 ?
                    posts.map(p =>
                        <div key={p.id} className="col">
                            <Card items={p} />
                        </div>
                    ) : <div>Not result</div>}
            </div>
            {loading &&
                <Loader />}
        </main>
    )
}