<template>
  <div class="token-block container">
    <div class="token-block__left">
      <h2 class="base-title">Token</h2>
      <p class="base-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div class="token-block__statistics">
        <div class="token-block__statistics-item">
          <p>1,000,000</p>
          <span>Total Supply</span>
        </div>
        <div class="token-block__statistics-item">
          <p>350,000</p>
          <span>Liquidity Provision</span>
        </div>
        <div class="token-block__statistics-item">
          <p>350,000</p>
          <span>Initial Liquidity</span>
        </div>
        <div class="token-block__statistics-item">
          <p>300,000</p>
          <span>Marketing</span>
        </div>
      </div>
    </div>
    <div class="token-block__right">
      <div class="token-block__img-wrap">
        <img src="../../assets/img/token/shiba-dark.svg" v-show="isDarkTheme" width="405" height="398" class="token-block__img" alt="shiba">
        <img src="../../assets/img/token/shiba.svg" v-show="!isDarkTheme" width="405" height="398" class="token-block__img" alt="shiba">
        <div class="token-block__token"></div>
        <div class="token-block__token-small"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default  {
  computed: {
    ...mapGetters({
      isDarkTheme: 'isDarkTheme',
    }),
  },
}
</script>

<style lang="scss" scoped>
.base-title {
  margin-bottom: 25px;
}

.base-text {
  margin-bottom: 43px;
}

.token-block {
  display: flex;

  &__left,
  &__right {
    flex: 0 0 50%;
    max-width: 50%;
  }

  &__left {
    padding-top: 4px;
    padding-left: 26px;
  }

  &__right {
    display: flex;
    justify-content: center;
    padding-left: 50px;
    padding-top: 59px;
  }

  &__statistics {
    display: flex;
    flex-wrap: wrap;
    max-width: 459px;
    width: 100%;
  }

  &__statistics-item {
    width: 50%;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;

    p {
      margin: 0;
    }

    span {
      font-weight: 400;
    }


    &:nth-child(n - 2) {
      margin-bottom: 32px;
    }
  }

  &__img-wrap {
    max-width: 405px;
    max-height: 398px;
    width: 100%;
    height: 100%;
  }

  &__img {
    width: 100%;
    height: 100%;
  }

  &__token {
    position: relative;
    top: -123%;
    left: -15%;
    max-width: 25.6%;
    max-height: 26.05%;
    transform: rotate(-15deg);
    width: 100%;
    height: 100%;
    background-image: url("../../assets/img/token/token.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }


  &__token-small {
    position: relative;
    top: -90%;
    right: -93%;
    max-width: 19%;
    max-height: 19.37%;
    transform: rotate(45deg);
    width: 100%;
    height: 100%;
    background-image: url("../../assets/img/token/token-small.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
}
</style>
