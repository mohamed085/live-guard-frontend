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
        </h1>

        <b-form class="form" @submit.prevent="login">
          <span class="heading-secondary">Log In</span>

          <h2><b-badge variant="danger" class="badge" v-if="error">{{ error }}</b-badge></h2>
          <h2><b-badge variant="success" class="badge" v-if="success">{{ success }}</b-badge></h2>

          <main class="main-spinner" v-if="isLoading">
            <b-spinner class="spinner mt-5" label="Loading..."></b-spinner>
          </main>

          <div v-else>
            <div class="form__group">
              <input type="email" class="form__input" placeholder="Email" v-model="email" id="email" required>
            </div>
            <div class="form__group">
              <input type="password" class="form__input" placeholder="Password" v-model="password" id="password" required>
            </div>


            <button class="btn btn--green mb-4">Login &rarr;</button>
            <br>
            <router-link to="/forgot-password" class="heading-tertiary">Forgot Your Password?</router-link>

            <div class="signin-with mt-3">
              <h3>or sign in with</h3>
              <div class="p-3">
                <router-link to="/" class="icon-button facebook"><i class="fab fa-facebook-f"></i><span></span></router-link>
                <router-link to="/" class="icon-button google-plus"><i class="fab fa-google"></i><span></span></router-link>
              </div>
            </div>

          </div>
        </b-form>

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
import router from "@/router";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
      error: '',
      success: '',
      isLoading: ''
    }
  },
  created() {
    if (this.$store.getters.isAuthenticated) {
      this.$router.replace("/")
    }
  },
  methods: {
    async login() {
      this.isLoading = true;
      this.error = '';

      try {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        })

        if (this.$store.getters.isAdmin) {
          await router.push("/dashboard")
        } else {
          await router.push("/");
        }
      } catch (e) {
        this.error = e.message;
      }

      this.isLoading = false;
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
    min-height: 140vh;
  }
}

.form {
  padding: 2rem 1rem 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 1.5rem 4rem rgba($color-black, .15);
  background-color: $color-white;
}


.btn--green:hover {
  color: $color-white;
}

.heading-tertiary {
  color: $color-primary;
}

/* Wrapper */
.icon-button {
  background-color: $color-primary;
  border-radius: 3.6rem;
  cursor: pointer;
  display: inline-block;
  font-size: 2.0rem;
  height: 3.6rem;
  line-height: 3.6rem;
  margin: 0 5px;
  position: relative;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 3.6rem;
}

/* Circle */
.icon-button span {
  border-radius: 0;
  display: block;
  height: 0;
  left: 50%;
  margin: 0;
  position: absolute;
  top: 50%;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  width: 0;
}
.icon-button:hover span {
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 3.6rem;
  margin: -1.8rem;
}
.twitter span {
  background-color: #4099ff;
}
.facebook span {
  background-color: #3B5998;
}
.google-plus span {
  background-color: #db5a3c;
}

/* Icons */
.icon-button i {
  background: none;
  color: white;
  height: 3.6rem;
  left: 0;
  line-height: 3.6rem;
  position: absolute;
  top: 0;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  width: 3.6rem;
  z-index: 10;
}
.icon-button .icon-twitter {
  color: #4099ff;
}
.icon-button .icon-facebook {
  color: #3B5998;
}
.icon-button .icon-google-plus {
  color: #db5a3c;
}
.icon-button:hover .icon-twitter,
.icon-button:hover .icon-facebook,
.icon-button:hover .icon-google-plus {
  color: white;
}

.badge {
  padding: 1rem 2rem;

  &::selection {
    background-color: $color-white;
    color: $color-danger;
  }
}
</style>