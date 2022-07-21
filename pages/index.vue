<template>
  <div>
    <div class="wrap-main-screen">
        <main-screen />
    </div>
    <div class="wrap-our-project">
      <our-project />
    </div>
    <div class="wrap-token-block">
      <token-block />
    </div>
     <div class="wrap-trade-block">
       <trade-block />
     </div>
    <div class="wrap-advantages-block">
      <advantages-block />
    </div>
    <div class="wrap-community-block">
      <community-block />
    </div>
  </div>
</template>

// 88,33 px на одну полоску
// 530px на 6
// 1060px на 12
// 20px между 2 блоками

<script>
import http from "http"
import MainScreen from "~/components/main/MainScreen";
import OurProject from "~/components/main/OurProject";
import TokenBlock from "~/components/main/TokenBlock";
import TradeBlock from "@/components/main/TradeBlock";
import AdvantagesBlock from "@/components/main/AdvantagesBlock";
import CommunityBlock from "@/components/main/CommunityBlock";
export default {
  components: {CommunityBlock, AdvantagesBlock, TradeBlock, TokenBlock, OurProject, MainScreen},
  head() {
    return {
      title: 'Shiba Traders',
      link: [
        {
          rel: 'canonical',
          href: `http://localhost:3000${this.$route.path}`,
        },
      ],
    }
  },

  mounted() {
    setInterval(function () {
      http.get('https://app-shiba.herokuapp.com/')
    }, 300000)
  }

}
</script>

<style lang="scss" scoped>
.wrap-main-screen,
.wrap-our-project,
.wrap-token-block,
.wrap-trade-block,
.wrap-advantages-block,
.wrap-community-block {
  position: relative;
  z-index: 1;
}

.wrap-main-screen {
  padding-top: 87px;
  padding-bottom: 100px;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 843px;
    top: 0;
    right: 0;
    background-image: url("../assets/img/main-bg.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: -1;
    pointer-events: unset;
  }

  &::after {
    content: "";
    position: absolute;
    width: 155px;
    height: 83px;
    right: 153px;
    bottom: -59px;
    filter: blur(8px);
    transform: rotate(45deg);
    background-image: url("../assets/img/bone.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
}

.wrap-our-project {
  padding: 100px 0;
}

.wrap-token-block {
  padding-bottom: 100px;
}

.wrap-trade-block {
  padding-bottom: 100px;

  &::before {
    content: "";
    width: 100%;
    min-height: 100vw;
    position: absolute;
    top: 121px;
    right: 0;
    z-index: -1;
    background-image: url("../assets/img/trade-bg.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: visible;
  }
}

.wrap-advantages-block {
  padding-bottom: 100px;
}

.wrap-community-block {
  padding-bottom: 100px;
}
</style>
