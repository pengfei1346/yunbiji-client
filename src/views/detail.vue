<template>
  <div class="all">
    <Header/>

    <div class="item">
      <h1 v-html="noteDetail.title">{{}}</h1>
      <h2> 作者 {{noteDetail.username}}</h2>
      <div class="detail">
        <p v-html="noteDetail.note"></p>
      </div>
    </div>

    <div v-for="item in replyData" :key="item.index" id="rdata">
      <p>{{item.username}}</p>
      <p>{{item.replyContent}}</p>
    </div>

    <div class="reply">
      <button @click="handleReply">回复</button>
      <input type="text" v-model="replyContent">
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import axios from 'axios'

  export default {
    name: "detail",
    components: {
      Header
    },
    data() {
      return {
        noteList: [],
        noteDetail: "",
        userStatus: {},
        replyData: [],
        replyContent: "",
        estimate: ""
      }
    },
    methods: {
      getDetail() {
        let _id = this.$route.query.id;
        axios.post('/api/note/detail', {_id}).then(res => {
          this.noteDetail = res.data.data;
          this.replyData = res.data.rda;
          // console.log(this.replyData);
        })
      },
      handleReply() {
        if (this.estimate == 200) {
          if (!this.replyContent == "") {
            let replyContent = this.replyContent;
            let userId = this.userStatus.userId;
            let noteId = this.$route.query.id;
            axios.post('/api/note/reply', {replyContent, userId, noteId}).then(res => {
              // console.log(res.data);
              this.replyContent = "";
              this.getDetail();
            })
          } else {
            alert("回复内容不能为空")
          }
        } else {
          alert("请先登录")
        }
      },
      getUser() {
        axios.get('/api/getMsg').then(res => {
          this.estimate = res.data.code
          this.userStatus = res.data.data
        })
      }
    },
    created() {
      this.getDetail();
      this.getUser();
    }
  }
</script>

<style scoped lang="less">
  #rdata {
    width: 780px;
    margin: 20px auto 20px auto;
    background: #eee;
    padding: 20px 10px;
  }

  body {
    width: 100%;
    height: 100%;
    background: #eee;
  }

  .item {
    text-align: center;
    width: 800px;
    margin: 50px auto;
    background: #ccc;
    h1 {
      font-weight: 400;
      margin: 10px 0;
    }
    h2 {
      font-size: 14px;
      font-weight: 200;
      margin: 10px 0;
    }
    .detail {
      text-indent: 2rem;
      font-size: 14px;
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }

  .reply {
    width: 800px;
    margin: 40px auto 100px auto;
    button {
      width: 60px;
      height: 34px;
    }
    input {
      width: 400px;
      height: 30px;
    }
  }

</style>
