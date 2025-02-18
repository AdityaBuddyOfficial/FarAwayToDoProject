import React from 'react'
import Item from './item'

const PackingList = (props:any) => {
  return (
    <div className='list'>
    

        <ul>
        {props.initialItems.map((item:any )=>(
    <Item item={item} key={item.id}/>
))}
        </ul>

        
    </div>
  )
}

export default PackingList
