<template>
  <footer>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-12 gap-8 py-8 md:py-12">

        <div class="col-span-12 md:col-span-6 lg:col-span-8 order-1 md:order-none text-center md:text-left">
          <div class="h-full flex flex-col md:flex-row lg:flex-col justify-between">
            <div class="mb-4 sm:mb-0">
              <div class="mb-4 flex items-center justify-center md:justify-normal">
                <a class="block mr-2" href="/" aria-label="Localzet">
                  <img class="mx-auto md:mx-0" src="../images/logo.svg" width="66" height="58" alt="Хакатон">
                </a>
                <a class="block ml-2" href="https://minobr.donland.ru/" aria-label="Министерство образования РО">
                  <img class="mx-auto md:mx-0 hidden lg:block" :src="CompressedMinistryEducationFull" width="177"
                       height="58" alt="Министерство образования РО">
                  <img class="mx-auto md:mx-0 lg:hidden" :src="CompressedMinistryEducation" width="53" height="58"
                       alt="Министерство образования РО">
                </a>
                <a class="block mx-2" href="https://rostov-gorod.ru/" aria-label="Ростовская область">
                  <img class="mx-auto md:mx-0" :src="CompressedRostovRegion" width="58" height="58"
                       alt="Ростовская область">
                </a>
                <a class="block mx-2" href="https://vk.com/molrostov" aria-label="Молодёжь Ростова">
                  <img class="mx-auto md:mx-0 hidden lg:block" :src="CompressedRostovYouthFull" width="200" height="64"
                       alt="Молодёжь Ростова">
                  <img class="mx-auto md:mx-0 lg:hidden" :src="CompressedRostovYouth" width="58" height="58"
                       alt="Молодёжь Ростова">
                </a>
                <a class="block mx-2" href="https://donstu.ru/" aria-label="ДГТУ">
                  <img class="mx-auto md:mx-0" :src="CompressedDSTU" width="55" height="58" alt="ДГТУ">
                </a>
              </div>
              <a class="text-sm text-neutral-300" href="https://www.localzet.com" aria-label="Localzet">
                Copyright &copy; 2024 Localzet Group <br/>
                <span class="text-neutral-500">Все права защищены</span>
              </a>
            </div>
          </div>
        </div>

        <div class="col-span-6 md:col-span-3 lg:col-span-2 text-right md:text-left">
          <h6 class="text-sm text-neutral-50 font-medium mb-2">Участникам</h6>
          <ul class="text-sm space-y-2">
            <li>
              <a class="text-neutral-400 hover:text-neutral-200 transition duration-150 ease-in-out"
                 href="https://vk.com/video/@fantastic_hackathon/all">Видеозаписи</a>
            </li>
            <li>
              <a class="text-neutral-400 hover:text-neutral-200 transition duration-150 ease-in-out"
                 href="https://vk.com/albums-106352936">Фотоальбомы</a>
            </li>
            <li>
              <a class="text-neutral-400 hover:text-neutral-200 transition duration-150 ease-in-out"
                 href="https://go.localzet.com/hack-archive">Архив кейсов</a>
            </li>
            <li>
              <a class="text-neutral-400 hover:text-neutral-200 transition duration-150 ease-in-out"
                 href="https://go.localzet.com/hack-doc">Положение</a>
            </li>
          </ul>
        </div>

        <div class="col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-sm text-neutral-50 font-medium mb-2">Соц. сети</h6>
          <ul class="text-sm space-y-2">
            <li>
              <a class="text-neutral-400 hover:text-neutral-200 transition duration-150 ease-in-out"
                 href="https://vk.com/fantastic_hackathon">ВКонтакте</a>
            </li>
            <li>
              <a class="text-neutral-400 hover:text-neutral-200 transition duration-150 ease-in-out"
                 href="https://t.me/fantastic_hackathon">Телеграм</a>
            </li>
            <li>
              <a class="text-neutral-400 hover:text-neutral-200 transition duration-150 ease-in-out"
                 href="https://t.me/addlist/cFS0PrEQxiVjOGEx">Общие чаты</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </footer>
</template>

<script>
import CompressedMinistryEducationFull from '../images/organizators/ministry-education-full.svg?w=177&h=58&format=webp';
import CompressedMinistryEducation from '../images/organizators/ministry-education.svg?w=53&h=58&format=webp';
import CompressedRostovRegion from '../images/organizators/rostov-region.svg?w=58&h=58&format=webp';
import CompressedRostovYouthFull from '../images/organizators/rostov-youth-full.svg?w=200&h=64&format=webp';
import CompressedRostovYouth from '../images/organizators/rostov-youth.svg?w=58&h=58&format=webp';
import CompressedDSTU from '../images/organizators/dstu.png?w=55&h=58&format=webp';

export default {
  name: 'Footer',
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