"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
const _sfc_main = {
  __name: "like",
  setup(__props) {
    const linkList = common_vendor.ref([]);
    const goForum = (item) => {
      common_vendor.index.__f__("log", "at pages/like/like.vue:38", ">>> 点击学院", item);
      const url = `/pages/forum/forum?id=${item.id}&title=${encodeURIComponent(item.title)}`;
      common_vendor.index.__f__("log", "at pages/like/like.vue:40", ">>> 跳转 url", url);
      common_vendor.index.navigateTo({ url });
    };
    common_vendor.onLoad(() => {
      api_api.likeList().then((res) => {
        linkList.value = res;
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(linkList.value, (item, index, i0) => {
          return {
            a: item.img,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.introduce),
            d: index,
            e: common_vendor.o(($event) => goForum(item), index)
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-03e14ebf"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/like/like.js.map
