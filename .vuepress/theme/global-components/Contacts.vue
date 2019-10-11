<template>
  <div class="wrap">
    <ul class="contact" v-if="contact">
    <li class="contact-item" v-for="item in contact">
      <NavLink :link="item.link">
        <component :is="item.iconComponent"></component>
        {{ item.text }}
      </NavLink>
    </li>
  </ul>
  </div>
</template>

<script>
  import {
    GithubIcon,
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    LinkedinIcon
  } from 'vue-feather-icons'
  
  export default {
    components: {
      GithubIcon,
      FacebookIcon,
      TwitterIcon,
      InstagramIcon,
      LinkedinIcon
    },
    
    methods: {
      getIconComponentName(contactType) {
        switch (contactType) {
          case 'github':
            return 'GithubIcon'
          case 'facebook':
            return 'FacebookIcon'
          case 'twitter':
            return 'TwitterIcon'
          case 'instagram':
            return 'InstagramIcon'
          case 'linkedin':
            return 'LinkedinIcon'
          default:
            return ''
        }
      },
    },
    
    computed: {
      contact() {
        return (
          this.$themeConfig.footer && this.$themeConfig.footer.contact || []
        )
          .map(({ type, link }) => {
            return {
              iconComponent: this.getIconComponentName(type),
              link,
            }
          })
          .filter(({ iconComponent }) => iconComponent)
      },
    },
  }
</script>

<style lang="stylus" scoped>
  ol, ul
    list-style none
    margin 0
    padding 0

  .wrap
    line-height 30px
    flex 1
    display flex
    
    .contact
      display flex
      justify-content: space-around
      flex: 1
      
      .contact-item
        flex 1
        margin-right 10px
        
        a
          font-size 12px
          text-decoration none
          transition color .3s
          
          &:hover
            color #ccc
</style>