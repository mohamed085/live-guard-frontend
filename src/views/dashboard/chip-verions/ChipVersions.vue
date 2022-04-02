<template>
  <div class="chip_types">
    <div class="header d-flex">
      <h2 class="heading-secondary">Chip versions</h2>
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

      <div v-if="chip_versions.length > 0">
        <table class="table table-striped table-bordered table-hover">
          <thead class="table__head">
          <tr class="table__head-tr text-white">
            <th><span>Name</span></th>
            <th><span>Main image</span></th>
            <th><span>Cost</span></th>
            <th><span>Price</span></th>
            <th><span>Discount percent</span></th>
            <th><span>Enabled</span></th>
            <th><span>In stock</span></th>
            <th><span>Create date</span></th>
            <th><span>Vendor</span></th>
            <th><span></span></th>

          </tr>
          </thead>
          <tbody>
          <tr v-for="chip_version in chip_versions" :key="chip_version.id">
            <th><span>{{ chip_version.name }}</span></th>
            <th><span><img class="table__chip-type-image" src="../../../assets/img/nat-6.jpg"></span></th>
            <th><span>{{ chip_version.cost }}</span></th>
            <th><span>{{ chip_version.price }}</span></th>
            <th><span>{{ chip_version.discount_percent }} %</span></th>
            <th>
              <span>
                <i v-if="chip_version.enabled" @click="updateEnabledStatus(chip_version.id, false)" class="enable-icon fas fa-check-circle fa-2x"></i>
                <i v-if="!chip_version.enabled" @click="updateEnabledStatus(chip_version.id, true)" class="enable-icon fas fa-circle fa-2x"></i>
              </span>
            </th>
            <th>
              <span>
                <i v-if="chip_version.in_stock" @click="updateInStockStatus(chip_version.id, false)" class="enable-icon fas fa-check-circle fa-2x"></i>
                <i v-if="!chip_version.in_stock" @click="updateInStockStatus(chip_version.id, true)" class="enable-icon fas fa-circle fa-2x"></i>
              </span>
            </th>
            <th><span>{{ chip_version.created_time }}</span></th>
            <th>
              <span>
                <router-link class="table__icon-link" :to="'/chip-version/' + chip_version.id "><i class="far fa-eye"></i></router-link>
                <router-link class="table__icon-link" :to="'/edit-chip-version/' + chip_version.id "><i class="far fa-edit"></i></router-link>
              </span>
            </th>
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
  name: "ChipVersions",
  data() {
    return {
      error: '',
      success: '',
      isLoading: '',
      chip_versions: [],
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

      let url = "https://live-guard.herokuapp.com/api/chip-versions";

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
            this.chip_versions = result;
          })
          .catch(error => {
            this.error = error.message
            console.log(error)
          });

      this.isLoading = false;
    },
    async updateInStockStatus(id, status) {
      this.isLoading = true
      this.chip_versions = []

      let token = this.$store.getters.token;

      let myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let url = 'https://live-guard.herokuapp.com/api/chip-versions/in-stock/' + id + '/' + status;

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
      this.chip_versions = []

      let token = this.$store.getters.token;

      let myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let url = 'https://live-guard.herokuapp.com/api/chip-versions/' + id + '/enabled/' + status;

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
@import "../../../assets/sass/dashboard-childs";

.header {
  justify-content: space-between;
}

.table__vendor-link {
  color: $color-black;
  text-decoration: none;

  &:hover {
    color: $color-primary;
  }
}

.enable-icon {
  cursor: pointer;

  &:hover {
    color: $color-primary;
  }
}
</style>