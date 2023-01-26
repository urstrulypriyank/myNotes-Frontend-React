

import Notes from './Notes';
const Home = () => {
  
  return (
   
   <div className="container-fluid">

  <h1 className='text-center my-1'> Add a Notes</h1>
  <h2>Your Notes</h2>
   
   {/* starting of bootstrap form */}
   <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Titile</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">Your notes are secured and encrypted.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Notes Body </label>
    <textarea type="text-area" className="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" className="btn btn-primary btn-center " >Submit</button>
</form>

  <Notes/>

   </div>
  )
}

export default Home