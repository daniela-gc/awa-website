<template>
  <!-- Piece of the Month - start -->
  <section
    class="w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-evenly py-16 px-3 lg:px-10 xl:px-24 bg-gray-50"
  >
    <div class="w-full flex items-center justify-center">
      <a :href="pieceOfTheMonth.socialMediaLink" target="_blank">
        <img
          :src="pieceOfTheMonth.featuredImage"
          :alt="pieceOfTheMonth.artistName"
          loading="lazy"
          class="w-auto object-scale-down object-center otm-image"
        />
      </a>
    </div>
    <div class="w-full">
      <h2 class="text-primary font-display text-center text-3xl md:text-4xl mb-7 lg:mb-10">
        Piece of the Month
      </h2>
      <h3 class="text-2xl lg:text-3xl font-bold text-gray-600 text-center mb-2 lg:mb-4">
        {{ pieceOfTheMonth.petName }} by {{ pieceOfTheMonth.artistName }}
      </h3>
      <div class="text-center text-gray-500 mb-8">
        Check out {{ pieceOfTheMonth.artistName }} at
        <a
          :href="pieceOfTheMonth.socialMediaLink"
          target="_blank"
          class="underline hover:text-primary transition-colors"
          >@{{ pieceOfTheMonth.socialMediaHandler }}</a
        >
      </div>
    </div>
  </section>
  <!-- Piece of the Month - end -->
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component
export default class PieceOfTheMonth extends Vue {
  @Prop({ required: true, type: Object }) readonly pieceOfTheMonth!: array;
}
</script>

<style lang="css" scoped>
.otm-image {
  max-height: 550px;
}
</style>
