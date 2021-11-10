import "./Card.css"

function Card(props) {
    const classes = 'card ' + props.className;
    console.log(classes);
    return <div class={classes}>{props.children}</div>
}

export default Card;
