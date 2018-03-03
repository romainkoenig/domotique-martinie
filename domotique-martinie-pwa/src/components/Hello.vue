<template>
  <div>
    <div class="hello">
      <div>
        <el-button type="primary" v-on:click="getMessage">get</el-button>
        <el-button type="success" v-on:click="allumer">ALLUMER</el-button>
        <el-button type="error" v-on:click="eteindre">ETEINDRE</el-button>
      </div>
    </div>
    <ul v-if="posts && posts.length">
      <li v-for="post of posts" v-bind:key="post.id">
        <p><strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
      </li>
    </ul>

    <ul v-if="errors && errors.length">
      <li v-for="error of errors" v-bind:key="error.id">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'hello',
  data() {
    return {
      msg: 'cliquez moi',
      posts: [],
      errors: [],
    };
  },
  methods: {
    getMessage: function getMessage() {
      axios.get('http://jsonplaceholder.typicode.com/posts').then((response) => {
        this.posts = response.data;
      }).catch((e) => {
        this.errors.push(e);
      });
    },
    allumer: function getMessage() {
      axios.post('https://30d11820.ngrok.io/gpio', {
        gpio: '1',
        value: 1,
      }).then((response) => {
        console.log(response);
      }).catch((e) => {
        this.errors.push(e);
      });
    },
    eteindre: function getMessage() {
      axios.post('https://30d11820.ngrok.io/gpio', {
        gpio: '1',
        value: 0,
      }).then((response) => {
        console.log(response);
      }).catch((e) => {
        this.errors.push(e);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
</style>
