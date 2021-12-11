import Shoe from "./Shoe";

const ShoeList = ({ shoeList }) => {
  console.log(shoeList.length);
  if (shoeList.length > 0) {
    return (
      <div style={listStyle}>
        {shoeList.map((shoe) => {
          console.log(100*Math.random()+shoe.shoe_name)
          return <Shoe shoe={shoe} key={(100*Math.random())+shoe.shoe_name } />;
        })}
      </div>
    );
  } else {
    return (
      <div style={textStyle}>
        <h2>No Shoes to Display</h2>
        <p>Please check back later to get the latest updates</p>
      </div>
    );
  }
};

const textStyle = {
  textAlign: "center",
  marginTop: "10%",
};
const listStyle = {
  display: "flex",
  flexWrap: "wrap",
  flex: 1,
  width: "90%",
  margin: "auto",
  // backgroundColor:'purple'
};
export default ShoeList;
