<template>
  <div class="pagination terminal-pagination">
    <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">:Voltar</router-link>
    <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">:Avançar</router-link>
  </div>
</template>

<style lang="stylus">
  .terminal-pagination
    a
      margin-right: 20px
      font-size: 1.48em
      color: #fff
      height: 38px
      line-height: 38px
      transition: all .3s ease
      position: relative
      overflow: hidden
      display: inline-block
      padding: 0 15px
      text-decoration: none
      transition all .5s
      &:hover
        color #FFF
</style>