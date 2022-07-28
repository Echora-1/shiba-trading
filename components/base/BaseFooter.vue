<template>
  <footer
    :class="['base-footer container', { 'base-footer--dark': isDarkTheme }]"
  >
    <div class="base-footer__social">
      <a href="/" target="_blank"><icon-telegram /></a>
      <a href="/" target="_blank"><icon-facebook /></a>
      <a href="/" target="_blank"><icon-twitter /></a>
    </div>
    <p class="base-footer__copyright">
      © 2022 ShibaTraders™. All Rights Reserved.
    </p>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
import IconTelegram from '@/components/icon/IconTelegram'
import IconFacebook from '@/components/icon/IconFacebook'
import IconTwitter from '@/components/icon/IconTwitter'


export default {
  components: { IconTwitter, IconFacebook, IconTelegram },

  computed: {
    ...mapGetters({
      isDarkTheme: 'isDarkTheme',
    }),
  },
}
</script>

<style lang="scss" scoped>
.base-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 94px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 223px;
    height: 354px;
    right: -8px;
    bottom: -168px;
    background: url('../../assets/img/shiba-footer.svg') no-repeat
      center/contain;
  }

  &__social {
    display: flex;
    padding-bottom: 35px;

    a {
      display: inline-flex;
      width: 27px;
      height: 27px;
      justify-content: center;
      align-items: center;
      color: #505e8c;

      &:not(:last-child) {
        margin-right: 37px;
      }
    }
  }

  &__copyright {
    font-size: 16px;
    line-height: 24px;
  }

  &--dark {

    &::before {
      background: url('../../assets/img/shiba-footer-dark.svg') no-repeat
      center/contain;
    }

    .base-footer__social {
      a {
        color: #ffffff;
      }
    }
  }
}
</style>

