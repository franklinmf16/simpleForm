<template>
  <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">
        <div class="box">

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
              <button type="button" class="button" @click="next()">Next</button>
      </div>
      </div>
  </div>
</template>


