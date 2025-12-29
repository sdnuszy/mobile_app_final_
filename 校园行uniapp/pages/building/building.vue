<template>
  <view class="building">
    <up-navbar title="建筑详情" :autoBack="true" />

    <!-- 唯一建筑卡片 -->
    <view v-if="building" class="card">
      <image :src="building.img" mode="aspectFill" />
      <view class="info">
        <view class="title">{{ building.title }}</view>
        <view class="tag">{{ building.tag }}</view>
        <view class="desc">{{ building.desc }}</view>

        <!-- 新增：解释栏 -->
        <view class="explain">{{ building.explain }}</view>
      </view>
    </view>

    <!-- 无数据 -->
    <view v-else class="empty">暂无对应建筑信息</view>
  </view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { projectInfo } from '@/api/api.js'

const building = ref(null)

onLoad((opts) => {
  projectInfo().then(res => {
    building.value = res.find(i => i.id == opts.id) || null
  })
})
</script>

<style lang="scss" scoped>
.building {
  padding: 200rpx 40rpx 40rpx;   /* 关键：顶部留 80rpx */
    background: #f5f5f5;
    min-height: 100vh;

}
.card {
  background: #fff;
  border-radius: 16rpx;
  overflow: hidden;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.08);
}
.card image {
  width: 100%;
  height: 400rpx;
}
.info {
  padding: 30rpx;
}
.title {
  font-size: 36rpx;
  font-weight: 700;
  margin-bottom: 10rpx;
}
.tag {
  font-size: 26rpx;
  color: #ff7f50;
  margin-bottom: 10rpx;
}
.desc {
  font-size: 28rpx;
  color: #666;
}
.explain {
  margin-top: 20rpx;
  font-size: 28rpx;
  color: #555;
  line-height: 44rpx;
  background: #f8f8f8;
  padding: 20rpx;
  border-radius: 12rpx;
}
.empty {
  text-align: center;
  margin-top: 200rpx;
  color: #999;
}
</style>