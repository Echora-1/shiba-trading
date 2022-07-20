<template>
  <button :class="['base-button', {'base-button--filled': filled }]">
    <slot> </slot>
  </button>
</template>

<script>
export default {
  props: {
    filled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.base-button {
  color: #132D55;
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

  &--filled {
    color: #FFFFFF;
    background: #FA9B27;
  }
}
</style>
