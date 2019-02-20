<template>
  <div>
     <Mzbanner></Mzbanner>
     <Mztabs></Mztabs>

     <ul>
      <router-link to='/detail/100' tag="li">流浪地球</router-link> 
      <router-link to='/detail/200' tag="li">喜剧之王</router-link> 
      <router-link to='/detail/300' tag="li">我的名字</router-link> 
     </ul>
  </div>
</template>
<script>
import Mzbanner from '../components/Mzbanner/Index.vue';
import Mztabs from '../components/Mztabs/Index.vue';

export default {
  components: {
    Mzbanner,
    Mztabs
  }
};
</script>
