import Welcome from "./Welcome";
import Code from "./Code";

const ConditionalComponent = () => {
    const display = false;
    
    if( display ) {
        return <Welcome />
    }else{
        return <Code />
    }
}

export default ConditionalComponent;