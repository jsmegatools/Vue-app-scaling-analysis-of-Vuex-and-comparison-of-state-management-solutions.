<template>
  <div>
    <div class="menu-button" v-if="added.length > 0" @click="toggleSidebar()"></div>
    <div class="check-later-container" v-if="added.length && showSidebar">
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
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  computed: mapGetters([
    'added'
  ]),
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
      showSidebar: true
    }
  }
}
</script>

<style scoped>
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
