const TestData = {};

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "姓名", width: 150 },
  { field: "company", headerName: "公司", width: 150 },
  { field: "work", headerName: "承担工作", width: 450 },
  { field: "location", headerName: "办公区域", width: 200 },
  { field: "home", headerName: "居住地", width: 500 },
  { field: "way", headerName: "通勤路线", width: 500 },
  { field: "riskArea", headerName: "14天内是否途径中高风险地区", width: 90 },
  { field: "couldWork", headerName: "是否满足最新返岗工作要求", width: 90 },
  { field: "comeTime", headerName: "预计到岗时间", width: 150 },
  { field: "leaveTime", headerName: "预计离岗时间", width: 150 },
];

TestData.columns = columns;

const rows = [
  {
    id: 1,
    name: "范晓峰",
    company: "天地迅达",
    work: "案管系统",
    location: "东院、西院",
    home: "海淀区温泉镇高尚峰园",
    way: "自驾",
    riskArea: "否",
    couldWork: "是",
    comeTime: "8:00",
    leaveTime: "18:00",
  },
  {
    id: 2,
    name: "姬广泽",
    company: "太极",
    work: "涉案财物系统运维",
    location: "北院",
    home: "朝阳区武圣西里小区",
    way: "地铁10号线潘家园-6号线车公庄",
    riskArea: "否",
    couldWork: "是",
    comeTime: "9:00",
    leaveTime: "17:00",
  },
  {
    id: 3,
    name: "张悦",
    company: "中科软",
    work: "新老党风统计系统运维",
    location: "北院",
    home: "大兴区兴风街道三合北巷",
    way: "地铁4号线黄村西大街-7号广安门内",
    riskArea: "否",
    couldWork: "是",
    comeTime: "8:30",
    leaveTime: "19:30",
  },
];

TestData.rows = rows;

export default TestData;
