<template>
  <section>
    <!-- Title - start -->
    <div
      class="py-4 md:mt-10 md:mb-16 pb-8 md:pb-10 mb-10 mx-4 md:mx-10 xl:mx-16 2xl:mx-20 flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200"
    >
      <div class="flex flex-col md:flex-row items-center text-center md:text-left">
        <h1
          class="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-700 md:mr-24 mb-4 md:mb-0"
        >
          Of The Months
        </h1>
        <p class="text-sm lg:text-base 2xl:text-lg text-gray-600 max-w-4xl sm:px-16 md:px-0">
          Every month we showcase exemplary artists and pieces from our community, check them out!
        </p>
      </div>
    </div>
    <!-- Title - end -->

    <!-- Artist of the Month - start -->
    <div class="flex flex-col justify-center items-center mb-20">
      <div class="text-center">
        <h2 class="text-primary font-display text-4xl mb-10">Artist of the Month</h2>
        <h3 class="text-3xl font-bold text-gray-600 mb-4">
          {{ otms.artistOfTheMonth.artistName }}
        </h3>
        <p class="text-gray-500 mb-10">
          Check out {{ otms.artistOfTheMonth.artistName }} at
          <a
            :href="otms.artistOfTheMonth.socialMediaLink"
            target="_blank"
            class="underline hover:text-primary transition-colors"
            >@{{ otms.artistOfTheMonth.socialMediaHandler }}</a
          >
        </p>
      </div>
      <a :href="otms.artistOfTheMonth.socialMediaLink" target="_blank">
        <img
          :alt="otms.artistOfTheMonth.artistName"
          class="max-w-lg max-h-screen"
          :src="otms.artistOfTheMonth.featuredImage"
        />
      </a>
    </div>
    <!-- Artist of the Month - end -->

    <!-- Piece of the Month - start -->
    <div class="w-full flex flex-row items-center justify-evenly py-16 bg-gray-50">
      <div>
        <a :href="otms.pieceOfTheMonth.socialMediaLink" target="_blank">
          <img
            :alt="otms.pieceOfTheMonth.artistName"
            class="max-w-lg"
            :src="otms.pieceOfTheMonth.featuredImage"
          />
        </a>
      </div>
      <div>
        <h2 class="text-primary font-display text-center text-4xl mb-10">Piece of the Month</h2>
        <h3 class="text-3xl font-bold text-gray-600 text-center mb-4">
          {{ otms.pieceOfTheMonth.artistName }} by {{ otms.pieceOfTheMonth.petName }}
        </h3>
        <p class="text-center text-gray-500 mb-8">
          Check out {{ otms.pieceOfTheMonth.artistName }} at
          <a
            :href="otms.pieceOfTheMonth.socialMediaLink"
            target="_blank"
            class="underline hover:text-primary transition-colors"
            >@{{ otms.pieceOfTheMonth.socialMediaHandler }}</a
          >
        </p>
      </div>
    </div>
    <!-- Piece of the Month - end -->

    <!-- Staff's Highlight - start -->
    <div class="flex flex-row items-center justify-evenly py-16">
      <div>
        <h2 class="text-primary font-display text-center text-4xl mb-10">Staff's Highlight</h2>
        <h3 class="text-3xl font-bold text-gray-600 text-center mb-4">
          {{ otms.staffHighlight.artistName }} by {{ otms.staffHighlight.petName }}
        </h3>
        <p class="text-center text-gray-500 mb-8">
          Check out {{ otms.staffHighlight.artistName }} at
          <a
            :href="otms.staffHighlight.socialMediaLink"
            target="_blank"
            class="underline hover:text-primary transition-colors"
            >@{{ otms.staffHighlight.socialMediaHandler }}</a
          >
        </p>
      </div>
      <div>
        <a :href="otms.staffHighlight.socialMediaLink" target="_blank">
          <img
            :alt="otms.staffHighlight.artistName"
            class="max-w-lg"
            :src="otms.staffHighlight.featuredImage"
          />
        </a>
      </div>
    </div>
    <!-- Staff's Highlight - end -->

    <!-- Mentor of the month - start -->
    <div class="flex flex-row items-center justify-evenly pt-16 pb-32 bg-gray-50">
      <div>
        <a :href="otms.mentorOfTheMonth.socialMediaLink" target="_blank">
          <img
            :alt="otms.mentorOfTheMonth.artistName"
            class="max-w-xl"
            :src="otms.mentorOfTheMonth.featuredImage"
          />
        </a>
      </div>
      <div>
        <h2 class="text-primary font-display text-center text-4xl mb-10">Mentor of the month</h2>
        <h3 class="text-3xl font-bold text-gray-600 text-center mb-4">
          {{ otms.mentorOfTheMonth.artistName }}
        </h3>
        <p class="text-center text-gray-500 mb-8">
          Check out {{ otms.mentorOfTheMonth.artistName }} at
          <a
            :href="otms.mentorOfTheMonth.socialMediaLink"
            target="_blank"
            class="underline hover:text-primary transition-colors"
            >@{{ otms.mentorOfTheMonth.socialMediaHandler }}</a
          >
        </p>
      </div>
    </div>
    <!-- Mentor of the month - end -->
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta';

@Component({
  head(): MetaInfo {
    return {
      title: 'Monthly Showcase',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Our community highlights of the month',
        },
      ],
    };
  },
})
export default class MonthlyShowcaseIndex extends Vue {
  otms: Otm[] = [];

  async asyncData({ store }: { store: any }): Promise<any> {
    const { otms } = store.state;

    return {
      otms: otms[0] || [],
    };
  }
}
</script>
