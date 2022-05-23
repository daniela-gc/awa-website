<template>
  <div class="mt-12 lg:mt-20 2xl:mt-12">
    <!-- Our Mission - start -->
    <section
      class="flex flex-col lg:flex-row items-center gap-4 pt-10 pb-12 lg:py-12 mb-12 md:mb-12 lg:mb-16 px-10 lg:px-12 xl:px-32 2xl:px-48 bg-gray-100"
    >
      <div class="w-full 2xl:w-9/12 mb-4 flex justify-center lg:justify-start 2xl:pl-10">
        <img
          src="/images/uploads/awa-alt-logo-rainbow.png"
          loading="lazy"
          alt="Art While Apart alt logo"
          class="w-full max-w-xs lg:max-w-sm"
        />
      </div>
      <div class="w-full max-w-2xl lg:max-w-none text-gray-700 text-base lg:text-lg 2xl:pr-10">
        <h2
          class="font-bold text-lg md:text-xl lg:text-2xl mb-5 flex justify-center lg:justify-start"
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
          <a href="https://bestfriends.org/" class="text-orange-500 hover:underline"
            >Best Friends Animal Society</a
          >,
          <a href="https://www.torontohumanesociety.com/" class="text-orange-500 hover:underline"
            >Toronto Humane Society</a
          >,
          <a href="https://www.horseplushumanesociety.org/" class="text-orange-500 hover:underline"
            >Horse Plus Humane Society</a
          >, and
          <a href="https://niagaradogrescue.com/" class="text-orange-500 hover:underline"
            >Niagara Dog Rescue</a
          >, we aim to increase pet exposure in order to help connect them to their forever homes.
        </p>
      </div>
    </section>
    <!-- Our Mission - end -->

    <!-- Rescue logos - start -->
    <section class="px-10 mb-20 lg:mb-32 flex justify-center">
      <div class="w-full 2xl:w-9/12 md:px-12">
        <h2 class="text-gray-700 text-xl lg:text-2xl font-bold text-center mb-4 md:mb-8">
          Our Animal Rescue Partners
        </h2>

        <div
          class="lg:h-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 content-evenly border-t border-b rounded-lg py-8"
        >
          <!-- logo - start -->
          <div class="flex justify-center mb-8 sm:mb-6 lg:mb-0">
            <a href="https://bestfriends.org/" target="_blank">
              <img
                src="/images/uploads/best-friends-logo.png"
                loading="lazy"
                alt="Best Friends logo"
                class="h-20 lg:h-28"
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
                class="h-20 lg:h-28"
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
                class="h-20 lg:h-28"
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
                class="h-20 lg:h-28"
              />
            </a>
          </div>
          <!-- logo - end -->
        </div>
      </div>
    </section>
    <!-- rescue logos - end -->

    <!-- CTA - start -->
    <div class="bg-white mb-20 lg:mb-32 lg:mx-6 px-10">
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
          <div class="flex items-center p-8 sm:p-8 lg:pl-10 bg-gray-100">
            <div class="w-full flex sm:block flex-col">
              <div class="inline-block mb-3 sm:mb-5">
                <h2
                  class="text-orange-500 text-lg sm:text-xl lg:text-2xl font-bold text-center md:text-left mb-2"
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
                  class="inline-block bg-orange-500 hover:bg-orange-600 active:bg-orange-700 focus-visible:ring ring-orange-300 text-white text-sm md:text-base font-semibold text-center rounded-md outline-none transition duration-100 px-8 py-3"
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

<style scoped>
.h-28 {
  height: 7rem;
}
</style>
