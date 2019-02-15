<template>
  <div class="container has-text-centered">
    <div class="column is-4 is-offset-4">
      <div class="box">
          <label for="name" class="label">Page two</label>
          <div class="field">
            <div class="control">
            <label for="name" class="label">Name</label>
            <div class="select">
                <select
                  id="name"
                  v-model="name"
                  type="text"
                  name="name"
                  class="select"
                >
                  <option value="Dev">Dev</option>
                  <option value="Manager">Manager</option>
                  <option value="Student">Student</option>
                </select>
            </div>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label for="name" class="label">When did the user first join ?</label>
              <input
                class="input"
                id="date"
                v-model="date"
                type="date"
                name="date"
              >
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label for="name" class="label">Is this person located in Victoria ?</label>
              <input 
                id="location"
                v-model="location"
                value='YES'
                type="radio"
                name="location"
                @click="locationPick()"
              >
              YES
              <input 
                id="location"
                v-model="location"
                value='NO'
                type="radio"
                name="location"
                @click="locationUnPick()"
              >
              NO
            </div>
          </div>

            <div class="field">
            <div class="control">
                <p v-if="isVic">
                  <label for="name" class="label">Where in Victoria ?</label>
                  <input 
                    id="city"
                    v-model="city"
                    type="text"
                    name="city"
                    class="input"
                    input is-large
                  >
                </p>
              </div>
            </div>
            
              <button type="button" class="button" @click="back()">Back</button>
              <button type="button" class="button" @click="submit()">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import axios from 'axios';
export default {
  name: 'pageTwo',store,
  data() {
    if(store.state.pageTwo.length === 0) {
      return {
        name: '',
        date: '',
        location: '',
        city: '',
        isVic: false,
      }
    } else {
      return store.state.pageTwo[store.state.pageTwo.length - 1]
    }
  },
 
  methods: {
    back() {
      store.commit('addItemPageTwo', {
        name: this.name,
        date: this.date,
        location: this.location,
        city: this.city,
        isVic: this.isVic
      })
      this.$router.push('/')
    },
    locationPick() {
      this.isVic = true;
    },

    locationUnPick() {
      this.isVic = false;
    },
    submit() {
      var pageOneContent = JSON.stringify(store.state.lists[store.state.lists.length - 1])
      var pageTwoContent = JSON.stringify(store.state.pageTwo[store.state.pageTwo.length - 1])
      axios.post('https://webhook.site/9dd8975a-2d55-4af7-80d2-1d0716814193', {
        pageOne: pageOneContent,
        pageTwo: {name: this.name,
                  date: this.date,
                  location: this.location,
                  city: this.city,
                  isVic: this.isVic}
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  }
}
</script>
