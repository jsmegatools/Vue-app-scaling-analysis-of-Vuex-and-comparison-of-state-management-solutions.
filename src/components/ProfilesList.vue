<template>
  <ul class="profiles-list">
    <li class="profile" v-for="item in Profiles" v-bind:key="item.id">
      <router-link v-bind:to="`/profile/${item.id}`">
        <img v-bind:src="`static/${item.photo}`" />
      </router-link>
      {{ item.first_name }} {{ item.last_name }}
    </li>
  </ul>
</template>

<script>
import Profiles from '../mock_data.js'

export default {
  name: 'ProfilesList',
  data: function () {
    return {
      Profiles
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .profiles-list {
    padding: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .profile {
    display: flex;
    flex-direction: column;
  }
  .profile img {
    height: 200px;
    width: 200px;
  }
</style>
