<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
        v-for='item in bannerList'
        :key='item._id'>
          <img :src="item.imgUrl">
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// 引入axios
import axios from 'axios';

export default {
  data () {
    return {
      // 轮播图的数据
      bannerList: [],
      mySwiper: ''
    }
  },
  methods: {
    initSwiper () {
      // 临时对某个代码不校验eslint规则
      /* eslint-disable */
      this.mySwiper = new Swiper(".swiper-container", {
        autoplay: true,
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }
      });
    /* eslint-enable */
    }
  },
  created () {
    // 调用axios.get
    var that = this;
    axios.get('http://localhost:1990/banner/search', {
      params: {
        pageSize: 10
      }
    }).then(function (res) {
      // res 不是后台返回给你的数据,真正后台给你返回的数据在 res.data 上面
      let data = res.data;
      if (data.code === 0) {
        that.bannerList = data.data;
        // 数据更新之后,再做 new Swiper(ps :数据更新到页面真实dom的更新还需要一点点时间)
        // $nextTick()这个函数能确保真实dom的更新
        that.$nextTick(() => {
          that.initSwiper();
        })
      } else {
        alert('网络异常,请稍后重试')
      }
    })
  }
}
</script>

<style lang="less">
.swiper-container {
  height: 210px;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
