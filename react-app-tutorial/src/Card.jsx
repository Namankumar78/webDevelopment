function Card(props) {
    return (
        <div className="cards">
            <div className="card">
              <img src= {props.imgSrc} alt="myPic" className="card_img" />
              <div className="card_info">
                <span className="card_category">{props.title}</span>
                <h3 className="cardtitle">{props.names}</h3>
                <a href={props.link}>
                  <button> Watch Now</button>
                </a>
              </div>
            </div>
          </div>
    )
}

export default Card;