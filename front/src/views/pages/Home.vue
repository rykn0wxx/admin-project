<template>
  <v-container fluid class="tw-h-full tw-pt-6">
    <v-layout row fill-height>
      <v-flex sm6 class="flex tw-flex tw-items-center tw-justify-center">
        <div>
          <h3 class="md-display-2">
            Lorem, ipsum dolor.
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nam quaerat amet a, tenetur provident suscipit nostrum necessitatibus ab officia quia, cumque doloribus quo voluptas laborum in et optio esse.
          </p>
        </div>
      </v-flex>
      <v-flex sm5 offset-sm1 class="tw-pt-2">
        <v-img contain height="80%" :src="require('../../assets/img/svg/bg001.svg')" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Home'
}
</script>
