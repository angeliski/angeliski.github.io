<template>
  <div class="flex-grid">
    <div class="terminal">
        <header class="terminal-header">
            <nav class="terminal-header-nav">
                <button class="terminal-close-button">
                </button>
                <button class="terminal-minimaze-button">
                </button>
                <button class="terminal-maximize-button">
                </button>
            </nav>
            <div class="terminal-title">@angeliski_</div>
        </header>
        <section class="terminal-body terminal-body-full">
            <div class="terminal-body-to-typed"></div>
            <div class="terminal-body-from-typed">
                <section>
                  <div class="ui-post link" v-for="page in pages">
                      <NavLink :link="page.path" class="article-title">> {{ page.title }}</NavLink>
                  </div>
                </section>
            </div>
        </section>
    </div>
    <SimplePagination v-if="$pagination.length > 1 && paginationComponent" />
</div>
</template>
<script>
  import { SimplePagination } from '@vuepress/plugin-blog/lib/client/components'

  export default {
    components: {
      SimplePagination
    },
    computed: {
      pages() {
        return this.$pagination.pages
      },
    },
  }
</script>

<style lang="stylus">
/* Base do código
https://github.com/elijahmanor/spectacle-terminal 
*/

.terminal 
  display: flex
  flex-direction: column

.terminal-header 
  position: relative
  padding: 10px
  background-color: rgb(224, 233, 240)
  border-top-left-radius: 10px
  border-top-right-radius: 10px
  box-shadow: rgba(0, 0, 0, 0.2) 0px -3px 10px 0px inset

.terminal-header-nav 
  display: flex
  text-align: left

.terminal-close-button 
  border: none
  border-radius: 50%
  height: 15px
  width: 15px
  margin-right: 5px
  background-color: rgb(238, 80, 87)
  
.terminal-minimaze-button 
  border: none
  border-radius: 50%
  height: 15px
  width: 15px
  margin-right: 5px
  background-color: rgb(222, 198, 18)

.terminal-maximize-button 
  border: none
  border-radius: 50%
  height: 15px
  width: 15px
  margin-right: 5px
  background-color: rgb(51, 185, 105)

.terminal-title 
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  font-size: 0.98em

.terminal-body 
  &.terminal-body-full
    min-height: 400px  
  .article-title        
        font-size: 1.48em
        color: white;
  padding: 15px
  background-color: rgb(48, 53, 57)
  color: white
  min-height: 100px
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace
  font-size: 0.58em
  direction: ltr
  text-align: left
  word-spacing: normal
  word-break: normal
  word-wrap: normal
  line-height: 1.5
  tab-size: 4
  hyphens: none
  height: 100%
  max-height: 400px
  overflow: auto
    
.article-share-box
    display: flex
    align-items: center
    justify-content: space-between
    padding: 0 1.25rem
    .article-share-links
        justify-content: space-between
        display: flex
        flex-grow: 1
        align-items: center
        @media only screen and (max-width: 37.5rem)
            flex-direction: column

.article-comment-box        
    width: 100%
    padding: 0 1.25rem

#wrap
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    & > footer
        background-color: color-theme
        padding: 2.5rem
        display: flex
        justify-content: center

.link        
    font-size: 1.48em
    width: 100%
    word-wrap: break-word
    transition: all .2s ease-in-out
    margin-top: 0.5em
    a
        text-decoration: none
        background: transparent
        color: green
        display: inline-block
        &:hover
          font-size: 1.58em
        &:visited
            color: #656464
            :after
             content: "(Visitado)"
</style>