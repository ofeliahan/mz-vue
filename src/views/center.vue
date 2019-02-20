<template>
  <div>
    <h1>我的个人中心页</h1>
    <ul>
      <router-link tag="li" to="/card">卖座卡</router-link>
      <router-link tag="li" to="/money">钱</router-link>
      <router-link tag="li" to="/system">设置</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>
