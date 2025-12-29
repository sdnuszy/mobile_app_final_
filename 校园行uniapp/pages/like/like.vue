<template>
  <view class="like">
    <!-- 双列容器：行内强制 flex -->
    <view
      class="tj-list"
      style="display:flex; flex-wrap:wrap; justify-content:space-between; row-gap:20rpx;"
    >
      <view
        class="item-wrapper"
        v-for="(item, index) in linkList"
        :key="index"
        @click="goForum(item)"
      >
        <view class="item">
          <image :src="item.img" mode="aspectFill" />
          <view class="topFixed">经验</view>
          <view class="infos">
            <view class="tit">{{ item.title }}</view>
            <view class="desc">
              <text class="text">{{ item.introduce }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { likeList } from '@/api/api.js'

const linkList = ref([])

/* 跳转到论坛 */
const goForum = (item) => {
  console.log('>>> 点击学院', item)
  const url = `/pages/forum/forum?id=${item.id}&title=${encodeURIComponent(item.title)}`
  console.log('>>> 跳转 url', url)
  uni.navigateTo({ url })
}

onLoad(() => {
  likeList().then(res => { linkList.value = res })
})
</script>

<style lang="scss" scoped>
.like {
  padding: 20rpx;
  box-sizing: border-box;
}

/* 只留宽度和文字截断 */
.item-wrapper {
  width: 48% !important;
  pointer-events: auto;
}

.item {
  position: relative;
  background: #fff;
  border-radius: 16rpx;
  overflow: hidden;
  box-shadow: 0 2rpx 6rpx rgba(0, 0, 0, 0.08);
}

.topFixed {
  position: absolute;
  top: 0;
  right: 0;
  border-bottom-left-radius: 16rpx;
  background: #ff5500;
  color: #fff;
  font-size: 22rpx;
  padding: 5rpx 16rpx;
}

image {
  width: 100%;
  height: 200rpx;
  display: block;
}

.infos {
  padding: 16rpx;
}

.tit {
  font-size: 28rpx;
  font-weight: 700;
  color: #111;
  margin-bottom: 8rpx;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.desc .text {
  font-size: 26rpx;
  color: #8a8a8a;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>