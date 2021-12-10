import React,{useState} from 'react';



const hoverShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.50)"
const defaultShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
const Shoe = ({ shoe }) => {
  // console.log("shoe",shoe);
  const [ShoeBoxShadow,setShoeBoxShadow] = useState(defaultShadow)
  const [ShoeImgSize,setShoeImgSize] = useState("1")

  const shoeStyle = {
    
    display:"block",
    color: 'teal',
    width:"30%",
    backgroundColor:'white',
    textAlign:'center',
    margin:"2% auto",
    padding:"1% 0",
    border: '1px solid rgba(0, 0, 0, 0.05)',
    borderRadius:"25px",
    boxShadow: ShoeBoxShadow
    
}


  return (
  <button
    onMouseEnter = {() => {setShoeBoxShadow(hoverShadow); setShoeImgSize("1.2");}}
    onMouseLeave = {() => {setShoeBoxShadow(defaultShadow); setShoeImgSize("1");}}
   style = {shoeStyle} 
  >
    <img src= {shoe.IMG} alt="" width="200px" style = {{transform:`scale(${ShoeImgSize})`}}/>
    <h3>{shoe.shoe_name}</h3>
    <h3 style={{color:"blue"}}>{shoe.Brand}</h3>
    <h3 style={{color:"green"}}>${(shoe.sale_price).toFixed(2)}</h3>
    
    </button>
  )};

export default Shoe;

