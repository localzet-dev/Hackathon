<template>
  <header class="relative w-full z-30">
    <div class="max-w-6xl mx-auto px-2 sm:px-6">
      <div class="flex items-center justify-between h-14 md:h-20">

        <!-- Site branding -->
        <div class="shrink-0 sm:mr-4 flex items-center">
          <!-- Logo -->
          <a class="block my-3 mr-1 sm:mr-2" href="/" aria-label="Хакатон">
            <img class="max-h-10 md:max-h-14 max-w-10 md:max-w-none" src="../images/logo.svg" width="66" height="58"
                 alt="Хакатон">
          </a>
          <a class="block my-3 ml-1 sm:mx-2" href="https://minobr.donland.ru/" aria-label="Министерство образования РО">
            <img class="max-h-10 md:max-h-14 max-w-10 md:max-w-none hidden md:block"
                 :src="CompressedMinistryEducationFull" width="177" height="58" alt="Министерство образования РО">
            <img class="max-h-10 md:max-h-14 max-w-10 md:max-w-none md:hidden" :src="CompressedMinistryEducation"
                 width="53" height="58" alt="Министерство образования РО">
          </a>
          <a class="block my-3 mx-1 sm:mx-2" href="https://rostov-gorod.ru/" aria-label="Ростовская область">
            <img class="max-h-10 md:max-h-14 max-w-10 md:max-w-none" :src="CompressedRostovRegion" width="58"
                 height="58" alt="Ростовская область">
          </a>
          <a class="block my-3 mx-1 sm:mx-2" href="https://vk.com/molrostov" aria-label="Молодёжь Ростова">
            <img class="max-h-10 md:max-h-13 hidden md:block" :src="CompressedRostovYouthFull" width="200" height="64"
                 alt="Молодёжь Ростова">
            <img class="max-h-10 md:max-h-14 max-w-12 md:max-w-none md:hidden" :src="CompressedRostovYouth" width="58"
                 height="58" alt="Молодёжь Ростова">
          </a>
          <a class="block my-3 mx-1 sm:ml-2" href="https://donstu.ru/" aria-label="ДГТУ">
            <img class="max-h-10 md:max-h-14 max-w-10 md:max-w-none w-auto" :src="CompressedDSTU" width="55" height="58"
                 alt="ДГТУ">
          </a>
        </div>


        <!-- Desktop navigation -->
        <nav class="flex grow">

          <!-- Desktop sign in links -->
          <ul class="flex grow justify-end flex-wrap items-center">
            <li>
              <a
                  class="font-medium text-sm text-neutral-300 hover:text-white transition duration-150 ease-in-out"
                  href="https://lk.hack-rnd.ru">Вход
              </a>
            </li>
            <li class="ml-2 sm:ml-6">
              <a
                  class="hidden lg:block btn-sm text-neutral-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.neutral.950),_theme(colors.neutral.950))_padding-box] relative before:absolute before:inset-0 before:bg-neutral-800/30 before:rounded-full before:pointer-events-none"
                  href="https://lk.hack-rnd.ru/register">
                <span class="relative inline-flex items-center">
                  Регистрация
                </span>
              </a>
              <a
                  class="lg:hidden mx-1 font-medium text-sm text-neutral-300 hover:text-white transition duration-150 ease-in-out"
                  href="https://lk.hack-rnd.ru/register">Регистрация
              </a>
            </li>
          </ul>

        </nav>

      </div>
    </div>
  </header>
</template>

<script>
import CompressedMinistryEducationFull from '../images/organizators/ministry-education-full.svg?w=177&h=58&format=webp';
import CompressedMinistryEducation from '../images/organizators/ministry-education.svg?w=53&h=58&format=webp';
import CompressedRostovRegion from '../images/organizators/rostov-region.svg?w=58&h=58&format=webp';
import CompressedRostovYouthFull from '../images/organizators/rostov-youth-full.svg?w=200&h=64&format=webp';
import CompressedRostovYouth from '../images/organizators/rostov-youth.svg?w=58&h=58&format=webp';
import CompressedDSTU from '../images/organizators/dstu.png?w=55&h=58&format=webp';

export default {
  name: 'Header',
  data() {
    return {
      CompressedMinistryEducationFull,
      CompressedMinistryEducation,
      CompressedRostovRegion,
      CompressedRostovYouthFull,
      CompressedRostovYouth,
      CompressedDSTU
    };
  }
}
</script>