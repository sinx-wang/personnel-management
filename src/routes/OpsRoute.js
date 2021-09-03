import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ProfileView from "views/OpsPages/ProfileView";

let opsRoutes = [
  {
    path: "/profile",
    name: "个人信息",
    icon: PersonIcon,
    layout: "/ops",
    component: ProfileView,
  },
  {
    path: "/answer",
    name: "运维答疑",
    icon: QuestionAnswerIcon,
    layout: "/ops",
    // component: TeamManagerPage,
  },
  {
    path: "/inspection",
    name: "运维巡检",
    icon: QueryBuilderIcon,
    layout: "/ops",
    // component: TeamManagerPage,
  },
  {
    path: "/upgrade",
    name: "系统升级",
    icon: ArrowUpwardIcon,
    layout: "/ops",
    // component: TeamManagerPage,
  },
];

export default opsRoutes;
