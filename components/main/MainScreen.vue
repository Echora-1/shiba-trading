<template>
  <div class="container main-screen">
    <div class="main-screen__left">
      <h1 class="base-title-h1">New era of SHIBA trading </h1>
      <p class="base-subtitle">Join the largest community of Shiba Traders.</p>
      <div class="main-screen__actions">
        <base-button filled class="main-screen__action-btn">
          Trade Shiba
        </base-button>
        <base-button class="main-screen__action-btn">
          Community
        </base-button>
      </div>
    </div>
    <div class="main-screen__right">
      <div class="main-screen__img-wrap">
        <img src="../../assets/img/shiba.svg" width="391" height="515" alt="dog">
        <div class="main-screen__bone">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "~/components/base/BaseButton";
export default {
  components: {BaseButton}
}
</script>

<style lang="scss" scoped>
.base-title-h1 {
  margin-bottom: 0px;
}

.base-subtitle {
  margin: 22px 0 65px;
}

.main-screen {
  display: flex;

  &__left,
  &__right {
    flex: 0 0 50%;
    max-width: 50%;
  }

  &__left {
    padding-top: 112px;
  }

  &__right {
    padding-top: 117px;
    display: flex;
    justify-content: flex-end;
    padding-right: 6px;
  }

  .main-screen__action-btn {
    min-width: 200px;

    &:not(:last-child) {
      margin-right: 25px;
    }
  }

  &__actions {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 104px;
      height: 56px;
      left: 131px;
      top: 144px;
      filter: blur(8px);
      transform: rotate(-30deg);
      background-image: url("../../assets/img/bone.png");
      background-position: center;
      background-repeat: repeat;
      background-size: contain;
    }
  }

  &__img-wrap {
    width: 391px;
    height: 515px;
    position: relative;


    &::before {
      content: "";
      position: absolute;
      width: 127px;
      height: 69px;
      left: -103px;
      top: 92px;
      transform: rotate(-15deg);
      background-image: url("../../assets/img/bone.png");
      background-position: center;
      background-repeat: repeat;
      background-size: contain;
    }

    &::after {
      content: "";
      position: absolute;
      width: 77px;
      height: 41px;
      right: -99px;
      top: 154px;
      transform: rotate(-30deg);
      background-image: url("../../assets/img/bone.png");
      background-position: center;
      background-repeat: repeat;
      background-size: contain;
    }
  }

  &__bone {
    position: absolute;
    width: 109px;
    height: 59px;
    right: 146px;
    top: 278px;
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    background-image: url("../../assets/img/bone.png");
    background-position: center;
    background-repeat: repeat;
    background-size: contain;
  }
}
</style>
