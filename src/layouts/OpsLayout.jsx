import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseLine from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Switch, Route } from "react-router-dom";
import TitleBar from "components/TitleBar";
import SideBar from "components/SideBar";
import Routes from "routes/OpsRoute";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const switchRoutes = (
  <Switch>
    {Routes.map((item) => {
      if (item.layout === "/ops") {
        return (
          <Route
            path={item.layout + item.path}
            component={item.component}
            key={item.path}
          />
        );
      } else {
        return null;
      }
    })}
  </Switch>
);

export default function OpsListLayout(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClickMenuButton = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseLine />
      {/* ??????????????? */}
      <TitleBar
        open={open}
        content={"??????????????????"}
        handleClickMenuButton={handleClickMenuButton}
        {...props}
      />
      {/* ??????????????? */}
      <SideBar
        open={open}
        list={Routes}
        handleClickMenuButton={handleClickMenuButton}
      />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {/* ??????switchRoutes???Routes.js???????????????????????????????????????Routes.js??????????????????layout + path??????????????????????????????component */}
          {switchRoutes}
        </Container>
      </main>
    </div>
  );
}
