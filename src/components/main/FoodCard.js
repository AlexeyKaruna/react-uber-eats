function Foodcard(props) {
  return (
    <div className="container">
      <div className="row">
        <a>
          {props.href}
          <div className="food_card">
            {props.img}
            <div className="food_card_text rest-name">{props.name}</div>
            <div className="food_card_text type">{props.type}</div>
            <div className="food_card_text time">{props.time}</div>
          </div>
        </a>
      </div>
    </div>
  );
}
export default Foodcard;
