import EventNoteIcon from "@material-ui/icons/EventNote";
import HistoryIcon from "@material-ui/icons/History";
// import CheckBoxOutlined from "@material-ui/icons/CheckBoxOutlined";
// import CheckBox from "@material-ui/icons/CheckBox";
import CollectionsBookmark from "@material-ui/icons/CollectionsBookmark";
import TeamManagerPage from "views/TeamManagerPage/TeamManagerPage";

let casesRoutes = [
  {
    path: "/tomorrowCome",
    name: "预计到岗",
    icon: EventNoteIcon,
    layout: "/team",
    component: TeamManagerPage,
  },
  {
    path: "/comeLog",
    name: "到岗记录",
    icon: HistoryIcon,
    layout: "/team",
    // component: DealingCasesView,
  },
  {
    path: "/checkIn",
    name: "个人打卡",
    icon: CollectionsBookmark,
    layout: "/team",
    // component: DealingCasesView,
  },
];

export default casesRoutes;
