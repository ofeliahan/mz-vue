<template>
  <footer class="footer">
    <router-link to='/films'><i class="iconfont icon-dianying"></i>电影</router-link>
    <router-link to='/cinemas'><i class="iconfont icon-yingyuana"></i>影院</router-link>
    <router-link to='/center'><i class="iconfont icon-shezhi"></i>我的</router-link>
  </footer>
</template>

<style lang="less">
  /*底部*/
.footer {
  height: 48px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  border-top:1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a{
    color: #797d82;
    display: flex;
    flex-flow: column;
    text-align: center;
    text-decoration: none;
     //当前被激活的a标签  加&标签的意思是就是当级a标签
    &.router-link-active {
      color: #ff5f16;
    }
  }
}

</style>
