<template>
  <div class="bg-orange-500">
    <footer class="max-w-screen-2xl px-4 md:px-40 mx-auto pt-16">
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mb-16">
        <div class="col-span-full lg:col-span-2">
          <!-- logo - start -->
          <div class="mt-8 mb-4">
            <a
              href="/"
              class="inline-flex items-center text-gray-100 text-xl md:text-2xl font-bold"
              aria-label="logo"
            >
              Art While Apart
            </a>
          </div>
          <!-- logo - end -->

          <p class="text-gray-200 sm:pr-8 mb-6 max-w-md text-lg">
            A collaborative effor to bring people and animals closer together through art.
          </p>

          <!-- social - start -->
          <div class="flex gap-4">
            <a
              href="https://www.instagram.com/art.while.apart/"
              target="_blank"
              class="text-orange-200 hover:text-orange-100 transition duration-100"
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
              class="text-orange-200 hover:text-orange-100 active:text-gray-600 transition duration-100"
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
              class="text-orange-200 hover:text-orange-100 active:text-gray-600 transition duration-100"
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
              class="text-orange-200 hover:text-orange-100 active:text-gray-600 transition duration-100"
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
          <!-- social - end -->
        </div>

        <!-- nav - start -->
        <div class="mt-8">
          <div class="text-gray-100 font-bold tracking-widest uppercase mb-4">About Us</div>

          <nav class="flex flex-col gap-4">
            <div>
              <a
                href="#"
                class="text-gray-200 hover:text-gray-100 active:text-indigo-600 transition duration-100 hover:underline"
                >Home</a
              >
            </div>

            <div>
              <a
                href="#"
                class="text-gray-200 hover:text-gray-100 active:text-indigo-600 transition duration-100 hover:underline"
                >Portfolio</a
              >
            </div>

            <div>
              <a
                href="#"
                class="text-gray-200 hover:text-gray-100 active:text-indigo-600 transition duration-100 hover:underline"
                >Team</a
              >
            </div>

            <div>
              <a
                href="#"
                class="text-gray-200 hover:text-gray-100 active:text-indigo-600 transition duration-100 hover:underline"
                >Artist Showcase</a
              >
            </div>
          </nav>
        </div>
        <!-- nav - end -->

        <!-- nav - start -->
        <div class="mt-8">
          <div class="text-gray-100 font-bold tracking-widest uppercase mb-4">Get Involved</div>

          <nav class="flex flex-col gap-4">
            <div>
              <a
                href="#"
                class="text-gray-200 hover:text-gray-100 active:text-indigo-600 transition duration-100 hover:underline"
                >Join Us</a
              >
            </div>

            <div>
              <a
                href="#"
                class="text-gray-200 hover:text-gray-100 active:text-indigo-600 transition duration-100 hover:underline"
                >Request Art</a
              >
            </div>

            <div>
              <a
                href="#"
                class="text-gray-200 hover:text-gray-100 active:text-indigo-600 transition duration-100 hover:underline"
                >Merchandise</a
              >
            </div>

            <div>
              <a
                href="#"
                class="text-gray-200 hover:text-gray-100 active:text-indigo-600 transition duration-100 hover:underline"
                >Donate</a
              >
            </div>
          </nav>
        </div>
        <!-- nav - end -->

        <!-- image - start -->
        <div>
          <img src="/images/uploads/awa-logo.png" loading="lazy" alt="Art While Apart logo" />
        </div>
        <!-- image - end -->
      </div>

      <div class="border-t border-white opacity-25"></div>
      <div class="text-orange-100 text-sm text-center py-8">
        © 2022 - Art While Apart. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Footer extends Vue {}
</script>
