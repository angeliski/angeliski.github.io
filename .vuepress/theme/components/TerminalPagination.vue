<template>
  <div class="pagination terminal-pagination">
    <router-link :disabled="$pagination.hasPrev" :class="{ disabled: !$pagination.hasPrev}" :to="prevLink">:Voltar</router-link>
    <router-link :disabled="$pagination.hasNext" :class="{ disabled: !$pagination.hasNext}" :to="nextLink">:Avançar</router-link>
  </div>
</template>
<script>
export default {
  computed: {
    prevLink() {
      return this.$pagination.hasPrev ? this.$pagination.prevLink :'#';
    },
    nextLink() {
      return this.$pagination.hasNext ? this.$pagination.nextLink :'#';
    }
  }
}
</script> 

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
    .disabled
      text-decoration line-through
@media (max-width: $MQIpadPro)
  .terminal-pagination
    font-size: 2em
@media (max-width: $MQMobile)
  .terminal-pagination
    font-size: 2em
</style>