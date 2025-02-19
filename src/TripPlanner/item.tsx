import React from 'react'

const Item = (props:any) => {
console.log("🚀 ~ Item ~ props inside List:", props)

  
  return (
    <div>
      <li>
        <input type="checkbox"value={props.item.packed} onChange={()=>{props.toggleItem(props.item.id)}}/>
        <span style={props?.item.packed?{textDecoration:"line-through"}:{}}>
        {props.item.quantity}  {props.item.desciption}
            
        </span>
        <button onClick={()=>{props.handleDeleteItem(props.item.id)}}>❌</button>
       
      </li>
    </div>
  )
}

export default Item
