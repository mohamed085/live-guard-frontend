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
        </h1>

        <router-link to="/products" class="btn btn--white btn--animated">Discover our products</router-link>
      </div>
    </header>

    <main>
      <section class="section-about">
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary">
            Exciting experiences for users
          </h2>
        </div>

        <div class="row">
          <div class="col-1-of-2">
            <h3 class="heading-tertiary u-margin-bottom-small">You're going to keep other close</h3>
            <p class="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
              ducimus quam nisi exercitationem omnis earum qui.
            </p>

            <h3 class="heading-tertiary u-margin-bottom-small">New way to save others</h3>
            <p class="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
            </p>

            <router-link to="/" class="btn-text">Learn more &rarr;</router-link>
          </div>
          <div class="col-1-of-2">
            <div class="composition">

              <img srcset="../assets/img/nat-1.jpg 300w, ../assets/img/nat-1-large.jpg 1000w"
                   sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                   alt="Photo 1"
                   class="composition__photo composition__photo--p1"
                   src="../assets/img/nat-1-large.jpg">

              <img srcset="../assets/img/nat-1.jpg 300w, ../assets/img/nat-1-large.jpg 1000w"
                   sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                   alt="Photo 2"
                   class="composition__photo composition__photo--p2"
                   src="../assets/img/nat-1-large.jpg">

              <img srcset="../assets/img/nat-1.jpg 300w, ../assets/img/nat-1-large.jpg 1000w"
                   sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                   alt="Photo 3"
                   class="composition__photo composition__photo--p3"
                   src="../assets/img/nat-1-large.jpg">

            </div>
          </div>
        </div>
      </section>

      <section class="section-features">

        <div class="row">
          <div class="col-1-of-4">
            <div class="feature-box">
              <i class="feature-box__icon icon-basic-world"></i>
              <h3 class="heading-tertiary u-margin-bottom-small">Explore the world</h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>

          <div class="col-1-of-4">
            <div class="feature-box">
              <i class="feature-box__icon icon-basic-compass"></i>
              <h3 class="heading-tertiary u-margin-bottom-small">Find Location</h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>

          <div class="col-1-of-4">
            <div class="feature-box">
              <i class="feature-box__icon icon-basic-map"></i>
              <h3 class="heading-tertiary u-margin-bottom-small">Find your way</h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>

          <div class="col-1-of-4">
            <div class="feature-box">
              <i class="feature-box__icon icon-basic-heart"></i>
              <h3 class="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="section-tours" id="section-tours">
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary">
            Most popular products
          </h2>
        </div>

        <div class="row">
          <div class="col-1-of-3">
            <div class="card">
              <div class="card__side card__side--front">
                <div class="card__picture card__picture--1">
                  &nbsp;
                </div>
                <h4 class="card__heading">
                  <span class="card__heading-span card__heading-span--1">Version 1</span>
                </h4>
                <div class="card__details">
                  <ul>
                    <li>Live Tracking</li>
                    <li>5 Hour</li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div class="card__side card__side--back card__side--back-1">
                <div class="card__cta">
                  <div class="card__price-box">
                    <p class="card__price-only">Only</p>
                    <p class="card__price-value">$297</p>
                  </div>
                  <router-link to="/" class="btn btn--white">Buy now!</router-link>
                </div>
              </div>
            </div>
          </div>


          <div class="col-1-of-3">
            <div class="card">
              <div class="card__side card__side--front">
                <div class="card__picture card__picture--2">
                  &nbsp;
                </div>
                <h4 class="card__heading">
                  <span class="card__heading-span card__heading-span--2">Version 2</span>
                </h4>
                <div class="card__details">
                  <ul>
                    <li>Live Tracking</li>
                    <li>5 Hour</li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>

              </div>
              <div class="card__side card__side--back card__side--back-2">
                <div class="card__cta">
                  <div class="card__price-box">
                    <p class="card__price-only">Only</p>
                    <p class="card__price-value">$497</p>
                  </div>
                  <router-link to="/" class="btn btn--white">Buy now!</router-link>
                </div>
              </div>
            </div>
          </div>


          <div class="col-1-of-3">
            <div class="card">
              <div class="card__side card__side--front">
                <div class="card__picture card__picture--3">
                  &nbsp;
                </div>
                <h4 class="card__heading">
                  <span class="card__heading-span card__heading-span--3">Version 3</span>
                </h4>
                <div class="card__details">
                  <ul>
                    <li>Live Tracking</li>
                    <li>5 Hour</li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>

              </div>
              <div class="card__side card__side--back card__side--back-3">
                <div class="card__cta">
                  <div class="card__price-box">
                    <p class="card__price-only">Only</p>
                    <p class="card__price-value">$897</p>
                  </div>
                  <router-link to="/" class="btn btn--white">Buy now!</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="u-center-text u-margin-top-huge">
          <router-link to="/" class="btn btn--green">Discover all versions</router-link>
        </div>
      </section>

      <section class="section-stories">
        <div class="bg-video">
          <video class="bg-video__content" autoplay muted loop>
            <source src="../assets/img/video.mp4" type="video/mp4">
            <source src="../assets/img/video.webm" type="video/webm">
            Your browser is not supported!
          </video>
        </div>

        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary">
            We make people genuinely happy
          </h2>
        </div>

        <div class="row">
          <div class="story">
            <figure class="story__shape">
              <img src="../assets/img/nat-8.jpg" alt="Person on a tour" class="story__img">
              <figcaption class="story__caption">Mary Smith</figcaption>
            </figure>
            <div class="story__text">
              <h3 class="heading-tertiary u-margin-bottom-small">Lorem ipsum dolor sit amet</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="story">
            <figure class="story__shape">
              <img src="../assets/img/nat-9.jpg" alt="Person on a tour" class="story__img">
              <figcaption class="story__caption">Jack Wilson</figcaption>
            </figure>
            <div class="story__text">
              <h3 class="heading-tertiary u-margin-bottom-small">Lorem ipsum dolor sit amet</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
              </p>
            </div>
          </div>
        </div>

        <div class="u-center-text u-margin-top-huge">
          <router-link to="/blogs" class="btn-text">Read all blogs &rarr;</router-link>
        </div>
      </section>

      <section class="section-book">
        <div class="row">
          <div class="book w-100">
            <div class="book__form">
              <form action="#" class="form">
                <div class="u-margin-bottom-medium">
                  <h2 class="heading-secondary">
                    Start buying now
                  </h2>
                </div>

                <div class="form__group">
                  <input type="text" class="form__input" placeholder="Full name" id="name" required>
                  <label for="name" class="form__label">Full name</label>
                </div>

                <div class="form__group"  >
                  <input type="email" class="form__input" placeholder="Email address" id="email" required>
                  <label for="email" class="form__label">Email address</label>
                </div>

                <div class="form__group u-margin-bottom-medium d-flex">
                  <div class="form__radio-group">
                    <input type="radio" class="form__radio-input" id="version1" name="size">
                    <label for="version1" class="form__radio-label">
                      <span class="form__radio-button"></span>
                      Version 1
                    </label>
                  </div>
                  <div class="form__radio-group">
                    <input type="radio" class="form__radio-input" id="version2" name="size">
                    <label for="version2" class="form__radio-label">
                      <span class="form__radio-button"></span>
                      Version 1
                    </label>
                  </div>
                  <div class="form__radio-group">
                    <input type="radio" class="form__radio-input" id="version3" name="size">
                    <label for="version3" class="form__radio-label">
                      <span class="form__radio-button"></span>
                      Version 1
                    </label>
                  </div>

                </div>

                <div class="form__group">
                  <button class="btn btn--green">Next step &rarr;</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>

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
  name: 'Home',
  components: {

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
</style>
