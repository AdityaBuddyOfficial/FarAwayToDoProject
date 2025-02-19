import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './TripPlanner/logo'
import Form from './TripPlanner/form'
import PackingList from './TripPlanner/packingList'
import Stats from './TripPlanner/stats'
import Item from './TripPlanner/Types/list'



function App() {
  
const initialItems = [
  { desciption: "Passports", quantity: 2, packed: false,id: 1 },
  {  desciption: "Socks", quantity: 12, packed: false,id: 2 },
  {  desciption: "Charger", quantity: 16, packed: false,id: 3 },
  { desciption: "bag", quantity: 3, packed: false,id: 4 }
];

const [item,setItem]=useState<Item[]>(initialItems)
console.log("🚀 ~ App ~ item me data aaya kya?:", item)




function handleItem(item:Item)
{
setItem((prevItem:Item[])=>[...prevItem,item]);
}

function handleDeleteItem(id:any)
{
  console.log("yeh hai ID",id)
  
  setItem((e)=>e.filter((e)=>e.id!==id))

}

function toggleItem(id:any)
{
  console.log("toggleID",id)
setItem((element)=>element.map((item)=>(item.id===id?{...item,packed:!item.packed}:item)))
}

function clearList()
{
  setItem([]);
}

  return (
    <>
      <Logo/>
      <Form handleItem={handleItem}/>
      <PackingList 
      toggleItem={toggleItem}
      item={item}
      handleDeleteItem={handleDeleteItem}
      clearList={clearList}/>
    
      <Stats ItemNumber={item}/>
    </>
  )
}

export default App
