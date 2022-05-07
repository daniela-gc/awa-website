<template>
  <div class="px-48 mt-10">
    <!-- About us - start -->
    <section class="flex flex-col lg:flex-row gap-6 sm:gap-10 md:gap-20 mb-14 md:mb-32">
      <div class="ml-32 mr-16">
        <img
          src="/images/uploads/awa-alt-logo.png"
          loading="lazy"
          alt="Art While Apart alt logo"
          class="max-w-xs"
        />
      </div>
      <div class="mr-40 text-gray-700 text-lg">
        <p class="text-orange-500 font-bold text-lg mb-5">Our Mission</p>
        <p class="mb-5">
          Here at AWA, we're a group of digital artists working towards reminding people that,
          despite these tough times, there's still some sunshine. We hope to spread some joy
          globally and offer an outlet for artists to draw at their own pace, while also providing
          them a place to publicize, share, and improve upon their art. In doing this, we also aim
          to spark a smile in this small act of kindness.
        </p>
        <p>
          AWA has also now expanded to include rescue pet portraits. By partnering with rescues such
          as the Best Friends Animal Society, Toronto Humane Society, Horse Plus Humane Society, and
          Niagara Dog Rescue, we aim to increase pet exposure in order to help connect them to their
          forever homes.
        </p>
      </div>
    </section>
    <!-- About us - end -->
    <!-- CTA - start -->
    <section class="mb-24 px-48">
      <div class="bg-gray-200 py-8 rounded-xl">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div
            class="flex flex-col md:flex-row items-center gap-24 text-center place-content-between px-16"
          >
            <div>
              <p class="text-gray-700 text-lg font-bold">
                Fill out the form to receive a free pet portrait!
              </p>
            </div>

            <div>
              <a
                href="#"
                class="inline-block bg-orange-500 hover:bg-orange-600 active:bg-orange-700 focus-visible:ring ring-orange-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >Request Art</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- CTA - end -->
  </div>
</template>

<script>
export default {
  layout: 'home',
};
</script>
