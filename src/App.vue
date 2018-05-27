<template>
  <div id="app">
    <with-subscription-blog></with-subscription-blog>
    <with-subscription-comment></with-subscription-comment>
  </div>
</template>

<script>
import Vue from 'vue';
import CommentList from './components/CommentsList';
import BlogPost from './components/BlogPost';
import withSubscription from './hocs/withSubscription-jsx';
import DataSource from './store/source';

// let blog;
// let comment;

export default {
  name: 'app',
  data() {
    return {
      blogPostId: 2,
    };
  },
  components: {
    withSubscriptionBlog: Vue.extend(withSubscription(BlogPost, (DataSource, props) => DataSource.getBlogPost(props.id), DataSource.getBlogList())),
    withSubscriptionComment: Vue.extend(withSubscription(CommentList, (DataSource, props) => DataSource.getComments(props.id))),
  },
  mounted() {
    // blog = withSubscription(BlogPost, (DataSource, props) => DataSource.getBlogPost(props.id), {id: this.blogPostId});
    // comment = withSubscription(CommentList, (DataSource, props) => DataSource.getComments(props.id), {id: this.blogPostId});
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
