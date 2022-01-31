import { useSelector, useDispatch } from "react-redux";

import { deleteCart,confirmPayment } from "../../features/filters";
// consolr.log()
const itemStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "80%",
  margin: "auto",
  borderBottom: "1px solid red",
  
};

let payed = false;
const CartItem = ({ shoe }) => {
  const dispatch = useDispatch();

  // const onButtonClick=()=>{
  //   dispatch(deleteCart(shoe));
  //   dispatch(updatePrice(-1*shoe.sale_price));
  // }
  return (
    <div style={itemStyle}>
      <h3>{shoe.shoe_name}</h3>
      <h3>{shoe.Brand}</h3>
      <h3>${shoe.sale_price.toFixed(2)}</h3>
      <button
        style={{ width: "30px" }}
        onClick={()=>dispatch(deleteCart(shoe))}
      >
        <img
          src="https://pluspng.com/img-png/delete-button-png-delete-icon-1600.png"
          alt="Delete"
          width="100%"
        />
      </button>
    </div>
  );
};

const Cart = () => {
  const cartList = useSelector((state) => state.filter.cartItems);
  const price = useSelector((state) => state.filter.totalPrice);
  const dispatch = useDispatch();
  // console.log(price);
//   useEffect(() => {
//     // console.log(cartList);
//   }, []);
  const confirmPaymentButton=()=>{
    dispatch(confirmPayment());
    payed = true;
  }
  if(cartList.length > 0){
    return (
        <div style={headerStyle}>
          <h1>Cart</h1>
    
          <div style={shoppingCartSyle}>
            {cartList.map((shoe) => {
              return <CartItem shoe={shoe} key={shoe.shoe_id} />;
            })}
          </div>
          <h2 style = {{textAlign:'right',width:'90%',marginTop:'2%'}}>Total Price {price.toFixed(2)}</h2>
          <div style={buttonStyle}>
          <button 
          onClick={confirmPaymentButton}
          style = {{textAlign:'center',color: 'red',  border: '1px solid rgba(0, 0, 0, 0.05)',borderRadius:"10px",marginRight:'10%',padding:'1%'}}>Confirm Checkout</button>
          </div>
          
        </div>
      );
  }
  else{
    return payed?<h1 style = {textStyle}> Thank you for your payment{payed =false} </h1>:<h1 style = {textStyle}> Your cart is empty </h1>;
  }
  
};
const headerStyle = {
  textAlign: "center",
  marginTop:"20%",
};
const textStyle = {textAlign:'center',margin:'10%',marginTop:"20%"};
const shoppingCartSyle = {}
const buttonStyle = {
  
  

  padding:'1% 0',
  height:"10%",
  display:'flex',
  justifyContent: "flex-end",
  // backgroundColor:'green',
  // alignItems:'right',
  // margin:'auto',
  // textAlign:'right',
  fontSize:'90%',
  // margin:"2% auto",


};

export default Cart;
