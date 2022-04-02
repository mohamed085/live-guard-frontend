<template>
  <div class="chips">
    <div class="header d-flex">
      <h2 class="heading-secondary">Chips</h2>
      <router-link to="/add-new-chip" class="btn add-button">Add new chip</router-link>
    </div>

    <div class="filter">
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

        <div class="d-flex justify-content-between align-items-center mb-5">
          <b-form class="d-flex" @submit.prevent="loadChips">
            <input type="text" v-model="keyword" placeholder="Keyword">
            <b-form-select class="select" v-model="sort_field" :options="sort_field_options"></b-form-select>
            <b-form-select class="select" v-model="sort_dir" :options="sort_dir_options"></b-form-select>
            <button type="submit" class="btn">Search</button>
          </b-form>
          <i @click="clear" class="close-icon fas fa-times"></i>
        </div>

        <table class="table table-striped table-bordered table-hover">
          <thead class="table__head">
          <tr class="table__head-tr text-white">
            <th><span>#</span></th>
            <th><span>Name</span></th>
            <th><span>Photo</span></th>
            <th><span>Password</span></th>
            <th><span>Chip version</span></th>
            <th><span>Is used</span></th>
            <th><span></span></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="chip in chips" :key="chip.id">
            <th><span>{{ chip.id }}</span></th>
            <th><span>{{ chip.name }}</span></th>
            <th><span><img class="table__chip-type-image" src="../../../assets/img/nat-6.jpg"></span></th>
            <th><span>{{ chip.password }}</span></th>
            <th>
              <span>
                <router-link :to="'/chip-version/' + chip.chip_version.id">{{ chip.chip_version.name }}</router-link>
              </span>
            </th>
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

        <div class="d-flex justify-content-end m-2">
          <b-pagination-nav @change="loadChips" :link-gen="linkGen" :number-of-pages="total_pages" use-router></b-pagination-nav>
        </div>
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
      total_pages: '',
      total_elements: '',
      sort_field: 'id',
      sort_dir: 'asc',
      keyword: '',
      sort_field_options: [
        { value: "id", text: 'Sort by id' },
        { value: "name", text: 'Sort by Name' },
        { value: "password", text: 'Sort by Password' },
        { value: "used", text: 'Sort by Used' },
      ],
      sort_dir_options: [
        { value: "asc", text: 'Sort ascending' },
        { value: "disc", text: 'Sort descending' },
      ]
    }
  },
  created() {
    this.loadChips();
  },
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    },
    async clear() {
      this.sort_field = 'id';
      this.sort_dir = 'asc';
      this.keyword = '';

      await this.loadChips();
    },
    async loadChips() {
      this.isLoading = true;
      this.chips = []

      let token = this.$store.getters.token;

      let myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let page = 1;
      if (this.$route.query.page) {
        page = this.$route.query.page
      }
      let url = 'https://live-guard.herokuapp.com/api/chips/page/' + page +'?sortField=' + this.sort_field + '&sortDir=' + this.sort_dir + '&keyword=' + this.keyword;

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
            this.chips = result.content
            this.total_pages = result.totalPages
            this.total_elements = result.totalElements
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
@import "../../../assets/sass/dashboard-childs.scss";

.header {
  justify-content: space-between;
}

.table__head i {
  cursor: pointer;
  margin: 0 .5rem;

  &:hover {
    background-color: $color-primary;
    color: $color-white;
  }
}


input, .select {
  padding: .8rem 1.5rem;
  font-size: 1.5rem;
  margin-right: .4rem;
  background-color: rgba($color-white, .5);
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

.btn {
  margin: 0 1rem;
}

.close-icon {
  margin: 0 1rem;
  cursor: pointer;

  &:hover {
    color: $color-primary;
  }
}
</style>