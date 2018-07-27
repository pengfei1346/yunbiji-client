<template>
  <div class="top">
    <div class="small">
      <div class="left">云笔记</div>
      <div class="right">
        <i class="iconfont el-icon-search"></i>
        <input class="ipt" type="text" placeholder="写笔记">
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="less">
  .top{
    height: 50px;
    line-height: 50px;
    width: 100%;
    background: skyblue;
    .small{
      width: 1100px;
      margin: 0 auto;
      .left{
        font-size: 22px;
        color: #fff;
        float: left;
      }
      .right{
        float: right;
        vertical-align: middle;
        i{
          color: #fff;
          font-size: 20px;
          margin: 0 5px;
        }
        input{
          color: skyblue;
          padding-left: 20px;
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
