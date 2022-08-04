import Details from "./Details/Details";

function List(props) {
  return (
    <div className="List">
      <div className="ul-list">
        {props.data?.map((el, idx) => (
            <div key={el.id} onClick={()=>{props.selectId(el.id)}}>
                {el.name}
            </div>
        ))} 
      </div>
      <Details selectedHum={props.selectedHum}/>
    </div>
  );
}

export default List;
