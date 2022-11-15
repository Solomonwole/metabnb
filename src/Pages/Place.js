import { Toolbar } from "@mui/material";
import Categories from "../Components/Categories";
import PlacePage from "../Components/PlacePage";

function Place() {
  return (
    <>
      <div className="container">
        <Toolbar />
        <Categories />
        <Toolbar />
        <PlacePage />
        <Toolbar />
      </div>
    </>
  );
}

export default Place;
