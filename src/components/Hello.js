
const Hello = (props) => {
    console.log(props)
   // var name = props.name;
    return(
        <>
            <h1>Hey! {props.name}</h1> 
        </>
    )
}

export default Hello;