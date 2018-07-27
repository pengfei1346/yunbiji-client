<template>
  <div>
    <Header/>
    <form action="">
      <h2>标题</h2>
      <input type="text">
      <h2>内容</h2>
      <textarea rows="20" cols="50">
          在w3school，你可以找到你所需要的所有的网站建设教程。
      </textarea>
      <div>标签</div>
      <button>发布</button>
    </form>
  </div>
</template>

<script>
  import Header from '../components/Header'
  export default {
    name: "write",
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
  form {
    width: 800px;
    margin: 0 auto;
    textarea{
      width: 600px;
      height: 500px;
      resize:none
    }
  }
</style>
