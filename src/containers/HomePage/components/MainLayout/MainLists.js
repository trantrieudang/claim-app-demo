import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AssignmentReturnIcon from "@material-ui/icons/AssignmentReturn";
import BlockIcon from "@material-ui/icons/Block";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    list: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    link: {
      color: "black",
      "&:focus": {
        textDecoration: "none",
        color: "#ff671f",
      },
      "&:hover": {
        textDecoration: "none",
        color: "#ff671f",
      },
    },
  })
);

export default function MainLists() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.list}
    >
      <NavLink to="/dashboard" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>

          <ListItemText primary="Dashboard" />
        </ListItem>
      </NavLink>

      <ListItem
        button
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 0)}
      >
        <ListItemIcon>
          <AssessmentIcon />
        </ListItemIcon>
        <ListItemText primary="Process" />
        {selectedIndex === 0 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={selectedIndex === 0} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <NavLink to="/process" className={classes.link}>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <FiberNewIcon />
              </ListItemIcon>
              <ListItemText primary="Processing Pool" />
            </ListItem>
          </NavLink>
          <NavLink to="/pending" className={classes.link}>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <BusinessCenterIcon />
              </ListItemIcon>
              <ListItemText primary="Pending" />
            </ListItem>
          </NavLink>
        </List>
      </Collapse>

      <ListItem
        selected={selectedIndex === 1}
        button
        onClick={(event) => handleListItemClick(event, 1)}
      >
        <ListItemIcon>
          <PriorityHighIcon />
        </ListItemIcon>
        <ListItemText primary="Higher Authority" />
        {selectedIndex === 1 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={selectedIndex === 1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AssignmentReturnIcon />
            </ListItemIcon>
            <ListItemText primary="Assign Case" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <BlockIcon />
            </ListItemIcon>
            <ListItemText primary="Cancel Case" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button>
        <ListItemIcon>
          <CloudUploadIcon />
        </ListItemIcon>
        <ListItemText primary="Upload Docs" />
      </ListItem>
    </List>
  );
}
