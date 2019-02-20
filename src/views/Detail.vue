<template>
  <div>
    详情页
    <h1>当前影片的id是 {{ id }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    id: String
  },
  components: {
  }
}
</script>