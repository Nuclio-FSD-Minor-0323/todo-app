import './item.css'

function Item(props) {

    return(
        <div className="item">
            <p>{props.description}</p>
            <p className="date">{props.dueDate}</p>
            <p><a href="">ELIMINADO</a></p>
        </div>
    )
}

export default Item