import React,{useState,useEffect} from 'react';
import axios from 'axios';
import ShoeList from './ShoeList';
// import { useSelector,useDispatch } from 'react-redux';

const Shoes = () => {
    // const filter =  useSelector((state)=> state.filter.value);s
    const [shoes,setShoes] =  useState([]);
    useEffect(() => {
      axios.get('https://shoesery.herokuapp.com/shoe').then((res,err)=> {
        if(res.status === 200){
          setShoes(res.data);
          console.log()
        }
        else{
          console.log(err);
        }
        
      });
    },[]);
    
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

}
export default Shoes
