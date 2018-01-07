<template>
  <div class="check-later-toolbar">
    <div class="check-later-button" @click="toggleDropdown()">
      <div class="has-check-later" v-if="added.length"></div>
      <ul class="check-later" v-if="added.length && showDropdown">
        <li class="profile-later" v-for="item in added" :key="item.id">
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
    toggleDropdown () {
      this.showDropdown = !this.showDropdown
    }
  },
  data: function () {
    return {
      profilesMap: Profiles.reduce((memo, next) => ({ [next.id]: next, ...memo }), {}),
      showDropdown: false
    }
  }
}
</script>

<style scoped>
  .check-later-toolbar {
    padding: 10px;
    display: flex;
    justify-content: flex-end;
  }
  .check-later-button {
    height: 50px;
    width: 50px;
    background: blue;
    cursor: pointer;
    position: relative;
  }
  .check-later {
    position: absolute;
    top: 100%;
    background: white;
    width: 200px;
    display: flex;
    flex-direction: column;
    right: 0;
    border: 1px solid #aaa;
  }
  .has-check-later {
    position: absolute;
    background: red;
    height: 25px;
    width: 25px;
    top: 0;
    right: 0;
  }
</style>
