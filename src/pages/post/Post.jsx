import { useContext, useEffect, useState } from 'react'
import GlobalContext from '../../context/GlobalContext'
import axios from 'axios'
import st from './Post.module.css'

const initReview = {
    // movie_id: undefined,
    name: undefined,
    vote: undefined,
    text: undefined
}

export default function Post() {

    const { posts } = useContext(GlobalContext)

    const [review, setReview] = useState(initReview)

    const [formData, setFormData] = useState(posts)
    const [dataID, setDataID] = useState('')


    useEffect(() => {
        // fetchData()
        axios.get(`http://localhost:3500/api/movies`)
            .then((res) => {
                // console.log(res.data)
                setFormData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    function handle(e) {
        setReview(e.target.value)
    }


    function addRew(e) {
        e.preventDefault()

        axios.post(`http://localhost:3500/api/movies/${dataID}/reviews`, review)
            .then((res) => {
                // console.log(res.data)
                setReview(initReview)
            })
            .catch((err) => {
                console.log(err)
            })

        // setFormData(...formData, review)
    }


    return (
        <>
            <div className="container">
                <form onSubmit={addRew}>
                    {/* <select name="id" value={dataID} onChange={(e) => setDataID(e.target.value)}>
                        <option value="">Choose movie</option>
                        {posts.map(e =>
                            <option key={e.id} value={e.movie_id}>{e.title}</option>
                        )}
                    </select> */}
                    <div>
                        <label htmlFor="name">Insert your name</label>
                        <input type="text" name='name' placeholder="Name" onChange={handle} value={review.name} />
                    </div>
                    <div>
                        <label htmlFor="movie_id">Film to review</label>
                        <input type="text" name='movie_id' placeholder="Film" onChange={(e) => setDataID(e.target.value)} value={dataID} />
                    </div>
                    <div>
                        <label htmlFor="object">Your opinion</label>
                        <input type="text" name='object' placeholder="Film" onChange={handle} value={review.text} />
                    </div>
                    <div>
                        <label htmlFor="vote">Vote</label>
                        <input type="text" name='vote' placeholder="Vote" onChange={handle} value={review.vote} />
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div>
        </>
    )
}