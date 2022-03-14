import { Grid, makeStyles, Container } from "@material-ui/core";
import { useCardState } from "../context/card.context";
import LoyaltyCard from "./LoyaltyCard";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  card: {
    margin: theme.spacing(1),
  },
}));

const Feed = () => {
  const classes = useStyles();
  const card = useCardState();
  return (
    <Container className={classes.container}>
      <Grid container>
        {card.cards.map((item, indx) => (
          <LoyaltyCard key={indx} item={item} />
        ))}
      </Grid>
    </Container>
  );
};

export default Feed;
