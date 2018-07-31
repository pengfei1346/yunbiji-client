<template>
  <div class="big">
    <Header/>
    <div class="item">
      <label class="put-container">
        <div id="add" v-show="!img">+</div>
        <img :src="img" v-if="img">
        <input type="file" @change="handlePut($event)">
      </label>

      <div class="right">
        <div><input type="text" placeholder="用户名" v-model="username"></div>
        <div><input type="text" placeholder="邮箱" v-model="email"></div>
        <div><input type="password" placeholder="密码" v-model="password" @keyup="keyup"></div>
        <div>
          <button class="btn2" @click="handleRegister">注册</button>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import axios from 'axios'
  import Header from '../components/Header'
  import putImg from '../components/ajaxup'

  export default {
    name: "register",
    components: {
      Header, putImg
    },
    data() {
      return {
        email: "",
        username: "",
        password: "",
        img: ""
      }
    },
    methods: {
      keyup() {
        if (event.keyCode == 13) {
          this.handleRegister();
        }
      },
      handleRegister() {
        let email = this.email;
        let username = this.username;
        let password = this.password;
        axios.post('/api/register', {email, username, password}).then(res => {
          // console.log(res.data);
          if (res.data.code == 200) {
            alert("注册成功")
            this.$router.push("/index")
          } else {
            alert("注册失败")
          }
        })
      },
      handlePut($event) {
        console.log($event.target.files);
        let file = $event.target.files[0];

        let form = new FormData();
        form.append("pic", file)

        axios.post(
          '/api/putImg',
          form,
          {
            headers: {'content-type': "multipart/form-data"}
          }
        ).then(res => {
          console.log(res);
          this.img=`/api/${res.data.data}`
        })
      },
    }
  }
</script>

<style scoped lang="less">
  .item{
    width: 350px;
    margin: 0 auto;
  }
  .put-container{
    float: left;
    margin-top: 70px;
    text-align: center;
    font-size: 30px;
    vertical-align: middle;
    font-weight: 100;
    display: block;
    color: #888;
    border: 1px solid #888;
    width: 50px;
    height: 50px;
    line-height: 44px;
    img{
      width: 50px;
      height: 50px;
    }
    #id{
      width: 150px;
      height: 150px;
    }
    input{
      display: none;
    }
  }
  .big {
    text-align: center;
  }

  .right {
    float: right;
    margin: 20px auto;
    input {
      padding-left: 10px;
      width: 200px;
      height: 30px;
      margin: 12px 0;
    }
    .btn1 {
      outline: none;
      border-radius: 4px;
      background: skyblue;
      border: none;
      color: #fff;
      width: 214px;
      height: 30px;
      margin: 12px 0;
    }
    .btn2 {
      outline: none;
      border-radius: 4px;
      background: #fff;
      border: 1px solid skyblue;
      color: skyblue;
      width: 214px;
      height: 30px;
      margin: 12px 0;
    }
    div[ type="one"] {
      margin: 12px 0;
      font-size: 16px;
      color: skyblue;
    }
    div[ type="two"] {
      margin: 14px 0;
      font-size: 22px;
      color: skyblue;
    }
  }
</style>
