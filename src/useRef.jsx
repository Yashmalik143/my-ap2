import { useRef } from "react"

export default function Ref(){

    let ref = useRef(null)
    function handleClick(){
      console.warn("button Clicked")
      ref.current.value = "10000"
      ref.current.focus();
    }
    return(<>
    <h1>Hello</h1>
    <input type="text" ref={ref}/>
    <button onClick={handleClick}>Handle Click</button>
    </>)

}