import './TodoItem.css'
import {AiOutlineCheck, AiOutlineClose} from 'react-icons/ai'

function TodoItem(props) {
    return(
      <li className="TodoItem">
        <span
        className={`icon icon-check ${props.completed && "icon-check--active"}`}
        onClick={props.onComplete}
        >
          <AiOutlineCheck />
        </span>
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <span className="icon icon-delete"
        onClick={props.onDelete}
        >
          <AiOutlineClose />
        </span>
      </li>
    );
  }

  export { TodoItem }