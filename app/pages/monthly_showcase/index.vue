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
          Every month we showcase exemplary artists and pieces from our community, check out
          {{ new Date().toLocaleString('en-us', { month: 'long' }) }}'s OTMs!
        </p>
      </div>
    </div>
    <!-- Title - end -->

    <ArtistOtmSlideShow :artist-of-the-month="otms.artistOfTheMonth" />

    <PieceOfTheMonth :piece-of-the-month="otms.pieceOfTheMonth" />

    <StaffHighlight :staff-highlight="otms.staffHighlight" />

    <MentorOfTheMonth :mentor-of-the-month="otms.mentorOfTheMonth" />
  </section>
</template>

<script lang="ts">
import ArtistOtmSlideShow from '@/components/commons/otms/ArtistOtmSlideshow.vue';
import PieceOfTheMonth from '@/components/commons/otms/PieceOfTheMonth.vue';
import StaffHighlight from '@/components/commons/otms/StaffHighlight.vue';
import MentorOfTheMonth from '@/components/commons/otms/MentorOfTheMonth.vue';
import { Component, Vue } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta';

@Component({
  components: {
    ArtistOtmSlideShow,
    PieceOfTheMonth,
    StaffHighlight,
    MentorOfTheMonth,
  },
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
.artist-slide .slider-image {
  height: 600px;
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
