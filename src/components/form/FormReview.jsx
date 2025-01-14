import axios from "axios"
import { useState } from "react"
import st from "./FormReview.module.css"


export default function FormReview({ id, callback = () => { } }) {

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
                callback()
            })
            .catch((err) => {
                console.error(err)
            })

    }

    return (
        <form className={`container ${st.formRew}`} onSubmit={addRew}>

            <div>
                <label htmlFor="name">Insert your name</label>
                <input className={st.inputRew} type="text" name='name' id="name" placeholder="Name" onChange={handle} value={review.name} />
            </div>
            <div>
                <label htmlFor="text">Your opinion</label>
                <input className={st.inputRew} type="text" name='text' id="text" placeholder="Write about.." onChange={handle} value={review.text} />
            </div>
            <div>
                <label htmlFor="vote">Vote</label>
                <input className={st.inputRew} type="number" name='vote' id="vote" placeholder="Vote" onChange={handle} value={review.vote} />
            </div>
            <button type="submit">Add</button>
        </form>
    )
}