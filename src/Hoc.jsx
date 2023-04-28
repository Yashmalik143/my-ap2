import { useState } from "react";

function hoc(){
    return( <>
    <h1>HOC</h1>
    <Hoc1 cnt = {Counter} />
    <Hoc2 cnt = {Counter} />
    <Hoc3 cnt = {Counter} />
    <></>
    
    </> )
} 
function Counter(){ 

    const [count,setCount] = useState(0)

    return(
        <>
        <h1>{count}</h1>
        <button onClick={() =>{
            setCount(count+1)
        }}>Click</button>
        <br />
        <button onClick={() => {setCount(count*0)}}>Reset</button>
        </>
    )
}
function Hoc1(prop){

    return (<h1 style={{backgroundColor:"red" , width:"50%"}}><prop.cnt/></h1>)
}
function Hoc2(prop){

    return (<h1 style={{backgroundColor:"green" , width:"50%"}}><prop.cnt/></h1>)
}
function Hoc3(prop){

    return (<h1 style={{backgroundColor:"blue" , width:"50%"}}><prop.cnt/></h1>)
}
export default hoc;



