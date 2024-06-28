
const Hello = (props) => {
    return(
        <>
            <h1>{props.person.message} {props.person.name}</h1> 
        </>
    )
}

export default Hello;