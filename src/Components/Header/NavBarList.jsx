import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';

const Supplier = ({supplier}) =>{

    const filter =  useSelector((state)=> state.filter.value);
    const dispatch = useDispatch();
    const [selected,setSelected] = useState('');
    const buttonStyle = {
        backgroundColor:'rgba(0, 0, 0, 0.0)',
        color:supplier.supplier_name === selected?'red':'white',
        border:'none'
        
    }
    return(
        <button style = {buttonStyle}
         onClick={()=>dispatch(filter({currentFilter:supplier.supplier_name})) }
         onMouseEnter ={()=>{setSelected(supplier.supplier_name)}}
         onMouseLeave ={()=>{setSelected('')}}
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
          return <Supplier supplier={supplier} />;
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
