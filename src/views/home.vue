<template>
  <div>
    <!--放置一个坑,后面页面切换(路由切换)就会按照路由对照表的配置去渲染这个坑的内容  -->
    <router-view></router-view>
    <Mzfooter></Mzfooter>
  </div>
</template>

<script >
import Mzfooter from '../components/Mzfooter/Index';
export default {
  components: {
    Mzfooter: Mzfooter
  }
};
</script>
