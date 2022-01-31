import React,{useState} from 'react';
import { updateCart,updatePrice } from '../../features/filters';
import {useDispatch } from 'react-redux';



const hoverShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.50)"
const defaultShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
const Shoe = ({ shoe }) => {
  // console.log("shoe",shoe);
  const dispatch = useDispatch();
  const [ShoeBoxShadow,setShoeBoxShadow] = useState(defaultShadow)
  const [ShoeImgSize,setShoeImgSize] = useState("1")
  const [buttonHover,setButtonHover] = useState(false);

  const shoeStyle = {
    
    display:"block",
    // color: 'red',
    width:"30%",
    backgroundColor:'white',
    textAlign:'center',
    margin:"2% auto",
    padding:"0% 0% 40px 0",
    border: '1px solid rgba(0, 0, 0, 0.05)',
    borderRadius:"25px",
    boxShadow: ShoeBoxShadow,
    position:'relative'
    
}

const buttonStyle = {
    
  display:"block",
  color: 'red',
  width:"50%",
  height:"10%",
  // backgroundColor:'white',
  textAlign:'center',
  fontSize:'90%',
  margin:"2% auto",
  border: '1px solid rgba(0, 0, 0, 0.05)',
  borderRadius:"25px",
  position:'absolute',
  bottom:'2%',
  left:'25%',
  boxShadow: buttonHover?hoverShadow:defaultShadow
  
}
const onButtonClick=()=>{
  const cartShoe = {
    ...shoe,
    shoe_id:(100*Math.random())+shoe.shoe_name
  }
  dispatch(updateCart(cartShoe));
  dispatch(updatePrice(cartShoe.sale_price))
}

  return (
  <button
    onMouseEnter = {() => {setShoeBoxShadow(hoverShadow); setShoeImgSize("1.2");}}
    onMouseLeave = {() => {setShoeBoxShadow(defaultShadow); setShoeImgSize("1");}}
   style = {shoeStyle} 
  >
    <h3 style={{textAlign:'left',position:'Absolute',top:'2%',left:'2%'}}>{shoe.Brand}</h3>
    <img src= {shoe.IMG} alt="" width="50%" style = {{transform:`scale(${ShoeImgSize})`,padding:'10%'}}/>
    <div style = {{position:'absolute',bottom:'20%',left:'10%', display:'flex',justifyContent:'space-between',flexDirection:'row',width:'80%',margin:'2% auto'}}>
    <h3>{shoe.shoe_name}</h3>
    <h3>${(shoe.sale_price).toFixed(2)}</h3>
    </div>
    <button 
      className = "addToCart"
      onClick = {onButtonClick}
      onMouseDown = {() => {setButtonHover(true)}}
      onMouseUp =  {() => {setButtonHover(false)}}
      style = {buttonStyle}> <p>Add to Cart</p></button>
    </button>
  )};

export default Shoe;

