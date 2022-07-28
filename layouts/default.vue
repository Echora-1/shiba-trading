<template>
  <div class="default-layouts">
    <base-header />
    <main>
      <Nuxt />
    </main>
    <base-footer />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import BaseHeader from '~/components/base/BaseHeader'
import BaseFooter from '@/components/base/BaseFooter'

export default {
  components: { BaseFooter, BaseHeader },

  computed: {
    ...mapGetters({
      getTheme: 'getTheme',
    }),
  },

  watch: {
    getTheme(value) {
      document.body.classList.toggle('dark')
    },
  },
}
</script>

<style lang="scss" scoped>
.default-layouts {
  overflow: hidden;
}
</style>
