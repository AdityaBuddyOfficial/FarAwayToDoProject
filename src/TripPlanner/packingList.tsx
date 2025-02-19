import React, { useState } from 'react'
import Item from './item'


const PackingList = (props: any) => {
  console.log("🚀 ~ Item in packing list:", props)

  const [sort,setSort]=useState("input");
  console.log("🚀 ~ PackingList ~ sort:", sort)

  let sortedItem;
  if(sort==='input')
  {
    sortedItem=props.item
  }
  if(sort==="desciption")
  {
    sortedItem=props.item.slice().sort((a:any,b:any)=>a.desciption.localeCompare(b.desciption))
  }

  if(sort==='packed')
  {
    sortedItem=props.item.slice().sort((a:any,b:any)=>Number(a.packed)-Number(b.packed))
  }


  function clearList()
  {

  }
  return (
    <div className='list'>


      <ul>
        {sortedItem.map((item: any) => (

          <Item item={item} key={item.id} handleDeleteItem={props.handleDeleteItem} toggleItem={props.toggleItem} />
        ))}
      </ul>

      <div className='actions'>
        <select value={sort} onChange={(e)=>setSort(e.target.value)}>
          <option value="input">
            Sort by Input Order
          </option>
          <option value="desciption">
            Sort by Desciption Order
          </option>
          <option value="packed">
            Sort by Packed Order
          </option>
        </select>
      </div>

      <div className='actions' >
        <button onClick={props.clearList}>Clear all List</button>
      </div>
    </div>
  )
}

export default PackingList
