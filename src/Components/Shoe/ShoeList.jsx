import Shoe from "./Shoe";

const ShoeList = ({ shoeList }) => {
  return (
    <div style = {listStyle}>
        {
            shoeList.map((shoe) => {
                return (
                  <Shoe shoe = {shoe}/>
                );
              })
        }
        </div>
  ) 

  

};

const listStyle = {
    display:"flex",
    flexWrap:"wrap",
    flex:1,
    width:"90%",
    margin:"auto",
    // backgroundColor:'purple'
}
export default ShoeList;
