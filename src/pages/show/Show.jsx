import { useState, useEffect } from "react"
import { useParams } from "react-router"
import axios from "axios"
import st from "./Show.module.css"
import VoteStar from "../../components/vote_star/VoteStar"

export default function Show() {

    const [post, setPost] = useState('')

    const { id } = useParams()

    function fetchMovie() {
        axios.get(`http://localhost:3500/api/movies/${id}`)
            .then((res) => {
                console.log(res.data)
                setPost(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchMovie()
    }, [id])


    //----------------------------------------------------
    const initReview = {
        movie_id: id,
        name: '',
        vote: '',
        text: ''
    }

    const [review, setReview] = useState(initReview)

    function handle(e) {

        const { name, value } = e.target
        setReview({
            ...review,
            [name]: value
        })
    }


    function addRew(e) {
        e.preventDefault()

        console.log('Sending review:', review)

        axios.post(`http://localhost:3500/api/movies/${id}/reviews`, review)
            .then((res) => {
                // console.log(res.data)
                setReview(initReview)
                fetchMovie()
            })
            .catch((err) => {
                console.error(err)
            })

    }


    return (
        <div className="container">
            {post &&
                <>
                    <div className={st.container}>
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

                    {/* ----------------------------------------------- */}

                    <form onSubmit={addRew}>

                        <div>
                            <label htmlFor="name">Insert your name</label>
                            <input type="text" name='name' id="name" placeholder="Name" onChange={handle} value={review.name} />
                        </div>
                        <div>
                            <label htmlFor="text">Your opinion</label>
                            <input type="text" name='text' id="text" placeholder="Your opinion" onChange={handle} value={review.text} />
                        </div>
                        <div>
                            <label htmlFor="vote">Vote</label>
                            <input type="number" name='vote' id="vote" placeholder="Vote" onChange={handle} value={review.vote} />
                        </div>
                        <button type="submit">Add</button>
                    </form>
                </>

            }
        </div >
    )
}