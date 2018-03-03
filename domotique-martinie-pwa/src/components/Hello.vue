<template>
  <div>
    <div class="hello">
      <div>
        <el-button type="primary" v-on:click="getMessage">get</el-button>
        <el-button type="warning" v-on:click="postMessage">POST</el-button>
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
    postMessage: function getMessage() {
      axios.post('http://localhost:3000/gpio', {
        gpio: '1',
        value: 2,
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
