<template>
  <header class="container">
    <div class="base-header">
      <nuxt-link :to="localePath('/')">
        <icon-logo />
      </nuxt-link>
      <ul class="base-header__nav">
        <li
          class="base-header__link"
          v-for="(link, index) in $t('links')"
          :key="index"
        >
          <nuxt-link :to="localePath(link.url)"> {{ link.name }}</nuxt-link>
        </li>
      </ul>
      <button class="base-header__theme" @click="toggleTheme">
        <icon-solar  v-if="isDarkTheme"/>
        <icon-theme  v-else/>
      </button>
      <nuxt-link :to="localePath('/')">
        <base-button class="base-header__sign-up"> Sign Up </base-button>
      </nuxt-link>
    </div>
  </header>
</template>

<i18n>
{
  "en": {
    "links": [ { "name": "Home", "url": "/" }, { "name": "About", "url": "/" }, { "name": "Features", "url": "/" }, { "name": "How to Trade", "url": "/" }, { "name": "FAQ", "url": "/" }]
  },
  "ch": {
    "links": [ { "name": "Home", "url": "/" }, { "name": "About", "url": "/" }, { "name": "Features", "url": "/" }, { "name": "How to Trade", "url": "/" }, { "name": "FAQ", "url": "/" }]
  },
  "tur": {
    "links": [ { "name": "Home", "url": "/" }, { "name": "About", "url": "/" }, { "name": "Features", "url": "/" }, { "name": "How to Trade", "url": "/" }, { "name": "FAQ", "url": "/" }]
  }
}
</i18n>

<script>
import {mapActions, mapGetters} from 'vuex';
import IconLogo from '~/components/icon/IconLogo'
import BaseButton from '~/components/base/BaseButton'
import IconTheme from "~/components/icon/IconTheme";
import IconSolar from "@/components/icon/IconSolar";
export default {
  components: {IconSolar, IconTheme, BaseButton, IconLogo },

  computed: {
    ...mapGetters({
      isDarkTheme: "isDarkTheme"
    })
  },

  methods: {
    ...mapActions({
      toggleTheme: 'toggleTheme'
    })
  },
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  z-index: 10;
  max-width: 1293px;
}

.base-header {
  display: flex;
  align-items: center;
  min-height: 45px;
  position: fixed;
  top: 36px;
  transform: translateX(-24px);
  width: 100%;
  max-width: 1299px;

  &__nav {
    margin: 0 0 0 auto;
    list-style: none;
    padding-left: 0;
    display: flex;
  }

  &__link {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;

    &:not(:first-child) {
      margin-left: 54px;
    }
  }

  &__theme {
    background: transparent;
    border: none;
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-left: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  button.base-header__sign-up {
    margin-left: 52px;
    min-height: 42px;
    font-size: 16px;
    line-height: 20px;
    padding: 10px 13px;
    min-width: 98px;
  }
}
</style>
