import React,{useState,useEffect} from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NavBarList from './NavBarList';

import axios from 'axios';

const Header = ({ title }) => {
    const [supplier,setSupplier] =  useState([]);
    useEffect(() => {
      axios.get('https://shoesery.herokuapp.com/supplier').then((res,err)=> {
        if(res.status === 200){
          setSupplier(res.data);
          console.log(res.data);
        }
        else{
          console.log(err);
        }
        
      });
    },[]);
  return (
    <div style={navStyle}>
      <header style={headerStyle}>
      
        <Link style={linkStyle} to="/">
          <img src="img/Shoesery.png" alt={title} width="300%" />
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
  // fontSize:"80%"
};

const navStyle = {
//   width: "90%",
//   alignContent: "center",

};
export default Header;



    


