<template>
  <section class="relative">
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Illustration -->
      <div class="absolute inset-0 -z-10 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden" aria-hidden="true">
        <div class="absolute left-1/2 -translate-x-1/2 top-0 -z-10">
          <img src="../images/glow-top.svg" class="max-w-none" width="1404" height="658" alt="Features Illustration">
        </div>
      </div>

      <!-- Blurred shape -->
      <div class="absolute top-0 -mt-24 left-0 -ml-16 blur-2xl opacity-70 pointer-events-none -z-10" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient id="bs4-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
              <stop offset="0%" stop-color="#22c55e"/>
              <stop offset="100%" stop-color="#0F172A" stop-opacity="0"/>
            </linearGradient>
          </defs>
          <path fill="url(#bs4-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)"/>
        </svg>
      </div>

      <div class="pt-16 pb-12 md:pt-32 md:pb-20">

        <!-- Section header -->
        <div class="max-w-3xl pb-12 md:pb-20">
          <h2 class="h2 bg-clip-text text-transparent bg-gradient-to-r from-neutral-200/60 via-neutral-200 to-neutral-200/60 pb-4">
            Партнёры</h2>
        </div>

        <Highlighter class="grid md:grid-cols-12 gap-6 group">
          <!-- Box #1 -->
          <div class="md:col-span-3 h-64" data-aos="fade-down">
            <HighlighterItem class="h-64">
              <div class="relative h-full bg-neutral-900 rounded-[inherit] z-20 overflow-hidden justify-between">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                  <!-- Blurred shape -->
                  <div class="absolute right-0 top-0 blur-2xl" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="342" height="393">
                      <defs>
                        <linearGradient id="bs-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                          <stop offset="0%" stop-color="#6366F1" />
                          <stop offset="100%" stop-color="#6366F1" stop-opacity="0" />
                        </linearGradient>
                      </defs>
                      <path fill="url(#bs-a)" fill-rule="evenodd" d="m104 .827 461 369-284 58z" transform="translate(0 -112.827)" opacity=".7" />
                    </svg>
                  </div>
                  <!-- Radial gradient -->
                  <div class="absolute flex items-center justify-center bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 h-full aspect-square" aria-hidden="true">
                    <div class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-70"></div>
                    <div class="absolute w-1/4 h-1/4 translate-z-0 bg-purple-400 rounded-full blur-[40px]"></div>
                  </div>

                  <!-- Image -->
                  <div class="relative w-full h-64 md:h-auto overflow-hidden p-3 mx-2 ">
                    <img src="../images/partners/center-invest.png" alt="Client 01"/>
                  </div>
                </div>
              </div>
            </HighlighterItem>
          </div>
          <div class="md:col-span-3 h-64" data-aos="fade-down">
            <HighlighterItem class="h-64">
              <div class="relative h-full bg-neutral-900 rounded-[inherit] z-20 overflow-hidden">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                  <!-- Blurred shape -->
                  <div class="absolute right-0 top-0 blur-2xl" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="342" height="393">
                      <defs>
                        <linearGradient id="bs-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                          <stop offset="0%" stop-color="#6366F1" />
                          <stop offset="100%" stop-color="#6366F1" stop-opacity="0" />
                        </linearGradient>
                      </defs>
                      <path fill="url(#bs-a)" fill-rule="evenodd" d="m104 .827 461 369-284 58z" transform="translate(0 -112.827)" opacity=".7" />
                    </svg>
                  </div>
                  <!-- Radial gradient -->
                  <div class="absolute flex items-center justify-center bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 h-full aspect-square" aria-hidden="true">
                    <div class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-70"></div>
                    <div class="absolute w-1/4 h-1/4 translate-z-0 bg-purple-400 rounded-full blur-[40px]"></div>
                  </div>

                  <!-- Image -->
                  <div class="relative w-full h-64 md:h-auto overflow-hidden p-3 mx-2">
                    <img src="../images/partners/altiora.png" class="w-max-full h-max-full" alt="Client 01"/>
                  </div>
                </div>
              </div>
            </HighlighterItem>
          </div>
        </Highlighter>
        <!-- Rows -->
<!--        <div class="divide-y divide-neutral-800">-->
<!--          &lt;!&ndash; Row &ndash;&gt;-->
<!--          <div class="py-8 first-of-type:pt-0 last-of-type:pb-0">-->
<!--            <div>-->
<!--              <div-->
<!--                  class="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-6">-->
<!--                Биг-партнёр-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="flex flex-wrap mb-2 !w-auto">-->
<!--              <div class=" p-2 mx-2">-->
<!--                <img src="../images/partners/center-invest.png" class="h-24" alt="Client 01"/>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          &lt;!&ndash; Row &ndash;&gt;-->
<!--          <div class="py-8">-->
<!--            <div>-->
<!--              <div-->
<!--                  class="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-6">-->
<!--                Другие партнеры-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="flex flex-wrap mb-2 !w-auto">-->
<!--              <div class="p-2 m-2">-->
<!--                <img src="../images/partners/altiora.png" class="h-20" alt="Client 01"/>-->
<!--              </div>-->
<!--              <div class="p-2 m-2">-->
<!--                <img src="../images/partners/axenix.png" class="h-20" alt="Client 01"/>-->
<!--              </div>-->
<!--              <div class="p-2 m-2">-->
<!--                <img src="../images/partners/beshtau.png" class="h-20" alt="Client 01"/>-->
<!--              </div>-->
<!--              <div class="p-2 m-2">-->
<!--                <img src="../images/partners/datum-soft.png" class="h-20" alt="Client 01"/>-->
<!--              </div>-->
<!--              <div class="p-2 m-2">-->
<!--                <img src="../images/partners/it.png" class="h-20" alt="Client 01"/>-->
<!--              </div>-->
<!--              <div class="p-2 m-2">-->
<!--                <img src="../images/partners/garage.png" class="h-20" alt="Client 01"/>-->
<!--              </div>-->
<!--              <div class="p-2 m-2">-->
<!--                <img src="../images/partners/eltex.png" class="h-20" alt="Client 01"/>-->
<!--              </div>-->
<!--              <div class="p-2 m-2">-->
<!--                <img src="../images/partners/forabank.png" class="h-20" alt="Client 01"/>-->
<!--              </div>-->
<!--              <div class="p-2 m-2">-->
<!--                <img src="../images/partners/iktin.png" class="h-20" alt="Client 01"/>-->
<!--              </div>-->
<!--              <div class="p-2 m-2">-->
<!--                <img src="../images/partners/it-education.png" class="h-20" alt="Client 01"/>-->
<!--              </div>-->
<!--              <div class="p-2 m-2">-->
<!--                <img src="../images/partners/kaspersky.png" class="h-20" alt="Client 01"/>-->
<!--              </div>-->
<!--              <div class="p-2 m-2">-->
<!--                <img src="../images/partners/sber.png" class="h-20" alt="Client 01"/>-->
<!--              </div>-->
<!--              <div class="p-2 m-2">-->
<!--                <img src="../images/partners/mediapark.png" class="h-20" alt="Client 01"/>-->
<!--              </div>-->
<!--              <div class="p-2 m-2">-->
<!--                <img src="../images/partners/odgetto.png" class="h-20" alt="Client 01"/>-->
<!--              </div>-->
<!--              <div class="p-2 m-2">-->
<!--                <img src="../images/partners/rostov-youth.png" class="h-20" alt="Client 01"/>-->
<!--              </div>-->
<!--              <div class="p-2 m-2">-->
<!--                <img src="../images/partners/special-university-automation.png" class="h-20" alt=""/>-->
<!--              </div>-->
<!--              <div class="p-2 m-2">-->
<!--                <img src="../images/partners/ttk.png" class="h-20" alt="Client 01"/>-->
<!--              </div>-->
<!--              <div class="p-2 m-2">-->
<!--                <img src="../images/partners/webpractik-white.png" class="h-20" alt="Client 01"/>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

      </div>
    </div>
  </section>
</template>

<script>
import Highlighter from "./Highlighter.vue";
import HighlighterItem from "./HighlighterItem.vue";

export default {
  name: 'Features04',
  components: {HighlighterItem, Highlighter}
}
</script>