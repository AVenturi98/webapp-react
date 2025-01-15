import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router"
import axios from "axios"
import VoteStar from "../../components/vote_star/VoteStar"
import FormReview from "../../components/form/FormReview"
import Loader from "../../components/loader/Loader"
import st from "./Show.module.css"
import GlobalContext from "../../context/GlobalContext"

export default function Show() {

    const { loading, setLoading } = useContext(GlobalContext)

    const [post, setPost] = useState('')

    const { id } = useParams()

    function fetchMovie() {
        setLoading(true)
        axios.get(`http://localhost:3500/api/movies/${id}`)
            .then((res) => {
                console.log(res.data)
                setPost(res.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchMovie()
    }, [id])

    return (
        <div>
            {post &&
                <>
                    <div className={`container ${st.container}`}>
                        <img src={'http://localhost:5173/src/assets/' + post.image} className={st.colPart} />
                        <div className={`${st.infoMovie} ${st.colPart}`}>
                            <h1 className={st.title}>{post.title}</h1>
                            <div><h3>Description</h3> <br /><span className={st.abstract}>{post.abstract}</span></div>
                            <div><h3>Average vote</h3> <br />
                                {post.avg.map(e =>
                                    <div key={e.toString()} className={st.avg_vote}>
                                        <VoteStar vote={e.vote_avg} />
                                        <span> {e.vote_avg}</span>
                                    </div>
                                )}
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
                    </div>
                    <div className={st.sectForm}>
                        <h2>Add your review</h2>
                        <FormReview id={id} callback={fetchMovie} />
                    </div>
                </>
            }
            {loading &&
                <Loader />}
        </div >
    )
}