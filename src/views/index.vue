<template>
  <div>
    <Header/>

    <div class="container">
      <div class="left">
        <div class="swipe">
          <el-carousel trigger="click" height="350px" indicator-position="none">
            <el-carousel-item  :key="item">
              <img src="../assets/63d0f703918fa0ece5f167da2a9759ee3d6ddb37.jpg">
            </el-carousel-item>
          </el-carousel>
        </div>

        <div class="news">
          <div class="new-top">

            <div class="detail-left">
              <img src="../assets/63d0f703918fa0ece5f167da2a9759ee3d6ddb37.jpg"
                   style="height: 80px;width: 80px;">
            </div>

            <div class="detail-right">
              <div class="biJi">
                <span type>笔记丸子</span>
                <span>轻弹VUE</span>
              </div>
              <div class="liuLan">
                <span>浏览:333</span>
                <span>回复:123</span>
                <span>分类:飒飒打撒</span>
              </div>
            </div>
          </div>

          <div class="new-bottom">
            safuhnuisajkfnjasniuab黁伏笔u是电脑发u你发i翻版大家按时
            发囧事阿素福啊开始发随你负阿森纳三年黁伏笔u是电脑发u你发i翻版大家按时
            发囧事阿素福啊开始发随你负阿森纳三年黁伏笔u是电脑发u你发i翻版大家按时
            发囧事阿素福啊开始发随你负阿森纳三年黁伏笔u是电脑发u你发i翻版大家按时
            发囧事阿素福啊开始发随你负阿森纳三年
          </div>

        </div>
      </div>

      <div class="right">
        <div><input type="text" placeholder="邮箱"></div>
        <div><input type="text" placeholder="密码"></div>
        <div><button class="btn1">登录</button></div>
        <div><button class="btn2">注册</button></div>
        <div type="one">this note is smpkkkm</div>
        <div type="two">i他萨达萨达撒旦</div>
      </div>

    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import Header from '../components/Header'
  export default {
    name: 'index',
    components:{
      Header
    },
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods:{
      login(){
        axios.post('/api/login',
          {username:this.username,password:this.password}).then(res=>{
          console.log(res);
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .container{
    width: 1100px;
    margin: 40px auto 0 auto;
    .left{
      float: left;
      .swipe{
        width: 800px;
        height: 350px;
        overflow: hidden;
        img {
          height: 350px;
          width: 800px;
        }
      }
      .news{
        width: 770px;
        margin: 30px 0;
        .new-top{
          height: 100px;
          .detail-left{
            float: left;
          }
          .detail-right{
            margin: 4px 16px;
            float: left;
            .biJi{
              color: #333;
              font-weight: 700;
              font-size: 18px;
              span[type]{
                color: skyblue;
                font-size: 14px;
              }
            }
            .liuLan{
              color: skyblue;
              margin-top: 20px;
              font-size: 12px;
              span{
                margin: 0 12px;
              }
            }
          }
        }
        .new-bottom{

        }
      }
    }
    .right{
      margin-right: 40px;
      float: right;
      input{
        padding-left: 10px;
        width: 200px;
        height: 30px;
        margin: 12px 0;
      }
      .btn1{
        outline: none;
        border-radius: 4px;
        background: skyblue;
        border: none;
        color: #fff;
        width: 214px;
        height: 30px;
        margin: 12px 0;
      }
      .btn2{
        outline: none;
        border-radius: 4px;
        background: #fff;
        border: 1px solid skyblue;
        color: skyblue;
        width: 214px;
        height: 30px;
        margin: 12px 0;
      }
      div[ type="one"]{
        margin: 12px 0;
        font-size: 16px;
        color: skyblue;
      }
      div[ type="two"]{
        margin: 14px 0;
        font-size: 22px;
        color: skyblue;
      }
    }

  }

</style>
