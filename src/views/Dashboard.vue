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

            <div class="user-nav__icon-box" @click="showNotifications = !showNotifications">
              <b-icon icon="bell-fill" class="rounded p-2 user-nav__icon" font-scale="2"></b-icon>
              <span class="user-nav__notification">7</span>
            </div>

            <transition mode="fade" v-if="showNotifications">
              <div class="notifications">
                <router-link class="notifications__notification" to="#">
                  <div class="notifications__notification__user-avatar">
                    <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
                  </div>
                  <div class="notifications__notification__content">
                    <div class="notifications__notification__content__sender">Mohamed Emad</div>
                    <div class="notifications__notification__content__content">
                      <p>
                        When using a module bundler and project relative image URLs, please refer to the Component img src resolving reference section for additional details. When using a module bundler and project relative image URLs, please refer to the Component img src resolving reference section for additional details.
                      </p>
                    </div>
                    <div class="notifications__notification__content__date">39 minutes ago</div>
                  </div>
                </router-link>
                <router-link class="notifications__notification" to="#">
                  <div class="notifications__notification__user-avatar">
                    <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
                  </div>
                  <div class="notifications__notification__content">
                    <div class="notifications__notification__content__sender">Mohamed Emad</div>
                    <div class="notifications__notification__content__content">
                      <p>
                        When using a module bundler and project relative image URLs.
                      </p>
                    </div>
                    <div class="notifications__notification__content__date">39 minutes ago</div>
                  </div>
                </router-link>
                <router-link class="notifications__notification" to="#">
                  <div class="notifications__notification__user-avatar">
                    <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
                  </div>
                  <div class="notifications__notification__content">
                    <div class="notifications__notification__content__sender">Mohamed Emad</div>
                    <div class="notifications__notification__content__content">
                      <p>
                        When using a module bundler and project relative image URLs.
                      </p>
                    </div>
                    <div class="notifications__notification__content__date">39 minutes ago</div>
                  </div>
                </router-link>
              </div>
            </transition>

            <div class="user-nav__icon-box">
              <b-icon icon="inbox-fill" class="rounded p-2 user-nav__icon" font-scale="2"></b-icon>
              <span class="user-nav__notification">13</span>
            </div>

            <div class="user-nav__user" @click="showUserDetails = !showUserDetails">
              <b-avatar src="https://i.pinimg.com/750x/c7/6d/96/c76d965a245584537bbc55eaa07440d8.jpg" class="user-nav__user-photo" size="4rem"></b-avatar>
              <span class="user-nav__user-name">{{ this.$store.getters.name }}</span>
            </div>
            <transition mode="fade" v-if="showUserDetails">
              <div class="user-details">
                <router-link to="/profile" class="user-details__user-detail d-flex">
                  <b-avatar class="user-details__avatar" src="https://i.pinimg.com/750x/c7/6d/96/c76d965a245584537bbc55eaa07440d8.jpg" size="8rem"></b-avatar>
                  <div class="">
                    <h2 class="mt-3 user-details__name">{{ this.$store.getters.name }}</h2>
                    <p>See your profile</p>
                  </div>
                </router-link>
                <router-link to="/profile-update" class="user-details__user-detail">
                  <i class="user-details__icon fas fa-edit"></i> Update profile
                </router-link>
                <div @click="logout" class="user-details__user-detail">
                  <i class="user-details__icon fas fa-sign-out-alt"></i> Log out
                </div>
              </div>
            </transition>

          </nav>
        </header>

        <div class="content">
          <nav class="sidebar">
            <ul class="side-nav">
              <li class="side-nav__item">
                <router-link to="/dashboard" class="side-nav__link">
                  <svg class="side-nav__icon">
                    <use xlink:href="../assets/img/sprite.svg#icon-home"></use>
                  </svg>
                  <span>Dashboard</span>
                </router-link>
              </li>
              <li class="side-nav__item">
                <router-link to="/vendors" class="side-nav__link">
                  <svg class="side-nav__icon">
                    <use xlink:href="../assets/img/sprite.svg#icon-home"></use>
                  </svg>
                  <span>Vendors</span>
                </router-link>
              </li>
              <li class="side-nav__item">
                <router-link to="/customers" class="side-nav__link">
                  <svg class="side-nav__icon">
                    <use xlink:href="../assets/img/sprite.svg#icon-home"></use>
                  </svg>
                  <span>Customers</span>
                </router-link>
              </li>
              <li class="side-nav__item">
                <router-link to="/stores" class="side-nav__link">
                  <svg class="side-nav__icon">
                    <use xlink:href="../assets/img/sprite.svg#icon-home"></use>
                  </svg>
                  <span>Stores</span>
                </router-link>
              </li>
              <li class="side-nav__item">
                <router-link to="/chip-types" class="side-nav__link">
                  <svg class="side-nav__icon">
                    <use xlink:href="../assets/img/sprite.svg#icon-home"></use>
                  </svg>
                  <span>Chip Types</span>
                </router-link>
              </li>
              <li class="side-nav__item">
                <router-link to="/chips" class="side-nav__link">
                  <svg class="side-nav__icon">
                    <use xlink:href="../assets/img/sprite.svg#icon-home"></use>
                  </svg>
                  <span>Chips</span>
                </router-link>
              </li>
              <li class="side-nav__item">
                <router-link to="/orders" class="side-nav__link">
                  <svg class="side-nav__icon">
                    <use xlink:href="../assets/img/sprite.svg#icon-home"></use>
                  </svg>
                  <span>Orders</span>
                </router-link>
              </li>
              <li class="side-nav__item">
                <router-link to="/setting" class="side-nav__link">
                  <svg class="side-nav__icon">
                    <use xlink:href="../assets/img/sprite.svg#icon-home"></use>
                  </svg>
                  <span>Setting</span>
                </router-link>
              </li>

            </ul>

            <div class="legal">
              &copy; 2022 by live guard group. All rights reserved.
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
  data() {
    return {
      showNotifications: false,
      showUserDetails: false
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

.notifications {
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: #dddddd;
  padding: 0 0 1rem;
  top: calc(100%);
  left: -20%;
  width: 35rem;
  height: max-content;
  border-radius: 0 0 15px 15px;
  z-index: 20;

  &__notification {
    text-decoration: none;
    display: flex;
    width: 100%;
    border-bottom: 1px solid $color-white;
    max-height: 20rem;
    overflow: auto;
    color: $color-grey-dark;
    padding: 1rem;
    margin: 0;
    border-bottom: 1px solid #cfcfcf;

    &:hover {
      background-color: #cfcfcf;
    }

    &__user-avatar {
      margin: 0 .8% 0 0;
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__content {
      width: 69%;

      &__sender {
        font-size: 1.8rem;
        font-weight: 600;
        padding: 0 0 .5rem 0;

        &:hover {
          text-decoration: underline;
        }

      }


      &__content p {
        font-size: 1.4rem;
        text-align: justify;
      }
    }

  }

  &:hover {
    background-color: #dddddd;
  }
}

.user-details {
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: #dddddd;
  padding: 0 0 1rem;
  top: calc(100%);
  left: 20%;
  width: max-content;
  height: max-content;
  border-radius: 0 0 15px 15px;
  z-index: 20;


  &__user-detail {
    color: $color-grey-dark;
    text-decoration: none;
    padding: 1rem;
    margin: 0;
    border-bottom: 1px solid #cfcfcf;
    width: 100%;

    &:hover {
      background-color: #cfcfcf;
    }
  }

  &__name {
    font-size: 1.6rem;
    font-weight: 500;
    display: inline-block;
    background-image: linear-gradient(to right, $color-primary-light, $color-primary-dark);
    -webkit-background-clip: text;
    color: transparent;
  }

  &__avatar {
    margin: 0 1rem;
  }
  &:hover {
    background-color: #dddddd;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>