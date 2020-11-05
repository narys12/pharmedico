<template>
  <div class="mt-2 p-2 md:flex md:space-x-2 bg-gray-100 shadow-md">
    <select class="w-full md:w-40 select block mb-2 md:mb-0 md:inline" name="type">
      <option value="med">Médecin</option>
      <option value="phar">Pharmacie</option>
    </select>
    <input type="text" placeholder="Nom" class="input w-full md:flex-grow mb-2 md:mb-0 block md:inline md:w-1/4"/>
    <input type="lieu" placeholder="Lieu" class="input w-full md:flex-grow mb-2 md:mb-0 block md:inline md:w-1/4">
    <a class="btn-green block md:inline md:w-auto" href="/search-results">
      <svg class="w-6 h-6 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      <span>Rechercher</span>
    </a>
  </div>
</template>
