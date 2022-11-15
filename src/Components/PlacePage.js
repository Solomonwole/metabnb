import { useState } from "react";
import Image1 from '../assets/Places/1.png';
import Image2 from '../assets/Places/2.png';
import Image3 from '../assets/Places/3.png';
import Image4 from '../assets/Places/4.png';
import Image5 from '../assets/Places/5.png';
import Image6 from '../assets/Places/6.png';
import Image7 from '../assets/Places/7.png';
import Image8 from '../assets/Places/8.png';
import PlaceList from "./PlaceList";

const PlacePage = () => {
  const [places, setPlaces] = useState([
    {
      image: Image1,
      title: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      id: 1,
    },
    {
      image: Image2,
      title: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      id: 2,
    },
    {
      image: Image3,
      title: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      id: 3,
    },
    {
      image: Image4,
      title: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      id: 3,
    },
    {
      image: Image5,
      title: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      id: 3,
    },
    {
      image: Image6,
      title: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      id: 3,
    },
    {
      image: Image7,
      title: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      id: 4,
    },
    {
      image: Image8,
      title: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      id: 4,
    },
  ]);
  return (
    <div>
      <PlaceList places={places} />
    </div>
  );
};

export default PlacePage;
