import { useDispatch } from "react-redux";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./PizzaItem.css";

function PizzaItem({ pizza }) {
  console.log("In PizzaItem");

  const dispatch = useDispatch();
  const [select, setSelect] = useState("false");

  const addPizza = () => {
    setSelect(!select);
    dispatch({
      type: "ADD_PIZZA",
      payload: pizza,
    });
  };

  const removePizza = () => {
    setSelect(!select);
    dispatch({
      type: "REMOVE_PIZZA",
      payload: pizza,
    });
  };

  return (
    <>
      <div>
        <Card
          className="pizzaCard"
          sx={{ maxWidth: 345, maxHeight: 600, minHeight: 425, minWidth:345 }}
        >
          <CardMedia component="img" height="140" image={pizza.image_path} />
          <CardContent >
            <Typography gutterBottom variant="h5" component="div">
              {pizza.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {pizza.description}
            </Typography>
            <Typography variant="h6" color="text.primary">
              Price: {pizza.price}
            </Typography>
          </CardContent>
          <CardActions className="cardButton">
            {select ? (
              <Button m={0} fullWidth="true" variant="contained" onClick={addPizza}>ADD</Button>
            ) : (
              <Button fullWidth="true" variant="outlined" onClick={removePizza}>REMOVE</Button>
            )}
          </CardActions>
        </Card>
      </div>
    </>
  );
}

export default PizzaItem;
