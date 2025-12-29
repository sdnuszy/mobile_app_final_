"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
if (!Array) {
  const _easycom_up_navbar2 = common_vendor.resolveComponent("up-navbar");
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  (_easycom_up_navbar2 + _easycom_up_icon2)();
}
const _easycom_up_navbar = () => "../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  (_easycom_up_navbar + _easycom_up_icon)();
}
const _sfc_main = {
  __name: "forum",
  setup(__props) {
    const posts = common_vendor.ref([]);
    const title = common_vendor.ref("");
    common_vendor.onLoad((opts) => {
      title.value = decodeURIComponent(opts.title);
      api_api.getForumList(opts.id).then((res) => {
        posts.value = res;
      });
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: title.value,
          autoBack: true
        }),
        b: common_vendor.f(posts.value, (item, k0, i0) => {
          return {
            a: item.avatar,
            b: common_vendor.t(item.nick),
            c: common_vendor.t(item.time),
            d: common_vendor.t(item.title),
            e: common_vendor.t(item.content),
            f: "aeadbf01-1-" + i0,
            g: common_vendor.t(item.like),
            h: "aeadbf01-2-" + i0,
            i: common_vendor.t(item.reply),
            j: item.id
          };
        }),
        c: common_vendor.p({
          name: "thumb-up",
          size: "18"
        }),
        d: common_vendor.p({
          name: "chat",
          size: "18"
        }),
        e: !posts.value.length
      }, !posts.value.length ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-aeadbf01"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/forum/forum.js.map
