import { useEffect ,useState } from 'react'
import React from 'react'
import PixabayContext from './PixabayContext'
const PixabayState = (props) => {
  const [imageData, setImageData] = useState([])
  const [search, setSearch] = useState('london')
  const api_key = "47531447-3eb1b95deb64e13cb807c6f19";
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&q=${search}&image_type=photo&pretty=true&per_page=100`)
        const data = await api.json();
        setImageData(data.hits)
        console.log(data.hits);
        
      } catch (error) {
        console.error("Error Fetching Data" , error)
      }
    }
    fetchData();
  },[search])

  const fetchImageByCategory = async (category)=>{
    try {
      const api = await fetch(`https://pixabay.com/api/?key=${api_key}&${category}=${category}&image_type=photo&pretty=true&per_page=100`)
      const data =await api.json();
      setImageData(data.hits);
      setSearch('')
      console.log(data.hits);

      
    } catch (error) {
      console.error('Error Fetching Data' , error)
    }
  }

  return (
    <PixabayContext.Provider value={{
      imageData,
      fetchImageByCategory,
      setSearch
    }}>
     {props.children}
    </PixabayContext.Provider>
  )
}

export default PixabayState
