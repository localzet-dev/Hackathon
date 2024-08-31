<template>
  <section>
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Illustration -->
      <div class="absolute inset-0 -z-10 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden"
           aria-hidden="true">
        <div class="absolute left-1/2 -translate-x-1/2 top-0 -z-10">
          <img src="../images/glow-top.svg" class="max-w-none" width="1404" height="658" alt="Features Illustration">
        </div>
      </div>

      <div class="pt-16 pb-12 md:pt-52 md:pb-20">

        <!-- Highlighted boxes -->
        <div class="relative pb-12 md:pb-20">
          <!-- Blurred shape -->
          <div class="absolute bottom-0 -mb-20 left-1/2 -translate-x-1/2 blur-2xl opacity-50 pointer-events-none" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
              <defs>
                <linearGradient id="bs2-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                  <stop offset="0%" stop-color="#6366F1" />
                  <stop offset="100%" stop-color="#6366F1" stop-opacity="0" />
                </linearGradient>
              </defs>
              <path fill="url(#bs2-a)" fill-rule="evenodd" d="m346 898 461 369-284 58z" transform="translate(-346 -898)" />
            </svg>
          </div>
          <!-- Grid -->
          <Highlighter class="grid md:grid-cols-12 gap-6 group">
            <!-- Box #1 -->
            <div class="md:col-span-12" data-aos="fade-down">
                <div class="relative bg-neutral-950 border-neutral-900 border-2 rounded-3xl p-px overflow-hidden">
                  <div class="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0  p-6 pt-0 md:p-8 md:pr-0">

                    <!-- Content -->
                    <div class="w-7/12 order-1 md:order-none max-md:text-center" data-aos="fade-down">
                      <!-- Content #1 -->
                      <div>
                        <div
                            class="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-200 pb-3">
                          Принцип «5П»
                        </div>
                      </div>
                      <h3 class="h3 bg-clip-text text-transparent bg-gradient-to-r from-neutral-200/60 via-neutral-200 to-neutral-200/60 pb-3">
                        Хакатон - это возможность:</h3>
                      <div class="mt-3 max-w-s max-md:mx-auto space-y-1">
                        <button
                            class="flex items-center text-sm font-medium text-neutral-50 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 border-neutral-700 opacity-50">
                          <svg class="shrink-0 fill-green-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path
                                d="M2 6H0V2a2 2 0 0 1 2-2h4v2H2v4ZM16 6h-2V2h-4V0h4a2 2 0 0 1 2 2v4ZM14 16h-4v-2h4v-4h2v4a2 2 0 0 1-2 2ZM6 16H2a2 2 0 0 1-2-2v-4h2v4h4v2Z"/>
                          </svg>
                          <span>поработать над кейсами топовых российских IT-компаний</span>
                        </button>
                        <button
                            class="flex items-center text-sm font-medium text-neutral-50 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 border-neutral-700 opacity-50">
                          <svg class="shrink-0 fill-green-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path
                                d="M2 6H0V2a2 2 0 0 1 2-2h4v2H2v4ZM16 6h-2V2h-4V0h4a2 2 0 0 1 2 2v4ZM14 16h-4v-2h4v-4h2v4a2 2 0 0 1-2 2ZM6 16H2a2 2 0 0 1-2-2v-4h2v4h4v2Z"/>
                          </svg>
                          <span>побороться за призовой фонд</span>
                        </button>
                        <button
                            class="flex items-center text-sm font-medium text-neutral-50 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 border-neutral-700 opacity-50">
                          <svg class="shrink-0 fill-green-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path
                                d="M2 6H0V2a2 2 0 0 1 2-2h4v2H2v4ZM16 6h-2V2h-4V0h4a2 2 0 0 1 2 2v4ZM14 16h-4v-2h4v-4h2v4a2 2 0 0 1-2 2ZM6 16H2a2 2 0 0 1-2-2v-4h2v4h4v2Z"/>
                          </svg>
                          <span>посоревноваться с другими командами</span>
                        </button>
                        <button
                            class="flex items-center text-sm font-medium text-neutral-50 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 border-neutral-700 opacity-50">
                          <svg class="shrink-0 fill-green-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path
                                d="M2 6H0V2a2 2 0 0 1 2-2h4v2H2v4ZM16 6h-2V2h-4V0h4a2 2 0 0 1 2 2v4ZM14 16h-4v-2h4v-4h2v4a2 2 0 0 1-2 2ZM6 16H2a2 2 0 0 1-2-2v-4h2v4h4v2Z"/>
                          </svg>
                          <span>провести незабываемые 48 часов своей жизни</span>
                        </button>
                        <button
                            class="flex items-center text-sm font-medium text-neutral-50 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 border-neutral-700 opacity-50">
                          <svg class="shrink-0 fill-green-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path
                                d="M2 6H0V2a2 2 0 0 1 2-2h4v2H2v4ZM16 6h-2V2h-4V0h4a2 2 0 0 1 2 2v4ZM14 16h-4v-2h4v-4h2v4a2 2 0 0 1-2 2ZM6 16H2a2 2 0 0 1-2-2v-4h2v4h4v2Z"/>
                          </svg>
                          <span>познакомиться со своими будущими работодателями</span>
                        </button>
                      </div>
                    </div>

                    <!-- Image -->
                    <div class="w-5/12" data-aos="fade-up" data-aos-delay="100">
                      <div class="relative py-20 -mt-12">

                        <!-- Particles animation -->
                        <Particles class="absolute inset-0 -z-10" :quantity="8" :staticity="30"/>

                        <div class="flex items-center justify-center">
                          <div class="relative w-64 h-64 flex justify-center items-center">
                            <!-- Halo effect -->
                            <svg
                                class="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none blur-md"
                                width="640" height="640" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
                              <defs>
                                <linearGradient id="pulse-a" x1="50%" x2="50%" y1="100%" y2="0%">
                                  <stop offset="0%" stop-color="#16a34a"/>
                                  <stop offset="76.382%" stop-color="#22c55e"/>
                                  <stop offset="100%" stop-color="#0F172A"/>
                                </linearGradient>
                              </defs>
                              <g fill-rule="evenodd">
                                <path class="pulse" fill="url(#pulse-a)" fill-rule="evenodd"
                                      d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"></path>
                                <path class="pulse pulse-1" fill="url(#pulse-a)" fill-rule="evenodd"
                                      d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"></path>
                                <path class="pulse pulse-2" fill="url(#pulse-a)" fill-rule="evenodd"
                                      d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z"></path>
                              </g>
                            </svg>
                            <!-- Grid -->
                            <div
                                class="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[640px] h-[640px] rounded-full overflow-hidden [mask-image:_radial-gradient(black,_transparent_60%)]">
                              <div class="h-[200%] animate-endless">
                                <div
                                    class="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20"></div>
                                <div
                                    class="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.green.500)_48px,_theme(colors.green.500)_49px)]"></div>
                                <div
                                    class="absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20"></div>
                                <div
                                    class="absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.green.500)_48px,_theme(colors.green.500)_49px)]"></div>
                              </div>
                            </div>
                            <!-- Icons -->
                            <transition
                                enter-active-class="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                                enter-from-class="opacity-0 -rotate-[60deg]"
                                enter-to-class="opacity-100 rotate-0"
                                leave-active-class="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 absolute"
                                leave-from-class="opacity-100 rotate-0"
                                leave-to-class="opacity-0 rotate-[60deg]"
                            >
                              <div class="absolute">
                                <div
                                    class="relative flex items-center justify-center w-80 h-80 rounded-2xl before:absolute before:inset-0 before:rounded-2xl">
                                  <svg class="relative fill-slate-200" xmlns="http://www.w3.org/2000/svg" width="168.92703mm"
                                       height="130.50888mm" viewBox="0 0 168.92703 130.50888" version="1.1" id="svg6761">
                                    <defs>
                                      <clipPath clipPathUnits="userSpaceOnUse" id="clipPath982">
                                        <path d="M 0,4827.526 H 1794 V 0 H 0 Z" id="path980"/>
                                      </clipPath>
                                    </defs>
                                    <g id="layer1" transform="translate(-29.140059,-65.673544)">
                                      <text xml:space="preserve"
                                            style="font-variant:normal;font-weight:normal;font-stretch:normal;font-size:50.8px;font-family:'Franklin Gothic Heavy';-inkscape-font-specification:FranklinGothic-Heavy;writing-mode:lr-tb;fill:#84bc41;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
                                            id="text970" x="69.237839" y="106.37469"><tspan x="69.237839 99.006638" y="106.37469" id="tspan968" style="stroke-width:0.352778">48</tspan></text>
                                      <text xml:space="preserve"
                                            style="font-variant:normal;font-weight:normal;font-stretch:normal;font-size:29.9861px;font-family:'Franklin Gothic Heavy';-inkscape-font-specification:FranklinGothic-Heavy;writing-mode:lr-tb;fill:#84bc41;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
                                            id="text974" x="69.237839" y="128.95247"><tspan x="69.237839 86.299942 103.8718 119.55453 137.36629" y="128.95247" id="tspan972" style="stroke-width:0.352778">часов</tspan></text>
                                      <g id="g976" transform="matrix(0.35277777,0,0,-0.35277777,-420.55102,1473.4168)">
                                        <g id="g978" clip-path="url(#clipPath982)">
                                          <g id="g984" transform="translate(1287.694,3836.8442)">
                                            <path
                                                d="m 0,0 c -2.816,0 -5.107,-2.292 -5.107,-5.107 v -39.007 c 0,-2.815 2.291,-5.106 5.107,-5.106 h 8.494 c 0.175,0 0.345,-0.064 0.478,-0.179 l 10.528,-9.121 10.535,9.121 c 0.133,0.115 0.303,0.179 0.478,0.179 h 8.491 c 2.815,0 5.107,2.291 5.107,5.106 V -5.107 C 44.111,-2.292 41.819,0 39.004,0 H 30.511 C 30.336,0 30.166,0.063 30.034,0.178 L 19.5,9.299 8.968,0.178 C 8.836,0.063 8.666,0 8.491,0 Z m 19.5,-60.215 c -0.17,0 -0.341,0.059 -0.478,0.178 l -10.8,9.357 H 0 c -3.621,0 -6.566,2.946 -6.566,6.566 v 39.007 c 0,3.62 2.945,6.566 6.566,6.566 h 8.219 l 10.803,9.357 c 0.274,0.238 0.682,0.238 0.955,0 L 30.783,1.459 h 8.221 c 3.62,0 6.566,-2.946 6.566,-6.566 v -39.007 c 0,-3.62 -2.946,-6.566 -6.566,-6.566 H 30.785 L 19.977,-60.037 C 19.84,-60.156 19.67,-60.215 19.5,-60.215"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path986"/>
                                          </g>
                                          <g id="g988" transform="translate(1457.2617,3628.3259)">
                                            <path
                                                d="m 0,0 h -5.474 c -0.432,0 -0.782,0.35 -0.782,0.782 0,0.432 0.35,0.782 0.782,0.782 H 0 c 0.432,0 0.781,-0.35 0.781,-0.782 C 0.781,0.35 0.432,0 0,0"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path990"/>
                                          </g>
                                          <g id="g992" transform="translate(1380.1375,3628.3259)">
                                            <path
                                                d="m 0,0 h -11.145 c -0.433,0 -0.782,0.35 -0.782,0.782 0,0.432 0.349,0.782 0.782,0.782 H 0 c 0.432,0 0.782,-0.35 0.782,-0.782 C 0.782,0.35 0.432,0 0,0 M 20.7,0 H 9.553 C 9.121,0 8.771,0.35 8.771,0.782 c 0,0.432 0.35,0.782 0.782,0.782 H 20.7 c 0.432,0 0.782,-0.35 0.782,-0.782 C 21.482,0.35 21.132,0 20.7,0 M 41.398,0 H 30.253 c -0.432,0 -0.782,0.35 -0.782,0.782 0,0.432 0.35,0.782 0.782,0.782 h 11.145 c 0.433,0 0.782,-0.35 0.782,-0.782 C 42.18,0.35 41.831,0 41.398,0 M 62.097,0 H 50.952 C 50.52,0 50.17,0.35 50.17,0.782 c 0,0.432 0.35,0.782 0.782,0.782 h 11.145 c 0.432,0 0.782,-0.35 0.782,-0.782 C 62.879,0.35 62.529,0 62.097,0"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path994"/>
                                          </g>
                                          <g id="g996" transform="translate(1359.4387,3628.3259)">
                                            <path
                                                d="m 0,0 h -5.474 c -0.432,0 -0.782,0.35 -0.782,0.782 v 5.473 c 0,0.433 0.35,0.782 0.782,0.782 0.432,0 0.782,-0.349 0.782,-0.782 V 1.564 H 0 c 0.432,0 0.782,-0.35 0.782,-0.782 C 0.782,0.35 0.432,0 0,0"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path998"/>
                                          </g>
                                          <g id="g1000" transform="translate(1353.9651,3637.9946)">
                                            <path
                                                d="m 0,0 c -0.432,0 -0.782,0.35 -0.782,0.782 v 5.473 c 0,0.432 0.35,0.783 0.782,0.783 0.432,0 0.782,-0.351 0.782,-0.783 V 0.782 C 0.782,0.35 0.432,0 0,0"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1002"/>
                                          </g>
                                          <g id="g1004" transform="translate(1682.3779,3826.4397)">
                                            <path
                                                d="M 0,0 C -0.36,0 -0.652,0.292 -0.652,0.651 V 5.21 c 0,0.36 0.292,0.652 0.652,0.652 0.36,0 0.651,-0.292 0.651,-0.652 V 0.651 C 0.651,0.292 0.36,0 0,0"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1006"/>
                                          </g>
                                          <g id="g1008" transform="translate(1682.3779,3899.7585)">
                                            <path
                                                d="M 0,0 C -0.36,0 -0.652,0.291 -0.652,0.651 V 8.43 c 0,0.36 0.292,0.652 0.652,0.652 0.36,0 0.651,-0.292 0.651,-0.652 V 0.651 C 0.651,0.291 0.36,0 0,0"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1010"/>
                                          </g>
                                          <g id="g1012" transform="translate(1682.3779,3914.2048)">
                                            <path
                                                d="M 0,0 C -0.36,0 -0.652,0.291 -0.652,0.651 V 5.21 c 0,0.36 0.292,0.652 0.652,0.652 H 4.558 C 4.919,5.862 5.21,5.57 5.21,5.21 5.21,4.85 4.919,4.559 4.558,4.559 H 0.651 V 0.651 C 0.651,0.291 0.36,0 0,0"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1014"/>
                                          </g>
                                          <g id="g1016" transform="translate(1701.4736,3918.7637)">
                                            <path
                                                d="m 0,0 h -7.827 c -0.361,0 -0.652,0.292 -0.652,0.651 0,0.36 0.291,0.652 0.652,0.652 H 0 C 0.36,1.303 0.651,1.011 0.651,0.651 0.651,0.292 0.36,0 0,0"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1018"/>
                                          </g>
                                          <g id="g1020" transform="translate(1712.7411,3918.7637)">
                                            <path
                                                d="m 0,0 h -4.559 c -0.36,0 -0.651,0.292 -0.651,0.651 0,0.36 0.291,0.652 0.651,0.652 h 3.908 V 5.21 c 0,0.36 0.291,0.652 0.651,0.652 0.36,0 0.651,-0.292 0.651,-0.652 V 0.651 C 0.651,0.292 0.36,0 0,0"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1022"/>
                                          </g>
                                          <g id="g1024" transform="translate(1712.7411,3927.9749)">
                                            <path
                                                d="M 0,0 C -0.36,0 -0.651,0.291 -0.651,0.651 V 5.21 c 0,0.36 0.291,0.651 0.651,0.651 0.36,0 0.651,-0.291 0.651,-0.651 V 0.651 C 0.651,0.291 0.36,0 0,0"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1026"/>
                                          </g>
                                          <g id="g1028" transform="translate(1682.3779,3875.2227)">
                                            <path
                                                d="M 0,0 C -0.36,0 -0.652,0.291 -0.652,0.651 V 8.43 c 0,0.36 0.292,0.652 0.652,0.652 0.36,0 0.651,-0.292 0.651,-0.652 V 0.651 C 0.651,0.291 0.36,0 0,0"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1030"/>
                                          </g>
                                          <g id="g1032" transform="translate(1682.3779,3861.3464)">
                                            <path
                                                d="M 0,0 C -0.36,0 -0.652,0.291 -0.652,0.651 V 8.43 c 0,0.361 0.292,0.652 0.652,0.652 0.36,0 0.651,-0.291 0.651,-0.652 V 0.651 C 0.651,0.291 0.36,0 0,0"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1034"/>
                                          </g>
                                          <g id="g1036" transform="translate(1682.3779,3887.782)">
                                            <path
                                                d="M 0,0 C -0.36,0 -0.652,0.291 -0.652,0.651 V 8.43 c 0,0.36 0.292,0.652 0.652,0.652 0.36,0 0.651,-0.292 0.651,-0.652 V 0.651 C 0.651,0.291 0.36,0 0,0"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1038"/>
                                          </g>
                                          <g id="g1040" transform="translate(1682.3779,3848.5469)">
                                            <path
                                                d="M 0,0 C -0.36,0 -0.652,0.291 -0.652,0.651 V 8.43 c 0,0.36 0.292,0.652 0.652,0.652 0.36,0 0.651,-0.292 0.651,-0.652 V 0.651 C 0.651,0.291 0.36,0 0,0"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1042"/>
                                          </g>
                                          <g id="g1044" transform="translate(1682.3779,3836.2712)">
                                            <path
                                                d="M 0,0 C -0.36,0 -0.652,0.291 -0.652,0.651 V 8.43 c 0,0.36 0.292,0.652 0.652,0.652 0.36,0 0.651,-0.292 0.651,-0.652 V 0.651 C 0.651,0.291 0.36,0 0,0"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1046"/>
                                          </g>
                                          <g id="g1048" transform="translate(1373.9258,3914.7891)">
                                            <path
                                                d="m 0,0 h -5.474 c -0.432,0 -0.782,0.349 -0.782,0.782 0,0.432 0.35,0.782 0.782,0.782 H 0 c 0.432,0 0.782,-0.35 0.782,-0.782 C 0.782,0.349 0.432,0 0,0"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1050"/>
                                          </g>
                                          <g id="g1052" transform="translate(1313.7457,3914.7891)">
                                            <path
                                                d="m 0,0 h -8.947 c -0.432,0 -0.782,0.349 -0.782,0.782 0,0.432 0.35,0.782 0.782,0.782 H 0 c 0.432,0 0.782,-0.35 0.782,-0.782 C 0.782,0.349 0.432,0 0,0 M 16.617,0 H 7.669 C 7.237,0 6.887,0.349 6.887,0.782 c 0,0.432 0.35,0.782 0.782,0.782 h 8.948 c 0.432,0 0.782,-0.35 0.782,-0.782 C 17.399,0.349 17.049,0 16.617,0"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1054"/>
                                          </g>
                                          <g id="g1056" transform="translate(1297.1295,3914.7891)">
                                            <path
                                                d="m 0,0 h -5.474 c -0.432,0 -0.782,0.349 -0.782,0.782 v 5.474 c 0,0.432 0.35,0.782 0.782,0.782 0.433,0 0.782,-0.35 0.782,-0.782 V 1.564 H 0 c 0.432,0 0.782,-0.35 0.782,-0.782 C 0.782,0.349 0.432,0 0,0"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1058"/>
                                          </g>
                                          <g id="g1060" transform="translate(1291.6559,3934.8464)">
                                            <path
                                                d="m 0,0 c -0.432,0 -0.782,0.35 -0.782,0.782 v 5.474 c 0,0.432 0.35,0.782 0.782,0.782 0.432,0 0.782,-0.35 0.782,-0.782 V 0.782 C 0.782,0.35 0.432,0 0,0"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1062"/>
                                          </g>
                                          <g id="g1064" transform="translate(1666.7972,3933.2507)">
                                            <path
                                                d="m 0,0 h 80.905 c 2.513,0 4.559,2.045 4.559,4.559 v 29.623 c 0,2.514 -2.046,4.559 -4.559,4.559 H 22.42 c -2.514,0 -4.559,-2.045 -4.559,-4.559 V 15.766 c 0,-0.189 -0.082,-0.37 -0.225,-0.493 z M 80.905,-1.303 H -1.747 c -0.272,0 -0.515,0.169 -0.61,0.424 -0.096,0.255 -0.022,0.542 0.184,0.72 l 18.732,16.222 v 18.119 c 0,3.232 2.629,5.861 5.861,5.861 h 58.485 c 3.232,0 5.861,-2.629 5.861,-5.861 V 4.559 c 0,-3.232 -2.629,-5.862 -5.861,-5.862"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1066"/>
                                          </g>
                                          <g id="g1068" transform="translate(1281.7529,3988.8894)">
                                            <path
                                                d="m 0,0 c -3.018,0 -5.474,-2.456 -5.474,-5.474 v -35.715 c 0,-3.018 2.456,-5.474 5.474,-5.474 h 79.137 l -12.412,10.747 c -0.172,0.149 -0.27,0.365 -0.27,0.592 v 29.85 C 66.455,-2.456 63.999,0 60.981,0 Z M 81.234,-48.227 H 0 c -3.881,0 -7.038,3.157 -7.038,7.038 v 35.715 c 0,3.881 3.157,7.038 7.038,7.038 h 60.981 c 3.881,0 7.038,-3.157 7.038,-7.038 v -29.493 l 13.727,-11.887 c 0.248,-0.214 0.335,-0.558 0.221,-0.864 -0.114,-0.306 -0.406,-0.509 -0.733,-0.509"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1070"/>
                                          </g>
                                          <g id="g1072" transform="translate(1463.517,3657.729)">
                                            <path
                                                d="m 0,0 c -3.018,0 -5.474,-2.455 -5.474,-5.473 v -24.712 c 0,-3.018 2.456,-5.473 5.474,-5.473 h 105.917 c 3.017,0 5.473,2.455 5.473,5.473 V -5.473 C 111.39,-2.455 108.934,0 105.917,0 H 36.962 C 36.683,0 36.425,0.15 36.285,0.392 L 28.639,13.661 20.992,0.392 C 20.852,0.149 20.594,0 20.315,0 Z M 105.917,-37.222 H 0 c -3.881,0 -7.038,3.157 -7.038,7.037 v 24.712 c 0,3.88 3.157,7.037 7.038,7.037 h 19.862 l 8.1,14.054 c 0.14,0.243 0.398,0.392 0.677,0.392 0.279,0 0.538,-0.15 0.678,-0.392 L 37.415,1.564 h 68.502 c 3.88,0 7.037,-3.157 7.037,-7.037 v -24.712 c 0,-3.88 -3.157,-7.037 -7.037,-7.037"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1074"/>
                                          </g>
                                          <g id="g1076" transform="translate(1285.938,3688.0576)">
                                            <path
                                                d="m 0,0 c -3.018,0 -5.474,-2.456 -5.474,-5.474 v -32.078 c 0,-3.018 2.456,-5.473 5.474,-5.473 h 74.869 c 3.018,0 5.473,2.455 5.473,5.473 v 24.14 c 0,0.227 0.099,0.443 0.271,0.591 L 95.418,0 Z M 74.869,-44.589 H 0 c -3.881,0 -7.037,3.156 -7.037,7.037 v 32.078 c 0,3.881 3.156,7.038 7.037,7.038 h 97.516 c 0.327,0 0.618,-0.203 0.732,-0.508 0.115,-0.307 0.027,-0.651 -0.221,-0.865 l -16.121,-13.96 v -23.783 c 0,-3.881 -3.156,-7.037 -7.037,-7.037"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1078"/>
                                          </g>
                                          <g id="g1080" transform="translate(1693.6527,3880.6685)">
                                            <path
                                                d="m 0,0 11.986,-10.378 c 0.143,-0.124 0.225,-0.304 0.225,-0.493 v -28.51 c 0,-2.514 2.045,-4.559 4.559,-4.559 h 34.819 c 2.514,0 4.559,2.045 4.559,4.559 V -4.559 C 56.148,-2.046 54.103,0 51.589,0 Z M 51.589,-45.242 H 16.77 c -3.233,0 -5.862,2.629 -5.862,5.861 v 28.213 L -2.173,0.159 c -0.207,0.178 -0.28,0.465 -0.185,0.72 0.096,0.254 0.339,0.423 0.611,0.423 h 53.336 c 3.232,0 5.862,-2.629 5.862,-5.861 v -34.822 c 0,-3.232 -2.63,-5.861 -5.862,-5.861"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1082"/>
                                          </g>
                                          <g id="g1084" transform="translate(1469.6406,3639.7832)">
                                            <path
                                                d="m 0,0 3.339,-0.04 c 1.301,0 2.27,0.121 2.883,0.362 0.623,0.244 1.124,0.646 1.481,1.195 0.356,0.548 0.538,1.166 0.538,1.84 0,0.655 -0.182,1.266 -0.538,1.814 C 7.346,5.718 6.868,6.115 6.282,6.347 5.7,6.578 4.783,6.689 3.482,6.689 H 0 Z M -1.565,-10.274 V 8.218 H 2.024 C 4.151,8.218 5.599,8.125 6.332,7.941 7.37,7.685 8.227,7.155 8.883,6.364 9.536,5.574 9.872,4.565 9.872,3.363 9.872,2.153 9.547,1.144 8.907,0.364 8.269,-0.42 7.37,-0.956 6.245,-1.226 5.41,-1.428 3.812,-1.53 1.5,-1.53 H 0 v -8.744 z"
                                                style="fill:#6ab42f;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1086"/>
                                          </g>
                                          <g id="g1088" transform="translate(1488.1702,3629.5093)">
                                            <path
                                                d="m 0,0 v 8.831 l -5.948,9.661 h 1.881 l 4.814,-7.896 4.866,7.97 1.77,-0.065 L 1.564,8.912 1.543,0 Z"
                                                style="fill:#6ab42f;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1090"/>
                                          </g>
                                          <g id="g1092" transform="translate(1501.4006,3629.5093)">
                                            <path d="m 0,0 v 16.963 h -4.194 v 1.529 H 5.799 V 16.963 H 1.604 V 0 Z"
                                                  style="fill:#6ab42f;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                  id="path1094"/>
                                          </g>
                                          <g id="g1096" transform="translate(1521.6478,3629.5093)">
                                            <path
                                                d="M 0,0 V 9.076 H -9.884 V 0 h -1.569 v 18.492 h 1.569 V 10.605 H 0 v 7.887 H 1.568 V 0 Z"
                                                style="fill:#6ab42f;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1098"/>
                                          </g>
                                          <g id="g1100" transform="translate(1536.9843,3646.9575)">
                                            <path
                                                d="M 0,0 C -1.413,0 -2.771,-0.373 -4.035,-1.108 -5.299,-1.845 -6.3,-2.85 -7.01,-4.094 -7.72,-5.342 -8.081,-6.75 -8.081,-8.279 c 0,-2.266 0.797,-4.208 2.37,-5.772 1.572,-1.563 3.493,-2.354 5.711,-2.354 1.481,0 2.869,0.363 4.129,1.082 1.262,0.72 2.261,1.718 2.966,2.963 0.707,1.245 1.063,2.649 1.063,4.171 0,1.514 -0.356,2.902 -1.063,4.127 C 6.39,-2.839 5.381,-1.845 4.099,-1.107 2.819,-0.373 1.438,0 0,0 m 0.071,-17.921 c -2.732,0 -5.072,0.948 -6.95,2.819 -1.88,1.869 -2.831,4.163 -2.831,6.817 0,1.772 0.433,3.435 1.288,4.945 0.858,1.512 2.041,2.712 3.519,3.566 1.478,0.857 3.1,1.291 4.822,1.291 2.791,0 5.16,-0.944 7.038,-2.805 1.879,-1.862 2.832,-4.185 2.832,-6.908 0,-2.697 -0.95,-5.015 -2.825,-6.894 -1.876,-1.878 -4.194,-2.831 -6.893,-2.831"
                                                style="fill:#6ab42f;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1102"/>
                                          </g>
                                          <g id="g1104" transform="translate(1565.069,3629.5093)">
                                            <path
                                                d="M 0,0 -12.569,14.5 V 0 h -1.63 v 18.492 h 0.253 L -1.277,3.815 V 18.492 H 0.262 V 0 Z"
                                                style="fill:#6ab42f;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1106"/>
                                          </g>
                                          <g id="g1108" transform="translate(1702.2852,3944.5999)">
                                            <path
                                                d="M 0,0 V 7.871 H -8.562 V 0 h -1.37 v 16.048 h 1.37 V 9.208 H 0 v 6.84 H 1.371 V 0 Z"
                                                style="fill:#6ab42f;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1110"/>
                                          </g>
                                          <g id="g1112" transform="translate(1709.9019,3944.5999)">
                                            <path d="m 0,0 v 14.711 h -3.635 v 1.337 H 5.04 V 14.711 H 1.402 V 0 Z"
                                                  style="fill:#6ab42f;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                  id="path1114"/>
                                          </g>
                                          <g id="g1116" transform="translate(1733.5975,3944.5999)">
                                            <path
                                                d="M 0,0 -1.655,11.97 -7.574,0 H -7.828 L -13.814,12.059 -15.458,0 h -1.313 l 2.3,16.048 h 0.069 l 6.713,-13.546 6.646,13.546 h 0.066 L 1.333,0 Z"
                                                style="fill:#6ab42f;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1118"/>
                                          </g>
                                          <g id="g1120" transform="translate(1738.4147,3944.5999)">
                                            <path d="M 0,0 V 16.048 H 1.37 V 1.315 H 7.644 V 0 Z"
                                                  style="fill:#6ab42f;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                  id="path1122"/>
                                          </g>
                                          <g id="g1124" transform="translate(1718.7406,3847.7646)">
                                            <path
                                                d="m 0,0 c -0.817,0 -1.637,0.162 -2.437,0.479 -0.731,0.293 -1.55,0.798 -2.438,1.504 l 0.729,1.094 c 1.017,-0.696 1.855,-1.184 2.555,-1.487 0.538,-0.236 1.077,-0.356 1.598,-0.356 0.703,0 1.349,0.214 1.922,0.636 0.572,0.423 0.976,0.988 1.2,1.679 0.216,0.66 0.321,1.872 0.321,3.709 V 21.401 H 4.831 V 7.185 C 4.831,4.997 4.663,3.469 4.335,2.643 4.016,1.835 3.495,1.208 2.746,0.725 1.999,0.244 1.077,0 0,0"
                                                style="fill:#6ab42f;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1126"/>
                                          </g>
                                          <g id="g1128" transform="translate(1733.524,3847.7646)">
                                            <path
                                                d="m 0,0 c -1.229,0 -2.36,0.333 -3.362,0.988 -0.937,0.615 -1.825,1.643 -2.645,3.056 l 1.171,0.702 c 1.32,-2.272 2.876,-3.423 4.629,-3.423 0.788,0 1.537,0.186 2.228,0.553 0.697,0.369 1.239,0.875 1.612,1.506 0.366,0.626 0.552,1.302 0.552,2.009 0,0.805 -0.272,1.599 -0.806,2.357 -0.705,1.001 -1.944,2.165 -3.791,3.558 -1.77,1.338 -2.875,2.305 -3.287,2.873 -0.715,0.951 -1.074,1.986 -1.074,3.081 0,0.867 0.209,1.667 0.624,2.379 0.412,0.707 1.002,1.275 1.755,1.683 0.758,0.413 1.593,0.623 2.48,0.623 0.947,0 1.845,-0.238 2.669,-0.707 0.771,-0.439 1.599,-1.235 2.465,-2.37 L 4.073,17.998 C 3.325,18.951 2.684,19.582 2.12,19.919 1.486,20.298 0.788,20.49 0.045,20.49 c -0.975,0 -1.785,-0.303 -2.411,-0.902 -0.631,-0.604 -0.952,-1.357 -0.952,-2.239 0,-0.528 0.111,-1.043 0.33,-1.528 0.218,-0.49 0.595,-1 1.154,-1.558 0.3,-0.293 1.201,-0.992 2.836,-2.2 C 2.829,10.715 4.093,9.506 4.76,8.473 5.411,7.467 5.742,6.444 5.742,5.434 5.742,3.961 5.196,2.716 4.074,1.625 2.964,0.547 1.592,0 0,0"
                                                style="fill:#6ab42f;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1130"/>
                                          </g>
                                          <g id="g1132" transform="translate(1296.3597,3955.4053)">
                                            <path
                                                d="m 0,0 c -3.493,0 -6.281,1.178 -8.295,3.498 -1.689,1.959 -2.547,4.36 -2.547,7.136 0,2.918 1.038,5.406 3.085,7.397 2.043,1.99 4.646,3.001 7.73,3.001 1.865,0 3.572,-0.374 5.069,-1.11 1.454,-0.712 2.666,-1.717 3.61,-2.986 L 7.294,15.894 C 6.419,17 5.359,17.854 4.15,18.434 2.894,19.038 1.498,19.342 0,19.342 c -1.64,0 -3.181,-0.399 -4.58,-1.189 -1.399,-0.786 -2.499,-1.861 -3.272,-3.193 -0.769,-1.331 -1.16,-2.847 -1.16,-4.506 0,-2.51 0.875,-4.635 2.598,-6.314 1.718,-1.68 3.92,-2.53 6.539,-2.53 2.834,0 5.243,1.104 7.163,3.286 L 8.646,3.865 C 7.672,2.662 6.45,1.713 5.011,1.043 3.522,0.351 1.838,0 0,0"
                                                style="fill:#6ab42f;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1134"/>
                                          </g>
                                          <g id="g1136" transform="translate(1314.6123,3959.1365)">
                                            <path
                                                d="m 0,0 v 5.995 h -6.036 v 1.58 H 0 v 5.996 H 1.582 V 7.575 H 7.618 V 5.995 H 1.582 V 0 Z"
                                                style="fill:#6ab42f;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1138"/>
                                          </g>
                                          <g id="g1140" transform="translate(1331.7574,3959.1365)">
                                            <path
                                                d="m 0,0 v 5.995 h -6.039 v 1.58 H 0 v 5.996 H 1.582 V 7.575 H 7.618 V 5.995 H 1.582 V 0 Z"
                                                style="fill:#6ab42f;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1142"/>
                                          </g>
                                          <g id="g1144" transform="translate(1292.0376,3668.03)">
                                            <path
                                                d="m 0,0 3.633,-0.031 c 1.365,0 2.352,0.13 3.017,0.393 0.674,0.267 1.208,0.7 1.588,1.291 0.375,0.585 0.569,1.249 0.569,1.972 0,0.706 -0.194,1.355 -0.578,1.933 -0.383,0.579 -0.893,1 -1.518,1.249 C 6.093,7.053 5.113,7.174 3.717,7.174 H 0 Z M 8.573,-10.685 1.454,-1.493 H 0 v -9.192 H -1.528 V 8.663 h 3.717 c 2.172,0 3.659,-0.089 4.419,-0.264 1.12,-0.256 2.043,-0.813 2.745,-1.656 0.695,-0.838 1.05,-1.89 1.05,-3.125 0,-1.032 -0.242,-1.947 -0.726,-2.724 C 9.198,0.119 8.5,-0.474 7.603,-0.873 6.692,-1.276 5.411,-1.486 3.79,-1.493 l -0.454,-0.003 7.12,-9.189 z"
                                                style="fill:#6ab42f;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1146"/>
                                          </g>
                                          <g id="g1148" transform="translate(1313.7266,3656.8481)">
                                            <path
                                                d="M 0,0 C -1.543,0 -2.882,0.371 -3.979,1.106 -5.071,1.835 -5.81,2.813 -6.177,4.012 -6.413,4.763 -6.531,6.145 -6.531,8.12 v 11.724 h 1.53 V 8.12 c 0,-1.441 0.029,-2.319 0.084,-2.686 0.102,-0.809 0.347,-1.501 0.723,-2.05 0.379,-0.556 0.967,-1.025 1.745,-1.395 0.769,-0.367 1.558,-0.554 2.343,-0.554 0.683,0 1.346,0.148 1.976,0.439 C 2.501,2.165 3.036,2.576 3.458,3.093 3.88,3.609 4.195,4.241 4.387,4.966 4.529,5.49 4.599,6.521 4.599,8.12 V 19.844 H 6.127 V 8.12 C 6.127,6.385 5.959,4.966 5.622,3.9 5.292,2.859 4.621,1.938 3.625,1.163 2.634,0.391 1.415,0 0,0"
                                                style="fill:#6ab42f;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1150"/>
                                          </g>
                                          <g id="g1152" transform="translate(1326.718,3668.4172)">
                                            <path
                                                d="M 0,0 H 1.358 C 2.774,0 3.793,0.131 4.474,0.399 5.162,0.672 5.714,1.106 6.113,1.691 6.515,2.279 6.718,2.94 6.718,3.655 6.718,4.627 6.372,5.402 5.685,5.961 5.013,6.509 3.947,6.787 2.518,6.787 H 0 Z m 0,-9.583 h 2.678 c 1.468,0 2.567,0.15 3.267,0.443 0.712,0.298 1.293,0.771 1.724,1.406 0.432,0.634 0.652,1.333 0.652,2.077 0,0.931 -0.31,1.755 -0.919,2.448 C 6.8,-2.522 5.964,-2.046 4.916,-1.793 4.221,-1.626 3.052,-1.544 1.345,-1.544 H 0 Z m -1.49,-1.489 V 8.275 H 2.189 C 3.72,8.275 4.908,8.095 5.72,7.735 6.517,7.385 7.158,6.836 7.621,6.105 8.083,5.373 8.316,4.55 8.316,3.655 8.316,2.822 8.113,2.052 7.706,1.367 7.3,0.686 6.696,0.122 5.903,-0.307 L 5.455,-0.55 5.941,-0.715 c 0.995,-0.339 1.767,-0.739 2.3,-1.191 0.527,-0.446 0.943,-0.995 1.237,-1.631 0.293,-0.636 0.442,-1.336 0.442,-2.08 0,-1.516 -0.562,-2.818 -1.673,-3.867 -1.115,-1.053 -2.638,-1.588 -4.524,-1.588 z"
                                                style="fill:#6ab42f;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1154"/>
                                          </g>
                                          <g id="g1156" transform="translate(1345.8323,3657.3452)">
                                            <path
                                                d="m 0,0 v 9.237 l -6.213,10.11 h 1.749 l 5.192,-8.365 5.108,8.365 H 7.602 L 1.537,9.353 1.505,0 Z"
                                                style="fill:#6ab42f;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1158"/>
                                          </g>
                                          <g id="g1160" transform="translate(1295.7645,3803.6948)">
                                            <path
                                                d="m 0,0 c -0.187,0 -0.373,0.072 -0.516,0.214 l -7.811,7.807 c -0.137,0.137 -0.214,0.322 -0.214,0.516 0,0.193 0.077,0.379 0.214,0.516 l 7.811,7.808 c 0.285,0.285 0.747,0.285 1.032,0 0.285,-0.285 0.285,-0.746 0,-1.031 L -6.779,8.537 0.516,1.246 C 0.801,0.961 0.801,0.499 0.516,0.214 0.373,0.072 0.187,0 0,0"
                                                style="fill:#6ab42f;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1162"/>
                                          </g>
                                          <g id="g1164" transform="translate(1318.63,3803.6948)">
                                            <path
                                                d="m 0,0 c -0.187,0 -0.373,0.072 -0.516,0.214 -0.285,0.285 -0.285,0.747 0,1.032 l 7.291,7.291 -7.291,7.293 c -0.285,0.285 -0.285,0.746 0,1.031 0.285,0.285 0.747,0.285 1.032,0 L 8.323,9.053 c 0.285,-0.285 0.285,-0.747 0,-1.032 L 0.516,0.214 C 0.373,0.072 0.187,0 0,0"
                                                style="fill:#6ab42f;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1166"/>
                                          </g>
                                          <g id="g1168" transform="translate(1311.7101,3803.6948)">
                                            <path
                                                d="m 0,0 c -0.244,0 -0.482,0.122 -0.621,0.344 l -9.018,14.5 c -0.212,0.342 -0.107,0.792 0.235,1.005 0.339,0.212 0.792,0.109 1.005,-0.234 L 0.619,1.115 C 0.831,0.774 0.726,0.323 0.385,0.11 0.265,0.036 0.132,0 0,0"
                                                style="fill:#6ab42f;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1170"/>
                                          </g>
                                          <g id="g1172" transform="translate(1719.9462,3831.7156)">
                                            <path
                                                d="m 0,0 c -0.36,0 -0.651,0.291 -0.651,0.651 v 2.408 c 0,0.36 0.291,0.651 0.651,0.651 0.36,0 0.651,-0.291 0.651,-0.651 V 0.651 C 0.651,0.291 0.36,0 0,0 m -13.117,-11.632 h -9.118 c -0.36,0 -0.651,0.292 -0.651,0.652 0,0.36 0.291,0.651 0.651,0.651 h 9.118 c 0.359,0 0.651,-0.291 0.651,-0.651 0,-0.36 -0.292,-0.652 -0.651,-0.652 m 13.117,0 h -5.302 c -0.36,0 -0.651,0.292 -0.651,0.652 0,0.36 0.291,0.651 0.651,0.651 h 4.651 v 3.165 c 0,0.36 0.291,0.651 0.651,0.651 0.36,0 0.651,-0.291 0.651,-0.651 v -3.816 c 0,-0.36 -0.291,-0.652 -0.651,-0.652"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1174"/>
                                          </g>
                                          <g id="g1176" transform="translate(1690.0228,3820.084)">
                                            <path
                                                d="m 0,0 h -9.118 c -0.36,0 -0.651,0.291 -0.651,0.652 0,0.359 0.291,0.651 0.651,0.651 H 0 C 0.36,1.303 0.651,1.011 0.651,0.652 0.651,0.291 0.36,0 0,0"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1178"/>
                                          </g>
                                          <g id="g1180" transform="translate(1673.7544,3820.084)">
                                            <path
                                                d="m 0,0 h -9.118 c -0.36,0 -0.651,0.291 -0.651,0.652 0,0.359 0.291,0.651 0.651,0.651 H 0 C 0.36,1.303 0.651,1.011 0.651,0.652 0.651,0.291 0.36,0 0,0"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1182"/>
                                          </g>
                                          <g id="g1184" transform="translate(1658.7563,3820.084)">
                                            <path
                                                d="m 0,0 h -9.118 c -0.36,0 -0.651,0.291 -0.651,0.652 0,0.359 0.291,0.651 0.651,0.651 H 0 C 0.36,1.303 0.651,1.011 0.651,0.652 0.651,0.291 0.36,0 0,0"
                                                style="fill:#e4067d;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                                id="path1186"/>
                                          </g>
                                        </g>
                                      </g>
                                      <text xml:space="preserve"
                                            style="font-variant:normal;font-weight:normal;font-stretch:normal;font-size:10.5833px;font-family:'Franklin Gothic Medium';-inkscape-font-specification:FranklinGothic-Medium;writing-mode:lr-tb;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.352778"
                                            id="text1196" x="69.237663" y="144.89468"><tspan x="69.237663 75.047913 80.593582 86.17099 91.875412 97.421082 103.12549 110.78783 116.40758 122.21782 127.81641 133.64783" y="144.89468" id="tspan1192" style="stroke-width:0.352778">непрерывной </tspan>
                                        <tspan
                                            x="69.237663 74.815079 80.519493 86.118073 91.663742 96.976578 100.92416 106.73441 112.33299 118.16441 120.81024 126.51466 132.24025 137.97641 143.575 147.52258"
                                            y="157.59467" id="tspan1194" style="stroke-width:0.352778">проектной работы</tspan></text>
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </transition>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
            </div>
            <!-- Box #2 -->
            <div class="md:col-span-7" data-aos="fade-down">
              <HighlighterItem>
                <div class="relative h-full bg-neutral-900 rounded-[inherit] z-20 overflow-hidden">
                  <div class="flex flex-col">
                    <!-- Radial gradient -->
                    <div class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                      <div class="absolute inset-0 translate-z-0 bg-neutral-800 rounded-full blur-[80px]"></div>
                    </div>
                    <!-- Text -->
                    <div class="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0">
                      <div>
                        <h3 class="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200/60 via-neutral-200 to-neutral-200/60 pb-1">Extensibility</h3>
                        <p class="text-neutral-400">Your login box must find the right balance between user convenience, privacy and security.</p>
                      </div>
                    </div>
                    <!-- Image -->
                    <div class="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
                      <img class="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0" src="../images/feature-image-02.png" width="536" height="230" alt="Feature 02">
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
            <!-- Box #3 -->
            <div class="md:col-span-5" data-aos="fade-down">
              <HighlighterItem>
                <div class="relative h-full bg-neutral-900 rounded-[inherit] z-20 overflow-hidden">
                  <div class="flex flex-col">
                    <!-- Radial gradient -->
                    <div class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                      <div class="absolute inset-0 translate-z-0 bg-neutral-800 rounded-full blur-[80px]"></div>
                    </div>
                    <!-- Text -->
                    <div class="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0">
                      <div>
                        <h3 class="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200/60 via-slate-200 to-slate-200/60 pb-1">Infinite options</h3>
                        <p class="text-slate-400">Quickly apply filters to refine your issues lists and create custom views.</p>
                      </div>
                    </div>
                    <!-- Image -->
                    <div class="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
                      <img class="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0" src="../images/feature-image-03.png" width="230" height="230" alt="Feature 03">
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
          </Highlighter>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {ref} from 'vue'
import Particles from './Particles.vue'
import Highlighter from "./Highlighter.vue";
import HighlighterItem from "./HighlighterItem.vue";

export default {
  name: 'Features',
  components: {
    HighlighterItem, Highlighter,
    Particles
  },
  setup() {

    const tab = ref('1')

    return {
      tab,
    }
  },
}
</script>