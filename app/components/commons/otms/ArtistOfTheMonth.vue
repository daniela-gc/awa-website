<template>
  <!-- Artist of the Month - start -->
  <div class="flex flex-col justify-center items-center mb-20">
    <div class="text-center">
      <h2 class="text-primary font-display text-4xl mb-8">Artist of the Month</h2>
      <h3 class="text-3xl font-bold text-gray-600 mb-4">
        {{ artistOfTheMonth.artistName }}
      </h3>
      <div class="text-gray-500 mb-8">
        Check out {{ artistOfTheMonth.artistName }} at
        <a
          :href="artistOfTheMonth.socialMediaLink"
          target="_blank"
          class="underline hover:text-primary transition-colors"
          >@{{ artistOfTheMonth.socialMediaHandler }}</a
        >
      </div>
    </div>

    <!-- Artist of the Month Slider - start -->
    <div class="px-4 lg:px-8 w-full max-w-4xl">
      <agile
        :nav-buttons="true"
        :dots="true"
        :fade="true"
        :center-mode="true"
        :autoplay="true"
        :autoplay-speed="3500"
        :speed="350"
        :pause-on-dots-hover="true"
        timing="ease-in-out"
        class="artist-slide h-full"
      >
        <div
          v-for="(piece, pieceIndex) in artistOfTheMonth.pieces"
          :key="pieceIndex"
          class="slide text-primary max-h-full mb-6"
        >
          <img
            :src="piece.featuredImage"
            :alt="artistOfTheMonth.artistName"
            class="w-full object-scale-down object-center slider-image flex items-center justify-center"
          />
        </div>
        <template slot="prevButton">
          <IconArrowLeft class="text-gray-400 hover:text-gray-500 duration-300" />
        </template>
        <template slot="nextButton">
          <IconArrowRight class="text-gray-400 hover:text-gray-500 duration-300" />
        </template>
      </agile>
    </div>
    <!-- Artist of the Month Slider - end -->
  </div>
  <!-- Artist of the Month - end -->
</template>

<script lang="ts">
import IconArrowLeft from '@/components/commons/icons/IconArrowLeft.vue';
import IconArrowRight from '@/components/commons/icons/IconArrowRight.vue';
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({
  components: {
    IconArrowLeft,
    IconArrowRight,
  },
})
export default class ArtistOfTheMonth extends Vue {
  @Prop({ required: true, type: Object }) readonly artistOfTheMonth!: array;
}
</script>

<style lang="css">
.artist-slide .slider-image {
  height: 560px;
}

.artist-slide .agile__dot {
  margin: 0 10px;
}

.artist-slide .agile__dot button {
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

.artist-slide .agile__dot--current button,
.artist-slide .agile__dot:hover button {
  background-color: #7c7c7c;
}
</style>
