<template>
  <div id="app">
    <with-subscription :selectData="(DataSource) => DataSource.getBlogPost(blogPostId)">
      <blog-post slot-scope="withSubscriptionScope" :id="blogPostId" :data="withSubscriptionScope.data"></blog-post>
    </with-subscription>
    <with-subscription :selectData="(DataSource) => DataSource.getComments(blogPostId)">
      <comments-list slot-scope="withSubscriptionScope" :id="blogPostId" :data="withSubscriptionScope.data"></comments-list>
    </with-subscription>
  </div>
</template>

<script>
import commentsList from './components/CommentsList';
import blogPost from './components/BlogPost';
import withSubscription from './components/WithSubscription';

export default {
  name: 'app',
  data() {
    return {
      blogPostId: 2,
    };
  },
  components: {
    commentsList,
    blogPost,
    withSubscription
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
