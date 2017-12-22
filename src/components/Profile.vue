<template>
  <div class="profile">
    <router-link v-bind:to="`/`">
      Home
    </router-link>
    <div>{{ profile.first_name }} {{ profile.last_name }}</div>
    <img v-bind:src="`static/${profile.photo}`" />
    <h1>Reviews</h1>
    <ul class="show_reviews">
      <li class="show_review" v-for="review in profile.reviews" :key="review.id">
        <span>{{ review.reviewer }}</span>
        <p>{{ review.text }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Profiles from '../mock_data.js'

export default {
  name: 'Profile',
  created: function () {
    setTimeout(() => {
      this.profile = Profiles.find(profile => {
        return profile.id === +this.$route.params.id
      })
    })
  },
  data: function () {
    return {
      profile: {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .profile_reviews {
    list-style: none;
    text-align: left;
  }
  .profile_review {
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 5px;
    padding: 5px;
  }
</style>
