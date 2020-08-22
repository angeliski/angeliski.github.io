<template>
  <div id="vuperess-theme-blog__post-layout">
    <img :src="cover" v-if="$page.frontmatter.cover" class="vuepress-post-cover">
    <div class="vuepress-blog-theme-content">
      <h1 v-if="$page.frontmatter.title">{{$page.frontmatter.title}}</h1>  
      <Content/>
      <hr/>
      <Comment/>
    </div>
  </div>
</template>

<script>
import { Comment } from '@vuepress/plugin-blog/lib/client/components'

  export default {
    components: {
      Comment,
    },
    computed: {
        cover() {
            return require(`@/assets/img/${this.$page.frontmatter.cover}`)
        }
    }
  }
</script>

<style lang="stylus">
  .vuepress-blog-theme-content
    font-size 16px
    letter-spacing 0px
    font-family PT Serif, Serif
    color #2c3e50
    position relative
    max-width: 70%
    padding: 2rem;
    margin: auto;
    
    @media(min-width: $MQNarrow)
      box-shadow: 0 10px 20px rgba(0,0,0,0.05), 0 6px 6px rgba(0,0,0,0.07)

   .vuepress-post-cover
    width 100%

</style>

<style src="prismjs/themes/prism-okaidia.css"></style>
