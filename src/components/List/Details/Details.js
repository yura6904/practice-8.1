
function Details(props) {
  return (
    <div className="Details">
      {props.selectedHum ? (
        <div className="hum-details">
          {console.log(props.selectedHum.avatar)}
          <img src={props.selectedHum.avatar} alt='#'></img>
          <p>{props.selectedHum.name}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Details;
