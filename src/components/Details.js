import React, { useEffect } from "react";
import { Grid, Container, makeStyles, Typography } from "@material-ui/core";
import { useCardState } from "../context/card.context";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const cardState = useCardState();
  const navigate = useNavigate();
  const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(10),
    },
  }));
  const { selectedCard } = cardState;
  const {
    first_name = "",
    last_name = "",
    membership_tier = "",
    description = "",
  } = selectedCard;
  useEffect(() => {
    if (Object.keys(selectedCard).length === 0) {
      navigate("/cards");
    }
  }, [selectedCard, navigate]);
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h6" className={classes.logoLg}>
            {first_name}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h6" className={classes.logoLg}>
            {last_name}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h6" className={classes.logoLg}>
            {membership_tier}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="body2" className={classes.logoLg}>
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Create;
