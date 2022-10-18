function ListItem(props) {
    return (
        <div style={{backgroundColor: props.item.color, textDecoration: props.item.completed ? "line-through" : ""}}>
            <p>{props.item.title}</p>
            <button onClick={() => (props.onButtonClick(props.index))}>X</button>
        </div>)
}
export default ListItem;