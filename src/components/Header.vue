<template>
  <div class="top">
    <div class="small">
      <router-link to="/">
        <div class="left">云笔记</div>
      </router-link>
      <div class="right">
        <router-link to="/seach">
          <i class="iconfont el-icon-search"></i>
        </router-link>
        <button class="ipt" @click="handleWrite">写笔记</button>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Header",
    data() {
      return {}
    },
    methods: {
      handleWrite() {
        axios.get('/api/getMsg').then(res => {
          // console.log(res.data);
          if(res.data.code ==200){
            this.$router.push("/write")
          }else {
            alert("请先登录")
          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .top {
    height: 50px;
    line-height: 50px;
    width: 100%;
    background: skyblue;
    .small {
      width: 1100px;
      margin: 0 auto;
      .left {
        font-size: 22px;
        color: #fff;
        float: left;
      }
      .right {
        float: right;
        vertical-align: middle;
        i {
          color: #fff;
          font-size: 20px;
          margin: 0 5px;
        }
        button {
          cursor: pointer;
          color: skyblue;
          background: #fff;
          width: 80px;
          height: 28px;
          outline: none;
          border: none;
          border-radius: 4px;
        }
      }
    }
  }

</style>
