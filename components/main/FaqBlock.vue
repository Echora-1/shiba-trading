<template>
  <div class="faq-block container">
    <h2 class="base-title">Frequently Asked Questions</h2>
    <div class="faq-block__list">
      <base-accordion
        v-for="(item, index) in $t('questions')"
        :key="index"
        :content="item"
        class="faq-block__accordion"
      />
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "questions":[
      {
        "title":"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "text":[
          "Answer."
        ]
      },
      {
        "title":"Lorem ipsum dolor sit amet, consectetur adipiscing eli",
        "text":[
          "Answer."
        ]
      },
      {
        "title":"Lorem ipsum dolor sit amet, consectetur adipiscing el",
        "text":[
          "Answer."
        ]
      },
      {
        "title":"Lorem ipsum dolor sit amet, consectetur adipiscing e",
        "text":[
          "Answer."
        ]
      },
      {
        "title":"Lorem ipsum dolor sit amet, consectetur adipiscing",
        "text":[
          "Answer."
        ]
      }
    ]
  }
}
</i18n>

<script>
import BaseAccordion from "@/components/base/BaseAccordion";
export default {
  components: {BaseAccordion}
}
</script>

<style lang="scss" scoped>
.base-title {
  margin-bottom: 35px;
}

.faq-block {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__list {
    max-width: 880px;
    width: 100%;
  }

  &__accordion {
    width: 100%;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
}
</style>
