<template>
  <!-- Piece of the Month - start -->
  <div class="w-full flex flex-row items-center justify-evenly py-16 bg-gray-50">
    <div>
      <a :href="pieceOfTheMonth.socialMediaLink" target="_blank">
        <img
          :alt="pieceOfTheMonth.artistName"
          class="max-w-lg"
          :src="pieceOfTheMonth.featuredImage"
        />
      </a>
    </div>
    <div>
      <h2 class="text-primary font-display text-center text-4xl mb-10">Piece of the Month</h2>
      <h3 class="text-3xl font-bold text-gray-600 text-center mb-4">
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
  </div>
  <!-- Piece of the Month - end -->
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component
export default class PieceOfTheMonth extends Vue {
  @Prop({ required: true, type: Object }) readonly pieceOfTheMonth!: array;
}
</script>
