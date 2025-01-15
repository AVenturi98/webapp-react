import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import st from "./Loader.module.css"


export default function Loader() {
    return (
        <div className={st.containLoad}>
            <FontAwesomeIcon icon={faSpinner} className={st.iconLoad} />
        </div>
    )
}