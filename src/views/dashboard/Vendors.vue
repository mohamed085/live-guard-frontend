<template>
  <div class="chips">
    <div class="header d-flex">
      <h2 class="heading-secondary">Vendors</h2>
      <router-link to="/add-new-user" class="btn add-button">Add new vendor</router-link>
    </div>

    <main class="main-spinner" v-if="isLoading">
      <b-spinner class="spinner mt-5" label="Loading..."></b-spinner>
    </main>

    <div v-else>
      <div class="messages">
        <h2 class="messages__error" v-if="error">{{ error }}</h2>
        <h2 class="messages__success" v-if="success">{{ success }}</h2>
      </div>

      <div v-if="vendors.length > 0">
        users
      </div>

      <div v-else class="p-4">
        Not found any vendors
      </div>

    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Vendors",
  data() {
    return {
      error: '',
      success: '',
      isLoading: '',
      vendors: [],
    }
  },
}
</script>

<style scoped lang="scss">
@import "../../assets/sass/dashboard-childs.scss";

.header {
  justify-content: space-between;
}

</style>