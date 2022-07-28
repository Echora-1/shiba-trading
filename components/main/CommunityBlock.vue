<template>
  <div class="community-block container">
    <div class="community-block__left">
      <img src="../../assets/img/shiba-community-dark.svg" v-show="isDarkTheme" width="383" height="382" alt="shiba">
      <img src="../../assets/img/shiba-community.svg" v-show="!isDarkTheme" width="383" height="382" alt="shiba">
    </div>
    <div class="community-block__right">
      <h2 class="base-title">Community</h2>
      <p class="base-text">
        Our community grows stronger every day. Please follow our social
        platforms to get the most up-to-date, accurate SHIBTRADERS information.
      </p>
      <div class="community-block__links">
        <a href="">
          <base-button class="community-block__btn"> Twitter </base-button>
        </a>
        <a href=""> <base-button class="community-block__btn"> Telegram </base-button></a>
        <a href=""> <base-button class="community-block__btn"> Facebook </base-button></a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import BaseButton from '@/components/base/BaseButton'

export default {
  components: { BaseButton },

  computed: {
    ...mapGetters({
      isDarkTheme: 'isDarkTheme',
    }),
  },
}
</script>

<style lang="scss" scoped>
.base-title {
  margin-bottom: 23px;
}

.base-text {
  margin-bottom: 35px;
}

.community-block {
  display: flex;

  &__left,
  &__right {
    flex: 0 0 50%;
    max-width: 50%;
  }

  &__left {
    padding-left: 93px;
    padding-top: 21px;
  }

  &__right {
    padding-top: 46px;
    padding-left: 9px;
  }

  &__links {
    a:not(:last-child) {
      margin-right: 17px;
    }
  }

  &__btn {
    min-width: 133px;
  }
}
</style>
