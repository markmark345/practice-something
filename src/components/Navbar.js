import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Header from "../../components/Header/Header.js";
import Button from "../../components/CustomButtons/Button.js";
import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

export default function Navbar({}) {
  const classes = useStyles();

  return (
    <div>
      <Header
        brand="Project CS360"
        color="dark"
        rightLinks={
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={(e) => e.preventDefault()}
                color="transparent"
              >
                Home
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.navLink}
                onClick={(e) => e.preventDefault()}
                color="transparent"
              >
                page 1
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="#pablo"
                className={classes.registerNavLink}
                onClick={(e) => e.preventDefault()}
                color= "primary"
                round
              >
                Login
              </Button>
            </ListItem>
          </List>
        }
      />
    </div>
  );
}
