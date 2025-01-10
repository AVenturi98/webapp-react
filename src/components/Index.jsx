import { useEffect, useState } from "react"
import axios from "axios"

export default function Index() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3500/api/movies')
            .then((res) => {
                console.log(res)
                setPosts(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    return (
        <div>
            {posts.map(p =>
                <div key={p.id}>{p.title}</div>
            )}
        </div>
    )
}