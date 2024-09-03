<template>
  <header class="relative w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-14 md:h-20">

        <!-- Site branding -->
        <div class="shrink-0 mr-4 flex items-center">
          <!-- Logo -->
          <router-link class="block my-3 mr-1 md:mr-2" to="/" aria-label="Hackathon">
            <img class="max-h-10 md:max-h-auto max-w-10 md:max-w-auto" src="/logo.svg" width="66" height="58" alt="Hackathon">
          </router-link>
          <router-link class="block my-3 mx-1 md:mx-2" to="/" aria-label="ДГТУ">
            <img class="max-h-10 md:max-h-auto max-w-10 md:max-w-auto w-auto" src="../images/organizators/dstu.png" width="55" height="58" alt="ДГТУ">
          </router-link>
          <!--                <router-link class="block" to="/" aria-label="Молодёжь Ростова">-->
          <!--                  <img class="hidden md:block mx-auto md:mx-0" src="../images/organizators/rostov-youth-full.svg" width="250" height="58"-->
          <!--                       alt="Молодёжь Ростова">-->
          <!--                  <img class="md:hidden mx-auto md:mx-0" src="../images/organizators/rostov-youth.svg" width="250" height="58"-->
          <!--                       alt="Молодёжь Ростова">-->
          <!--                </router-link>-->
          <router-link class="block my-3 mx-1 md:mx-2" to="/" aria-label="Ростовская область">
            <img class="max-h-10 md:max-h-auto max-w-10 md:max-w-auto" src="../images/organizators/rostov-region.svg" width="58" height="58" alt="Ростовская область">
          </router-link>
          <router-link class="block my-3 ml-1 md:ml-2" to="/" aria-label="Министерство образования РО">
            <img class="max-h-10 md:max-h-auto max-w-10 md:max-w-auto hidden md:block" src="../images/organizators/ministry-education-full.svg" width="177" height="58" alt="Министерство образования РО">
            <img class="max-h-10 md:max-h-auto max-w-10 md:max-w-auto md:hidden" src="../images/organizators/ministry-education.svg" width="53" height="58" alt="Министерство образования РО">
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="flex grow">

          <!-- Desktop sign in links -->
          <ul class="flex grow justify-end flex-wrap items-center">
            <li>
              <a
                  class="font-medium text-sm text-neutral-300 hover:text-white transition duration-150 ease-in-out"
                  href="https://lk.fantastic-hackathon.ru">Вход
              </a>
            </li>
            <li class="ml-6">
              <a
                  class="btn-sm text-neutral-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.neutral.950),_theme(colors.neutral.950))_padding-box] relative before:absolute before:inset-0 before:bg-neutral-800/30 before:rounded-full before:pointer-events-none"
                  href="https://fantastic-hackathon.ru/reg.php">
                <span class="relative inline-flex items-center">
                  Регистрация
                </span>
              </a>
            </li>
          </ul>

        </nav>

      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>