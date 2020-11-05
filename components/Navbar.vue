<template>
  <div>
    <nav
      class="px-2 lg:px-48 font-bold w-full bg-green-600 text-white h-20 flex items-center justify-between"
    >
      <a class="text-2xl cursor-pointer" href="/">PharMedico</a>
      <div class="md:hidden">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </div>
      <div class="h-full hidden md:flex">
        <div class="menu-item px-4">
          Articles
        </div>
        <div class="menu-item pl-4" @click="showModal = !showModal">
          Connexion
        </div>
      </div>
    </nav>
    <vue-tailwind-modal
      :showing=showModal
      @close="showModal = false"
      backgroundClose
    >
      <div class="flex flex-col">
        <h1 class="mx-auto text-2xl font-semibold mb-4">Se connecter avec</h1>
        <button class="btn-outline mb-2">
          Facebook
        </button>
        <button class="btn-outline mb-2">
          Twitter
        </button>
        <button class="btn-outline mb-2">
          Google
        </button>
        <div class="mt-2 mb-4 mx-auto text-2xl font-semibold">Ou s'inscrire en tant que</div>
        <nuxt-link to="/inscription/medecin">
          <button class="btn-outline mb-2 w-full" @click="showModal = false">
            Médecin
          </button>
        </nuxt-link>
        <nuxt-link to="/inscription/pharmacie">
          <button class="btn-outline mb-2 w-full" @click="showModal = false">
            Pharmacie
          </button>
        </nuxt-link>
      </div>
    </vue-tailwind-modal>
  </div>
</template>

<script>
import VueTailwindModal from 'vue-tailwind-modal'

export default {
  components: {
	  VueTailwindModal
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    goTo(path) {
      this.$route.push({
        path: path
      })
    }
  }
}
</script>


<style lang="postcss" scoped>
.menu-item {
  @apply transition ease-in-out duration-300 flex items-center h-full cursor-pointer font-bold;
}

.menu-item:hover {
  @apply text-black;
}
</style>

