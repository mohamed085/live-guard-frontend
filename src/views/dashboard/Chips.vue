<template>
  <div class="chips">
    <div class="header d-flex">
      <h2 class="heading-secondary">Chips</h2>
      <router-link to="/add-new-chip" class="btn add-button">Add new chip</router-link>
    </div>

    <main class="main-spinner" v-if="isLoading">
      <b-spinner class="spinner mt-5" label="Loading..."></b-spinner>
    </main>

    <div v-else>
      <div class="messages">
        <h2 class="messages__error" v-if="error">{{ error }}</h2>
        <h2 class="messages__success" v-if="success">{{ success }}</h2>
      </div>

      <div v-if="chips.length > 0">
        <table class="table table-striped table-bordered table-hover">
          <thead class="table__head">
          <tr class="table__head-tr text-white">
            <th><span>#</span></th>
            <th><span>Name</span></th>
            <th><span>Photo</span></th>
            <th><span>Password</span></th>
            <th><span>Is used</span></th>
            <th><span></span></th>

          </tr>
          </thead>
          <tbody>
          <tr v-for="chip in chips" :key="chip.id">
            <th><span>{{ chip.id }}</span></th>
            <th><span>{{ chip.name }}</span></th>
            <th><span><img class="table__chip-type-image" src="../../assets/img/nat-6.jpg"></span></th>
            <th><span>{{ chip.password }}</span></th>
            <th><span>{{ chip.used }}</span></th>
            <th>
              <span>
                <router-link class="table__icon-link" :to="'/chip/' + chip.id "><i class="far fa-eye"></i></router-link> |
                <i @click="deleteChip(chip.id)" class="table__icon-link fas fa-trash"></i>
              </span>
            </th>
          </tr>
          </tbody>
        </table>

      </div>

      <div v-else class="p-4">
        Not found any chips
      </div>

    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Chips",
  data() {
    return {
      error: '',
      success: '',
      isLoading: '',
      chips: [],
    }
  },
  created() {
    this.loadChips();
  },
  methods: {
    async loadChips() {
      this.isLoading = true;

      let token = this.$store.getters.token;

      let myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let url = "https://live-guard.herokuapp.com/api/chips";

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
            this.chips = result
          })
          .catch(error => {
            this.error = error.message
            console.log(error)
          });

      this.isLoading = false;
    },
    async deleteChip(id) {
      this.isLoading = true;
      this.chips = []

      let token = this.$store.getters.token;

      let myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);

      let requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
      };

      let url = 'https://live-guard.herokuapp.com/api/chips/' + id;

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
            this.success = result.message
          })
          .catch(error => {
            this.error = error.message
            console.log(error)
          });

      await this.loadChips();

      this.isLoading = false;
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/sass/dashboard-childs.scss";

.header {
  justify-content: space-between;
}

</style>