<template>
  <div>
    <!-- Title - start -->
    <div
      class="py-4 md:mt-10 md:mb-16 pb-8 md:pb-10 mb-10 mx-4 md:mx-10 xl:mx-16 2xl:mx-20 flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200"
    >
      <div class="flex flex-col md:flex-row items-center text-center md:text-left">
        <h1
          class="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-700 md:mr-24 mb-4 md:mb-0"
        >
          House Rules
        </h1>
        <p class="text-sm lg:text-base 2xl:text-lg text-gray-600 max-w-4xl sm:px-16 md:px-0">
          Monitoring and Conduct for AWA team members.
        </p>
      </div>
    </div>
    <!-- Title - end -->

    <!-- House Rules Markdown - start -->
    <div class="footer-page max-w-4xl pb-28 px-8 sm:px-10 lg:px-2">
      <div class="markdown" v-html="$md.render(houseRules)"></div>
    </div>
    <!-- House Rules Markdown - end -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta';

@Component({
  head(): MetaInfo {
    return {
      title: 'House Rules',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Our House Rules',
        },
      ],
    };
  },
})
export default class HouseRulesIndex extends Vue {
  houseRules!: HouseRules;

  async asyncData({ store }: { store: any }): Promise<any> {
    const { houseRules } = store.state;

    return {
      houseRules: houseRules[0].houseRulesText || '',
    };
  }
}
</script>

<style lang="css" scoped>
.footer-page {
  margin: 0 auto;
}
</style>
