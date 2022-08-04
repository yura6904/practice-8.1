import Details from "./Details/Details";
import propTypes from 'prop-types'

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

List.propTypes = {
  data: propTypes.object
}

export default List;
