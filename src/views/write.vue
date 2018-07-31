<template>
  <div>
    <Header/>
    <div class="form">
      <h2>标题</h2>

      <input type="text" v-model="notes.title">
      <h2>内容</h2>

      <editor @content="getContent"></editor>

      <div id="label">
        标签

        <el-checkbox-group v-model="selectLabel" class="fll" size="small">
          <el-checkbox-button v-for="label in lables"
                              :label="label" :key="label.index">
            {{label.title}}
          </el-checkbox-button>
        </el-checkbox-group>
      </div>

      <button @click="handlePut">发布</button>
    </div>


  </div>
</template>

<script>
  import editor from '../components/editor'
  import axios from 'axios'
  import Header from '../components/Header'

  export default {
    name: "write",
    components: {
      Header, editor
    },
    data() {
      return {
        notes: {
          title: "",
          note: "",
        },
        content: "",
        selectLabel: [],
        lables: [
          {title: "html"},
          {title: "css"},
          {title: "h5"},
          {title: "js"},
          {title: "es6"},
          {title: "ajax"},
          {title: "vue.js"},
          {title: "jquery.js"},
          {title: "react.js"},
          {title: "require.js"},
          {title: "ui"},
          {title: "anlmate"}]
      }
    },
    methods: {
      handlePut() {
        let title = this.notes.title;
        let note = this.notes.note;
        let classify = this.selectLabel;
        console.log(classify);
        axios.post('/api/note/addNote', {title, note, classify}).then(res => {
          // console.log(res.data);
          if (res.data.code == 200) {
            alert("发布成功");
            // this.notes.title ="";

          } else if (res.data.code == 400) {
            alert("发布失败")
          }
        })
      },
      getContent(editorContent) {
        this.notes.note = editorContent;
      },
    }
  }
</script>

<style scoped lang="less">
  .form {
    width: 800px;
    margin: 80px auto;
    textarea {
      font-size: 18px;
      padding: 30px 30px;
      width: 700px;
      height: 500px;
      resize: none;
      outline: none;
    }
    button {
      width: 120px;
      height: 30px;
      border: none;
      background: red;
      color: #fff;
      outline: none;
      font-size: 18px;
    }
    h2 {
      margin: 20px 0;
    }
    input {
      padding: 0 30px;
      font-size: 22px;
      height: 50px;
      width: 730px;
      outline: none;
    }
    #label {
      margin: 20px 0;
    }
  }
</style>
