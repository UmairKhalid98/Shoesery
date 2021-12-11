import React,{useState,useEffect} from 'react';
import axios from 'axios';
import ShoeList from './ShoeList';
import { useSelector } from 'react-redux';

const Shoes = () => {
    const filter =  useSelector((state)=> state.filter.value);
    const [shoes,setShoes] =  useState([]);

    useEffect(() => {
      axios.post('http://localhost:9000/shoe',filter).then((res,err)=> {
        // if(res.status === 200){ 
          setShoes(res.data);
          // console.log(res.data);
        // }
        // else{
        //   console.log(err);
        // }
        
      }).catch(error=>{
        console.log(error);
      })
    },[filter]);
    
    try{
      return (
        <div style = {shoeStyle}>
        <ShoeList shoeList = {shoes}/>
        </div>
      );
  
    }
    catch{
      return <h1>Loading...</h1>
    }
}
const shoeStyle = {
marginTop:'20%'
}
export default Shoes
