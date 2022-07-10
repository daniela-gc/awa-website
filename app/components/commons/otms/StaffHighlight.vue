<template>
  <!-- Staff's Highlight - start -->
  <div class="flex flex-row items-center justify-evenly py-16 bg-gray-50">
    <div>
      <h2 class="text-primary font-display text-center text-4xl mb-10">Staff's Highlight</h2>
      <h3 class="text-3xl font-bold text-gray-600 text-center mb-4">
        {{ staffHighlight.petName }} by {{ staffHighlight.artistName }}
      </h3>
      <div class="text-center text-gray-500 mb-8">
        Check out {{ staffHighlight.artistName }} at
        <a
          :href="staffHighlight.socialMediaLink"
          target="_blank"
          class="underline hover:text-primary transition-colors"
          >@{{ staffHighlight.socialMediaHandler }}</a
        >
      </div>
    </div>
    <div>
      <a :href="staffHighlight.socialMediaLink" target="_blank">
        <img
          :alt="staffHighlight.artistName"
          class="max-w-lg"
          :src="staffHighlight.featuredImage"
        />
      </a>
    </div>
  </div>
  <!-- Staff's Highlight - end -->
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component
export default class StaffOfTheMonth extends Vue {
  @Prop({ required: true, type: Object }) readonly staffHighlight!: array;
}
</script>
