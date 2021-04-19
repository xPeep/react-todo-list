function Item({item, onClickHandler}) {

    return (<div style={{
        border: "0.5px solid",
        padding: "10px",
        margin: "10px",
        justifyContent: "space-between",
        display: "flex",
    }}>
        <h2>{item.name}</h2>
        <button style={{
            width: "100px",
            backgroundColor: "lightgreen"
        }} onClick={()=>onClickHandler(item)}>Complete</button>
    </div>)
}

export default Item;
