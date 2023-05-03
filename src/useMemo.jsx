import React, { useMemo, useState } from 'react'

export default function Memo() {
    const [count,setCount] = useState(10);
    const [item,setItem] = useState(10);
    const memoFunction = useMemo( function makeCount()
    {
        console.log(count)
        return count;
    },[count]) //now it call only when count is call
  return (
    <div>
      <h1>{memoFunction}</h1>
      <h2>{item}</h2>
      <button onClick={()=>setCount(count*10)}>Count</button>
      <button onClick={()=>setItem(item+1)}>Item</button> {/* it also call makecount function to avoid unnessacary calling  */}
    </div>
  )
}
