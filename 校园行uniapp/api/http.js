import pageApi from './mockData/pageApi.js'

// 是否开启本地 mock
const isMock = process.env.NODE_ENV === 'development'

// 线上地址（去掉尾部空格）
let baseUrl = 'https://apifoxmock.com/m1/4728220-0-default/api'

export default function http(url, data = {}, method = 'GET') {
  return new Promise((resolve, reject) => {

    // ========== 本地 MOCK 处理（开发环境）==========
    if (isMock) {
      console.log('[MOCK] 本地 mock 命中 ->', url)

      // 1. 首页 banner
      if (url === '/user/getBanner') {
        return resolve(pageApi.getBanner().data)
      }

      // 2. 首页列表
      if (url === '/user/getHomeList') {
        return resolve(pageApi.getHomeList().data)
      }

      // 3. 游玩推荐（旧接口，保留）
      if (url === '/detail/project') {
        return resolve(pageApi.detailProject().data)
      }

      // 4. 使用详情（新接口）
      if (url === '/building/usage') {
        return resolve(pageApi.getUsageList().data)
      }
	  // 5.
	  if (url === '/project/info'){ 
		  console.log('✅ 命中 projectInfo mock')
		  return resolve(pageApi.projectInfo().data)  
	 }
	  
	  //6.
	  if (url === '/like/list') {return resolve(pageApi.likeList().data)}
      // 继续加更多接口...
    }
	
	// 9. 论坛列表
	if (url === '/forum/list') {
	  return resolve(pageApi.forumList().data.filter(item => item.collegeId == data.collegeId))
	}

    // ========== 正常请求（生产环境）==========
    uni.request({
      url: baseUrl + url,
      data,
      method,
      header: {
        token: uni.getStorageSync('token') || ''
      },
      success: res => {
        if (res.statusCode === 200) {
          if (res.data.code === 1) {
            resolve(res.data.data)
          } else {
            uni.showToast({ title: res.data.msg || '请求失败', icon: 'none' })
            reject(res.data.msg)
          }
        }
      },
      fail: () => {
        uni.showToast({ title: '服务器请求异常', icon: 'none' })
        reject('服务器请求异常')
      }
    })
  })
}