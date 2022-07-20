<template>
  <div class="mt-12 lg:mt-20 2xl:mt-12">
    <!-- Our Mission - start -->
    <section
      class="flex flex-col lg:flex-row items-center gap-4 mt-20 2xl:mt-0 pt-10 pb-12 lg:py-16 px-10 lg:px-12 xl:px-32 2xl:px-48 bg-gray-100/60"
    >
      <div class="w-full 2xl:w-9/12 mb-6 lg:mb-0 flex justify-center lg:justify-start 2xl:pl-10">
        <img
          src="~assets/images/awa_logos/awa-alt-logo-rainbow.png"
          loading="lazy"
          width="800"
          height="788"
          alt="Art While Apart alt logo"
          class="w-full max-w-xs px-6 sm:px-0"
        />
      </div>
      <div class="w-full max-w-2xl lg:max-w-none text-gray-700 text-base lg:text-lg 2xl:pr-10">
        <h2
          class="font-display font-medium text-3xl lg:text-4xl mb-7 flex justify-center lg:justify-start"
        >
          Our Mission
        </h2>
        <p class="mb-5">
          Here at AWA, we're a group of digital artists working towards reminding people that,
          despite these tough times, there's still some sunshine. We hope to spread some joy
          globally and offer an outlet for artists to draw at their own pace, while also providing
          them a place to publicize, share, and improve upon their art. In doing this, we also aim
          to spark a smile in this small act of kindness.
        </p>
        <p>
          AWA has also now expanded to include rescue pet portraits. By partnering with rescues such
          as the
          <a href="https://bestfriends.org/" target="_blank" class="text-primary hover:underline"
            >Best Friends Animal Society</a
          >,
          <a
            href="https://www.torontohumanesociety.com/"
            target="_blank"
            class="text-primary hover:underline"
            >Toronto Humane Society</a
          >,
          <a
            href="https://www.horseplushumanesociety.org/"
            target="_blank"
            class="text-primary hover:underline"
            >Horse Plus Humane Society</a
          >, and
          <a
            href="https://niagaradogrescue.com/"
            target="_blank"
            class="text-primary hover:underline"
            >Niagara Dog Rescue</a
          >, we aim to increase pet exposure in order to help connect them to their forever homes.
        </p>
      </div>
    </section>
    <!-- Our Mission - end -->

    <!-- Rescue logos - start -->
    <section class="px-10 mt-20 mb-24 lg:mt-28 lg:mb-36 flex justify-center">
      <div class="w-full 2xl:w-9/12 md:px-12">
        <h2
          class="font-display text-gray-700 text-3xl lg:text-4xl font-medium text-center mb-5 md:mb-10"
        >
          Our Animal Rescue Partners
        </h2>

        <div
          class="lg:h-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 content-evenly border-t border-b py-8"
        >
          <!-- logo - start -->
          <div class="flex justify-center mb-8 sm:mb-6 lg:mb-0">
            <a href="https://bestfriends.org/" target="_blank">
              <img
                src="~assets/images/rescue_logos/best-friends-logo.png"
                loading="lazy"
                alt="Best Friends logo"
                class="w-auto h-20 max-h-20 lg:h-24 lg:max-h-24"
              />
            </a>
          </div>
          <!-- logo - end -->

          <!-- logo - start -->
          <div class="flex justify-center mb-8 sm:mb-6 lg:mb-0">
            <a href="https://www.torontohumanesociety.com/" target="_blank">
              <img
                src="~assets/images/rescue_logos/ths-logo.png"
                loading="lazy"
                alt="Toronto Humane Society logo"
                class="w-auto h-20 max-h-20 lg:h-24 lg:max-h-24"
              />
            </a>
          </div>
          <!-- logo - end -->

          <!-- logo - start -->
          <div class="flex justify-center mb-8 sm:mb-0">
            <a href="https://www.horseplushumanesociety.org/" target="_blank">
              <img
                src="~assets/images/rescue_logos/hph-logo.png"
                loading="lazy"
                alt="Horse Plus Humane Society logo"
                class="w-auto h-20 max-h-20 lg:h-24 lg:max-h-24"
              />
            </a>
          </div>
          <!-- logo - end -->

          <!-- logo - start -->
          <div class="flex justify-center">
            <a href="https://niagaradogrescue.com/" target="_blank">
              <img
                src="~assets/images/rescue_logos/niagaradogrescue-logo.png"
                loading="lazy"
                alt="Niagara Dog Rescue logo"
                class="w-auto h-20 max-h-20 lg:h-24 lg:max-h-24"
              />
            </a>
          </div>
          <!-- logo - end -->
        </div>
      </div>
    </section>
    <!-- rescue logos - end -->

    <!-- OTMs - start -->
    <!-- Title - start -->
    <section class="bg-primary mb-20">
      <div
        class="pt-8 pb-6 md:py-12 mx-4 md:mx-10 xl:mx-16 2xl:mx-16 flex flex-col md:flex-row md:items-center md:justify-around"
      >
        <div class="flex flex-col md:flex-row items-center text-center md:text-left">
          <h1 class="font-display text-4xl 2xl:text-5xl text-white mb-5 md:mb-0">Of The Months</h1>
          <p
            class="text-base lg:text-lg 2xl:text-xl text-white max-w-lg md:max-w-md lg:max-w-xl xl:max-w-3xl 2xl:max-w-4xl mx-2 md:mx-12 lg:px-16"
          >
            Every month we showcase exemplary artists and pieces from our community, check out
            {{ new Date().toLocaleString('en-us', { month: 'long' }) }}'s OTMs!
          </p>
          <IconArrowDown class="text-white mt-5 md:mt-0" />
        </div>
      </div>
    </section>
    <!-- Title - end -->

    <ArtistOfTheMonth :artist-of-the-month="otms.artistOfTheMonth" />

    <PieceOfTheMonth :piece-of-the-month="otms.pieceOfTheMonth" />

    <StaffHighlight :staff-highlight="otms.staffHighlight" />

    <MentorOfTheMonth :mentor-of-the-month="otms.mentorOfTheMonth" />
    <!-- OTMs - end -->

    <!-- CTA - start -->
    <div class="bg-white my-20 lg:my-28 lg:mx-6 px-3 lg:px-10">
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div class="flex bg-gray-100 rounded-lg justify-center md:justify-start overflow-hidden">
          <!-- image - start -->
          <div class="w-full md:w-7/12 lg:w-1/2 hidden md:block bg-gray-200 relative">
            <img
              src="/images/uploads/cat-photo.jpeg"
              loading="lazy"
              alt="Cat photo"
              class="w-full h-full object-cover object-center absolute inset-0"
            />
          </div>
          <!-- image - end -->

          <!-- content - start -->
          <div class="flex items-center p-8 sm:p-8 lg:pl-10">
            <div class="w-full flex sm:block flex-col">
              <div class="inline-block mb-3 sm:mb-5">
                <h2
                  class="font-display font-medium text-primary text-3xl text-center md:text-left mb-4"
                >
                  Request a pet portrait
                </h2>
                <p class="text-gray-600 text-sm lg:text-sm text-center sm:text-left mb-4">
                  Fill out our form to receive free art of your pet!
                </p>
              </div>

              <div class="text-center md:text-left">
                <a
                  href="/request_art"
                  class="inline-block bg-primary hover:bg-orange-500 active:bg-orange-500 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                  >Request Art</a
                >
              </div>
            </div>
          </div>
          <!-- content - end -->
        </div>
      </div>
    </div>
    <!-- CTA - end -->
  </div>
</template>

<script lang="ts">
import ArtistOfTheMonth from '@/components/commons/otms/ArtistOfTheMonth.vue';
import PieceOfTheMonth from '@/components/commons/otms/PieceOfTheMonth.vue';
import StaffHighlight from '@/components/commons/otms/StaffHighlight.vue';
import MentorOfTheMonth from '@/components/commons/otms/MentorOfTheMonth.vue';
import IconArrowDown from '@/components/commons/icons/IconArrowDown.vue';
import { Component, Vue } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta';

@Component({
  layout: 'home',
  components: {
    ArtistOfTheMonth,
    PieceOfTheMonth,
    StaffHighlight,
    MentorOfTheMonth,
    IconArrowDown,
  },
  head(): MetaInfo {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A collaborative effort to bring people and animals closer together through art.',
        },
      ],
    };
  },
})
export default class HomeIndex extends Vue {
  otms: Otm[] = [];

  async asyncData({ store }: { store: any }): Promise<any> {
    const { otms } = store.state;

    return {
      otms: otms[0] || [],
    };
  }
}
</script>
