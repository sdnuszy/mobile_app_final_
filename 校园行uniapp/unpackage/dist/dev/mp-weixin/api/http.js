"use strict";
const common_vendor = require("../common/vendor.js");
const api_mockData_pageApi = require("./mockData/pageApi.js");
let baseUrl = "https://apifoxmock.com/m1/4728220-0-default/api";
function http(url, data = {}, method = "GET") {
  return new Promise((resolve, reject) => {
    {
      common_vendor.index.__f__("log", "at api/http.js:14", "[MOCK] 本地 mock 命中 ->", url);
      if (url === "/user/getBanner") {
        return resolve(api_mockData_pageApi.pageApi.getBanner().data);
      }
      if (url === "/user/getHomeList") {
        return resolve(api_mockData_pageApi.pageApi.getHomeList().data);
      }
      if (url === "/detail/project") {
        return resolve(api_mockData_pageApi.pageApi.detailProject().data);
      }
      if (url === "/building/usage") {
        return resolve(api_mockData_pageApi.pageApi.getUsageList().data);
      }
      if (url === "/project/info") {
        common_vendor.index.__f__("log", "at api/http.js:37", "✅ 命中 projectInfo mock");
        return resolve(api_mockData_pageApi.pageApi.projectInfo().data);
      }
      if (url === "/like/list") {
        return resolve(api_mockData_pageApi.pageApi.likeList().data);
      }
    }
    if (url === "/forum/list") {
      return resolve(api_mockData_pageApi.pageApi.forumList().data.filter((item) => item.collegeId == data.collegeId));
    }
    common_vendor.index.request({
      url: baseUrl + url,
      data,
      method,
      header: {
        token: common_vendor.index.getStorageSync("token") || ""
      },
      success: (res) => {
        if (res.statusCode === 200) {
          if (res.data.code === 1) {
            resolve(res.data.data);
          } else {
            common_vendor.index.showToast({ title: res.data.msg || "请求失败", icon: "none" });
            reject(res.data.msg);
          }
        }
      },
      fail: () => {
        common_vendor.index.showToast({ title: "服务器请求异常", icon: "none" });
        reject("服务器请求异常");
      }
    });
  });
}
exports.http = http;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/http.js.map
