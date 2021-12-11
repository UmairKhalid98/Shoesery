import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { deleteCart } from "../../features/filters";

const itemStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "80%",
  margin: "auto",
  borderBottom: "1px solid red",
};
const CartItem = ({ shoe }) => {
  const dispatch = useDispatch();
  return (
    <div style={itemStyle}>
      <h3>{shoe.shoe_name}</h3>
      <h3>{shoe.Brand}</h3>
      <h3>${shoe.sale_price.toFixed(2)}</h3>
      <button
        style={{ width: "30px" }}
        onClick={() => {
          dispatch(deleteCart(shoe));
        }}
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
  useEffect(() => {
    console.log(cartList);
  }, []);

  if(cartList.length > 0){
    return (
        <div style={headerStyle}>
          <h1>Cart</h1>
    
          <div style={shoppingCartSyle}>
            {cartList.map((shoe) => {
              return <CartItem shoe={shoe} />;
            })}
          </div>
        </div>
      );
  }
  else{
    return (<h1 style = {{textAlign:'center',margin:'10%'}}> Your cart is empty </h1>)
  }
  
};
const headerStyle = {
  textAlign: "center",
  marginTop:"20%",
};
const shoppingCartSyle = {};

export default Cart;
