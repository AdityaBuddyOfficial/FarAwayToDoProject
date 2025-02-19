import React from 'react'
import Item from './Types/list';

const Stats = (props: any) => {
  console.log("🚀 ~ Stats ~ props:", props)
  const item = props.ItemNumber;
  console.log("🚀 ~ Stats ~ item:", item)
  const packedNum = item.filter((e: any) => e.packed).length;
  console.log("packedNum", packedNum)

  const percentage=Math.round((packedNum/item.length)*100);
  return (
    <footer className='stats'>
      <em>
        {percentage===100?"You Packed Everything you are ready to go ✈":
        `you have ${item.length} Item on your list, and you already packed ${packedNum} item your ${percentage}(%) packing is done`}

      </em>
    </footer>
  )
}

export default Stats
