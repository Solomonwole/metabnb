import { useState } from "react";
import Image1 from '../assets/Stay/1.png';
import Image2 from '../assets/Stay/2.png';
import Image3 from '../assets/Stay/3.png';
import Image4 from '../assets/Stay/4.png';
import Image5 from '../assets/Stay/5.png';
import Image6 from '../assets/Stay/6.png';
import Image7 from '../assets/Stay/7.png';
import Image8 from '../assets/Stay/8.png';
import Image9 from '../assets/Stay/9.png';
import Image10 from '../assets/Stay/10.png';
import Image11 from '../assets/Stay/11.png';
import Image12 from '../assets/Stay/12.png';
import Image13 from '../assets/Stay/13.png';
import Image14 from '../assets/Stay/14.png';
import Image15 from '../assets/Stay/15.png';
import Image16 from '../assets/Stay/16.png';
import PlaceList from "./PlaceList";

const PlacePage = () => {
  const [places, ] = useState([
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
      id: 4,
    },
    {
      image: Image5,
      title: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      id: 5,
    },
    {
      image: Image6,
      title: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      id: 6,
    },
    {
      image: Image7,
      title: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      id: 7,
    },
    {
      image: Image8,
      title: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      id: 8,
    },
    {
      image: Image9,
      title: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      id:9,
    },
    {
      image: Image10,
      title: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      id: 10,
    },
    {
      image: Image11,
      title: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      id: 11,
    },
    {
      image: Image12,
      title: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      id: 12,
    },
    {
      image: Image13,
      title: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      id: 13,
    },
    {
      image: Image14,
      title: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      id: 14,
    },
    {
      image: Image15,
      title: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      id: 15,
    },
    {
      image: Image16,
      title: "Desert King",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      id: 16,
    },
  ]);
  return (
    <div>
      <PlaceList places={places} />
    </div>
  );
};

export default PlacePage;
