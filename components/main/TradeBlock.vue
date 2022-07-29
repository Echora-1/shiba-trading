<template>
  <div class="trade-block container">
    <div class="trade-block__left">
      <div class="trade-block__img-wrap">
        <img src="../../assets/img/phone.png" class="trade-block__img" width="246" height="630" alt="phone">
      </div>
    </div>
    <div class="trade-block__right">
      <h2 class="base-title">Trade SHIB tokens Enywhere & Enytime!</h2>
      <div>
        <base-button class="trade-block__btn">
          iOS
        </base-button>
        <base-button class="trade-block__btn">
          Android
        </base-button>
      </div>
    </div>
  </div>
</template>
<script>
import BaseButton from "@/components/base/BaseButton";
export default {
  components: {BaseButton}
}
</script>

<style lang="scss" scoped>
.base-title {
  max-width: 413px;
}

.trade-block {
  display: flex;
  align-items: center;

  &__left,
  &__right {
    flex: 0 0 50%;
    max-width: 50%;
  }

  &__left {
    display: flex;
    justify-content: center;
    padding-top: 25px;
    padding-left: 15px;
  }

  &__right {
    padding-top: 55px;
    padding-left: 5px;
    position: relative;

    &::before {
      content: "";
      width: 197px;
      height: 106px;
      top: 339px;
      right: -107px;
      position: absolute;
      background-image: url("../../assets/img/bone.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      filter: blur(8px);
      transform: rotate(-30deg);
    }
  }

  &__btn {
    min-width: 180px;

    &:first-child {
      margin-right: 27px;
    }

    @media(max-width: 1000px) {
      min-width: 150px;
    }
  }

  &__img-wrap {
    max-width: 246px;
    max-height: 630px;
    position: relative;

    &::before {
      content: "";
      width: 67px;
      height: 67px;
      position: absolute;
      top: 374px;
      left: -55px;
      transform: rotate(-30deg);
      background: url("../../assets/img/token/token-small.svg") no-repeat center/contain;
    }

    &::after {
      content: "";
      width: 130px;
      height: 130px;
      position: absolute;
      top: 173px;
      left: -187px;
      transform: rotate(30deg);
      background: url("../../assets/img/token/token-small.svg") no-repeat center/contain;
    }
  }

  &__img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
}
</style>

