import React from 'react'

export default function ItemList({ ItemList,title }) {
  return (
    <div className='p-2 mt-4'>

    <div className='row p-1  grid grid-cols-12 bg-gray-800 gap-y-2'>
    <div className='col-span-12 text-white text-center border-green-500 pb-2 border-b'>{title}</div>
        <div className='col-span-2 text-white '>ID</div>
        <div className='col-span-3 text-white '>Title</div>
        <div className='col-span-5 text-white '>Body</div>
        <div className='col-span-2 text-white '>Action</div>
    </div>

   { ItemList.map((item)=>(
    
    <div className='row p-1 grid grid-cols-12 bg-gray-500 gap-y-2' key={item.id}>
        <div className='col-span-2 text-white '>{ item.id}</div>
        <div className='col-span-3 text-white '>{ item.title}</div>
        <div className='col-span-5 text-white '>{ item.body}</div>
        <div className='col-span-2 text-white '> 
          {/* <button onClick={ ()=>{ deleteItem(item.id) }} className=' bg-red-500 text-white rounded-md px-2'>Delete</button> */}
        </div>
    </div>

   ))}
  </div>
  )
}
