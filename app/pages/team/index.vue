<template>
  <div class="mt-10 2xl:mt-12 mx-4 md:mx-10 xl:mx-16 2xl:mx-20">
    <!-- Tabs - start -->
    <ul class="flex border-b pb-2 mb-4">
      <li>
        <a
          href="#"
          @click="toggleActiveTab('staff')"
          aria-hidden="true"
          class="w-full text-2xl font-bold text-gray-600 px-6 py-2 my-2 hover:bg-gray-100 transition-colors duration-200"
          :class="{
            'border-b-4 border-primary focus:border-primary active': staffTabIsActive,
          }"
          >Staff</a
        >
      </li>
      <li>
        <a
          href="#"
          @click="toggleActiveTab('artist')"
          aria-hidden="true"
          class="w-full text-2xl font-bold text-gray-600 px-6 py-2 my-2 hover:bg-gray-100 transition-colors duration-200"
          :class="{
            'border-b-4 border-primary focus:border-primary active': !staffTabIsActive,
          }"
          >Artists</a
        >
      </li>
    </ul>
    <!-- Tabs - end -->

    <!-- Staff tab content - start -->
    <div class="tab-content mt-6">
      <div :class="!staffTabIsActive ? 'hidden' : 'block'">
        <p class="text-gray-600">
          Staff members organize the entire project. In addition to creating pet portraits
          themselves, staff oversee everything and complete daily maintenance duties in order to
          keep everything running smoothly.
        </p>

        <div
          class="flex flex-wrap md:-mx-4 mt-7 pb-16 justify-center md:justify-start text-center md:text-left"
        >
          <div
            v-for="(staffMember, index) in staffMembers"
            :key="index"
            class="w-full md:w-1/2 lg:w-4/12 2xl:w-1/4 my-5 md:px-4 2xl:px-10 flex flex-row justify-center"
          >
            <div class="staffMember self-start flex flex-col items-center">
              <a :href="staffMember.externalLinks[0].url" target="_blank">
                <nuxt-img
                  format="webp"
                  quality="90"
                  sizes="xs:100vw md:500px xxl:400px"
                  :src="staffMember.featuredImage"
                  :alt="staffMember.title"
                  loading="lazy"
                  class="mb-1 w-full object-cover object-center aspect-square"
                />
              </a>
              <div class="py-3 bg-white">
                <h2 class="mb-1 text-gray-600 font-bold text-lg">{{ staffMember.title }}</h2>
                <p class="mb-5 text-primary font-semibold">{{ staffMember.role }}</p>
                <p class="mb-4 text-gray-600">{{ staffMember.bio }}</p>
                <p class="mb-2">
                  <a
                    v-for="(externalLink, linkIndex) in staffMember.externalLinks"
                    :key="linkIndex"
                    :href="externalLink.url"
                  >
                    <span class="hover:underline text-primary">{{ externalLink.name }}</span>
                    <span
                      v-if="staffMember.externalLinks.length - 1 !== linkIndex"
                      class="text-gray-400"
                    >
                      |
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <mugen-scroll :handler="getStaffMembers" :should-handle="!loadingStaff">
          <div class="flex items-center justify-center mb-24" v-if="showSpinnerStaff">
            <icon-spinner />
          </div>
        </mugen-scroll>
      </div>
      <!-- Staff tab content - start -->

      <!-- Artist tab content - start -->
      <div :class="staffTabIsActive ? 'hidden' : 'block'">
        <div
          class="flex flex-wrap md:-mx-4 mt-8 pb-16 justify-center md:justify-start text-center md:text-left"
        >
          <div
            v-for="(artist, index) in artists"
            :key="index"
            class="w-full md:w-1/2 lg:w-4/12 2xl:w-1/4 my-5 md:px-4 2xl:px-10 flex flex-row justify-center"
          >
            <div class="artist self-start flex flex-col items-center">
              <a :href="artist.externalLinks[0].url" target="_blank">
                <nuxt-img
                  format="webp"
                  quality="90"
                  sizes="xs:100vw md:500px xxl:400px"
                  :alt="artist.title"
                  class="mb-1 w-full object-cover object-center aspect-square"
                  :src="artist.featuredImage"
                  loading="lazy"
                />
              </a>
              <div class="py-3 bg-white">
                <h2 class="mb-4 text-gray-600 font-bold text-lg">{{ artist.title }}</h2>
                <p class="mb-4 text-gray-600">{{ artist.bio }}</p>

                <p class="mb-2">
                  <a
                    v-for="(externalLink, linkIndex) in artist.externalLinks"
                    :key="linkIndex"
                    :href="externalLink.url"
                  >
                    <span class="hover:underline text-primary">{{ externalLink.name }}</span>
                    <span
                      v-if="artist.externalLinks.length - 1 !== linkIndex"
                      class="text-gray-400"
                    >
                      |
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <mugen-scroll :handler="getArtists" :should-handle="!loadingArtists">
          <div class="flex items-center justify-center mb-24" v-if="showSpinnerArtists">
            <icon-spinner />
          </div>
        </mugen-scroll>
      </div>
      <!-- Artist tab content - end -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta';
import MugenScroll from 'vue-mugen-scroll';
import IconSpinner from '@/components/commons/icons/IconSpinner.vue';

@Component({
  components: {
    MugenScroll,
    IconSpinner,
  },
  head(): MetaInfo {
    return {
      title: 'Our Team',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Our Team',
        },
      ],
    };
  },
})
export default class TeamIndex extends Vue {
  staffMembers: StaffMember[] = [];

  artists: Artist[] = [];

  staffTabIsActive = true;

  loadingArtists = false;

  piecesNumberArtists = 12;

  showSpinnerArtists = true;

  loadingStaff = false;

  piecesNumberStaff = 12;

  showSpinnerStaff = true;

  toggleActiveTab(tab: string): void {
    this.staffTabIsActive = tab === 'staff';
  }

  getStaffMembers(): void {
    this.loadingStaff = true;

    const allStaff = this.$store.state.staffMembers.sort(
      ({ position: a }, { position: b }) =>
        (a === undefined) - (b === undefined) || +(a > b) || -(a < b)
    );

    this.staffMembers = allStaff.filter((staffMember, index) => {
      return index + 1 <= this.piecesNumberStaff;
    });
    this.piecesNumberStaff += 12;
    if (this.piecesNumberStaff >= this.$store.state.staffMembers.length) {
      this.showSpinnerStaff = false;
    }
    this.loadingStaff = false;
  }

  getArtists(): void {
    this.loadingArtists = true;

    const allArtists = this.$store.state.artists.sort(
      ({ position: a }, { position: b }) =>
        (a === (undefined || '')) - (b === (undefined || '')) || +(a > b) || -(a < b)
    );

    this.artists = allArtists.filter((artist, index) => {
      return index + 1 <= this.piecesNumberArtists;
    });
    this.piecesNumberArtists += 12;
    if (this.piecesNumberArtists >= this.$store.state.artists.length) {
      this.showSpinnerArtists = false;
    }
    this.loadingArtists = false;
  }
}
</script>
