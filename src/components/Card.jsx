import { useState } from "react"
import { NavLink } from "react-router"
import defaultImg from "../assets/defaultIMG.png"

export default function Card({ items = [] }) {

    const { id, title, abstract, genre } = items

    const [hoverEvent, setHoverEvent] = useState(false)

    function hidden() {
        setHoverEvent(false)
    }
    function visibility() {
        setHoverEvent(true)
    }


    return (

        <div className="card" onMouseOver={visibility} onMouseOut={hidden}>

            <img src={defaultImg} alt="" />

            {hoverEvent &&
                <div className="card-body">
                    <div className="title">{title}</div>
                    <div className="text">{abstract}</div>
                    <div className="genre">{genre}</div>
                    <NavLink to={`/${id}`}>
                        <button>see more</button>
                    </NavLink>
                </div>
            }
        </div>
    )
}