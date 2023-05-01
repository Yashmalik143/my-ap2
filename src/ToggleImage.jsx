import { useState } from "react"

export default function Toggle(){

const[image,setImage] = useState("https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80")

return(
<>
<h3>Image</h3>
<img src={image} alt="" />
<button onClick={()=>setImage("https://media.istockphoto.com/id/1303307097/photo/active-senior-couple-with-backpacks-hiking-in-nature.jpg?s=1024x1024&w=is&k=20&c=rNI8A1DaR8yGs8hYi2rAWFQ97ALbPCNbAhROlBVmBwE=")}></button>

</>
)
}


var img1 = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"