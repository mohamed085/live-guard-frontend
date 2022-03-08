<template>
  <div class="chip_types">
    <div class="header d-flex">
      <h2 class="heading-secondary">Chip Types</h2>
      <router-link to="/add-new-chip-type" class="btn add-button">Add new chip type</router-link>
    </div>

    <main class="main-spinner" v-if="isLoading">
      <b-spinner class="spinner mt-5" label="Loading..."></b-spinner>
    </main>

    <div v-else>

      <div class="messages">
        <h2 class="messages__error" v-if="error">{{ error }}</h2>
        <h2 class="messages__success" v-if="success">{{ success }}</h2>
      </div>

      <div v-if="chip_types.length > 0">
        <table class="table table-striped table-bordered table-hover">
          <thead class="table__head">
          <tr class="table__head-tr text-white">
            <th><span>Name</span></th>
            <th><span>Main image</span></th>
            <th><span>Cost</span></th>
            <th><span>Discount percent</span></th>
            <th><span>Enabled</span></th>
            <th><span>In stock</span></th>
            <th><span>Create date</span></th>
            <th><span></span></th>

          </tr>
          </thead>
          <tbody>
          <tr v-for="chip_type in chip_types" :key="chip_type.id">
            <th><span>{{ chip_type.name }}</span></th>
            <th><span><img class="table__chip-type-image" src="../../assets/img/nat-6.jpg"></span></th>
            <th><span>{{ chip_type.cost }}</span></th>
            <th><span>{{ chip_type.discount_percent }} %</span></th>
            <th>
              <span>
                <i v-if="chip_type.enabled" @click="updateEnabledStatus(chip_type.id, false)" class="enable-icon fas fa-check-circle fa-2x"></i>
                <i v-if="!chip_type.enabled" @click="updateEnabledStatus(chip_type.id, true)" class="enable-icon fas fa-circle fa-2x"></i>
              </span>
            </th>
            <th>
              <span>
                <i v-if="chip_type.in_stock" @click="updateInStockStatus(chip_type.id, false)" class="enable-icon fas fa-check-circle fa-2x"></i>
                <i v-if="!chip_type.in_stock" @click="updateInStockStatus(chip_type.id, true)" class="enable-icon fas fa-circle fa-2x"></i>
              </span>
            </th>
            <th><span>{{ chip_type.create_date }}</span></th>
            <th><span>
              <router-link class="table__icon-link" :to="'/chip-type/' + chip_type.id "><i class="far fa-eye"></i></router-link>
              <router-link class="table__icon-link" :to="'/edit-chip-type/' + chip_type.id "><i class="far fa-edit"></i></router-link>
            </span></th>
          </tr>
          </tbody>
        </table>
      </div>

      <div v-else class="p-4">
        Not found any chip types
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: "ChipTypes",
  data() {
    return {
      error: '',
      success: '',
      isLoading: '',
      chip_types: [],
    }
  },
  created() {
    this.loadChipTypes();
  },
  methods: {
    async loadChipTypes() {
      this.isLoading = true;

      let token = this.$store.getters.token;

      let myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let url = "https://live-guard.herokuapp.com/api/chip-types";

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
            this.chip_types = result;
          })
          .catch(error => {
            this.error = error.message
            console.log(error)
          });

      this.isLoading = false;
    },
    async updateInStockStatus(id, status) {
      this.isLoading = true
      this.chip_types = []

      let token = this.$store.getters.token;

      let myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let url = 'https://live-guard.herokuapp.com/api/chip-types/in-stock/' + id + '/' + status;

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
            this.success = result.message;
          })
          .catch(error => {
            this.error = error.message
            console.log(error)
          });


      await this.loadChipTypes()
      this.isLoading = false
    },
    async updateEnabledStatus(id, status) {
      this.isLoading = true
      this.chip_types = []

      let token = this.$store.getters.token;

      let myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let url = 'https://live-guard.herokuapp.com/api/chip-types/enabled/' + id + '/' + status;

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
            this.success = result.message;
          })
          .catch(error => {
            this.error = error.message
            console.log(error)
          });


      await this.loadChipTypes()
      this.isLoading = false
    },
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/sass/dashboard-childs.scss";

.header {
  justify-content: space-between;
}

.enable-icon {
  cursor: pointer;

  &:hover {
    color: $color-primary;
  }
}
</style>