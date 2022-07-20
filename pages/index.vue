<template>
  <div>
    <div class="wrap-main-screen">
        <main-screen />
    </div>
  </div>
</template>

// 88,33 px на одну полоску
// 530px на 6
// 1060px на 12
// 20px между 2 блоками

<script>
import http from "http"
import MainScreen from "~/components/main/MainScreen";
export default {
  components: {MainScreen},
  head() {
    return {
      title: 'Vendeta',
      link: [
        {
          rel: 'canonical',
          href: `http://localhost:3000${this.$route.path}`,
        },
      ],
    }
  },

  mounted() {
    setInterval(function () {
      http.get('https://app-vendeta.herokuapp.com/')
    }, 300000)
  }

}
</script>

<style lang="scss" scoped>

</style>
