// import React, from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { changeFilter } from '../../features/filters';

const Supplier = ({supplier}) =>{

    const filter =  useSelector((state)=> state.filter.value);
    const dispatch = useDispatch();
    const buttonStyle = {
        backgroundColor:'rgba(0, 0, 0, 0.0)',
        color:supplier.supplier_name === filter.currentFilter?'red':'white',
        border:'none'
        
    }
    return(
        <button style = {buttonStyle}
         onClick={()=>dispatch(changeFilter({currentFilter:supplier.supplier_name})) }

         >
        <h2>{supplier.supplier_name}</h2>
        </button>
    )
}

const NavBarList = ({supplierList}) => {
    return (
        <div style ={{backgroundColor:"black"}}>
      <div style = {navStyle}>
        {supplierList.map((supplier) => {
          return <Supplier supplier={supplier} key={supplier.supplier_id}/>;
        })}
      </div>
      </div>
    );
}

const navStyle = {
    display:"flex",
    flexDirection: "row",
    justifyContent:"space-evenly",
    width: "80%",
    margin:"auto",
    backgroundColor:"black",
    color:"white"
    
    };



export default NavBarList
