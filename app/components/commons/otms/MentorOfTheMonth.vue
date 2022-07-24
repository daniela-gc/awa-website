<template>
  <!-- Mentor of the month - start -->
  <section
    class="w-full flex flex-col-reverse lg:flex-row items-center justify-center justify-items-center lg:justify-evenly py-16 px-3 lg:px-10 xl:px-24 bg-gray-50"
  >
    <div class="w-full flex items-center justify-center">
      <a :href="mentorOfTheMonth.socialMediaLink" target="_blank">
        <nuxt-img
          sizes="xs:100vw md:500px"
          placeholder
          loading="lazy"
          :src="mentorOfTheMonth.featuredImage"
          :alt="mentorOfTheMonth.artistName"
          class="w-auto object-scale-down object-center otm-image"
        />
      </a>
    </div>
    <div class="w-full">
      <h2 class="text-primary font-display text-center text-3xl md:text-4xl mb-7 lg:mb-10">
        Mentor of the month
      </h2>
      <h3 class="text-2xl lg:text-3xl font-bold text-gray-600 text-center mb-2 lg:mb-4">
        {{ mentorOfTheMonth.artistName }}
      </h3>
      <div class="text-center text-gray-500 mb-8">
        Check out {{ mentorOfTheMonth.artistName }} at
        <a
          :href="mentorOfTheMonth.socialMediaLink"
          target="_blank"
          class="underline hover:text-primary transition-colors"
          >@{{ mentorOfTheMonth.socialMediaHandler }}</a
        >
      </div>
    </div>
  </section>
  <!-- Mentor of the month - end -->
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component
export default class MentorOfTheMonth extends Vue {
  @Prop({ required: true, type: Object }) readonly mentorOfTheMonth!: array;
}
</script>

<style lang="css" scoped>
.otm-image {
  max-height: 550px;
}
</style>
