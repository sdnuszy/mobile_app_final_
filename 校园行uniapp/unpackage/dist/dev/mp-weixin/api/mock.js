"use strict";
const common_vendor = require("../common/vendor.js");
common_vendor.Mock.mock("https://apifoxmock.com/m1/4728220-0-default/api/user/getBanner", "get", {
  code: 1,
  data: {
    bannerList: [
      {
        image: "https://bpic.51yuansu.com/backgd/cover/00/06/69/5b684f270f79a.jpg?x-oss-process=image/resize,h_300,m_lfit/sharpen,100",
        title: "111111"
      },
      {
        image: "https://img.yipic.cn/thumb/2ffb7e72/e5b68a08/eb5d7bc4/e3a15e30/big_2ffb7e72e5b68a08eb5d7bc4e3a15e30.png?x-oss-process=image/format,webp/sharpen,100",
        title: "111111"
      }
    ]
  },
  msg: ""
});
common_vendor.Mock.mock("https://apifoxmock.com/m1/4728220-0-default/api/user/getHomeList", "get", {
  code: 1,
  data: [
    {
      id: 1,
      title: "图书馆",
      img: "/static/library.jpg",
      tag: ["图书馆", "学习"],
      isDot: "推荐",
      introduce: "山东师范大学图书馆始建于1950年，前身为山东师范学院图书馆，1952 年接收原齐鲁大学调拨的近二十万册图书奠定馆藏基础。",
      times: "每周一到周天 8:30--22:00 开放"
    },
    {
      id: 2,
      title: "北京故宫",
      img: "/static/library.jpeg",
      tag: ["著名", "名胜古迹"],
      isDot: "推荐",
      introduce: "北京故宫是中国明清两代的皇家宫殿，旧称紫禁城，位于北京中轴线的中心。",
      times: "每周一到周五 9:00--18:00 开放"
    },
    {
      id: 3,
      title: "信息科学与工程学院",
      img: "/static/library.jpeg",
      tag: ["著名", "名胜古迹"],
      isDot: "推荐",
      introduce: "学院信息...",
      times: "每周一到周五 9:00--18:00 开放"
    },
    {
      id: 4,
      title: "一餐",
      img: "/static/library.jpeg",
      tag: ["食堂", "名胜古迹"],
      isDot: "推荐",
      introduce: "第一餐厅...",
      times: "每周一到周五 9:00--18:00 开放"
    },
    {
      id: 5,
      title: "二餐",
      img: "/static/library.jpg",
      tag: ["食堂", "名胜古迹"],
      isDot: "推荐",
      introduce: "第二餐厅...",
      times: "全天开放"
    }
  ],
  msg: ""
});
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/mock.js.map
