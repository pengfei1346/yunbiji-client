<template>
  <div>
    <Header/>

    <div class="container">
      <div class="left">
        <div class="swipe">
          <el-carousel trigger="click" height="350px" indicator-position="none">
            <el-carousel-item>
              <img src="../assets/63d0f703918fa0ece5f167da2a9759ee3d6ddb37.jpg">
            </el-carousel-item>
          </el-carousel>
        </div>

        <div class="news" v-for="item in noteList" :key="item.index">

          <router-link :to="'/detail?id='+item._id">
            <div class="new-top">

              <div class="detail-left">
                <img src="../assets/63d0f703918fa0ece5f167da2a9759ee3d6ddb37.jpg"
                     style="height: 80px;width: 80px;">
              </div>
              <div class="detail-right">
                <div class="biJi">
                  <span type>{{item.username}}</span>
                  <span>{{item.title}}</span>
                </div>
                <div class="liuLan">
                  <span>浏览:{{item.browse}}</span>
                  <span>回复:{{item.reply}}</span>
                  <span>分类:{{item.classify}}</span>
                </div>
              </div>
            </div>
            <div class="new-bottom" v-html="item.note"></div>
          </router-link>

        </div>
      </div>

      <div class="right" v-if="!usermsg.username">
        <div><input type="text" placeholder="邮箱" v-model="loginEmail"></div>
        <div><input type="password" placeholder="密码" v-model="loginPassword" @keyup="keyup"></div>
        <div>
          <button class="btn1" @click="handleLogin">登录</button>
        </div>
        <router-link to="/register">
          <button class="btn2">注册</button>
        </router-link>
        <div type="one">this note is smpkkkm</div>
        <div type="two">i他萨达萨达撒旦</div>
      </div>
      <div class="show" v-else="!usermsg.username">
        <img :src="usermsg.userHeader">
        <div>{{usermsg.username}}</div>
        <div>{{usermsg.email}}</div>
        <button @click="handleExit">退出登录</button>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import Header from '../components/Header'
  import isEmail from 'validator/lib/isEmail'
  import cookies from 'js-cookie'

  export default {
    name: 'index',
    components: {
      Header
    },
    data() {
      return {
        loginEmail: '1111@qq.com',
        loginPassword: '123',
        usermsg: {
          username: "",
          email: ""
        },
        noteList: []
      }
    },
    methods: {
      keyup() {
        if (event.keyCode == 13) {
          this.handleLogin();
        }
      },
      getList() {
        axios.get('/api/note/list').then(res => {
          // console.log(res.data);
          this.noteList = res.data.data;
        })
      },
      handleLogin() {
        let email = this.loginEmail;
        let password = this.loginPassword;

        if (!((email.indexOf(" ") != -1) && (password.indexOf(" ") != -1))) {

          axios.post('/api/login', {email, password}).then(res => {
            console.log(res.data.data.userHeader);
            if (res.data.code == 200) {
              cookies.set('username', res.data.data.username, {expires: 14});
              cookies.set('email', res.data.data.email, {expires: 14});
              cookies.set('header', res.data.data.userHeader, {expires: 14});
              alert("登录成功")
              this.whetherShow();
            } else {
              alert(res.data.msg)
            }
          })
        } else {
          alert("请输入正确的邮箱格式")
        }

      },
      handleExit() {
        let {username, email} = this.usermsg;
        axios.get('/api/exit').then(res => {
          cookies.remove('username');
          cookies.remove('email');
          this.whetherShow();
          // this.$router.go(0)
        })
      },
      whetherShow() {
        let username = cookies.get('username');
        let email = cookies.get('email');
        let header = cookies.get('header');
        // console.log(username);
        // console.log(email);
        if (username && email) {
          this.usermsg.username = username;
          this.usermsg.email = email;
          this.usermsg.header = header;
          // console.log(this.usermsg);
        } else {
          this.usermsg.username = ""
          this.usermsg.email = ""
          this.usermsg.header = ""
        }
      }
    },
    created() {
      this.getList();
      this.whetherShow();
    }
  }
</script>

<style scoped lang="less">
  .container {
    width: 1100px;
    margin: 40px auto 0 auto;
    .left {
      float: left;
      .swipe {
        width: 800px;
        height: 350px;
        overflow: hidden;
        img {
          height: 350px;
          width: 800px;
        }
      }
      .news {
        width: 770px;
        margin: 30px 0;
        .new-top {
          height: 100px;
          .detail-left {
            float: left;
          }
          .detail-right {
            margin: 4px 16px;
            float: left;
            .biJi {
              color: #333;
              font-weight: 700;
              font-size: 18px;
              span[type] {
                color: skyblue;
                font-size: 14px;
              }
            }
            .liuLan {
              color: skyblue;
              margin-top: 20px;
              font-size: 12px;
              span {
                margin: 0 12px;
              }
            }
          }
        }

      }
    }
    .right {
      margin-right: 40px;
      float: right;
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
    .show {
      padding-top: 70px;
      text-align: center;
      margin: 0 auto;
      div {
        margin: 20px 0;
      }
      button {
        width: 200px;
        background: red;
        color: #fff;
        border: none;
        height: 30px;
        outline: none;
      }
    }
  }

</style>
