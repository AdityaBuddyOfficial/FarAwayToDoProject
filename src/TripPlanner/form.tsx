import React, { useState } from 'react'
import "./style.css"
import Item from './Types/list'
import Props from './Types/listSetterFun'



const Form:React.FC<Props>  = (props) => {

    const[desciption,setDescription]=useState("")
    console.log("🚀 ~ Form ~ desciption:", desciption)
const[quantity,setQuantity]=useState(1)






    function handleSubmit(e:any) {
        e.preventDefault();

        if(!desciption){
            return
        }
        const newItem:Item={desciption,quantity,packed:false,id:Date.now()}

        console.log("🚀 ~ handleSubmit ~ newItem:", newItem)
        setDescription("");
        setQuantity(1);
        props.handleItem(newItem)
    }
    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <h3>what do you need for your trip?</h3>
            <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
                {/* this Array code help use to create a array of specific size what we declare 
        (20) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]*/}
                {Array.from({ length: 20 }, (_, i) => i + 1).
                    map((number) => (
                        <option value={number} key={number}>
                            {number}
                        </option>))}



            </select>
            <input type="text"
             placeholder='Item..'
             value={desciption} 
             onChange={(e)=>setDescription(e.target.value)} />
            <button>Add</button>
        </form>
    )
}

export default Form
