import { useState, useEffect } from "react"
import { useParams } from "react-router"
import axios from "axios"
import st from "./Show.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as full } from "@fortawesome/free-solid-svg-icons"

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
                <div className={st.container}>
                    <img src={'http://localhost:5173/src/assets/' + post.image} className={st.colPart} />
                    <div className={`${st.infoMovie} ${st.colPart}`}>
                        <h1 className={st.title}>{post.title}</h1>
                        <div><h3>Description</h3> <br /><span className={st.abstract}>{post.abstract}</span></div>
                        <div><h3>Average vote</h3> <br />{post.vote.map(e =>
                            <div key={Date()}>
                                {e.vote_avg}
                                <FontAwesomeIcon icon={full} style={{ color: "#FFD43B", }} />
                            </div>)}
                        </div>
                    </div>
                    <ul className={`${st.rev} ${st.colFull}`}>
                        <h2 >SOMEONE REVIEWS TO MOVIE</h2>

                        {
                            post.reviews.map((el) =>
                                <li key={el.id}>
                                    <div className={st.firstRowRev}>
                                        <div>NAME: <br /><span>{el.name}</span></div>
                                        <div className={st.dateInfo}>{el.updated_at ? 'update to: ' : 'created to: '}<br />{el.updated_at ? el.updated_at : el.created_at}</div>
                                    </div>
                                    <div>OBJECT: <span>{el.text}</span></div>
                                    <div>VOTE: <span>{el.vote}</span></div>
                                </li>
                            )
                        }
                    </ul>
                </div>}
        </div>
    )
}