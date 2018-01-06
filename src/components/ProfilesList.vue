<template>
  <div class="profiles-list-component">
    <sidebar></sidebar>
    <div class="profiles-list-container">
      <ul class="profiles-list">
        <li class="profile" v-for="item in Profiles" :key="item.id">
          <router-link :to="`/profile/${item.id}`">
            <img :src="`static/${item.photo}`" />
          </router-link>
          {{ item.first_name }} {{ item.last_name }}
          <button @click="addToCheckLater(item.id)" :disabled="addedMap[item.id]">Check Later</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Profiles from '../mock_data.js'
import Sidebar from './Sidebar'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'ProfilesList',
  computed: mapState({
    addedMap: 'addedMap'
  }),
  methods: {
    ...mapMutations([
      'addToCheckLater'
    ])
  },
  components: {
    sidebar: Sidebar
  },
  data: function () {
    return {
      Profiles
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .profiles-list-component {
    display: flex;
    height: 100%;
  }
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
  .profiles-list-container {
    overflow-y: scroll;
  }
</style>
