import Star from "../assets/Star.svg";

const PlaceList = ({ places }) => {
  return (
    <>
      <div className="place-list">
        {places.map((place) => (
          <div>
            <div className="place" key={place.id}>
              <img src={place.image} alt={place.title} className="place-img" />
              <div className="place-details">
                <div className="left">
                  <p>{place.title}</p>
                  <p>{place.distance}</p>
                  <div className="place-rating">
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                  </div>
                </div>
                <div className="right">
                  <p className="price">{place.price}</p>
                  <p>{place.duration}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PlaceList;
