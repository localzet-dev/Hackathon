<template>
  <section class="relative">

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-8 md:py-10">
        <!-- Content -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 bg-clip-text text-transparent bg-gradient-to-r from-neutral-200/60 via-neutral-200 to-neutral-200/60 pb-4">
            Программа</h2>
        </div>

        <div class="relative max-w-5xl mx-auto">
          <!-- Content -->
          <div class="grid md:grid-cols-3 xl:-mx-6 text-sm
          [&>div:nth-of-type(-n+3)]:py-6
          [&>div:nth-last-of-type(-n+3)]:pb-6
          max-md:[&>div:nth-last-of-type(-n+3)]:mb-8
          max-md:[&>div:nth-of-type(-n+3):nth-of-type(n)]:rounded-t-3xl
          max-md:[&>div:nth-last-of-type(-n+3)]:rounded-b-3xl
          md:[&>div:nth-of-type(1)]:rounded-tl-3xl
          md:[&>div:nth-of-type(3)]:rounded-tr-3xl
          md:[&>div:nth-last-of-type(3)]:rounded-bl-3xl
          md:[&>div:nth-last-of-type(1)]:rounded-br-3xl
          [&>div]:bg-transparent
          [&>div]:text-lg
          [&>div:nth-of-type(3n+3)]:relative">
            <!-- Pro price -->
            <div class="px-6 flex flex-col justify-end">
              <div class="grow pb-2">
                <div
                    class="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-200 pb-0.5">
                  25.10.2024
                </div>
                <div class="py-2 text-neutral-400 border-b border-neutral-800"><span
                    class="bg-clip-text text-transparent bg-green-400">15:00</span> Открытие Южного ИТ-форума
                </div>
                <div class="py-2 text-neutral-400 border-b border-neutral-800"><span
                    class="bg-clip-text text-transparent bg-green-400">16:00</span> Регистрация участников
                </div>
                <div class="py-2 text-neutral-400 border-b border-neutral-800"><span
                    class="bg-clip-text text-transparent bg-green-400">18:00</span> Торжественное открытие
                </div>
              </div>
            </div>
            <!-- Team price -->
            <div class="px-6 flex flex-col justify-end">
              <div class="grow pb-2">
                <div
                    class="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-200 pb-0.5">
                  26.10.2024
                </div>
                <div class="py-2 text-neutral-400 border-b border-neutral-800"><span
                    class="bg-clip-text text-transparent bg-green-400">09:00 - 10:00</span> Первый чек-поинт
                </div>
                <div class="py-2 text-neutral-400 border-b border-neutral-800"><span
                    class="bg-clip-text text-transparent bg-green-400">19:00 - 20:00</span> Второй чек-поинт
                </div>
              </div>
            </div>
            <!-- Enterprise price -->
            <div class="px-6 flex flex-col justify-end">
              <div class="grow pb-2">
                <div
                    class="text-lg-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-200 pb-0.5">
                  27.10.2024
                </div>
                <div class="py-2 text-neutral-400 border-b border-neutral-800"><span
                    class="bg-clip-text text-transparent bg-green-400">16:00</span> Питч-сессия технических кейсов
                </div>
                <div class="py-2 text-neutral-400 border-b border-neutral-800"><span
                    class="bg-clip-text text-transparent bg-green-400">20:30</span> Торжественное закрытие
                </div>
                <div class="py-2 text-neutral-400 border-b border-neutral-800"><span
                    class="bg-clip-text text-transparent bg-green-400">21:00</span> Общее фотографирование
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {ref} from 'vue'

export default {
  name: 'Schedule',
  setup() {

    const annual = ref(true)

    return {
      annual,
    }
  },
}
</script>