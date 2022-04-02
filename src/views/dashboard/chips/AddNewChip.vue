<template>
  <div class="chip_types">
    <div class="header d-flex">
      <h2 class="heading-secondary">Add new chip</h2>
    </div>

    <main class="main-spinner" v-if="isLoading">
      <b-spinner class="spinner mt-5" label="Loading..."></b-spinner>
    </main>

    <div v-else>
      <b-form @submit.prevent="addNewChip" class="mt-4 p-3">

        <div class="messages">
          <h2 class="messages__error" v-if="error">{{ error }}</h2>
          <h2 class="messages__success" v-if="success">{{ success }}</h2>
        </div>

        <div class="row">
          <div class="col-2 label">
            <label>Name</label>
          </div>
          <div class="col-10">
            <input type="text" v-model="chip.name" placeholder="Name">
          </div>
        </div>

        <div class="row">
          <div class="col-2 label">
            <label>Chip type</label>
          </div>
          <div class="col-10">
            <b-form-select class="custom-select" placeholder="Name"
                           v-model="chip.chip_version_id"
                           :options="chip_versions"
                           value-field="id"
                           text-field="name"
                           required>
            </b-form-select>
          </div>
        </div>

        <button type="submit" class="btn mt-5">Add new chip type</button>
      </b-form>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "AddNewChip",
  data() {
    return {
      isLoading: false,
      error: '',
      success: '',
      chip_versions: [],
      chip: {
        name: '',
        chip_version_id: ''
      }
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
    async addNewChip() {
      this.isLoading = true;

      let token = this.$store.getters.token;

      let myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        "name": this.chip.name,
        "chip_version_id": this.chip.chip_version_id
      });

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      let url = "http://localhost:8081/api/chips";

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
            this.success = result
            router.push("/chips")
          })
          .catch(error => {
            this.error = error.message
            console.log(error)
          });

      this.isLoading = false;
    },

  }

}
</script>

<style scoped lang="scss">
@import "../../../assets/sass/dashboard-childs.scss";

.header {
  justify-content: space-between;
}

input, .custom-select {
  padding: 1rem 2rem;
  font-size: 1.5rem;
  background-color: rgba($color-white, .5);
  margin: 2rem 0;
  display: block;
  width: 100%;
  border: 1px solid #c1c1c1;

  &:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba($color-black, .1);
    border: 1px solid $color-primary;
  }

  &::-webkit-input-placeholder {
    color: $color-grey-dark-2;
  }

}

.img {
  max-height: 50rem;
  max-width: 50rem;

  & img {
    max-height: 100%;
    max-width: 100%;

  }
}


.badge {
  padding: 1rem 2rem;

  &::selection {
    background-color: $color-white;
    color: $color-danger;
  }
}

.hidden {
  display: none;
}

.btn-image-header {
  border: 1px solid #c1c1c1;
  padding: 5px 10px;
  color: $color-primary;
  width: 160px;
  margin: 10px;
  cursor: pointer;
}

.btn-image-header i {
  margin: auto 0;
  font-size: 120%;
}

.btn-image-header p {
  margin: auto 5px;
}

.btn-remove-image-header {
  border: 1px solid #c1c1c1;
  padding: 5px 10px;
  width: 200px;
  margin: 10px;
}

.btn-remove-image-header p {
  margin: auto 5px;
}

.btn-remove-image-header .fa-image {
  margin: auto 0;
  font-size: 120%;
  color: $color-primary;
}

.btn-remove-image-header .fa-times {
  margin: auto 5px auto auto;
}

.btn-remove-image-header .fa-times:hover {
  color: $color-primary;
}

.label {
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-select {
  height: auto;
}

</style>