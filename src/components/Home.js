import React from 'react'
import ItemList from './ItemList';
import useFetch from './useFetch';

export default function Home() {

 const {data,isPending,error} = useFetch('http://localhost:8000/blogs') ;
 

  return (
    <div>
      {error && <div>  {error} </div> }
      {isPending && <div> Loading... </div> }
     { data && <ItemList ItemList={data} title="All Blogs " />}
      
    </div>
  )
}
