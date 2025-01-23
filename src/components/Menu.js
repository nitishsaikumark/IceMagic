import React, { useEffect, useState } from "react";
import Card from "./UI/Card";
import classes from "./Menu.module.css";
import iceImage from "../assets/icecream.jpg";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AddItem } from "./Actions/Action";

function Menu() {
  const [creams, setCreams] = useState([]);

  const dispatch = useDispatch();

  function AddCartHandler(item) {
    console.log(item.id);
    dispatch(AddItem(item));
  }

  useEffect(() => {
    const fetchCreams = async () => {
      const response = await fetch(
        "https://myrestaurant-74b08-default-rtdb.firebaseio.com/creams.json"
      );

      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const responseData = await response.json();

      const loadedCreams = [];
      for (const key in responseData) {
        loadedCreams.push({
          id: key,
          name: responseData[key].name,
          price: responseData[key].price,
        });
      }
      setCreams(loadedCreams);
      console.log(loadedCreams);
    };

    fetchCreams().catch((error) => {
      console.log("something wrong");
    });
  }, []);

  const menuList = creams.map((item) => (
    <Card className={classes.menu}>
      <div className={classes.menu_image}>
        <img src={iceImage} alt="ice cream image"></img>
      </div>
      <div className={classes.menu_desc}>
        <div className={classes.menu_name}>{item.name}</div>
        <div className={classes.menu_price}>{item.price}</div>
        <div className={classes.menu_add}>
          <button className={classes.cartButton} onClick={AddCartHandler.bind(null,item)}>+ add to cart</button>{" "}
        </div>
      </div>
    </Card>
  ));

  return( 
  <>
    <div className={classes.menu_items}>{menuList}</div>;
  </>)
}

export default Menu;
