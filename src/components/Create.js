import React, { useState } from "react";
import {
  Grid,
  TextField,
  Container,
  makeStyles,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  Snackbar,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useCardDispatch, useCardState } from "../context/card.context";

const Create = () => {
  const navigate = useNavigate();
  const cardState = useCardState();
  const cardDispatch = useCardDispatch();
  const [cardInfo, setCardInfo] = React.useState({});
  const [open, setOpen] = useState(false);
  const {
    first_name = "",
    last_name = "",
    membership_tier = "",
    description = "",
  } = cardInfo;
  const handleCreateCard = () => {
    if (first_name && last_name && membership_tier && description) {
      let card_number = 0;
      card_number =
        (Math.random() + " ").substring(2, 6) +
        "-" +
        (Math.random() + " ").substring(2, 6) +
        "-" +
        (Math.random() + " ").substring(2, 6) +
        "-" +
        (Math.random() + " ").substring(2, 6);
      cardDispatch({
        type: "SET_CARDS_LIST",
        payload: [...cardState.cards, { ...cardInfo, card_number }],
      });
      navigate(-1);
    } else {
      setOpen(true);
    }
  };
  const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(10),
    },
  }));
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={() => {
          setOpen(false);
        }}
        message={"Please Check All Fields"}
      />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First Name"
            fullWidth
            autoComplete="first name"
            placeholder="First Name"
            color="primary"
            value={first_name}
            onChange={(event) => {
              setCardInfo({ ...cardInfo, first_name: event.target.value });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last Name"
            fullWidth
            autoComplete="last name"
            placeholder="Last Name"
            color="primary"
            value={last_name}
            onChange={(event) => {
              setCardInfo({ ...cardInfo, last_name: event.target.value });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel required id="demo-simple-select-label">
                Type
              </InputLabel>
              <Select
                required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={membership_tier}
                label="Type"
                onChange={(event) => {
                  setCardInfo({
                    ...cardInfo,
                    membership_tier: event.target.value,
                  });
                }}
              >
                <MenuItem value={"gold"}>Gold</MenuItem>
                <MenuItem value={"silver"}>Silver</MenuItem>
                <MenuItem value={"platinum"}>Platinum</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            onChange={(event) => {
              setCardInfo({
                ...cardInfo,
                description: event.target.value,
              });
            }}
            value={description}
            style={{ width: "100%" }}
            id="outlined-multiline-static"
            label="Description"
            multiline
            variant="outlined"
            placeholder="Description"
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleCreateCard();
            }}
            className={classes.button}
          >
            Create New Card
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Create;
