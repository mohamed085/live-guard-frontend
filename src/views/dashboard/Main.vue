<template>
  <div class="orders">
    <div class="header d-flex">
      <h2 class="heading-secondary">Main</h2>
    </div>

    <main class="main-spinner" v-if="isLoading">
      <b-spinner class="spinner mt-5" label="Loading..."></b-spinner>
    </main>

    <div v-else>
      <div class="messages">
        <h2 class="messages__error" v-if="error">{{ error }}</h2>
        <h2 class="messages__success" v-if="success">{{ success }}</h2>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Main",
  data() {
    return {
      error: '',
      success: '',
      isLoading: '',
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