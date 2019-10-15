<template>
  <figure  style="text-align: center">
  <img :src="src" :width="width" class="zoom-custom-imgs">
  <figcaption v-if="caption">{{caption}}</figcaption>
</figure>
</template>

<script>
//TODO procurar outro meio de lidar com o resolver de imagem
export default {
  props: {
    caption: {
      type: String,
      default: ''
    },
    src: {
      required: true
    },
    width: {
      default: '320'
    }
  }
}
</script>