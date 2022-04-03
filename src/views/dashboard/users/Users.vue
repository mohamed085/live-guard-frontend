<template>
  <div class="customers">
    <div class="header d-flex">
      <h2 class="heading-secondary">Users</h2>
      <router-link to="/add-new-user" class="btn add-button">Add new user</router-link>
    </div>

    <main class="main-spinner" v-if="isLoading">
      <b-spinner class="spinner mt-5" label="Loading..."></b-spinner>
    </main>

    <div v-else>
      <div class="messages">
        <h2 class="messages__error" v-if="error">{{ error }}</h2>
        <h2 class="messages__success" v-if="success">{{ success }}</h2>
      </div>

      <div v-if="users.length > 0">
        <div class="d-flex justify-content-between align-items-center mb-5">
          <b-form class="d-flex" @submit.prevent="loadUsers">
            <input type="text" v-model="keyword" placeholder="Keyword">
            <b-form-select class="select" v-model="sort_field" :options="sort_field_options"></b-form-select>
            <b-form-select class="select" v-model="sort_dir" :options="sort_dir_options"></b-form-select>
            <button type="submit" class="btn">Search</button>
          </b-form>
          <i @click="clear" class="close-icon fas fa-times"></i>
        </div>

        <div class="table-responsive">
          <table class="table table-striped table-bordered table-hover">
            <thead class="table__head">
            <tr class="table__head-tr text-white">
              <th><span>#</span></th>
              <th><span>Avatar</span></th>
              <th><span>Name</span></th>
              <th><span>Email</span></th>
              <th><span>Create date</span></th>
              <th><span>Enabled</span></th>
              <th><span>Roles</span></th>
              <th><span></span></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users" :key="user.id">
              <th><span>{{ user.id }}</span></th>
              <th>
                <span>
                  <b-avatar src="https://pbs.twimg.com/profile_images/1501322370090471424/ObjAN9Dn_400x400.jpg" size="6rem"></b-avatar>
                </span>
              </th>
              <th>
                <span>
                  <router-link class="link" :to="'/user/' + user.id">{{ user.name }}</router-link>
                </span>
              </th>
              <th><span>{{ user.email }}</span></th>
              <th><span>{{ user.create_date }}</span></th>
              <th>
                <span>
                  <i v-if="user.enable" @click="updateEnabledStatus(user.id, false)" class="enable-icon fas fa-check-circle fa-2x"></i>
                  <i v-if="!user.enable" @click="updateEnabledStatus(user.id, true)" class="enable-icon fas fa-circle fa-2x"></i>
                </span>
              </th>
              <th><span>{{ user.roles }}</span></th>
            </tr>
            </tbody>
          </table>

          <div v-if="total_pages > 1" class="d-flex justify-content-end m-2">
            <b-pagination-nav @change="loadUsers" :link-gen="linkGen" :number-of-pages="total_pages" use-router></b-pagination-nav>
          </div>

        </div>

      </div>

      <div v-else class="p-4">
        Not found any users
      </div>

    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Users",
  data() {
    return {
      error: '',
      success: '',
      isLoading: '',
      users: [],
      total_pages: '',
      total_elements: '',
      sort_field: 'id',
      sort_dir: 'asc',
      keyword: '',
      sort_field_options: [
        { value: "id", text: 'Sort by id' },
        { value: "name", text: 'Sort by Name' },
        { value: "email", text: 'Sort by Email' },
        { value: "enable", text: 'Sort by Enable' },
        { value: "createdTime", text: 'Sort by Create date' },
      ],
      sort_dir_options: [
        { value: "asc", text: 'Sort ascending' },
        { value: "disc", text: 'Sort descending' },
      ]
    }
  },
  created() {
    this.loadUsers();
  },
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    },
    async clear() {
      this.sort_field = 'id';
      this.sort_dir = 'asc';
      this.keyword = '';

      await this.loadUsers();
    },
    async loadUsers() {
      this.isLoading = true;
      this.users = [];

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
      let url = 'https://live-guard.herokuapp.com/api/users/page/' + page +'?sortField=' + this.sort_field + '&sortDir=' + this.sort_dir + '&keyword=' + this.keyword;

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
            this.users = result.content
            this.total_pages = result.totalPages
            this.total_elements = result.totalElements
          })
          .catch(error => {
            this.error = error.message
            console.log(error)
          });

      this.isLoading = false;

    },
    async updateEnabledStatus(id, status) {
      this.isLoading = true
      this.users = []

      let token = this.$store.getters.token;

      let myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let url = 'https://live-guard.herokuapp.com/api/users/' + id + '/enabled/' + status;

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
            this.success = result.message;
          })
          .catch(error => {
            this.error = error.message
            console.log(error)
          });


      await this.loadUsers();
      this.isLoading = false
    },
  }
}
</script>

<style scoped lang="scss">
@import "../../../assets/sass/dashboard-childs.scss";

.header {
  justify-content: space-between;
}

.enable-icon {
  cursor: pointer;

  &:hover {
    color: $color-primary;
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

.link {
  color: $color-black;
  text-decoration: none;
  &:hover {
    color: $color-primary;
  }
}
</style>