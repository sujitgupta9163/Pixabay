import React, { useContext } from "react"
import PixabayContext from "../context/PixabayContext"
const Navbar = () => {
  const {fetchImageByCategory , setSearch} = useContext(PixabayContext);
  // console.log(fetchImageByCategory);
  
  return (
    <>
    <div className="container text-center bg-[#212121] h-14 w-full rounded-md pt-2">
      <button onClick={()=>fetchImageByCategory("nature")} type="button" className="btn btn-outline-primary mx-3">Nature</button>
      <button onClick={()=>fetchImageByCategory("science")} type="button" className="btn btn-outline-secondary mx-3">Science</button>
      <button onClick={()=>fetchImageByCategory("computer")} type="button" className="btn btn-outline-success mx-3">Computer</button>
      <button onClick={()=>fetchImageByCategory("buildings")} type="button" className="btn btn-outline-danger mx-3">Buildings</button>
      <button onClick={()=>fetchImageByCategory("spots")} type="button" className="btn btn-outline-warning mx-3">Spots</button>
      <button onClick={()=>fetchImageByCategory("transportation")} type="button" className="btn btn-outline-info mx-3">Transportation</button>
      <button onClick={()=>fetchImageByCategory("travel")} type="button" className="btn btn-outline-light mx-3">Travel</button>
      <button onClick={()=>fetchImageByCategory("animals")} type="button" className="btn btn-outline-dark mx-3 border text-white">Animals</button>
      <button onClick={()=>fetchImageByCategory("food")} type="button" className="btn btn-outline-success mx-3">Food</button>

    </div>
    <div className="container">
    <input onChange={(e)=> setSearch(e.target.value)} type="text" className="form-control" style={{width:"800px" , margin : "auto" , marginTop : "10px"}} placeholder="Enter Somthing" />
    </div>
    </>
  )
}

export default Navbar