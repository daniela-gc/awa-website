<template>
  <!-- Mentor of the month - start -->
  <div class="flex flex-row items-center justify-evenly pt-16 pb-32">
    <div>
      <a :href="mentorOfTheMonth.socialMediaLink" target="_blank">
        <img
          :alt="mentorOfTheMonth.artistName"
          class="max-w-xl"
          :src="mentorOfTheMonth.featuredImage"
        />
      </a>
    </div>
    <div>
      <h2 class="text-primary font-display text-center text-4xl mb-10">Mentor of the month</h2>
      <h3 class="text-3xl font-bold text-gray-600 text-center mb-4">
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
  </div>
  <!-- Mentor of the month - end -->
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component
export default class MentorOfTheMonth extends Vue {
  @Prop({ required: true, type: Object }) readonly mentorOfTheMonth!: array;
}
</script>
