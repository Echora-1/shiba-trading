<template>
  <button :class="['base-button', {'base-button--filled': filled, 'base-button--dark': isDarkTheme }]">
    <slot> </slot>
  </button>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  props: {
    filled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ...mapGetters({
      isDarkTheme: 'isDarkTheme',
    }),
  },
}
</script>

<style lang="scss" scoped>
.base-button {
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  padding: 18px 24px;
  border: 1px solid #FA9B27;
  background: transparent;
  cursor: pointer;
  min-height: 60px;
  text-align: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #132D55;

  &--filled {
    color: #FFFFFF;
    background: #FA9B27;
  }

  &--dark {
    color: #FFFFFF;
  }
}
</style>
