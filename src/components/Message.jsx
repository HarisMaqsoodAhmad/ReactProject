const Message = () => {
    function handleClick(){
        console.log("Button Clicked")
    }
    return(
        <button onClick={handleClick}>Click here to see the message</button>
    )
}

export default Message