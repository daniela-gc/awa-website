<template>
  <section>
    <!-- Title - start -->
    <div
      class="py-4 md:mt-6 mb-8 pb-8 md:pb-10 mx-4 md:mx-10 xl:mx-16 2xl:mx-20 flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-300"
    >
      <div class="flex flex-col md:flex-row items-center text-center md:text-left">
        <h1
          class="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-700 md:mr-24 mb-4 md:mb-0"
        >
          Request Art
        </h1>

        <p class="text-sm lg:text-base 2xl:text-lg text-gray-600 max-w-4xl sm:px-16 md:px-0">
          Fill out our form if you're interested in receiving free digital art of your pet!
        </p>
      </div>
    </div>
    <!-- Title - end -->

    <!-- Art Examples Slider - start -->
    <div class="w-full px-4 lg:px-12 mb-12 xl:mb-16">
      <agile :options="sliderOptions">
        <div
          v-for="(art, index) in artExamples"
          :key="index"
          class="slide w-full flex items-center justify-items-center justify-evenly"
        >
          <img
            :src="art"
            :alt="art.split('/').pop()"
            class="h-48 max-h-48 md:h-54 md:max-h-54 lg:max-h-64 lg:h-64 xl:max-h-72 xl:h-72 w-full object-scale-down object-center"
          />
        </div>
      </agile>
    </div>
    <!-- Art Examples Slider - end -->

    <div
      class="flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start lg:gap-20 mb-8 mx-6 lg:mx-10"
    >
      <!-- Body - start -->
      <div
        class="flex flex-col justify-center items-center text-gray-700 text-justify leading-relaxed"
      >
        <div class="max-w-xl lg:max-w-xl">
          <h2 class="text-2xl font-bold mb-8 text-left">Digital Pet Portrait Request</h2>
          <p class="mb-6">
            If you're interested in receiving free digital art of your pet, fill out our form. It's
            recommended that you upload pictures with relatively good lighting that show your pet's
            eye color.
          </p>
          <p class="mb-6">
            You are more than welcome to provide a few images of your pet’s favorite place/toy, but
            please keep in mind that this does not guarantee that it will be included in the
            portrait. An artist may choose to use it as inspiration if they wish and, as stated
            previously, asking for specifics in the portrait is not allowed given that it is free.
          </p>
          <p class="mb-6">
            Secondly, we don't judge pets here! We will draw your cute spiders, snakes, etc. We love
            all pets and are not exclusive to the more popular ones.
          </p>
          <p class="mb-6">
            Please note that some artists may take longer than others to complete the piece, seeing
            as it's a no-stress and no-deadline environment. Pieces can take anywhere between a
            couple of weeks to a couple of months until they're ready to be sent out. Since we're
            currently a small team,
            <strong>please refrain from sending in multiple pet requests at once</strong>. After
            you've been e-mailed the art of the first request, you are more than welcome to submit a
            request for another pet you have. This also means that
            <strong>we will not be doing art of two (or more) pets together</strong> as it's too
            much work for free art.
          </p>
          <p class="mb-6">
            Lastly, the art you get will be a surprise--meaning you won't know who your artist is
            until you receive the finished work.
            <strong
              >Please keep an eye on your spam folders- the finished piece will be emailed to you
              upon completion</strong
            >
            under the title “Art While Apart- Finished Commission”.
          </p>
        </div>
      </div>
      <!-- Body - end -->

      <!-- Request Form - start -->
      <div class="flex flex-col justify-center items-center text-center mb-16 lg:mb-10 mt-2">
        <div
          class="max-w-xl block py-10 px-8 bg-white rounded-lg border border-gray-200 border-l-4 border-l-primary shadow-md"
        >
          <h2 class="font-bold text-3xl text-center mb-8 text-gray-700">
            Pet Portrait Request Form
          </h2>
          <p class="mb-8 text-gray-500">
            Fill out our form for the opportunity of receiving free digital art of your pet!
          </p>
          <div class="flex flex-row justify-center">
            <a
              href="https://forms.gle/gii27FURzSEAidXr6"
              target="_blank"
              class="inline-block bg-primary hover:bg-orange-500 active:bg-orange-500 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >Go to Request Form</a
            >
          </div>
        </div>
        <div class="mt-16 max-w-xl text-gray-600 text-justify">
          <p class="mb-8">
            Disclaimer: personal information from portrait request forms is not released or used by
            anyone but Art While Apart staff. Some information may be kept in records for
            administrative purposes.
          </p>
          <p class="underline">
            Through this consultation, AWA claims no legal or unique right to this artist and their
            art, nor the decision of the pet owner to go forth in this transaction.
          </p>
        </div>
      </div>
      <!-- Request Form - end -->
    </div>

    <div class="flex flex-col justify-center items-center mb-16">
      <div class="w-full max-w-7xl text-center">
        <hr class="border-gray-300" />
        <h2 class="text-3xl font-bold mt-12 mb-8 text-gray-700">Contact Us</h2>
        <p class="mb-2 text-lg text-gray-600">Reach us at our e-mail:</p>
        <a
          href="mailto:artwhileapart@gmail.com"
          target="_blank"
          class="text-gray-600 text-lg hover:text-primary transition-colors underline"
          >artwhileapart@gmail.com</a
        >

        <!-- social - start -->
        <div class="flex flex-col justify-center items-center mt-10">
          <div class="flex gap-4">
            <a
              href="https://www.instagram.com/art.while.apart/"
              target="_blank"
              class="text-gray-500 hover:text-gray-700 transition duration-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--bx"
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248a4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008a3.004 3.004 0 0 1 0 6.008z"
                  fill="currentColor"
                ></path>
                <circle cx="16.806" cy="7.207" r="1.078" fill="currentColor"></circle>
                <path
                  d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42a4.6 4.6 0 0 0-2.633 2.632a6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71c0 2.442 0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632a6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419a4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186c.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688a2.987 2.987 0 0 1-1.712 1.711a4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055c-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311a2.985 2.985 0 0 1-1.719-1.711a5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654c0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311a2.991 2.991 0 0 1 1.712 1.712a5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655c0 2.436 0 2.698-.043 3.654h-.011z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>

            <a
              href="https://www.facebook.com/artwhileapart"
              target="_blank"
              class="text-gray-500 hover:text-gray-700 active:text-gray-600 transition duration-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999c0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891c1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>

            <a
              href="https://www.redbubble.com/people/ArtWhileApart/"
              target="_blank"
              class="text-gray-500 hover:text-gray-700 active:text-gray-600 transition duration-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12.002 2.005L12 2.004c-5.52 0-9.996 4.475-9.996 9.995c0 5.521 4.477 9.998 9.996 9.998c5.521 0 9.996-4.475 9.996-9.997c0-5.52-4.475-9.995-9.994-9.995zm.162 13.53a.267.267 0 0 1-.174.066v.001H6.455a.268.268 0 0 1-.266-.268V8.646c0-.148.119-.268.266-.268h2.589c1.612 0 2.576.87 2.576 2.327c0 .969-.486 1.729-1.272 2.039l1.842 2.413a.269.269 0 0 1-.026.378zm3.695.068h-2.665a.268.268 0 0 1-.266-.269V8.646c0-.148.119-.267.266-.267h2.472c1.853 0 2.242 1.091 2.242 2.007c0 .529-.141.949-.421 1.258c.681.28 1.047.913 1.047 1.827c0 1.335-1.001 2.132-2.675 2.132z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>

            <a
              href="mailto:artwhileapart@gmail.com"
              target="_blank"
              class="text-gray-500 hover:text-gray-700 active:text-gray-600 transition duration-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--bx"
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223l-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044L20.002 18H4z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <!-- social - end -->
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta';

@Component({
  head(): MetaInfo {
    return {
      title: 'Request Art',
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
export default class RequestArtIndex extends Vue {
  sliderOptions = {
    navButtons: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 350,
    centerMode: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
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
        breakpoint: 1760,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  };

  artExamples = require
    .context('/app/assets/images/good_art_examples/', false)
    .keys()
    .map(require.context('/app/assets/images/good_art_examples/', false));

  sliderOptions: sliderOptions;

  artExamples: artExamples;
}
</script>
