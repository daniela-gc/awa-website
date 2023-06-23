<template>
  <!-- Staff's Highlight - start -->
  <section
    class="w-full flex flex-col lg:flex-row items-center justify-items-center justify-center lg:justify-evenly py-16 px-3 lg:px-10 xl:px-24"
  >
    <div class="w-full">
      <h2 class="text-primary font-display text-center text-3xl md:text-4xl mb-7 lg:mb-10">
        Staff's Portrait Highlight
      </h2>
      <h3 class="text-2xl lg:text-3xl font-bold text-gray-600 text-center mb-2 lg:mb-4">
        {{ staffPortraitHighlight.petName }} by {{ staffPortraitHighlight.artistName }}
      </h3>
      <div class="text-center text-gray-500 mb-8">
        Check out {{ staffPortraitHighlight.artistName }} at
        <a
          :href="staffPortraitHighlight.socialMediaLink"
          target="_blank"
          class="underline hover:text-primary transition-colors"
          >@{{ staffPortraitHighlight.socialMediaHandler }}</a
        >
      </div>
    </div>
    <div class="w-full flex items-center justify-center">
      <a :href="staffPortraitHighlight.socialMediaLink" target="_blank">
        <nuxt-img
          format="webp"
          sizes="xs:100vw md:500px"
          placeholder
          :src="staffPortraitHighlight.featuredImage"
          :alt="staffPortraitHighlight.artistName"
          loading="lazy"
          class="w-auto object-scale-down object-center otm-image"
        />
      </a>
    </div>
  </section>
  <!-- Staff's Highlight - end -->
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component
export default class StaffPortraitHighlight extends Vue {
  @Prop({ required: true, type: Object }) readonly staffPortraitHighlight!: array;
}
</script>

<style lang="css" scoped>
.otm-image {
  max-height: 550px;
}
</style>
