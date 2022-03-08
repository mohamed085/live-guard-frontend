<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('tryLogin')
    console.log(this.$store.getters.isAuthenticated)
  }
}
</script>


<style lang="scss">
@import "assets/css/icon-font.css";
@import "assets/sass/abstracts/variables";

$color-primary: #55c57a;
$color-primary-light: #7ed56f;
$color-primary-dark: #28b485;

$color-white: #fff;
$color-black: #000;
$color-gray: #777;

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


html {
  font-size: 10px;
}

#app {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.7;
  color: $color-gray;
}


::selection {
  background-color: $color-primary;
  color: $color-white;
}

.main-spinner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem 0 !important;
}

.spinner {
  width: 5rem !important;
  height: 5rem !important;
  color: $color-primary;
}

</style>
