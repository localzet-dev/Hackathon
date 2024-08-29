<template>
  <header class="absolute w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Site branding -->
        <div class="shrink-0 mr-4">
          <!-- Logo -->
          <router-link class="block" to="/" aria-label="Localzet">
            <img src="https://hackathon.localzet.com/logo.svg" width="48" height="48" alt="Hackathon">
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="flex grow">

          <!-- Desktop sign in links -->
          <ul class="flex grow justify-end flex-wrap items-center">
            <li>
              <router-link
                  class="font-medium text-sm text-neutral-300 hover:text-white transition duration-150 ease-in-out"
                  to="/lk">Вход
              </router-link>
            </li>
            <li class="ml-6">
              <router-link
                  class="btn-sm text-neutral-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.neutral.950),_theme(colors.neutral.950))_padding-box] relative before:absolute before:inset-0 before:bg-neutral-800/30 before:rounded-full before:pointer-events-none"
                  to="/reg.php">
                <span class="relative inline-flex items-center">
                  Регистрация
                  <span
                      class="tracking-normal text-green-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </span>
              </router-link>
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