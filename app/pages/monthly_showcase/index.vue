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
        <div class="text-gray-500 mb-10">
          Check out {{ otms.artistOfTheMonth.artistName }} at
          <a
            :href="otms.artistOfTheMonth.socialMediaLink"
            target="_blank"
            class="underline hover:text-primary transition-colors"
            >@{{ otms.artistOfTheMonth.socialMediaHandler }}</a
          >
        </div>
      </div>

      <!-- Artist of the Month Slider - start -->
      <div class="px-8 image-slider text-gray-400">
        <agile
          :nav-buttons="true"
          :dots="true"
          :fade="true"
          :center-mode="true"
          :autoplay="true"
          :autoplay-speed="2500"
          :speed="350"
          :pause-on-dots-hover="true"
          timing="ease-in-out"
        >
          <div
            v-for="(piece, pieceIndex) in otms.artistOfTheMonth.pieces"
            :key="pieceIndex"
            class="slide flex items-center justify-center justify-items-center text-primary max-h-screen mb-6"
          >
            <img
              :src="piece.featuredImage"
              :alt="otms.artistOfTheMonth.artistName"
              class="object-scale-down slider-image flex items-center justify-center"
            />
          </div>
          <template slot="prevButton"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="text-gray-400"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15.125 21.1L6.7 12.7q-.15-.15-.212-.325q-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L9.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"
              ></path></svg
          ></template>
          <template slot="nextButton"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="text-gray-400"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.15 21.1q-.375-.375-.375-.888q0-.512.375-.887L14.475 12l-7.35-7.35q-.35-.35-.35-.875t.375-.9q.375-.375.888-.375q.512 0 .887.375l8.4 8.425q.15.15.213.325q.062.175.062.375t-.062.375q-.063.175-.213.325L8.9 21.125q-.35.35-.862.35q-.513 0-.888-.375Z"
              ></path></svg
          ></template>
        </agile>
      </div>
      <!-- Artist of the Month Slider - end -->
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
          {{ otms.pieceOfTheMonth.petName }} by {{ otms.pieceOfTheMonth.artistName }}
        </h3>
        <div class="text-center text-gray-500 mb-8">
          Check out {{ otms.pieceOfTheMonth.artistName }} at
          <a
            :href="otms.pieceOfTheMonth.socialMediaLink"
            target="_blank"
            class="underline hover:text-primary transition-colors"
            >@{{ otms.pieceOfTheMonth.socialMediaHandler }}</a
          >
        </div>
      </div>
    </div>
    <!-- Piece of the Month - end -->

    <!-- Staff's Highlight - start -->
    <div class="flex flex-row items-center justify-evenly py-16">
      <div>
        <h2 class="text-primary font-display text-center text-4xl mb-10">Staff's Highlight</h2>
        <h3 class="text-3xl font-bold text-gray-600 text-center mb-4">
          {{ otms.staffHighlight.petName }} by {{ otms.staffHighlight.artistName }}
        </h3>
        <div class="text-center text-gray-500 mb-8">
          Check out {{ otms.staffHighlight.artistName }} at
          <a
            :href="otms.staffHighlight.socialMediaLink"
            target="_blank"
            class="underline hover:text-primary transition-colors"
            >@{{ otms.staffHighlight.socialMediaHandler }}</a
          >
        </div>
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
        <div class="text-center text-gray-500 mb-8">
          Check out {{ otms.mentorOfTheMonth.artistName }} at
          <a
            :href="otms.mentorOfTheMonth.socialMediaLink"
            target="_blank"
            class="underline hover:text-primary transition-colors"
            >@{{ otms.mentorOfTheMonth.socialMediaHandler }}</a
          >
        </div>
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

<style lang="css">
.image-slider {
  max-width: 900px;
  width: 100%;
}

.slider-image {
  height: 600px;
  width: 100%;
}

.agile__dot {
  margin: 0 10px;
}

.agile__dot button {
  background-color: #c1c1c1;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 12px;
  width: 12px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
}
</style>
