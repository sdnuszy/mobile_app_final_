"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
if (!Array) {
  const _easycom_up_navbar2 = common_vendor.resolveComponent("up-navbar");
  _easycom_up_navbar2();
}
const _easycom_up_navbar = () => "../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
if (!Math) {
  _easycom_up_navbar();
}
const _sfc_main = {
  __name: "building",
  setup(__props) {
    const building = common_vendor.ref(null);
    common_vendor.onLoad((opts) => {
      api_api.projectInfo().then((res) => {
        building.value = res.find((i) => i.id == opts.id) || null;
      });
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "建筑详情",
          autoBack: true
        }),
        b: building.value
      }, building.value ? {
        c: building.value.img,
        d: common_vendor.t(building.value.title),
        e: common_vendor.t(building.value.tag),
        f: common_vendor.t(building.value.desc),
        g: common_vendor.t(building.value.explain)
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d8812481"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/building/building.js.map
