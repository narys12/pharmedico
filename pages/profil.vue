<template>
  <div class="px-2 mt-4 pb-4 lg:px-48">
    <div class="flex">
      <img class="rounded-xl w-16" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/37461/medical-doctor-man-advise-clipart-md.png" alt="">
      <div class="ml-4">
        <h1 class="text-green-600 text-xl font-semibold mb-2">Dr Eli</h1>
        <div class="leading-tight">
          <div class="text-gray-600">Chirurgien</div>
          <div class="text-gray-600 mt-1">
            <star-rating class="" star-size=25 read-only rating="2" :show-rating=false />
            <span>7 notes</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 mb-4 py-2 z-10 sticky top-0 bg-white w-full divide-x-2 shadow-md">
      <a class="ml-1" @click="selectedMenu = 1" :class="{active:selectedMenu == 1, menu:true}" href="#presentation">Présentation</a>
      <a class="pl-3" @click="selectedMenu = 2" :class="{active:selectedMenu == 2, menu:true}" href="#contact">Contact</a>
      <a class="pl-3" @click="selectedMenu = 3" :class="{active:selectedMenu == 3, menu:true}" href="#avis">
        Avis
        <span class="hidden md:inline">(10)</span>
      </a>
      <a class="pl-3" @click="selectedMenu = 4" :class="{active:selectedMenu == 4, menu:true}" href="#articles">
        Articles
        <span class="hidden md:inline">(1)</span>
      </a>
    </div>
    <Presentation id="presentation" />
    <Contact id="contact" />
    <div id="avis" class="my-4">
      <h1 class="mb-2 font-bold uppercase">Avis</h1>
      <Review />
    </div>
    <div id="articles" class="my-4">
      <div class="flex space-x-2">
        <h1 class="mb-2 font-bold uppercase">Acticles</h1>
        <div class="font-bold text-3xl cursor-pointer">
          <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
        </div>
      </div>
      <Article class="mb-1" />
      <Article class="mb-1" />
      <Article class="mb-1" />
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  components: {
    StarRating
  },
  data() {
    return {
      selectedMenu: 1
    }
  }
}
</script>


<style lang="postcss" scoped>
.menu {
  @apply pr-2 py-1 font-semibold transition ease-in-out duration-300
}

.menu:hover {
  @apply text-green-600
}

.active {
  @apply border-b-4 border-green-600 text-green-600
}
</style>
