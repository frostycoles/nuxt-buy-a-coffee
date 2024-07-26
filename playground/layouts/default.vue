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
      <div class="mt-8 flex gap-8">
        <ULink
          to="https://github.com/frostycoles/nuxt-donate-a-bagel"
          target="_blank"
          active-class="text-black"
          inactive-class="text-green-500"
          class="flex items-center"
        >
          <UIcon
            name="i-simple-icons:github"
            class="mr-2"
          />
          Github
        </ULink>
        <ULink
          to="https://www.npmjs.com/package/nuxt-donate-a-bagel"
          target="_blank"
          active-class="text-black"
          inactive-class="text-green-500"
          class="flex items-center"
        >
          <UIcon
            name="i-simple-icons:npm"
            class="mr-2"
          />
          NPM
        </ULink>
        <ULink
          to="https://github.com/frostycoles/nuxt-donate-a-bagel/blob/main/CHANGELOG.md"
          target="_blank"
          active-class="text-black"
          inactive-class="text-green-500"
          class="flex items-center"
        >
          <UIcon
            name="i-heroicons-command-line"
            class="mr-2"
          />
          Changelog
        </ULink>
      </div>
    </UContainer>
  </div>
</template>
