<template>
  <div class="px-2 mt-4 lg:px-48 flex flex-col space-y-4 md:flex-row md:justify-around md:space-x-4 md:space-y-0">
    <div class="card-offer md:space-y-3">
      <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <h1 class="card-title">Basique</h1>
      <h2 class="card-offer-price">Ar 39 000 / mois</h2>
      <div class="leading-7">
        <div>1 article</div>
        <div>1 numéro</div>
        <div>-</div>
        <div>-</div>
        <div>-</div>
        <div>1 photos</div>
        <div>1 avis</div>
      </div>
      <button class="card-button" @click="chooseOffer(1)">Commander</button>
    </div>
    <div class="card-offer md:space-y-3">
      <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
      <h1 class="card-title">Standard</h1>
      <h2 class="card-offer-price">Ar 79 000 / 3 mois</h2>
      <div class="leading-7">
        <div>5 articles</div>
        <div>3 numéros</div>
        <div>Map intégré</div>
        <div>Recommandations</div>
        <div>Publication sur notre réseaux sociaux</div>
        <div>3 Photos</div>
        <div>3 Avis</div>
      </div>
      <button class="card-button" @click="chooseOffer(2)">Commander</button>
    </div>
    <div class="card-offer md:space-y-3">
      <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
      <h1 class="card-title">Premium</h1>
      <h2 class="card-offer-price">Ar 119 000 / 6 mois</h2>
      <div class="leading-7">
        <div>Articles illimitées</div>
        <div>Numéros illimitées</div>
        <div>Map intégré</div>
        <div>Recommandations</div>
        <div>Publication sur notre reseaux sociaux</div>
        <div>Photos illimitées</div>
        <div>Avis illimitées</div>
      </div>
      <button class="card-button" @click="chooseOffer(2)">Commander</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offer: 1,
      doctor: {},
      pharmacy: {},
      client: {}
    }
  },
  methods: {
    chooseOffer(i) {
      this.offer = i
      if (process.browser) {
        let isDoctor = localStorage.getItem('is_doctor')
        let isPharmacy = localStorage.getItem('is_pharmacy')
        alert(isDoctor)
        if (isDoctor) {
          saveDoctorData()
        } else if (isPharmacy) {
          savePharmacyData()
        }
      }
    },
    saveDoctorData() {
      alert(JSON.stringify(this.doctor))
    },
    savePharmacyData() {

    },
    getDoctorFromLocalStorage() {
      this.doctor.title = localStorage.getItem('title') ? localStorage.getItem('title') : ''
      this.doctor.name = localStorage.getItem('name') ? localStorage.getItem('name') : ''
      this.doctor.first_name = localStorage.getItem('first_name') ? localStorage.getItem('first_name') : ''
      this.doctor.profil = localStorage.getItem('profil') ? localStorage.getItem('profil') : ''
      this.doctor.onm = localStorage.getItem('onm') ? localStorage.getItem('onm') : ''
    },
    getPharmacyFromLocalStorage() {
      this.pharmacy.name = localStorage.getItem('name') ? localStorage.getItem('name') : ''
    },
    getClientFromLocalStorage() {
      if (process.browser) {
        this.client.region = localStorage.getItem('region') ? localStorage.getItem('region') : ''
        this.client.commune = localStorage.getItem('commune') ? localStorage.getItem('commune') : ''
        this.client.logement = localStorage.getItem('logement') ? localStorage.getItem('logement') : ''
        this.client.presentation = localStorage.getItem('presentation') ? localStorage.getItem('presentation') : ''
        this.client.facebook = localStorage.getItem('facebook') ? localStorage.getItem('facebook') : ''
        this.client.twitter = localStorage.getItem('twitter') ? localStorage.getItem('twitter') : ''
        this.client.linkedin = localStorage.getItem('linkedin') ? localStorage.getItem('linkedin') : ''
        this.client.specialities = localStorage.getItem('specialities') ? JSON.parse(localStorage.getItem('specialities')) : []
        this.client.mails = localStorage.getItem('mails') ? JSON.parse(localStorage.getItem('mails')) : []
        this.client.phones = localStorage.getItem('phones') ? JSON.parse(localStorage.getItem('phones')) : []
      }
    }
  }
}
</script>


<style lang="postcss" scoped>
.card-offer {
  @apply flex flex-col text-center shadow-md w-full p-5 rounded-md bg-gray-400 max-w-xs mx-auto
}

.card-icon {
  @apply block w-16 h-16 mx-auto text-gray-600
}

.card-title {
  @apply text-red-600 font-semibold text-lg
}

.card-offer-price {
  @apply text-green-600 font-semibold
}

.card-button {
  @apply w-40 mx-auto shadow-md bg-green-600 text-white rounded-full py-1 px-2 font-semibold transition ease-in-out duration-300
}

.card-button:hover {
  @apply bg-green-400
}

@screen md {
  .card-offer {
    @apply w-1/3
  }
}
</style>

