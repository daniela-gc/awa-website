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
                <img
                  :src="staffMember.featuredImage"
                  :alt="staffMember.title"
                  loading="lazy"
                  class="mb-1 h-auto"
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
        <Pagination v-if="totalPages > 1" :current-page="currentPage" :total-pages="totalPages" />
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
                <img
                  :alt="artist.title"
                  class="h-auto mb-1"
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
        <Pagination v-if="totalPages > 1" :current-page="currentPage" :total-pages="totalPages" />
      </div>
      <!-- Artist tab content - end -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta';

const Pagination = () => import('@/components/commons/pagination.vue');

@Component({
  components: {
    Pagination,
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
  currentPage!: number;

  totalPages!: number;

  staffMembers: StaffMember[] = [];

  artists: Artist[] = [];

  staffTabIsActive = true;

  toggleActiveTab(tab: string): void {
    this.staffTabIsActive = tab === 'staff';
  }

  async asyncData({ params, store }: { params: any; store: any }): Promise<any> {
    const page: number = params.page ? parseInt(params.page, 10) : 1;
    const { perPage }: { perPage: number } = store.state;
    const range = page * perPage;

    const staffMembers = store.state.staffMembers.filter((staffMember, index) => {
      const indexPage = index + 1;
      return range - perPage < indexPage && indexPage <= range;
    });

    // Sort staff members alphabetically. If a member doesn't have position (undefined), it's placed last
    staffMembers.sort(
      ({ position: a }, { position: b }) =>
        (a === undefined) - (b === undefined) || +(a > b) || -(a < b)
    );

    const artists = store.state.artists.filter((artist, index) => {
      const indexPage = index + 1;
      return range - perPage < indexPage && indexPage <= range;
    });

    // Sort artists alphabetically. If an artist doesn't have position (undefined), it's placed last
    artists.sort(
      ({ position: a }, { position: b }) =>
        (a === (undefined || '')) - (b === (undefined || '')) || +(a > b) || -(a < b)
    );

    return {
      currentPage: page,
      totalPages: Math.ceil(
        (store.state.staffMembers.length + store.state.artists.length) / perPage
      ),
      staffMembers: staffMembers || [],
      artists: artists || [],
    };
  }
}
</script>
