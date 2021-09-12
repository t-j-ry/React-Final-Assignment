import './Listitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVenus } from '@fortawesome/free-solid-svg-icons'
import { faMars } from '@fortawesome/free-solid-svg-icons'
import { faFlagUsa } from '@fortawesome/free-solid-svg-icons'

function Listitem(props) {
    return (
        <li key={props.id}>
            <p>First Name: {props.first}</p>
            <p>Last Name: {props.last}</p>
            <img src={props.picture} alt="profile_pic"/>
            <p>City: {props.city}, State: {props.state}</p>
            <p>Email: {props.email}</p> 
            <p>Gender: {props.gender ==='female' ?
                <FontAwesomeIcon icon={faVenus} /> :
                <FontAwesomeIcon icon={faMars} />
                }
            </p> 
            <div className="card-footer">
                {props.country === 'United States' &&
                    <span><FontAwesomeIcon icon={faFlagUsa} /></span>
                }
                <button onClick={props.onClick}>Delete</button> 
            </div>
        </li>

    )
}

export default Listitem;