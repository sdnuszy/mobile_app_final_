import http from './http.js'

// 首页banner
export const getBanner = () => {
	return http('/user/getBanner')
}

// 首页列表
export const getHomeList = () => {
	return http('/user/getHomeList')
}

// 登录
export const login = (code) => {
	return http('/login', { code }, 'POST')
}

// 获取用户信息
export const getUserInfo = () => {
	return http('/getUserInfo')
}

// 详情
export const detailProject = () => {
	return http('/detail/project')
}

// 项目详情
export const projectInfo = () => {
	return http('/project/info')
} 

// 我的喜欢
export const likeList = () => {
	return http('/like/list')
}


// 论坛帖子
export const getForumList = (collegeId) => {
  return http('/forum/list', { collegeId }, 'GET')
}