import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
// import CardHeader from "components/Card/CardHeader.js";
// import { DataGrid } from "@material-ui/data-grid";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// import CustomButton from "components/CustomButtons/Button.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import CheckBox from "@material-ui/core/Checkbox";
import BusinessIcon from "@material-ui/icons/Business";
import GroupIcon from "@material-ui/icons/Group";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HistoryIcon from "@material-ui/icons/History";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  info: {
    padding: theme.spacing(1),
    flexDirection: "column",
  },
  fixedHeight: {
    // height: 800,
  },
  center: {
    // margin: "auto",
    // position: "absolute",
    // left: 0,
    // right: 0,
    // top: 0,
    // bottom: 0,
    textAlign: "center",
    display: "table-cell",
    verticalAlign: "middle",
    fontSize: "larger",
  },
}));

export default function ProfileView(props) {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [checked, setChecked] = React.useState(false);

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={fixedHeightPaper}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="公司"
                  id="company"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <BusinessIcon />
                      </InputAdornment>
                    ),
                    defaultValue: "中科软",
                  }}
                />
              </GridItem>
              <GridItem md={4}>
                <CustomInput
                  labelText="项目"
                  id="project"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <GroupIcon />
                      </InputAdornment>
                    ),
                    defaultValue: "党风统计系统",
                  }}
                />
              </GridItem>
              <GridItem md={4}>
                <CustomInput
                  labelText="姓名"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                    defaultValue: "张三",
                  }}
                />
              </GridItem>
              <GridItem md={4}>
                <CustomInput
                  labelText="联系方式"
                  id="phone"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PhoneIcon />
                      </InputAdornment>
                    ),
                    defaultValue: "15615689752",
                  }}
                />
              </GridItem>
              <GridItem md={8}>
                <CustomInput
                  labelText="常住地"
                  id="home"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <HomeIcon />
                      </InputAdornment>
                    ),
                    defaultValue: "北京市西城区XX街道XX小区",
                  }}
                />
              </GridItem>
              <GridItem md={12}>
                <TextField
                  label="About me"
                  id="about"
                  multiline
                  fullWidth
                  rows={3}
                  defaultValue="关于我的自我介绍内容：共占三行"
                />
              </GridItem>
            </GridContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={classes.paper}>
            <GridContainer>
              <GridItem md={4}>
                <TextField
                  disabled
                  id="sustain"
                  label="是否长期驻场"
                  defaultValue="是"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <AssignmentTurnedInIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </GridItem>
              <GridItem md={8}>
                <TextField
                  disabled
                  id="sustain-time"
                  label="长期驻场时间"
                  defaultValue="2021.9.15 - 2021.12.15"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <AccessTimeIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </GridItem>
            </GridContainer>
          </Paper>
        </Grid>
        <Grid item md={4} lg={4} />
        <Grid item xs={12} md={8} lg={8}>
          <GridContainer>
            <GridItem md={4} />
            <GridItem md={6}>
              <TextField
                id="updateTime"
                disabled
                defaultValue="最近更新: 2021/09/03 17:32"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <HistoryIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </GridItem>
            <GridItem md={2}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                startIcon={<EditIcon />}
              >
                编辑
              </Button>
            </GridItem>
          </GridContainer>
        </Grid>
      </Grid>
    </div>
  );
}
