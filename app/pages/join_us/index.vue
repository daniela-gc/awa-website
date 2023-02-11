<template>
  <section>
    <!-- Title - start -->
    <div
      class="py-4 md:mt-10 mb-10 md:mb-16 pb-8 md:pb-10 mx-4 md:mx-10 xl:mx-16 2xl:mx-20 flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200"
    >
      <div class="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
        <h1 class="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-700 md:mr-24 mb-4 md:mb-0">
          Join Us
        </h1>
        <p
          class="text-base 2xl:text-lg text-gray-600 max-w-2xl md:max-w-lg lg:max-w-2xl xl:max-w-4xl px-2 sm:px-16 md:px-0"
        >
          Are you a digital artist with a generous heart and some spare time? This might be the
          right place for you!
        </p>
      </div>
    </div>
    <!-- Title - end -->

    <!-- Introduction - start -->
    <div class="flex flex-col lg:flex-row justify-center mb-20 gap-12 lg:gap-4">
      <div class="flex flex-col justify-center items-center">
        <div class="px-8 text-gray-600 text-justify text-base md:text-lg">
          <p class="max-w-lg mb-4">
            <strong>Art While Apart</strong> offers digital artists a warm space to grow and work on
            their art skills. Artists are given as much time as they like to complete
            portraits--they work at their own pace. Additionally, they can take on as little or as
            many commissions as they like; if they feel satisfied after drawing one piece, they are
            by no means obligated to stick around if they don't wish to. Art pieces range from
            simple headshots to full body pieces with backgrounds, there's no limit or minimum
            placed on what can be created.
          </p>
          <p class="max-w-lg">
            So if you're looking to expand your portfolio while bringing a smile to other people's
            faces, please apply!
          </p>
        </div>
      </div>
      <!-- Application - start -->
      <div class="flex flex-col justify-center items-center px-10 lg:px-20 text-gray-700">
        <div class="max-w-xl">
          <div
            class="block py-10 px-10 bg-white rounded-lg border border-gray-200 border-l-4 border-l-primary shadow-md"
          >
            <h2 class="font-bold text-2xl md:text-3xl text-center mb-8 text-gray-700">
              <nuxt-link to="#application">Artist Application</nuxt-link>
            </h2>
            <p class="mb-8 text-gray-500 text-justify">
              If you're interested in applying, fill out our form. Please link your Instagram,
              DeviantArt, etc., and upload 3 examples of your art. In order to screen for trolls, we
              also ask that you answer some simple questions about yourself.
            </p>
            <div class="flex flex-row justify-center">
              <a
                href="https://forms.gle/NZMgygsHaxkFoejt8"
                target="_blank"
                class="inline-block bg-primary hover:bg-orange-500 active:bg-orange-500 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >Go to Application Form</a
              >
            </div>
          </div>
        </div>
      </div>
      <!-- Application - end -->
    </div>
    <!-- Introduction - end -->

    <!-- Body - start -->
    <div
      class="flex flex-col justify-center items-center px-8 lg:px-20 py-14 mb-10 text-gray-700 text-justify bg-gray-100/75"
    >
      <div class="max-w-3xl">
        <p class="text-xl font-bold mb-10 text-center">Requirements for prospective applicants</p>
        <p class="mb-8">AWA does, however, have some requirements for prospective applicants.</p>
        <p class="mb-8">
          Although AWA is a charitable service, we do still have quality standards to not only
          ensure pet owners are happy, but to also benefit our long-term goal of transitioning into
          a non-profit charity. We are seeking intermediate level, or higher, artists at this time.
          A willingness to improve is also an asset, as we are backed by a growing art community. We
          are not biased against styles- be it realism, semi-realism, stylized, or cartoon.
        </p>
        <p class="mb-8">
          When looking over the art examples provided, these are some of the components we assess:
        </p>
        <ul class="list-disc list-inside space-y-2">
          <li>
            Anatomy and proportions: does the piece show an understanding of basic anatomy and 3D
            forms?
          </li>
          <li>
            Composition: is the posing awkward, is the subject disjointed from the background?
          </li>
          <li>
            Lighting: dynamic lighting is not required, but does the lighting generally make sense-
            does it further showcase an understanding of anatomy and the 3D form?
          </li>
          <li>
            Painting Techniques: is the painting rendered to an intermediate level? Overall there is
            a difference between visible brushwork based on style choice (i.e painterly), and
            unintentionally messy brushwork. Are there blank patches in the painting, unnatural
            textures, or a high lack of textures?
          </li>
        </ul>
      </div>
    </div>

    <div
      class="flex flex-col justify-center items-center pl-12 pr-8 lg:px-20 text-gray-700 text-justify"
    >
      <div class="max-w-3xl">
        <p class="mb-8 font-bold text-lg text-center">Artwork we do NOT accept</p>
        <ul class="mb-8 list-disc space-y-2">
          <li>
            <a
              href="https://i.imgur.com/iqCBTzv.jpg"
              target="_blank"
              class="underline hover:text-primary transition-colors"
              >Filter art</a
            >
            or
            <a
              href="https://i.imgur.com/6w8vo80.jpg"
              target="_blank"
              class="underline hover:text-primary transition-colors"
              >photo-manipulations</a
            >
            of any kind. I.e. any art that is produced by manipulating, filtering or incorporating
            any part of the original photo or stock photos instead of being rendered by brushwork or
            true vector work.
          </li>
          <li>
            Traditional art, be it
            <a
              href="https://cdn.discordapp.com/attachments/713413623900536834/820805912935661578/wings_to_fly___art_trade___by_ssivo_d9dcqfm-pre.png"
              target="_blank"
              class="underline hover:text-primary transition-colors"
              >scanned</a
            >
            or
            <a
              href="https://i.imgur.com/Uup03Jt.png?1"
              target="_blank"
              class="underline hover:text-primary transition-colors"
              >regularly photographed</a
            >.
          </li>
          <li>
            Heavy reliance on color-picking and tracing is discouraged -particularly when used in
            combination, or in a way that greatly hinders growth, knowledge of proper anatomy and/or
            color theory
          </li>
        </ul>
        <p>
          See below for examples of artwork we do not accept as well as the reasoning why they would
          not be accepted. All artwork was made by Art While Apart staff when they were younger or
          purposefully for displaying what we do not allow, and was used with artist permission.
        </p>
      </div>
    </div>
    <!-- Body - end -->

    <!-- Not accepted examples - start -->
    <div class="flex flex-col justify-center items-center text-gray-600 text-justify mt-10 mb-16">
      <p class="max-w-3xl mb-4 font-bold text-gray-500">Examples of artwork we do not accept</p>
      <!-- Bad Art Examples Slider - start -->
      <div class="w-full">
        <agile
          :options="badExamplesSliderOptions"
          @after-change="(e) => (currentBadExampleSlide = e.currentSlide)"
          class="art-examples-slide px-10 lg:px-20"
        >
          <div
            v-for="(art, index) in badArtExamples"
            :key="index"
            class="slide w-full flex items-center justify-items-center justify-evenly mb-5"
          >
            <img
              :src="art"
              :alt="art.split('/').pop()"
              loading="lazy"
              class="h-80 max-h-96 md:h-54 md:max-h-54 lg:h-64 lg:max-h-64 w-auto object-cover object-center"
            />
          </div>
          <template slot="prevButton">
            <IconArrowLeft class="text-gray-400 hover:text-gray-500 duration-300" />
          </template>
          <template slot="nextButton">
            <IconArrowRight class="text-gray-400 hover:text-gray-500 duration-300" />
          </template>
          <template slot="caption">{{ badExamplesCaptions[currentBadExampleSlide] }}</template>
        </agile>
      </div>
      <!-- Bad Art Examples Slider - end -->
    </div>
    <!-- Not accepted examples - end -->

    <div class="px-10 lg:px-20 mb-16">
      <hr />
    </div>

    <div
      class="flex flex-col justify-center items-center px-8 lg:px-20 text-gray-700 text-justify mb-12"
    >
      <div class="max-w-3xl">
        <p class="mb-8 font-bold text-lg text-center">Artwork we accept</p>
        <p>
          Artists should have a solid foundation of anatomy, composition, shading, and painting
          technique. For examples of what we do accept, check out the pieces shared below.
        </p>
      </div>
    </div>

    <!-- Accepted examples - start -->
    <div class="flex flex-col justify-center items-center text-gray-600 text-justify mb-10">
      <p class="max-w-3xl mb-4 font-bold text-gray-500">Examples of artwork we accept</p>
      <!-- Good Art Examples Slider - start -->
      <div class="w-full mb-16">
        <agile
          :options="goodExamplesSliderOptions"
          class="art-examples-slide px-5 lg:px-12 2xl:px-16"
        >
          <div
            v-for="(art, index) in goodArtExamples"
            :key="index"
            class="slide w-full flex items-center justify-items-center justify-evenly mb-5"
          >
            <img
              :src="art"
              :alt="art.split('/').pop()"
              loading="lazy"
              class="h-96 max-h-96 sm:h-80 sm:max-h-80 lg:max-h-72 lg:h-72 xl:max-h-72 xl:h-72 w-full object-scale-down object-center"
            />
          </div>
          <template slot="prevButton">
            <IconArrowLeft class="text-gray-400 hover:text-gray-500 duration-300" />
          </template>
          <template slot="nextButton">
            <IconArrowRight class="text-gray-400 hover:text-gray-500 duration-300" />
          </template>
        </agile>
      </div>
      <!-- Good Art Examples Slider - end -->
    </div>
    <!-- Accepted examples - end -->
  </section>
</template>

<script lang="ts">
import IconArrowLeft from '@/components/commons/icons/IconArrowLeft.vue';
import IconArrowRight from '@/components/commons/icons/IconArrowRight.vue';
import { Component, Vue } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta';

@Component({
  components: {
    IconArrowLeft,
    IconArrowRight,
  },
  head(): MetaInfo {
    return {
      title: 'Join Us',
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
export default class JoinUsIndex extends Vue {
  badExamplesSliderOptions = {
    navButtons: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 350,
    centerMode: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  goodExamplesSliderOptions = {
    navButtons: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 350,
    centerMode: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1530,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };

  badArtExamples = require
    .context('/app/static/images/bad_art_examples/', false)
    .keys()
    .map(require.context('/app/static/images/bad_art_examples/', false));

  badExamplesCaptions = [
    'Poor lighting, anatomy, and painting technique.',
    'Poor painting technique, lighting, and anatomy.',
    'Direct paint over: shows no understanding of composition, anatomy or background. Filtered art.',
    'Poor composition and lighting.',
    'Poor painting technique, anatomy, and lighting.',
    'Poor lighting, painting technique, and anatomy.',
    'Poor anatomy, lighting, and painting technique.',
    'Poor anatomy, painting technique, and lighting.',
    'Poor painting technique, lighting, and anatomy.',
  ];

  currentBadExampleSlide = 0;

  goodArtExamples = require
    .context('/app/static/images/good_art_examples/', false)
    .keys()
    .map(require.context('/app/static/images/good_art_examples/', false));

  badExamplesSliderOptions: badExamplesSliderOptions;

  goodExamplesSliderOptions: goodExamplesSliderOptions;

  badArtExamples: goodArtExamples;

  badExamplesCaptions: badExamplesCaptions;

  goodArtExamples: goodArtExamples;

  currentBadExampleSlide: currentBadExampleSlide;
}
</script>

<style lang="css">
.art-examples-slide .agile__nav-button {
  background: transparent;
  border: none;
  cursor: pointer;
  height: 100%;
  position: absolute;
  top: -25px;
}

.art-examples-slide .agile__nav-button--prev {
  left: 16px;
}

.art-examples-slide .agile__nav-button--next {
  right: 16px;
}

.art-examples-slide .agile__caption {
  text-align: center;
  color: #78716c;
}

.art-examples-slide .slide {
  display: flex !important;
  justify-items: center !important;
  justify-content: space-evenly !important;
}
</style>
