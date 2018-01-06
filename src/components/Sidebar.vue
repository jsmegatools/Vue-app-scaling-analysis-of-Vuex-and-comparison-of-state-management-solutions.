<template>
  <div>
    <div class="menu-button" v-if="added.length > 0" @click="toggleSidebar()"></div>
    <div class="check-later-container" v-if="added.length > 0 && showSidebar">
      <ul class="check-later">
        <li class="profile-later" v-for="item in added" :key="item.id">
          <router-link :to="`/profile/${item.id}`">
            <img :src="`static/${item.photo}`"/>
          </router-link>
          {{ item.first_name }} {{ item.last_name }}
          <button @click="removeFromCheckLater(item.id)">Don't check</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Profiles from '../mock_data'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Sidebar',
  computed: mapState({
    added (state) {
      return state.added.map(id => {
        return this.profilesMap[id]
      })
    }
  }),
  methods: {
    ...mapMutations([
      'removeFromCheckLater'
    ]),
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    }
  },
  data: function () {
    return {
      profilesMap: Profiles.reduce((memo, next) => ({ [next.id]: next, ...memo }), {}),
      showSidebar: true
    }
  }
}
</script>

<style>
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
  .menu-button {
    width: 50px;
    height: 50px;
    background-color: red;
    z-index: 1;
    position: absolute;
    cursor: pointer;
  }
</style>
