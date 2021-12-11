import React,{useState,useEffect} from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NavBarList from './NavBarList';
import { changeFilter } from '../../features/filters';
import {useDispatch,useSelector } from 'react-redux';
import axios from 'axios';

const Header = ({ title }) => {
    const dispatch = useDispatch();
    const cartNumber =  useSelector((state)=> state.filter.cartItems.length);
    const [supplier,setSupplier] =  useState([]);
    useEffect(() => {
      axios.get('https://shoesery.herokuapp.com/supplier').then((res,err)=> {
        if(res.status === 200){
          setSupplier(res.data);
          
        }
        else{
          console.log(err);
        }
        
      }).catch(err =>{
        console.log(err)
      });
    },[]);
  return (
    <div style={navStyle}>
      <header style={headerStyle}>
      
        <Link style={linkStyle} to="/">
          <button style = {buttonStyle} onClick = {()=>{dispatch(changeFilter({currentFilter:'*'}))}}>
          <img src="img/Shoesery.png" alt={title} width="300%" />
          </button>
        </Link>

        <div style = {linkNavStyle}>
        <Link style={TextStyle} to="/">
          <h2>About Us</h2>
        </Link>

        <Link style={TextStyle} to="/">
          <h2>Contact Us</h2>
        </Link>

        <Link style={linkStyle} to="/cart">
          <img
            src="img/bag.png"
            alt={"cart"}
            width="100%"
            style={{ marginRight:"5%"}}
          />
          <p style = {{position:'absolute',left:'70%',top:'10%',backgroundColor:'red',borderRadius:'50px',padding:cartNumber>0?'1px 4px':'0px',fontSize:'12px',color:'white'}}>
            {cartNumber>0?cartNumber:''}</p>
        </Link>
        </div>
      </header>
      <NavBarList supplierList = {supplier}/>
    </div>
  );
};

Header.defaultProps = {
  title: "Shoe Store",
};

Header.propsTypes = {
  title: PropTypes.string,
};

const headerStyle = {
  color: "red",
  display: "flex",
  justifyContent: "space-between",
  
  width:"90%",
  margin:"auto",
  
};

const buttonStyle = {
  backgroundColor:'rgba(0, 0, 0, 0.0)',
  border:'none'
}
const linkNavStyle = {
  // color: "red",
  display: "flex",
  justifyContent: "right",
  textAlign:'right',
  width:"70%",
  height:"10px",
  margin:"auto 1%"
  

  
  // margin:"auto",
  
};
const TextStyle = {
linkStyle:'none',
textDecoration:'none',
color:"black",
marginRight:"10%",
marginTop:"1%",
fontSize:"70%"
};
const linkStyle = {
  width:"3%",
  position:'relative'
};

const navStyle = {
  position: 'fixed',
  top: '0',
  backgroundColor:'white',
  zIndex:'1',
  width:'100%',
};
export default Header;



    


