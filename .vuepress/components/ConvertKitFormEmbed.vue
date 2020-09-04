<template>
    <div class="main-block" ref="target" />
</template>
<script>
export default {
    props: {
    domain: {
      type: String,
      required: true
    },
    uid: {
      type: String,
      required: true
    }
  },
  mounted() {
    if (process.env.NODE_ENV === 'development') return;
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', `${this.domain}/${this.uid}/index.js`)
    externalScript.setAttribute('data-uid', this.uid)
    this.$refs.target.appendChild(externalScript)
  },
}
</script>
<style lang="stylus" scoped>
    .main-block
        display: flex
        justify-content: center

</style>