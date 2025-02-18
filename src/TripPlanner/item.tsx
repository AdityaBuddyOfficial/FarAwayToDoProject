import React from 'react'

const Item = (props:any) => {
  return (
    <div>
      <li>
        <span style={props?.item.packed?{textDecoration:"line-through"}:{}}>
        {props.item.quantity}  {props.item.description}
            
        </span>
        <button>❌</button>
       
      </li>
    </div>
  )
}

export default Item
