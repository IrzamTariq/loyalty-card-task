import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useCardDispatch } from "../context/card.context";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(1),
  },
}));

const LoyaltyCard = ({ item = {} }) => {
  const navigate = useNavigate();
  const cardDispatch = useCardDispatch();
  const classes = useStyles();
  const {
    card_number = "",
    first_name = "",
    last_name = "",
    membership_tier = "",
  } = item;
  return (
    <Grid item md={6} xs={12} lg={4}>
      <Card
        onClick={() => {
          cardDispatch({ type: "SET_SELECTED_CARD", payload: item });
          navigate(`/cards/${card_number}`);
        }}
        className={classes.card}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5">
              {card_number}
            </Typography>
            <Typography variant="body2">
              {first_name + " " + last_name}
            </Typography>
            <Typography variant="body2">{membership_tier}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default LoyaltyCard;
