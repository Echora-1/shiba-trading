<template>
  <header
    :class="[
      'base-header',
      {
        'base-header--menu-open': isShowMenu,
        'base-header--dark': isDarkTheme,
        'base-header--scroll': scroll,
        'base-header--scroll-dark': scroll && isDarkTheme,
        'base-header--menu-open-dark': isShowMenu && isDarkTheme,
      },
    ]"
  >
    <div class="container">
      <nuxt-link :to="localePath('/')">
        <icon-logo />
      </nuxt-link>
      <nav class="base-header__nav">
        <nuxt-link
          v-for="(link, index) in $t('links')"
          :key="index"
          class="base-header__link"
          :to="localePath(link.url)"
          @click.native="closeMenu"
        >
          {{ link.name }}</nuxt-link
        >
        <button class="base-header__theme" @click="toggleTheme">
          <icon-solar v-if="isDarkTheme" />
          <icon-theme v-else />
          <span v-if="isDarkTheme">Switch to Light Mode</span>
          <span v-else>Switch to Dark Mode</span>
        </button>
        <nuxt-link
          class="base-header__sign-up"
          :to="localePath('/')"
          @click.native="closeMenu"
        >
          <base-button> Sign Up </base-button>
        </nuxt-link>
      </nav>
      <menu-button
        class="base-header__menu-button"
        :active="isShowMenu"
        @click.native="toggleShowMenu"
      />
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
import { mapActions, mapGetters } from 'vuex'
import IconLogo from '~/components/icon/IconLogo'
import BaseButton from '~/components/base/BaseButton'
import IconTheme from '~/components/icon/IconTheme'
import IconSolar from '@/components/icon/IconSolar'
export default {
  components: { IconSolar, IconTheme, BaseButton, IconLogo },
  data() {
    return {
      isShowMenu: false,
      scroll: false,
    }
  },
  computed: {
    ...mapGetters({
      isDarkTheme: 'isDarkTheme',
    }),
  },

  mounted() {
    window.addEventListener('scroll', this.scrollHeader)
  },

  watch: {
    isShowMenu() {
      if (this.isShowMenu && window.innerWidth < 1001) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'visible'
      }
    },
  },

  methods: {
    ...mapActions({
      toggleTheme: 'toggleTheme',
    }),

    toggleShowMenu() {
      this.isShowMenu = !this.isShowMenu
    },

    closeMenu() {
      this.isShowMenu = false
    },

    scrollHeader() {
      if (window.scrollY >= 100) {
        this.scroll = true
      } else {
        this.scroll = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  max-width: 1293px;
  display: flex;
  padding: 10px 10px;

  @media (max-width: 1000px) {
    padding: 0 20px;
    align-items: center;
  }
}

.base-header {
  z-index: 10;
  display: flex;
  align-items: center;
  min-height: 45px;
  position: fixed;
  top: 25px;
  width: 100%;

  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-between;
  }

  &--scroll {
    top: 0;
    background: #ffffff;
  }

  &--scroll-dark {
    top: 0;
    background: #2a2933;
  }

  &--menu-open {
    background: #ffffff;

    @media (max-width: 1000px) {
      .base-header__nav {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }

  &--menu-open-dark {
    background: #2a2933;
  }

  &__nav {
    display: flex;

    @media (max-width: 1000px) {
      position: absolute;
      left: 0;
      right: 0;
      bottom: calc(65px - 100vh);
      background: #ffffff;
      padding: 30px 26px 20px;
      min-height: calc(100vh - 65px);
      opacity: 0;
      transform: translateX(200%);
      transition: transform 1s;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }

    @media (min-width: 1001px) {
      margin-left: auto;
      align-items: center;
    }

    @media (max-width: 767px) {
      padding-left: 50px;
    }
  }
  &__link {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;

    @media (min-width: 1001px) {
      &:not(:first-child) {
        margin-left: 54px;
      }
    }

    @media (max-width: 1000px) {
      font-size: 24px;
      line-height: 29px;

      &:not(:last-child) {
        margin-bottom: 36px;
      }
    }
  }

  &__theme {
    background: transparent;
    border: none;
    min-width: 20px;
    height: 20px;
    cursor: pointer;
    margin-left: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    @media (max-width: 767px) {
      align-self: center;
    }

    span {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #132d55;
      opacity: 0.6;

      @media (min-width: 1001px) {
        display: none;
      }
    }

    @media (max-width: 1000px) {
      margin: 50px 0 30px;

      svg {
        margin-right: 6px;
      }
    }
  }

  .base-header__sign-up {
    button {
      margin-left: 52px;
      min-height: 42px;
      font-size: 16px;
      line-height: 20px;
      padding: 10px 13px;
      min-width: 98px;

      @media (max-width: 1000px) {
        margin-left: 0;
        min-width: 272px;
        min-height: 60px;
      }
    }

    @media (max-width: 767px) {
      align-self: center;
    }
  }

  &__menu-button {
    margin-left: auto;
    @media (min-width: 1001px) {
      display: none;
    }
  }

  &--dark {
    .base-header__nav {
      background: #2a2933;
    }

    .base-header__theme {
      span {
        color: #ffffff;
      }
    }
  }
}
</style>
