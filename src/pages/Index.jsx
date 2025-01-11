import { useEffect, useState } from "react"
import axios from "axios"
import Card from "../components/Card"

export default function Index() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3500/api/movies')
            .then((res) => {
                console.log(res.data)
                setPosts(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <main>
            <div className="container flex">
                {posts.map(p =>
                    <div key={p.id} className="col">
                        <Card items={p} />
                    </div>
                )}
            </div>
        </main>
    )
}