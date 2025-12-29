<template>
  <view class="forum">
    <up-navbar :title="title" :autoBack="true" />

    <!-- 帖子列表 -->
    <view class="list">
      <view class="post" v-for="item in posts" :key="item.id">
        <view class="head">
          <image :src="item.avatar" class="avatar" />
          <view class="meta">
            <view class="nick">{{ item.nick }}</view>
            <view class="time">{{ item.time }}</view>
          </view>
        </view>

        <view class="title">{{ item.title }}</view>
        <view class="content">{{ item.content }}</view>

        <view class="foot">
          <view class="like">
            <up-icon name="thumb-up" size="18" />
            <text>{{ item.like }}</text>
          </view>
          <view class="reply">
            <up-icon name="chat" size="18" />
            <text>{{ item.reply }}</text>
          </view>
        </view>
      </view>

      <!-- 无数据 -->
      <view v-if="!posts.length" class="empty">暂无帖子，快来发表第一条吧～</view>
    </view>
  </view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { getForumList } from '@/api/api.js'

const posts = ref([])
const title = ref('')

onLoad((opts) => {
  title.value = decodeURIComponent(opts.title)
  getForumList(opts.id).then(res => { posts.value = res })
})
</script>

<style lang="scss" scoped>
.forum { padding: 30rpx; background: #f5f5f5; min-height: 100vh; }
.list { display: flex; flex-direction: column; gap: 24rpx;  margin-top: 200rpx; }

.post {
  background: #fff;
  border-radius: 16rpx;
  padding: 30rpx;
  box-shadow: 0 2rpx 8rpx rgba(0,0,0,.06);
}
.head { display: flex; align-items: center; margin-bottom: 20rpx; }
.avatar { width: 64rpx; height: 64rpx; border-radius: 50%; margin-right: 16rpx; }
.meta { flex: 1; }
.nick { font-size: 28rpx; font-weight: 700; color: #333; }
.time { font-size: 24rpx; color: #999; margin-top: 4rpx; }

.title { font-size: 32rpx; font-weight: 700; color: #222; margin-bottom: 12rpx; }
.content { font-size: 28rpx; color: #555; line-height: 44rpx; margin-bottom: 24rpx; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden; }

.foot { display: flex; gap: 40rpx; font-size: 26rpx; color: #777; }
.like, .reply { display: flex; align-items: center; gap: 8rpx; }

.empty { text-align: center; margin-top: 200rpx; color: #999; }
</style>