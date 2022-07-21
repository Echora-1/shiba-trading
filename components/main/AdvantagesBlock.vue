<template>
  <div class="advantages-block container">
    <h2 class="base-title">ShibaTraders Advantages</h2>
    <div class="advantages-block__list">
      <div class="advantages-block__item">
        <div class="advantages-block__img">

        </div>
        <span>Feature 1</span>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </div>
      <div class="advantages-block__item">
        <div class="advantages-block__img">

        </div>
        <span>Feature 2</span>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </div>
      <div class="advantages-block__item">
        <div class="advantages-block__img">
          <div class="advantages-block__bone">

          </div>
        </div>
        <span>Feature 3</span>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.base-title {
  margin-top: 43px;
}

.advantages-block {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__list {
    display: flex;
    max-width: 970px;
    width: 100%;
    justify-content: space-between;
    gap: 20px;
  }


  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;

    span, p {
      text-align: center;
      color: #132D55;
    }

    span {
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 8px;
    }

    p {
      font-size: 18px;
      line-height: 22px;
      opacity: 0.7;
      max-width: 259px;
    }

    &:nth-child(n+2) {
      .advantages-block__img {
        &::after {
          content: "";
          position: absolute;
          top: 21px;
          left: 0;
          width: 46px;
          height: 26px;
          transform: rotate(-120deg);
          background: url("../../assets/img/bone.png") no-repeat center/contain ;
        }
      }
    }
  }

  &__img {
    width: 78px;
    height: 85px;
    position: relative;
    margin-bottom: 22px;

    &::before {
      content: "";
      position: absolute;
      bottom: 3px;
      left: 6px;
      width: 67px;
      height: 35px;
      transform: rotate(-15deg);
      background: url("../../assets/img/bone.png") no-repeat center/contain ;
    }

  }

  &__bone {
    top: 14px;
    right: -37px;
    width: 37px;
    height: 20px;
    transform: rotate(-165deg);
    background: url("../../assets/img/bone.png") no-repeat center/contain ;
    position: relative;
  }
}
</style>
