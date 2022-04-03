<template>
  <div>
    <div class="dashboard">
      <div class="container">

        <header class="dashboard-header">
          <router-link to="/" class="logo">
            <img src="../assets/img/logo-green-1x.png" alt="Logo" class="logo__img">
            <h2 class="logo__heading mt-3">Live Guard</h2>

          </router-link>

          <b-form @submit.prevent="" class="search">
            <input type="text" class="search__input" placeholder="Search">
            <button class="search__button" type="submit">
              <svg class="search__icon">
                <use xlink:href="../assets/img/sprite.svg#icon-magnifying-glass"></use>
              </svg>
            </button>
          </b-form>

          <nav class="user-nav">

            <div class="user-nav__icon-box">
              <b-icon icon="bell-fill" class="rounded p-2 user-nav__icon" font-scale="2"></b-icon>
              <span class="user-nav__notification">7</span>
            </div>

            <div class="user-nav__icon-box">
              <b-icon icon="inbox-fill" class="rounded p-2 user-nav__icon" font-scale="2"></b-icon>
              <span class="user-nav__notification">13</span>
            </div>

            <div class="user-nav__user">
              <b-avatar src="https://i.pinimg.com/750x/c7/6d/96/c76d965a245584537bbc55eaa07440d8.jpg" class="user-nav__user-photo" size="4rem"></b-avatar>
              <span class="user-nav__user-name">{{ this.$store.getters.name }}</span>
            </div>

          </nav>
        </header>

        <div class="content">
          <nav class="sidebar">
            <ul class="side-nav">
              <li class="side-nav__item">
                <router-link to="/dashboard" class="side-nav__link">
                  <i class="fas fa-home"></i>
                  <span>Dashboard</span>
                </router-link>
              </li>

              <li class="side-nav__item">
                <router-link to="/chip-versions" class="side-nav__link">
                  <i class="fas fa-microchip"></i>
                  <span>Chip versions</span>
                </router-link>
              </li>

              <li class="side-nav__item">
                <router-link to="/chips" class="side-nav__link">
                  <i class="fas fa-microchip"></i>
                  <span>Chips</span>
                </router-link>
              </li>

              <li class="side-nav__item">
                <router-link to="/users" class="side-nav__link">
                  <i class="fas fa-users"></i>
                  <span>Users</span>
                </router-link>
              </li>

              <li class="side-nav__item">
                <router-link to="/orders" class="side-nav__link">
                  <i class="fas fa-cart-plus"></i>
                  <span>Orders</span>
                </router-link>
              </li>

              <li class="side-nav__item">
                <router-link to="/shipping-rate" class="side-nav__link">
                  <i class="fas fa-truck-container"></i>
                  <span>Shipping Rate</span>
                </router-link>
              </li>

              <li class="side-nav__item">
                <router-link to="/stores" class="side-nav__link">
                  <i class="fas fa-store-alt"></i>
                  <span>Stores</span>
                </router-link>
              </li>

              <li class="side-nav__item">
                <router-link to="/articles" class="side-nav__link">
                  <i class="fas fa-newspaper"></i>
                  <span>Articles</span>
                </router-link>
              </li>

              <li class="side-nav__item">
                <router-link to="/articles" class="side-nav__link">
                  <i class="fas fa-file-chart-line"></i>
                  <span>Sales report</span>
                </router-link>
              </li>

              <li class="side-nav__item">
                <router-link to="/articles" class="side-nav__link">
                  <i class="fas fa-question"></i>
                  <span>Questions</span>
                </router-link>
              </li>

              <li class="side-nav__item">
                <router-link to="/articles" class="side-nav__link">
                  <i class="fas fa-inbox"></i>
                  <span>Contact Messages</span>
                </router-link>
              </li>

              <li class="side-nav__item">
                <router-link to="/setting" class="side-nav__link">
                  <i class="fas fa-cogs"></i>
                  <span>Settings</span>
                </router-link>
              </li>

              <li class="side-nav__item" @click="logout">
                <router-link to="#" class="side-nav__link">
                  <i class="fas fa-sign-out"></i>
                  <span>Logout</span>
                </router-link>
              </li>

            </ul>

            <div class="legal">
              &copy; 2022 by liveGuard group. All rights reserved.
            </div>

          </nav>
          <main class="main-content">

            <router-view></router-view>

          </main>
        </div>

      </div>

    </div>
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
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Dashboard",
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
@import "../assets/sass/dashboard";

.dashboard {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  background-image: linear-gradient(to right bottom, $color-primary-light, $color-primary-dark);
  color: $color-grey-dark-2;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 8rem 0;
  min-height: 100vh;

}

.container {
  margin: 0 auto;
  background-color: $color-grey-light-1;
  box-shadow: $shadow-dark;
  padding: 0;
  min-height: 100rem;

  @media only screen and (max-width: $bp-largest) {
    margin: 0;
    max-width: 100%;
    width: 100%;
  }
}

.dashboard-header {
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content {
  display: flex;
}

.sidebar {
  background-color: #818181;
  flex: 0 0 18%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main-content {
  background-color: $color-white;
  flex: 1;
  width: inherit;
  min-height: 93rem;
  padding: 2rem;
  top: 10rem;
}

.user-nav {
  position: relative;
}

.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.side-nav__link i {
  margin: 0 1.5rem 0 0;
}

.logo {
  text-decoration: none;
}


</style>