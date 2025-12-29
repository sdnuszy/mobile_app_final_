"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
if (!Array) {
  const _easycom_up_navbar2 = common_vendor.resolveComponent("up-navbar");
  const _easycom_up_tag2 = common_vendor.resolveComponent("up-tag");
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  (_easycom_up_navbar2 + _easycom_up_tag2 + _easycom_up_icon2)();
}
const _easycom_up_navbar = () => "../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_up_tag = () => "../../uni_modules/uview-plus/components/u-tag/u-tag.js";
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  (_easycom_up_navbar + _easycom_up_tag + _easycom_up_icon)();
}
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    const details = common_vendor.reactive({ dt: {} });
    const projectList = common_vendor.ref([]);
    const goLine = (item) => {
      common_vendor.index.navigateTo({ url: `/pages/building/building?id=${item.id}` });
    };
    common_vendor.onLoad((opt) => {
      api_api.detailProject().then((res) => {
        projectList.value = res;
      });
      details.dt = JSON.parse(decodeURIComponent(opt.item));
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "",
          ["bg-color"]: "#00000000",
          autoBack: true,
          ["left-icon-color"]: "#fff"
        }),
        b: details.dt.img,
        c: common_vendor.t(details.dt.title),
        d: common_vendor.p({
          text: "校园建筑",
          size: "mini",
          shape: "circle"
        }),
        e: common_vendor.t(details.dt.introduce),
        f: common_vendor.t(details.dt.introducee),
        g: common_vendor.t(details.dt.introducex),
        h: common_vendor.t(details.dt.introduce1),
        i: common_vendor.t(details.dt.times),
        j: common_vendor.f(projectList.value, (item, index, i0) => {
          return {
            a: item.url,
            b: common_vendor.t(item.tag),
            c: common_vendor.t(item.title),
            d: "7a0beb8a-2-" + i0,
            e: common_vendor.t(item.desc),
            f: index,
            g: common_vendor.o(($event) => goLine(item), index)
          };
        }),
        k: common_vendor.p({
          name: "map",
          color: "#9c9c9c",
          size: "16"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/detail/detail.js.map
