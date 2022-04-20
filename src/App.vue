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

.loading {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__spinner {
    color: $color-primary;
    width: 15rem !important;
    height: 15rem !important;
  }

}

.messages {
  text-align: center;
  color: $color-white;
  margin: 2rem 1rem;

  &__error,
  &__success {
    padding: 1rem 2rem;
    font-size: 2rem;
    border-radius: 3px;
  }

  &__success {
    border: 1px solid $color-primary;
    background-color: $color-primary-light;
  }

  &__error {
    border: 1px solid $color-danger;
    background-color: $color-danger-light;

    &::selection {
      color: $color-white;
      background-color: $color-danger;
    }
  }

}

</style>
