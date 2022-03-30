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

        <b-form class="form" @submit.prevent="resetPassword">
          <span class="heading-secondary mb-5 mt-3">Reset your password</span>

          <div class="messages">
            <h2 class="messages__error" v-if="error">{{ error }}</h2>
            <h2 class="messages__success" v-if="success">{{ success }}</h2>
          </div>

          <main class="main-spinner" v-if="isLoading">
            <b-spinner class="spinner mt-5" label="Loading..."></b-spinner>
          </main>

          <div v-else>
            <div class="form__group">
              <input type="password" class="form__input" placeholder="Password" v-model="password" required>
            </div>
            <div class="form__group">
              <input @input="checkConfirmPassword" type="password" class="form__input" placeholder="Confirm password" v-model="confirmPassword" required>
              <p v-if="confirmPasswordError" class="text-danger">{{ confirmPasswordError }}</p>
            </div>

            <button class="btn btn--green mb-5">Reset password email &rarr;</button>
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
  name: "ResetPassword",
  data() {
    return {
      password: '',
      confirmPassword: '',
      confirmPasswordError: '',
      error: '',
      success: '',
      isLoading: ''
    }
  },
  methods: {
    checkConfirmPassword() {
      if (this.password !== this.confirmPassword) {
        this.confirmPasswordError = "Password not match"
      } else {
        this.confirmPasswordError = ''
      }
    },
    async resetPassword() {
      this.isLoading = true;
      this.error = '';

      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        "reset_password_token": this.$route.params.resetPasswordToken,
        "password": this.password
      });

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      let url = "https://live-guard.herokuapp.com/api/auth/reset_password"

      const response = await fetch(url, requestOptions);

      const responseData = await response.json();

      console.log(responseData)
      if (!response.ok) {
        this.error = responseData.message;
        this.isLoading = false;

      } else {
        this.isLoading = false;
        await router.push("/login");
      }
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
  color: $color-danger;

  &::selection {
    background-color: $color-danger;
    color: $color-white;
  }
}
</style>