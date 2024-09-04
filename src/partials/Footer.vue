<template>
  <footer>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-12 gap-8 py-8 md:py-12">

        <div class="col-span-12 md:col-span-6 lg:col-span-8 order-1 md:order-none text-center md:text-left">
          <div class="h-full flex flex-col md:flex-row lg:flex-col justify-between">
            <div class="mb-4 sm:mb-0">
              <div class="mb-4 flex items-center justify-center md:justify-normal">
                <router-link class="block mr-2" to="/" aria-label="Localzet">
                  <img class="mx-auto md:mx-0" src="/logo.svg" width="66" height="58" alt="Hackathon">
                </router-link>
                <router-link class="block ml-2" to="https://minobr.donland.ru/" aria-label="Министерство образования РО">
                  <img class="mx-auto md:mx-0 hidden lg:block" src="/organizators/ministry-education-full.svg" width="177"
                       height="58" alt="Министерство образования РО">
                  <img class="mx-auto md:mx-0 lg:hidden" src="/organizators/ministry-education.svg" width="53" height="58"
                       alt="Министерство образования РО">
                </router-link>
                <router-link class="block mx-2" to="https://www.donland.ru/" aria-label="Ростовская область">
                  <img class="mx-auto md:mx-0" src="/organizators/rostov-region.svg" width="58" height="58" alt="Ростовская область">
                </router-link>
                <router-link class="block mx-2" to="https://vk.com/molrostov" aria-label="Молодёжь Ростова">
                  <img class="mx-auto md:mx-0 hidden lg:block" src="/organizators/rostov-youth-full.svg" width="200" height="64" alt="Молодёжь Ростова">
                  <img class="mx-auto md:mx-0 lg:hidden" src="/organizators/rostov-youth.svg" width="58" height="58" alt="Молодёжь Ростова">
                </router-link>
                <router-link class="block mx-2" to="https://donstu.ru/" aria-label="ДГТУ">
                  <img class="mx-auto md:mx-0" src="/organizators/dstu.png" width="55" height="58" alt="ДГТУ">
                </router-link>
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
                 href="https://t.me/hackathon_chat">Общий чат</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>