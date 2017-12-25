<template>
  <div class="profiles-list-component">
    <div class="check-later-container" v-if="added.length > 0">
      <ul class="check-later">
        <li class="profile-later" v-for="item in added" :key="item.id">
          <router-link :to="`/profile/${item.id}`">
            <img :src="`static/${item.photo}`"/>
          </router-link>
          {{ item.first_name }} {{ item.last_name }}
        </li>
      </ul>
    </div>
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
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'ProfilesList',
  computed: mapState({
    added (state) {
      return state.added.map(id => {
        return this.profilesMap[id]
      })
    },
    addedMap: 'addedMap'
  }),
  methods: {
    ...mapMutations([
      'addToCheckLater'
    ])
  },
  data: function () {
    return {
      profilesMap: Profiles.reduce((memo, next) => ({ [next.id]: next, ...memo }), {}),
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
  .check-later-container {
    overflow-y: scroll;
  }
  .check-later {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  .profile-later img {
    width: 100%;
  }
  .profiles-list-container {
    overflow-y: scroll;
  }
</style>
