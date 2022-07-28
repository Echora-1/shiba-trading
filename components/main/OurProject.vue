<template>
  <div :class="['container our-project', {'our-project--dark': isDarkTheme}]">
    <div class="our-project__left">
      <div class="our-project__img-wrap">
        <img
          v-show="isDarkTheme"
          src="../../assets/img/our-project/shiba-dark.svg"
          width="383"
          height="342"
          class="our-project__img"
          alt="shiba"
        />
        <img
          v-show="!isDarkTheme"
          src="../../assets/img/our-project/shiba.svg"
          width="383"
          height="342"
          class="our-project__img"
          alt="shiba"
        />
        <div class="our-project__bg"></div>
        <div class="our-project__bg-small"></div>
        <div class="our-project__bone"></div>
        <div class="our-project__bone-small"></div>
      </div>
    </div>
    <div class="our-project__right">
      <h2 class="base-title">Our Project & Ecosystem</h2>
      <p class="base-text">
        There is hardly any person today who has not heard of cryptocurrency and
        over 300 million are already active users. The purpose of Shiba Traders
        is to create an environment that supports the development and access of
        crypto easy in everyday life.
      </p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {

  computed: {
    ...mapGetters({
      isDarkTheme: 'isDarkTheme',
    }),
  },
}
</script>

<style lang="scss" scoped>
.base-title {
  max-width: 400px;
  margin: 45px 0 22px;
}

.base-text {
  opacity: 0.7;
}

.our-project {
  display: flex;

  &__left,
  &__right {
    flex: 0 0 50%;
    max-width: 50%;
    position: relative;
    z-index: 1;
  }

  &__left {
    padding-top: 63px;
    padding-left: 30px;
  }

  &__right {
    padding-left: 4px;
  }

  &__img-wrap,
  &__img-inner-wrap {
    max-width: 383px;
    max-height: 342px;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  &__img-inner-wrap {
  }

  &__bg {
    position: relative;
    max-width: 84.33%;
    max-height: 79.5%;
    width: 100%;
    height: 100%;
    left: 6px;
    background: url('../../assets/img/our-project/bg.svg') no-repeat
      center/contain;
    top: -324px;
    z-index: -1;
  }

  &__bg-small {
    position: relative;
    max-width: 26.37%;
    max-height: 24.85%;
    width: 100%;
    height: 100%;
    background: url('../../assets/img/our-project/bg-small.svg') no-repeat
      center/contain;
    z-index: -1;
    left: 90%;
    top: -202%;
  }

  &__bone {
    position: relative;
    max-width: 27.67%;
    max-height: 16.66%;
    width: 100%;
    height: 100%;
    left: -6%;
    top: -207%;
    background-image: url("../../assets/img/bone.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  &__bone-small {
    position: relative;
    max-width: 20.10%;
    max-height: 11.98%;
    width: 100%;
    height: 100%;
    left: 85%;
    top: -182%;
    transform: rotate(-45deg);
    background-image: url("../../assets/img/bone.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  &__img {
    width: 100%;
    height: 100%;
  }

  &--dark {
    .our-project__bg,
    .our-project__bg-small {
      opacity:  0.35;
    }
  }
}
</style>
