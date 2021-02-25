import { Box, Menu, MenuItem } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import clsx from "clsx";
import React, { useState } from "react";
import MainLists from "./MainLists";

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    appbar: {
      background: "#2F4F4F",
    },
    menuButton: {
      marginBottom: "12px",
      marginRight: theme.spacing(5),
      "&:focus": {
        outline: "none",
      },
    },
    title: {
      display: "none",
      marginBottom: "12px",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    name: {
      display: "flex",
      marginRight: theme.spacing(2),
      alignItems: "center",
    },
    time: {
      display: "flex",
      marginRight: theme.spacing(2),
      alignItems: "center",
    },
    noti: {
      marginRight: theme.spacing(2),
    },
    rightMenu: {
      display: "flex",

      alignItems: "center",
      background: "#2F4F4F",
      padding: theme.spacing(1, 4, 1, 2),
      margin: theme.spacing(1, 0, 1, 0),
    },

    sectionDesktop: {
      marginBottom: "22px",
      display: "none",
      height: theme.spacing(4),
      color: "#2F4F4F",
      alignItems: "center",
      borderRadius: theme.spacing(1),
      background: "#FFFFF0",
      padding: theme.spacing(0, 4, 0, 2),
      margin: theme.spacing(1, 0, 1, 0),
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      padding: theme.spacing(1, 0, 1, 2),
      margin: theme.spacing(1, 0, 1, 0),
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    removeOutline: {
      "&:focus": {
        outline: "none",
      },
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      background: "#2F4F4F",
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      height: "50px",
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      minHeight: "50px",
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    iconDirection: {
      margin: 0,
      padding: 0,

      "&:focus": {
        outline: "none",
      },
    },
    content: {
      textAlign: "justify",
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: 20,
      marginRight: 20,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: drawerWidth + 20,
      marginRight: 20,
    },
    list: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);

export default function MainLayout(props) {
  const classes = useStyles();

  // eslint-disable-next-line no-unused-vars
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  // const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <span>Thông báo</span>
      </MenuItem> */}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <ExitToAppIcon />
        </IconButton>
        <span>Đăng Thoát</span>
      </MenuItem>
    </Menu>
  );
  let time = new Date().toLocaleTimeString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  // eslint-disable-next-line no-unused-vars
  const [Ctime, setCtime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(updateTime, 1000);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.grow}>
      <CssBaseline />
      <AppBar
        style={{ height: "50px" }}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        position="static"
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>

          <Typography className={classes.title} variant="h6" noWrap>
            CLAIM WORKFLOW
          </Typography>

          <div className={classes.grow} />
          <Box boxShadow={5} className={classes.sectionDesktop}>
            <div className={classes.name}>
              <Typography variant="h6">trieudang.tran</Typography>
            </div>

            <div className={classes.time}>
              <Typography>{time}</Typography>
            </div>
            <div>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                className={classes.removeOutline}
              >
                <ExitToAppIcon />
              </IconButton>
            </div>
          </Box>
          <div className={classes.sectionMobile}>
            <div className={classes.name}>
              <Typography variant="h6">trieudang.tran</Typography>
            </div>

            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              className={classes.removeOutline}
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader} style={{ minHeight: "50px" }}>
          <IconButton
            className={classes.iconDirection}
            onClick={handleDrawerClose}
          >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />

        <MainLists />
      </Drawer>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {props.children}
      </main>

      {renderMobileMenu}
    </div>
  );
}
