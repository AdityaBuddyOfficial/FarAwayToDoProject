import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './TripPlanner/logo'
import Form from './TripPlanner/form'
import PackingList from './TripPlanner/packingList'
import Stats from './TripPlanner/stats'

function App() {
  
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 16, packed: true },
  { id: 4, description: "bag", quantity: 3, packed: false }
];


  return (
    <>
      <Logo/>
      <Form/>
      <PackingList initialItems={initialItems}/>
      <Stats/>
    </>
  )
}

export default App
