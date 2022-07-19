<template>
  <div>
    <!-- Title - start -->
    <div
      class="py-4 lg:mt-10 lg:mb-16 pb-8 lg:pb-10 mb-10 mx-4 lg:mx-10 xl:mx-16 2xl:mx-20 flex flex-col lg:flex-row lg:items-center lg:justify-between border-b border-gray-200"
    >
      <div class="flex flex-col lg:flex-row items-center text-center lg:text-left">
        <h1
          class="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-700 lg:mr-24 mb-4 lg:mb-0"
        >
          Terms of Service
        </h1>
        <p
          class="text-sm lg:text-base 2xl:text-lg text-gray-600 max-w-xl xl:max-w-4xl sm:px-16 lg:px-0"
        >
          Please take a few moments to read our Terms of Service before you access or use the
          services.
        </p>
      </div>
    </div>
    <!-- Title - end -->

    <!-- Terms of Service Markdown - start -->
    <div class="footer-page max-w-4xl pb-28 px-8 sm:px-10 lg:px-2">
      <div class="markdown" v-html="$md.render(termsOfService)"></div>
    </div>
    <!-- Terms of Service Markdown - end -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta';

@Component({
  head(): MetaInfo {
    return {
      title: 'Terms of Service',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Our Terms of Service',
        },
      ],
    };
  },
})
export default class TermsOfServiceIndex extends Vue {
  termsOfService!: TermsOfService;

  async asyncData({ store }: { store: any }): Promise<any> {
    const { termsOfService } = store.state;

    return {
      termsOfService: termsOfService[0].termsOfServiceText || '',
    };
  }
}
</script>

<style lang="css" scoped>
.footer-page {
  margin: 0 auto;
}
</style>
