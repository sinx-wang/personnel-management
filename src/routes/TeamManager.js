import EventNoteIcon from "@material-ui/icons/EventNote";
import HistoryIcon from "@material-ui/icons/History";
// import CheckBoxOutlined from "@material-ui/icons/CheckBoxOutlined";
// import CheckBox from "@material-ui/icons/CheckBox";
import CollectionsBookmark from "@material-ui/icons/CollectionsBookmark";

let casesRoutes = [
  {
    path: "/tomorrowCome",
    name: "预计到岗",
    icon: EventNoteIcon,
    layout: "/cases",
    // component: WaitToDealCasesView,
  },
  {
    path: "/comeLog",
    name: "到岗记录",
    icon: HistoryIcon,
    layout: "/cases",
    // component: DealingCasesView,
  },
  {
    path: "/checkIn",
    name: "个人打卡",
    icon: CollectionsBookmark,
    layout: "/cases",
    // component: DealingCasesView,
  },
];

export default casesRoutes;
