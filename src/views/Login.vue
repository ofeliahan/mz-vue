<template>
  <div>
    <h1>登录页</h1>
    <input type="text" placeholder="用户名" v-model='username'>
    <input type="password" placeholder="密码" v-model='password'>
    <button @click='fn1'>登录</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    fn1: function () {
      axios.post('http://localhost:1990/user/login', {
        userName: this.username,
        password: this.password
      }).then(res => {
        var data = res.data;
        if (data.code === 0) {
          sessionStorage.setItem('nickname', data.data.nickName);
          this.$router.repalce({
            path: this.$route.query.redirect || '/center'
          });
          console.log(this.$route.query);
        } else {

        }
      })
    }
  }
}
</script>
