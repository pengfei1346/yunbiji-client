<template>
  <div>
    <Header/>

    <div class="item">
      <h1>我是文章标题</h1>
      <h2>作者 我有安达市难道你</h2>
      <div class="detail">

      </div>
    </div>

  </div>
</template>

<script>
  import Header from '../components/Header'

  export default {
    name: "detail",
    components: {
      Header
    },
    data() {
      return {
        msg: ''
      }
    }
  }
</script>

<style scoped lang="less">
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
    h1{
      font-weight: 400;
      margin: 10px 0 ;
    }
    h2{
      font-size: 14px;
      font-weight: 200;
      margin: 10px 0;
    }
    .detail{
      text-indent: 2rem;
      font-size: 14px;

    }
  }

</style>
