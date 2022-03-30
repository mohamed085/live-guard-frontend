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
          <span class="heading-primary--sub">The Most Reliable Parental Control App</span>
        </h1>

        <router-link to="/products" class="btn btn--white btn--animated">Download now</router-link>
      </div>
    </header>

    <main>
      <section class="live-guard-features">
        <div class="row">
          <div class="col-1-of-2 live-guard-features__box" data-aos="fade-right" data-aos-duration="1500">
            <h3 class="heading-tertiary u-margin-bottom-small">LiveGuard Features</h3>
            <div class="d-flex">
              <h1 class="live-guard-features__title">Location Tracking</h1>
              <img class="live-guard-features__title-icon" src="../assets/img/icon13.svg">
            </div>
            <p>Track kids in real-time and review their location history. Receive instant alerts when
              kids enter or leave the Geofences.
            </p>
            <div class="d-flex mt-5">
              <router-link to="/products" class="btn--green">Try it free</router-link>
              <router-link to="/products" class="btn--white">Buy now</router-link>
            </div>
            <div class="mt-5">
              <h2 class="heading-tertiary available">Available on：</h2>
              <span class="icons">
                <i class="fab fa-app-store"></i>
                <i class="fab fa-google-play"></i>
              </span>
            </div>
          </div>
          <div class="col-1-of-2 text-center" data-aos="fade-left" data-aos-duration="1500">
            <img src="../assets/img/map-phone-e1636424475547.png">
          </div>
        </div>
      </section>

      <section class="section-worry">
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary">
            Worry About Kids When They Go Out Alone
          </h2>
        </div>

        <div class="section-worry__sections">
          <div data-aos="fade-up" data-aos-duration="1500">
            <p class="section-worry__paragraph">What should I do if my kids get lost in an unfamiliar place?</p>
          </div>
          <div data-aos="fade-down" data-aos-duration="1500">
            <p class="section-worry__paragraph">Will kids meet unfriendly strangers and be taken to dangerous places?</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500">
            <p class="section-worry__paragraph">Did my kids leave school privately and skip class without permission?

            </p>
          </div>

        </div>
      </section>

      <section class="live-guard-features">
        <div class="row">
          <div class="col-1-of-2 live-guard-features__box" data-aos="fade-right" data-aos-duration="1500">
            <div class="d-flex">
              <h1 class="live-guard-features__title">View Kids' Real-Time Location</h1>
            </div>
            <p class="live-guard-features__sub-title">Track the current location of your kids. Stop calling kids "where are you?" all the time.</p>
            <ul>
              <li>Grasp your kids' real-time location at any time.</li>
              <li>Check if your kids are in school or at home as required.</li>
              <li>Know if your kids go to a strange and unsafe place.</li>
            </ul>
          </div>
          <div class="col-1-of-2 text-center" data-aos="fade-left" data-aos-duration="1500">
            <img src="../assets/img/live-location-tracking-2.png">
          </div>
        </div>
      </section>

      <section class="live-guard-features">
        <div class="row">
          <div class="col-1-of-2 text-center" data-aos="fade-right" data-aos-duration="1500">
            <img src="../assets/img/live-location-tracking-3.png">
          </div>
          <div class="col-1-of-2 live-guard-features__box" data-aos="fade-left" data-aos-duration="1500">
            <div class="d-flex">
              <h1 class="live-guard-features__title">Check Location History</h1>
            </div>
            <p class="live-guard-features__sub-title">View location history timeline to know kids' past routine. Never yell at your kids: "Where have you been?" again.
            </p>
            <ul>
              <li>View your kids' recent activity area.</li>
              <li>Know where they were at a certain time.</li>
              <li>Learn where your child often goes.</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="live-guard-features">
        <div class="row">
          <div class="col-1-of-2 live-guard-features__box" data-aos="fade-right" data-aos-duration="1500">
            <div class="d-flex">
              <h1 class="live-guard-features__title">Set Safe Zones</h1>
            </div>
            <p class="live-guard-features__sub-title">Create zones like "school" or "home" around specific locations. Get notified when kids break planned routines.</p>
            <ul>
              <li>Set the scope of kids' activities.</li>
              <li>Set up a geofence and set the time range.</li>
              <li>Receive an alert when the kids leave the set place.</li>
            </ul>
          </div>
          <div class="col-1-of-2 text-center" data-aos="fade-left" data-aos-duration="1500">
            <img src="../assets/img/live-location-tracking-4.png">
          </div>
        </div>
      </section>

      <section class="section-about">
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary">
            Exciting experiences for users
          </h2>
        </div>

        <div class="row">
          <div class="col-1-of-2">
            <h3 class="heading-tertiary u-margin-bottom-small">GREAT APP FOR MANY PURPOSES!</h3>
            <p class="paragraph">
              I have used this App off and on for many years and many purposes. They have been at my side the entire time and have helped me through some difficult situations. They are dependable and honest. They can do a lot for any organization. Trust them. TRACKVIEW can do many things including helping you find a lost phone. Yet, it is designed to do much more. You will be amazed at it's different abilities.
            </p>

            <h3 class="heading-tertiary u-margin-bottom-small">AWESOME APP FOR MONITORING</h3>
            <p class="paragraph">
              I recommend this app for your family safety.... Great app
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
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary text-white">
            Exciting experiences for users
          </h2>
          <h1 class="heading-secondary about_feature text-white">LiveGuard is the leading real-time location tracking.</h1>
        </div>

        <div class="row">
          <div class="col-1-of-4">
            <div class="feature-box">
              <i class="feature-box__icon fas fa-map-marker-alt"></i>
              <h3 class="heading-tertiary u-margin-bottom-small">
                Advanced Location Tracking Services and Visualization</h3>
            </div>
          </div>

          <div class="col-1-of-4">
            <div class="feature-box">
              <i class="feature-box__icon fas fa-user-shield"></i>
              <h3 class="heading-tertiary u-margin-bottom-small">
                Create Safe/Unsafe Zones, Check in & send SOS
              </h3>
            </div>
          </div>

          <div class="col-1-of-4">
            <div class="feature-box">
              <i class="feature-box__icon fas fa-bell"></i>
              <h3 class="heading-tertiary u-margin-bottom-small">
                Place Alerts
              </h3>
            </div>
          </div>

          <div class="col-1-of-4">
            <div class="feature-box">
              <i class="feature-box__icon fas fa-history"></i>
              <h3 class="heading-tertiary u-margin-bottom-small">
                Location History of your close ones
              </h3>
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

.about_feature {
  text-align: center;
  padding: 1rem 20% 0;
  font-size: 1.8rem;
  font-weight: 500;
}

.feature-box {
  height: 28rem;
}

.feature-box__icon {
  margin-top: 2rem;
  margin-bottom: 4rem;
}

.heading-tertiary {
  line-height: 3rem;
}

.live-guard-features {
  margin: 10rem 0 0;

  &__box {
    padding: 10rem 0;
  }

  & .heading-tertiary {
    display: inline-block;
    background-image: linear-gradient(to right, $color-primary-light, $color-primary-dark);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 2.8rem;

  }

  & .available {
    font-size: 2rem;
  }

  &__title {
    font-weight: 600;
    font-size: 5rem;
    line-height: 1.2;
    margin: 1rem 1rem 1rem 0;
    color: #313131;
  }

  &__sub-title {
    padding: 1rem;
    color: #313131;
    font-size: 2rem;

  }

  &__title-icon {
    vertical-align: middle;
    border-style: none;
  }

  & .btn--green,
  & .btn--white {
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 3rem;
    font-size: $default-font-size;
    border: 1px solid $color-white;
  }

  & .btn--green:hover {
    background-color: $color-white;
    color: $color-primary;
    border: 1px solid $color-primary;

  }

  & .btn--white:hover {
    background-color: $color-primary;
    color: $color-white;
    border: 1px solid $color-white;
  }

  & ul {
    padding: 1rem 0 1rem 4rem;
    list-style: none;

    & li {
      margin-bottom: 1rem;

      &::before {
        content: "\2022";
        color: $color-primary;
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
      }
    }
  }
}

.icons i {
  color: $color-grey-dark;
  margin: 0 .5rem;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: $color-primary;
  }
}

.section-worry {
  margin-top: 10rem;

  &__sections {
    padding: 0 5rem;
    display: flex;
    align-items: center;
    align-content: center;

    & div {
      width: 33%;
      padding: 0 8%;
      text-align: center !important;
      color: #313131;
      font-size: 1.8rem;
      font-weight: 500;
    }
  }
}

.col-1-of-2 {
  animation-duration: 2s; /* don't forget to set a duration! */

}
</style>
