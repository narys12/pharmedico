<template>
  <div class="inline-block rounded-3xl bg-gray-400 text-gray-700 py-2 px-4 mt-1" v-if="isShown">
    <span>{{ content }}</span>
    <span class="hover:text-red-600 cursor-pointer" @click="closeChip">
      <svg class="w-6 h-6 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    content: String,
  },
  data() {
    return {
      isShown: true,
    }
  },
  methods: {
    closeChip() {
      this.isShown = false
    }
  }
}
</script>
