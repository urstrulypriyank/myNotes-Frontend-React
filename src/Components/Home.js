import  React,{ useContext } from 'react'

import Notes from './Notes';
const Home = () => {
  
  return (
   
   <div className="container-fluid">

  <h1 className='text-center my-1'> Add a Notes</h1>
  <h2>Your Notes</h2>
   
   {/* starting of bootstrap form */}
  
    
  <Notes/>

   </div>
  )
}

export default Home