import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router"

export default function Index() {

    const [post, setPost] = useState('')

    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3500/api/movies/${id}`)
            .then((res) => {
                console.log(res)
                setPost(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])


    return (
        <div className="container">
            {post &&
                <>
                    <div>{post.title}</div>
                    <ul>

                        {
                            post.reviews.map((el) =>
                                <li key={el.id}>
                                    <div>{el.name}</div>
                                    <div>{el.text}</div>
                                    <div>{el.vote}</div>
                                </li>
                            )
                        }
                    </ul>
                </>}
        </div>
    )
}