<template>
  <div class="loading" v-if="isLoading">
    <b-spinner class="loading__spinner" label="Loading..."></b-spinner>
  </div>

  <div v-else class="dashboard">

    <div class="sidebar">sad</div>
    <div class="main-content">
      <div class="navbar">
asd
      </div>
      asdas
    </div>


  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Dashboard",
  data() {
    return {
      isLoading: false
    }
  },
  created() {
    if (!this.$store.getters.isAuthenticated && !this.$store.getters.isAdmin) {
      this.$router.replace("/")
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/sass/main";

.dashboard {
  height: 100vh;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: #5f5f5f;
}

.sidebar {
  position: fixed;
  top: 0;
  height: 100%;
  width: 250px;
  background-color: #fff;
  z-index: 880;
  left: 0;
}

.navbar {
  height: 60px;
  width: 100%;
  background-color: #fff;
}
</style>