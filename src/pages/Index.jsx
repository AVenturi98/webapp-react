import { useContext, useEffect } from "react"
import Card from "../components/Card"
import GlobalContext from "../context/GlobalContext"

export default function Index() {

    const { fetchData, posts } = useContext(GlobalContext)


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
        </main>
    )
}