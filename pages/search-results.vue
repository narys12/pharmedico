<template>
  <div class="px-2 lg:px-48">
    <SearchBar />
    <div class="my-6">
      <h2 class="text-gray-600 text-xl">
        20 Résultats
      </h2>
      <hr>
    </div>
    <ResultCard class="mb-4 result-card"/>
    <ResultCard class="mb-4 result-card"/>
    <ResultCard class="mb-4 result-card"/>
    <ResultCard class="mb-4 result-card"/>
    <ResultCard class="mb-4 result-card"/>
    <ResultCard class="mb-4 result-card"/>
    <ResultCard class="mb-4 result-card"/>
    <ResultCard class="mb-4 result-card"/>
    <ResultCard class="result-card"/>
    <div class="flex justify-center mt-4">
      <button class="flex btn-green rounded shadow-xl">
        <span class="mr-1">Voir plus</span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
      </button>
    </div>
  </div>
</template>
