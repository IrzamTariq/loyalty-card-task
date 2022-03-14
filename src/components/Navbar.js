import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    // display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

const Navbar = ({ title = "" }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logo}>
          {title}
        </Typography>
        <Add
          onClick={() => {
            navigate("/cards/new");
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
