<script setup lang="ts">
import { ref } from '#imports'

const loading = ref(false)

function donate() {
  loading.value = true
  return $fetch('/api/bagel/donate', { method: 'POST' }).then((url) => {
    if (url && typeof url === 'string') {
      window.open(url, '_blank')?.focus()
    }
    loading.value = false
  })
}
</script>

<template>
  <UButton
    :loading="loading"
    icon="i-fluent-emoji-high-contrast:bagel"
    @click="donate"
  >
    Donate a Bagel
  </UButton>
</template>
