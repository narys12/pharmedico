<template>
  <div>
    <ul>
      <li class="border-2 rounded-md p-2 hover:border-green-600 transition ease-in-out duration-300">
        <div class="leading-4">
          <div class="lien cursor-pointer font-bold text-gray-800" @click="showModal = !showModal">Aretim-bavony</div>
          <div class="text-gray-600 text-xs text-al">Il y a 2 semaines</div>
        </div>
        <hr class="my-2">
        <div class="flex">
          <div class="flex text-gray-600">
            <span class="mr-1">2</span>
            <svg class="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
          </div>
          <div class="flex ml-10 text-gray-600">
            <span class="mr-1">2</span>
            <svg class="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"></path></svg>
          </div>
          <div class="flex ml-10 text-gray-600">
            <span class="mr-1">2</span>
            <svg class="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
          </div>
        </div>
      </li>
    </ul>
    <vue-tailwind-modal
      :showing=showModal
      @close="showModal = false"
      :showClose="true"
      :backgroundClose="false"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ipsum lorem, efficitur id dapibus congue, suscipit eu urna. Nunc condimentum hendrerit velit, ut tincidunt lacus suscipit ac. Mauris faucibus consequat dui vel sodales. Donec eu malesuada eros. Aenean non suscipit odio, sit amet scelerisque nulla. Maecenas tellus libero, consequat eget imperdiet et, varius id tellus. Duis varius auctor lorem. Ut vitae sapien vehicula, lacinia mauris eu, laoreet lorem. Fusce dignissim convallis lobortis. Suspendisse a est ultrices, blandit tellus at, ultricies est. Cras ante arcu, vestibulum non consequat quis, bibendum tincidunt neque. Proin elit lectus, porta et malesuada ac, lacinia id elit. Curabitur sollicitudin, mauris in consequat pretium, sem dolor molestie nisi, sodales ullamcorper purus tellus sed magna.

      Praesent porttitor augue at tellus interdum ultrices. Morbi et ante eget urna feugiat semper vitae porta augue. Cras massa arcu, volutpat non porttitor non, lacinia nec velit. Integer consequat, ante vel pellentesque blandit, lectus metus commodo massa, in lobortis dui libero et ipsum. Sed congue lectus nec arcu suscipit, nec molestie justo congue. Etiam rhoncus erat id massa blandit, sed dictum lectus egestas. Proin pulvinar elementum dolor, non efficitur enim consectetur scelerisque.

      Vivamus ultricies dignissim nibh, sit amet suscipit mauris euismod sit amet. Maecenas malesuada nulla et nisi pretium, sit amet aliquet leo posuere. Sed blandit magna eget consectetur ullamcorper. Maecenas blandit dolor eu dui congue, sed dapibus urna egestas. Quisque aliquet neque nec libero finibus, vitae consequat nisl dignissim. Donec vulputate enim ut nibh porta pulvinar gravida at orci. Curabitur porttitor dui sed pulvinar laoreet. Aliquam eu tincidunt nulla, quis finibus eros. Aliquam erat volutpat. Quisque a feugiat mauris, id eleifend arcu. Sed congue gravida odio vitae tincidunt. Duis eleifend velit nec risus vestibulum, quis blandit arcu hendrerit.

      Proin accumsan lectus eget mi gravida efficitur. Integer ullamcorper sem ut lobortis tempus. Morbi et dui sit amet nisl egestas sollicitudin sed quis est. Nullam posuere nulla sodales ligula dapibus, id auctor dolor molestie. Phasellus quam massa, consectetur et erat sit amet, viverra fringilla tortor. Pellentesque lacinia sit amet mauris sit amet tristique. Integer volutpat convallis libero in vestibulum. Nunc sollicitudin quam ac ligula fringilla accumsan. Mauris nec turpis sem.

      Nunc a commodo nulla, non gravida risus. Nam mattis neque placerat, malesuada mauris sit amet, suscipit sem. Nunc et laoreet lectus. Suspendisse sed libero consequat metus molestie interdum. Nulla ullamcorper aliquam ultricies. Proin faucibus efficitur ligula, eu tincidunt mauris ornare in. Aenean augue mauris, condimentum a turpis vitae, finibus finibus ante. Quisque turpis nisi, dapibus non magna et, ultrices accumsan neque. Suspendisse potenti. Phasellus lobortis laoreet egestas. Proin erat massa, pretium vel laoreet eu, laoreet nec sem.
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
  }
}
</script>