<template>
  <div>
    <div class="mb-2">
      <star-rating star-size=25 read-only rating=2 :show-rating=false />
      <span class="text-lg font-semibold">Note 2.0 / 7</span>
    </div>
    <div class="p-2 flex border-2 rounded-md">
      <img class="h-16 object-contain rounded-md" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/33983/young-man-clipart-md.png" alt="">
      <div class="ml-2 w-full">
        <div class="mb-1 flex justify-between">
          <div class="leading-4">
            <div class="font-bold text-gray-800">Naris</div>
            <div class="text-gray-600 text-xs text-al">Il y a 2 semaines</div>
          </div>
          <div class="cursor-pointer">
            <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>
        <div class="text-gray-800">
          will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of 
        </div>
        <hr class="my-2">
        <div class="flex text-gray-800">
          <div class="flex cursor-pointer">
            <span class="mr-1">2</span>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
          </div>
          <div class="flex ml-10 cursor-pointer">
            <span class="mr-1">6</span>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"></path></svg>
          </div>
        </div>
      </div>
    </div>
    <div class="my-2 p-1 bg-gray-200">
      <div>Votre note :</div>
      <star-rating class="pb-2 text-2xl text-green-600" star-size=40 />
      <div class="flex">
        <input class="input flex-grow-0 w-full" type="text" placeholder="Tapez ici votre commaintaire">
        <button class="btn-green">Envoyer</button>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  components: {
    StarRating
  }
}
</script>
