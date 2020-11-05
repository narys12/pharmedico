<template>
  <div class="my-4 px-2 lg:px-48">
    <div>
      <h1 class="mb-4 font-semibold text-xl">
        Vos Médecins
      </h1>
      <div>
        <ResultCard class="result-card" />
      </div>
      <div class="flex justify-center mt-4">
        <a class="flex btn-green rounded shadow-xl" href="/search-results">
          <span class="mr-1">Voir plus</span>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
        </a>
      </div>
    </div>
    <div class="mt-6">
      <h1 class="mb-4 font-semibold text-xl">
        Vos Pharmacies
      </h1>
      <div>
        <ResultCard class="result-card" />
        <ResultCard class="result-card" />
        <ResultCard class="result-card" />
        <ResultCard class="result-card" />
      </div>
      <div class="flex justify-center mt-4">
        <a class="flex btn-green rounded shadow-xl" href="/search-results">
          <span class="mr-1">Voir plus</span>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      medecins: [
        {
          id: 1,
          name: 'Razafimahatratra',
          firtsName: 'Naris',
          ratingAverage: 3.2,
          ratingCount: 10,
          adress: {
            region: 'Analamanga',
            commune: 'Antananarivo Renivohitra',
            logement: 'B 55'
          },
          tel: [ '032 63 498 64', '020 24 645 88' ],
          mail: 'naris@gmail.com'
        }
      ]
    }
  }
}
</script>

