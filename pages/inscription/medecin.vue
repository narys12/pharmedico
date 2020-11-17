<template>
  <div class="px-2 mt-4 lg:px-48">
    <div class="border-2 p-2 rounded-lg">
      <h1 class="text-lg font-semibold">Informations personnelles</h1>
      <hr class="mb-2">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/6">
          <label class="form-label" for="inline-full-name">
            Titre
          </label>
        </div>
        <div>
          <select class="form-select" v-model="title">
            <option value="h">Professeur</option>
            <option value="m">Docteur</option>
          </select>
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/6">
          <label class="form-label" for="inline-full-name">
            Nom
          </label>
        </div>
        <div class="md:w-3/4">
          <input class="form-input w-full" type="text" value="Doe" v-model="name">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/6">
          <label class="form-label" for="inline-full-name">
            Prénom
          </label>
        </div>
        <div class="md:w-3/4">
          <input class="form-input w-full" type="text" value="Jane" v-model="first_name">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/6">
          <label class="form-label" for="inline-full-name">
            Photo de profil
          </label>
        </div>
        <div class="md:w-3/4 flex">
          <input class="form-input w-1/2" type="text" value="Jane Doe" v-model="profil">
          <button class="btn-green flex">
            <svg class="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
            Choisir un fichier
          </button>
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/6">
          <label class="form-label" for="inline-full-name">
            ONM
          </label>
        </div>
        <div class="md:w-3/4">
          <input class="form-input w-full" type="number" value="Jane Doe" v-model="onm">
        </div>
      </div>
      <div class="md:flex mb-6">
        <div class="md:w-1/6">
          <label class="form-label mt-2" for="inline-full-name">
            Spécialités
          </label>
        </div>
        <div class="md:w-3/4">
          <div class="flex">
            <input class="form-input w-1/2" type="text" value="Jane Doe" v-model="speciality">
            <button class="btn-green flex" @click="addSpeciality">
              <svg class="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              Ajouter
            </button>
          </div>
          <div class="w-auto">
            <Chips v-for="speciality in specialities" :key="speciality" :content="speciality" class="mr-1" />
          </div>
        </div>
      </div>
      <div>
        <div class="md:flex mb-6">
          <div class="md:w-1/6 mt-2">
            <label class="form-label" for="inline-full-name">
              Adresse
            </label>
          </div>
          <div class="md:w-3/4">
            <div class="md:w-3/4 mb-1">
              <input class="form-input w-full" type="text" placeholder="Région" v-model="region">
            </div>
            <div class="md:w-3/4 mb-1">
              <input class="form-input w-full" type="text" placeholder="Commune" v-model="commune">
            </div>
            <div class="md:w-3/4 mb-1">
              <input class="form-input w-full" type="text" placeholder="Logement" v-model="logement">
            </div>
            <div class="md:w-3/4 flex items-center">
              <input class="form-input w-full" type="text" placeholder="Coordonnées géographiques">
              <svg class="w-6 h-6 ml-1 text-gray-600 cursor-pointer" @click="showModal = !showModal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
          </div>          
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/6">
          <label class="form-label" for="inline-full-name">
            Mail
          </label>
        </div>
        <div class="md:w-3/4">
          <div class="flex">
            <input class="form-input w-1/2" type="text" value="Jane Doe" v-model="mail">
            <button class="btn-green flex" @click="addMail">
              <svg class="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              Ajouter
            </button>
          </div>
          <div class="w-auto">
            <Chips v-for="mail in mails" :key="mail" v-bind:content="mail" class="mr-1"/>
          </div>
        </div>
      </div>
      <div class="md:flex mb-6">
        <div class="md:w-1/6">
          <label class="form-label mt-2" for="inline-full-name">
            Tel
          </label>
        </div>
        <div class="md:w-3/4">
          <div class="flex">
            <input class="form-input w-1/2" type="text" value="Jane Doe" v-model="phone">
            <button class="btn-green flex" @click="addPhone">
              <svg class="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              Ajouter
            </button>
          </div>
          <div class="w-auto">
            <Chips v-for="phone in phones" :key="phone" v-bind:content="phone" class="mr-1"/>
          </div>
        </div>
      </div>
      <div class="md:flex mb-2">
        <div class="md:w-1/6 mt-2">
          <label class="form-label" for="inline-full-name" v-html="presentation">
            Présentation
          </label>
        </div>
        <div class="md:w-3/4">
          <editor
            api-key="bs6v8jm3fp81oul3t9kiuhseotbs45vmynfw8098gfcob8zx"
            :init="{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help'
            }"
          />
        </div>
      </div>
      <vue-tailwind-modal
        :showing=showModal
        @close="showModal = false"
        backgroundClose
      >
        <div>
          <p class="font-bold mb-1 text-lg">Afficher votre position actuelle sur la carte</p>
          <p class="flex">1 - Ouvrez 
            <a class="font-semibold text-blue-800 ml-1 flex" href="https://www.google.fr/maps/" target="_blank">
              Google Maps
              <svg class="w-5 h-5 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
             sur votre ordinateur.</p>
          <p>2 - En bas à droite, cliquez sur Ma position Localisation. Le point bleu indique votre position.</p>
          <p>3 - Cliquez sur le point bleu et copiez la combinaison latitude, longitude</p>
          <p class="font-semibold">Ex : -18.833418, 47.553575</p>
        </div>
      </vue-tailwind-modal>
    </div>
    <div class="border-2 p-2 mt-2 rounded-lg">
      <h1 class="text-lg font-semibold">Liens externes</h1>
      <hr class="mb-2">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/6">
          <label class="form-label" for="inline-full-name">
            Facebook
          </label>
        </div>
        <div class="md:w-3/4">
          <input class="form-input w-full" type="text" value="Jane Doe" v-model="facebook">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/6">
          <label class="form-label" for="inline-full-name">
            Twitter
          </label>
        </div>
        <div class="md:w-3/4">
          <input class="form-input w-full" type="text" value="Jane Doe" v-model="twitter">
        </div>
      </div>
      <div class="md:flex md:items-center mb-2">
        <div class="md:w-1/6">
          <label class="form-label" for="inline-full-name">
            LinkedIn
          </label>
        </div>
        <div class="md:w-3/4">
          <input class="form-input w-full" type="text" value="Jane Doe" v-model="linkedin">
        </div>
      </div>
    </div>
    <div class="w-full my-4 flex">
      <nuxt-link to="/inscription/offre" class="mx-auto">
        <button class="btn-green rounded-md flex space-x-1">
          <span>Suivant</span>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import VueTailwindModal from 'vue-tailwind-modal'

export default {
  components: {
    'editor': Editor, 
	  VueTailwindModal
  },
  data() {
    return {
      showModal: false,
      title: '',
      name: '',
      first_name: '',
      profil: '', 
      onm: '',
      speciality: '',
      specialities: [],
      region: '',
      commune: '',
      logement: '',
      mail: '',
      mails: [],
      phone: '',
      phones: [],
      presentation: '',
      facebook: '',
      twitter: '',
      linkedin: ''
    }
  },
  methods: {
    goTo(path) {
      this.$route.push({
        path: path
      })
    },
    addPhone() {
      if (this.phone)
        this.phones.push(this.phone)
    },
    addMail() {
      if (this.mail)
        this.mails.push(this.mail)
    },
    addSpeciality() {
      if (this.speciality)
        this.specialities.push(this.speciality)
    },
    storeData() {
      if (process.browser) {
        localStorage.setItem('title', this.title)
        localStorage.setItem('name', this.name)
        localStorage.setItem('first_name', this.first_name)
        localStorage.setItem('profil', this.profil)
        localStorage.setItem('onm', this.onm)
        localStorage.setItem('region', this.region)
        localStorage.setItem('commune', this.commune)
        localStorage.setItem('logement', this.logement)
        localStorage.setItem('presentation', this.presentation)
        localStorage.setItem('facebook', this.facebook)
        localStorage.setItem('twitter', this.twitter)
        localStorage.setItem('linkedin', this.linkedin)
        localStorage.setItem('specialities', JSON.stringify(this.specialities))
        localStorage.setItem('mails', JSON.stringify(this.mails))
        localStorage.setItem('phones', JSON.stringify(this.phones))
      }
    },
    fillForm() {
      if (process.browser) {
        this.title = localStorage.getItem('title') ? localStorage.getItem('title') : ''
        this.name = localStorage.getItem('name') ? localStorage.getItem('name') : ''
        this.first_name = localStorage.getItem('first_name') ? localStorage.getItem('first_name') : ''
        this.profil = localStorage.getItem('profil') ? localStorage.getItem('profil') : ''
        this.onm = localStorage.getItem('onm') ? localStorage.getItem('onm') : ''
        this.region = localStorage.getItem('region') ? localStorage.getItem('region') : ''
        this.commune = localStorage.getItem('commune') ? localStorage.getItem('commune') : ''
        this.logement = localStorage.getItem('logement') ? localStorage.getItem('logement') : ''
        this.presentation = localStorage.getItem('presentation') ? localStorage.getItem('presentation') : ''
        this.facebook = localStorage.getItem('facebook') ? localStorage.getItem('facebook') : ''
        this.twitter = localStorage.getItem('twitter') ? localStorage.getItem('twitter') : ''
        this.linkedin = localStorage.getItem('linkedin') ? localStorage.getItem('linkedin') : ''
        this.specialities = localStorage.getItem('specialities') ? JSON.parse(localStorage.getItem('specialities')) : []
        this.mails = localStorage.getItem('mails') ? JSON.parse(localStorage.getItem('mails')) : []
        this.phones = localStorage.getItem('phones') ? JSON.parse(localStorage.getItem('phones')) : []
      }
    }
  },
  mounted() {
    this.fillForm()
  }
}
</script>