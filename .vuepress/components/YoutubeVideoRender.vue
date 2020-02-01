<template>
 <div class="youtube-video-render">
    <iframe :width="width" :height="height" 
    :src="url" 
    frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
 </div>
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      required: true
    },
    width: {
      default: '560'
    },
    height: {
      default: '315'
    }
  },
  computed:{
    url() {
      return `https://www.youtube.com/embed/${this.videoId}`
    }
  }
}
</script>

<style scoped>
.youtube-video-render {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>