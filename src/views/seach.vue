<template>
  <div>
    <Header/>
    <div class="head">
      <input type="text" v-model="seekTitle">
      <button @click="handleSeek">搜索</button>
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
</template>

<script>
  import Header from '../components/Header'
  import axios from 'axios'

  export default {
    name: "seach",
    components: {
      Header
    },
    data() {
      return {
        noteList: [],
        seekTitle: "",
        userStatus:{},
        replyContent: ""
      }
    },
    methods: {
      getList() {
        axios.get('/api/note/list').then(res => {
          // console.log(res.data);
          this.noteList = res.data.data;
        })
      },
      handleSeek() {
        let title = this.seekTitle;
        axios.post('/api/note/seek', {title}).then(res => {
          console.log(res.data);
          this.noteList = res.data.data;
        })
      },
      getUser() {
        axios.get('/api/getMsg').then(res => {
          // console.log(res.data);
          this.userStatus=res.data.data
        })
      }
    },
    mounted() {
      this.getList();
      this.getUser();
    }
  }
</script>

<style scoped lang="less">
  .head {
    text-align: center;
    width: 1100px;
    margin: 20px auto;
    input {
      width: 600px;
      height: 40px;
    }
    button {
      width: 100px;
      height: 40px;
    }
  }

  .news {
    cursor: pointer;
    width: 770px;
    margin: 30px auto;
    .sea {
      margin: 20px 0;
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
