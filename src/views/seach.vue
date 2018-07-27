<template>
  <div>
    <Header/>

    <div class="news">
      <div class="sea">
        <input type="text" placeholder="请输入关键字">
        <button>搜索</button>
      </div>

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
</template>

<script>
  import Header from '../components/Header'

  export default {
    name: "seach",
    components: {
      Header
    },
    data() {
      return {}
    }
  }
</script>

<style scoped lang="less">
  .news {
    width: 770px;
    margin: 30px auto;
    .sea{
      margin: 20px 0;
      input{
        width: 600px;
        height: 40px;
      }
      button{
        width: 100px;
        height: 40px;
      }
    }
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
    .new-bottom {

    }
  }
</style>
