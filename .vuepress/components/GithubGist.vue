<template>
  <div>
    <p v-html="gistData" />
  </div>
</template>

<script>
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

export default {
  props: {
    gistId: {
      type: String,
      required: true
    },
    file: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      gistData: "Um munutinho enquanto eu busco esse código...",
      gistUrl: "https://gist.github.com/"
    };
  },
  computed: {
    url() {
      return `${this.gistUrl}${this.gistId}.json`
    },
    params() {
      if (this.file.length > 0) {
        return `file=${this.file}`;
      }
      return ''
    },
    fullUrl(){
      return `${this.url}?${this.params}`
    }
  },
    created() {
    this.getGistData(this.gistId);
  },
  methods: {
    getGistData(gistId) {
      axios.get(this.fullUrl,{
           timeout: 20000,
            adapter: jsonpAdapter,
            }).then((response) => {
                console.log(response)
          this.gistData = response.data.div;
        }).catch((err) => {
            console.log(err);
            this.gistData = "Vish, alguma coisa deu errado. Não consegui carregar esse gist"
        })
    }
  }
};
</script>

<style lang="stylus">
   .gist  tr, td
    border-top: none
    border: none
</style>

<style scoped>
   
@import url("https://github.githubassets.com/assets/gist-embed-fd43f22140a6ad2cc9d0aa1f169a01f3.css");
</style>