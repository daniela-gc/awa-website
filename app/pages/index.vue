<template>
  <div class="mt-12 lg:mt-20 2xl:mt-12">
    <!-- Our Mission - start -->
    <section
      class="flex flex-col lg:flex-row items-center gap-4 mt-20 2xl:mt-0 pt-10 pb-12 lg:py-16 mb-12 md:mb-12 lg:mb-16 px-10 lg:px-12 xl:px-32 2xl:px-48 bg-gray-100/60"
    >
      <div class="w-full 2xl:w-9/12 mb-4 flex justify-center lg:justify-start 2xl:pl-10">
        <img
          src="/images/uploads/awa-alt-logo-rainbow.png"
          loading="lazy"
          alt="Art While Apart alt logo"
          class="w-full max-w-xs"
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
          <a href="https://bestfriends.org/" class="text-primary hover:underline"
            >Best Friends Animal Society</a
          >,
          <a href="https://www.torontohumanesociety.com/" class="text-primary hover:underline"
            >Toronto Humane Society</a
          >,
          <a href="https://www.horseplushumanesociety.org/" class="text-primary hover:underline"
            >Horse Plus Humane Society</a
          >, and
          <a href="https://niagaradogrescue.com/" class="text-primary hover:underline"
            >Niagara Dog Rescue</a
          >, we aim to increase pet exposure in order to help connect them to their forever homes.
        </p>
      </div>
    </section>
    <!-- Our Mission - end -->

    <!-- Rescue logos - start -->
    <section class="px-10 my-20 lg:mb-32 flex justify-center">
      <div class="w-full 2xl:w-9/12 md:px-12">
        <h2
          class="font-display text-gray-700 text-3xl lg:text-4xl font-medium text-center mb-4 md:mb-10"
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
                src="/images/uploads/best-friends-logo.png"
                loading="lazy"
                alt="Best Friends logo"
                class="h-20 lg:h-24"
              />
            </a>
          </div>
          <!-- logo - end -->

          <!-- logo - start -->
          <div class="flex justify-center mb-8 sm:mb-6 lg:mb-0">
            <a href="https://www.torontohumanesociety.com/" target="_blank">
              <img
                src="/images/uploads/ths-logo.png"
                loading="lazy"
                alt="Toronto Humane Society logo"
                class="h-20 lg:h-24"
              />
            </a>
          </div>
          <!-- logo - end -->

          <!-- logo - start -->
          <div class="flex justify-center mb-8 sm:mb-0">
            <a href="https://www.horseplushumanesociety.org/" target="_blank">
              <img
                src="/images/uploads/hph-logo.png"
                loading="lazy"
                alt="Horse Plus Humane Society logo"
                class="h-20 lg:h-24"
              />
            </a>
          </div>
          <!-- logo - end -->

          <!-- logo - start -->
          <div class="flex justify-center">
            <a href="https://niagaradogrescue.com/" target="_blank">
              <img
                src="/images/uploads/niagaradogrescue-logo.png"
                loading="lazy"
                alt="Niagara Dog Rescue logo"
                class="h-20 lg:h-24"
              />
            </a>
          </div>
          <!-- logo - end -->
        </div>
      </div>
    </section>
    <!-- rescue logos - end -->

    <!-- OTMs - start -->
    <section
      class="flex flex-col lg:flex-row items-center pt-10 lg:pt-20 pb-12 lg:py-12 mb-12 md:mb-16 lg:mb-28 px-12 sm:px-16 lg:px-12 xl:px-32 2xl:px-48 bg-gray-100/60"
    >
      <div
        class="w-full mb-4 flex flex-col gap-8 lg:flex-row justify-start lg:justify-between md:pl-4 2xl:pl-20"
      >
        <!-- Content - start -->
        <div class="w-full text-gray-700 text-base lg:text-lg">
          <h2 class="font-display font-medium text-3xl lg:text-4xl mb-8 flex justify-start">
            Of The Months
          </h2>
          <p class="mb-5 max-w-lg">
            Every month we showcase exemplary artists and pieces from our community, check out
            {{ new Date().toLocaleString('en-us', { month: 'long' }) }}'s OTMs!
          </p>
          <div class="flex items-center mt-2 mb-10 lg:mb-0">
            <nuxt-link to="/portfolio" class="font-bold text-primary hover:underline mr-1"
              >Ver OTM's</nuxt-link
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="text-primary"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13.3 17.275q-.3-.3-.288-.725q.013-.425.313-.725L16.15 13H5q-.425 0-.713-.288Q4 12.425 4 12t.287-.713Q4.575 11 5 11h11.15L13.3 8.15q-.3-.3-.3-.713q0-.412.3-.712t.713-.3q.412 0 .712.3L19.3 11.3q.15.15.213.325q.062.175.062.375t-.062.375q-.063.175-.213.325l-4.6 4.6q-.275.275-.687.275q-.413 0-.713-.3Z"
              ></path>
            </svg>
          </div>
        </div>
        <!-- Content - end -->

        <!-- image - start -->
        <div class="w-full flex flex-col items-center">
          <div class="w-full max-w-md xl:max-w-lg">
            <img
              src="/images/uploads/lara-by-rivu.png"
              loading="lazy"
              alt="Art While Apart alt logo"
              class="w-full max-w-md lg:max-w-none"
            />
          </div>
          <p class="text-center mt-3 font-semibold text-gray-500">Lara by Rivu</p>
        </div>
        <!-- image - end -->
      </div>
    </section>
    <!-- OTMs - end -->

    <!-- CTA - start -->
    <div class="bg-white mb-20 lg:mb-32 lg:mx-6 px-10">
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div class="flex bg-gray-100/60 rounded-lg justify-center md:justify-start overflow-hidden">
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
                  href="#"
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

<script>
export default {
  layout: 'home',
};
</script>
