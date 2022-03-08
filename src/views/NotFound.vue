<template>
  <div>

    <div class="navigation">
      <input type="checkbox" class="navigation__checkbox" id="navi-toggle">

      <label for="navi-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>

      <div class="navigation__background">&nbsp;</div>

      <nav class="navigation__nav">
        <ul class="navigation__list">
          <li class="navigation__item">
            <router-link to="/about-us" class="navigation__link"><span>01</span>About Live Guard</router-link>
          </li>
          <li class="navigation__item">
            <router-link to="/benefits" class="navigation__link"><span>02</span>Your benefits</router-link>
          </li>
          <li class="navigation__item">
            <router-link to="/products" class="navigation__link"><span>03</span>Popular products</router-link>
          </li>
          <li class="navigation__item">
            <router-link to="/blogs" class="navigation__link"><span>04</span>Blogs</router-link>
          </li>
          <li class="navigation__item">
            <router-link to="/buy-now" class="navigation__link"><span>05</span>Buy now</router-link>
          </li>
          <li class="navigation__item" v-if="!$store.getters.isAuthenticated">
            <router-link to="/login" class="navigation__link"><span>06</span>Log in</router-link>
          </li>
          <li class="navigation__item" v-if="!$store.getters.isAuthenticated">
            <router-link to="/register" class="navigation__link"><span>07</span>Register</router-link>
          </li>
          <li class="navigation__item" v-if="$store.getters.isAuthenticated && $store.getters.isAdmin">
            <router-link to="/dashboard" class="navigation__link"><span>06</span>Dashboard</router-link>
          </li>
          <li class="navigation__item" @click="logout" v-if="$store.getters.isAuthenticated && $store.getters.isAdmin">
            <router-link to="#" class="navigation__link"><span>07</span>Log out</router-link>
          </li>
          <li class="navigation__item" @click="logout" v-if="$store.getters.isAuthenticated && !$store.getters.isAdmin">
            <router-link to="#" class="navigation__link"><span>06</span>Log out</router-link>
          </li>
        </ul>
      </nav>
    </div>

    <header class="header">
      <div class="header__logo-box">
        <router-link to="/">
          <img src="../assets/img/logo-white.png" alt="Logo" class="header__logo">
        </router-link>
      </div>

      <div class="header__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--main">LiveGuard</span>
          <span class="heading-primary--sub">is where life more safety</span>
          <h1 class="not-found">Page Not Found</h1>
        </h1>

        <router-link to="/" class="btn btn--white btn--animated">Back to Home</router-link>
      </div>
    </header>

    <footer class="footer">
      <div class="footer__logo-box">

        <router-link to="/">

          <picture class="footer__logo">
            <source srcset="../assets/img/logo-green-small-1x.png 1x, ../assets/img/logo-green-small-2x.png 2x"
                    media="(max-width: 37.5em)">
            <img srcset="../assets/img/logo-green-1x.png 1x, ../assets/img/logo-green-2x.png 2x" alt="Full logo"
                 src="../assets/img/logo-green-2x.png">
          </picture>
          <br>
          <h2 class="heading-secondary mt-3">
            Live Guard
          </h2>
        </router-link>
      </div>
      <div class="row">
        <div class="col-1-of-2">
          <div class="footer__navigation">
            <ul class="footer__list">
              <li class="footer__item"><router-link to="/" class="footer__link">Company</router-link></li>
              <li class="footer__item"><router-link to="/" class="footer__link">Contact us</router-link></li>
              <li class="footer__item"><router-link to="/" class="footer__link">Carriers</router-link></li>
              <li class="footer__item"><router-link to="/" class="footer__link">Privacy policy</router-link></li>
              <li class="footer__item"><router-link to="/" class="footer__link">Terms</router-link></li>
            </ul>
          </div>
        </div>
        <div class="col-1-of-2">
          <p class="footer__copyright">
            Built by <a href="#" class="footer__link">Live Guard Group</a> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
          </p>
        </div>
      </div>
    </footer>


  </div>
</template>

<script>
export default {
  name: "NotFound",
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }

  }
}
</script>

<style scoped lang="scss">
@import "../assets/sass/main";
.header {
  background-image: linear-gradient(
          to right bottom,
          rgba($color-primary-light, 0.8),
          rgba($color-primary-dark, 0.8)),
  url("../assets/img/hero-small.jpg");
  background-size: cover;
  background-position: top;
  position: relative;

  @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    min-height: 100vh;
  }
}

.not-found {
  font-size: 5rem;
  margin-top: 2.5rem;
  animation-name: moveInLeft;
  animation-duration: 1s;
  animation-timing-function: ease-out;
}
</style>