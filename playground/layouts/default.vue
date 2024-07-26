<template>
  <div class="w-full min-h-[100vh] m-0 fex flex-col">
    <header class="bg-white w-full relative flex items-center text-lg h-16 px-8 shadow-md">
      <UIcon
        name="i-fluent-emoji-high-contrast:bagel"
        class="w-5 h-5 mr-4"
      />
      Nuxt Donate a Bagel!
    </header>
    <UContainer class="bg-white max-w-[960px] w-full flex-grow p-4 pt-8">
      <NuxtPage />
    </UContainer>
  </div>
</template>
