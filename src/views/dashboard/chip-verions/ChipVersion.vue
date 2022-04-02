<template>
  <div class="chip_types">
    <div class="header d-flex">
      <h2 class="heading-secondary">Chip version: {{ chip_version.name }}</h2>
    </div>

    <main class="main-spinner" v-if="isLoading">
      <b-spinner class="spinner mt-5" label="Loading..."></b-spinner>
    </main>

    <div v-else>

      <div class="messages">
        <h2 class="messages__error" v-if="error">{{ error }}</h2>
        <h2 class="messages__success" v-if="success">{{ success }}</h2>
      </div>

      <b-tabs class="tabs" content-class="mt-3"
              active-nav-item-class="font-weight text-uppercase text-success"
              nav-class="text-secondary"
              fill >

        <b-tab title="Overview" active>
          <div class="p-5">
            <b-form>
              <div class="row">
                <div class="col-2 label">
                  <label>Name</label>
                </div>
                <div class="col-10">
                  <input type="text" v-model="chip_version.name" placeholder="Name" disabled>
                </div>
              </div>

              <div class="row">
                <div class="col-2 label">
                  <label>Alias</label>
                </div>
                <div class="col-10">
                  <input type="text" v-model="chip_version.alias" placeholder="Alias" disabled>
                </div>
              </div>

              <div class="row">
                <div class="col-2 label">
                  <label>Cost</label>
                </div>
                <div class="col-10">
                  <input type="number" v-model="chip_version.cost" placeholder="Cost" disabled>
                </div>
              </div>

              <div class="row">
                <div class="col-2 label">
                  <label>Price</label>
                </div>
                <div class="col-10">
                  <input type="number" v-model="chip_version.price" placeholder="Price" disabled>
                </div>
              </div>

              <div class="row">
                <div class="col-2 label">
                  <label>Discount percent</label>
                </div>
                <div class="col-10">
                  <input type="number" v-model="chip_version.discount_percent" placeholder="Discount percent" disabled>
                </div>
              </div>

              <div class="row">
                <div class="col-2 label">
                  <label>Discount percent</label>
                </div>
                <div class="col-10">
                  <input type="number" v-model="chip_version.review_count" placeholder="Discount percent" disabled>
                </div>
              </div>

              <div class="row">
                <div class="col-2 label">
                  <label>Discount percent</label>
                </div>
                <div class="col-10">
                  <input type="number" v-model="chip_version.average_rating" placeholder="Discount percent" disabled>
                </div>
              </div>

              <div class="row">
                <div class="col-2 label">
                  <label>Discount percent</label>
                </div>
                <div class="col-10">
                  <input type="number" v-model="chip_version.discount_price" placeholder="Discount percent" disabled>
                </div>
              </div>

              <div class="row">
                <div class="col-2 label">
                  <p class="form__label">Created date</p>
                </div>
                <div class="col-10">
                  <input type="text" v-model="chip_version.created_time" placeholder="Name" disabled>
                </div>
              </div>

              <div class="row">
                <div class="col-2 label">
                  <p class="form__label">Last updated</p>
                </div>
                <div class="col-10">
                  <input type="text" v-model="chip_version.updated_time" placeholder="Name" disabled>
                </div>
              </div>

              <div class="row">
                <div class="col-2 label">
                  <p class="form__label">Enabled</p>
                </div>
                <div class="col-10">
                  <b-form-checkbox v-model="chip_version.enabled" class="mt-auto mb-auto" switch size="lg" disabled></b-form-checkbox>
                </div>
              </div>

              <div class="row">
                <div class="col-2 label">
                  <p class="form__label">In stock</p>
                </div>
                <div class="col-10">
                  <b-form-checkbox v-model="chip_version.in_stock" class="mt-auto mb-auto" switch size="lg" disabled></b-form-checkbox>
                </div>
              </div>

              <div class="row">
                <div class="col-2 label">
                  <p class="form__label">In stock</p>
                </div>
                <div class="col-10">
                  <b-form-checkbox v-model="chip_version.reviewed_by_customer" class="mt-auto mb-auto" switch size="lg" disabled></b-form-checkbox>
                </div>
              </div>

              <div class="row">
                <div class="col-2 label">
                  <p class="form__label">In stock</p>
                </div>
                <div class="col-10">
                  <b-form-checkbox v-model="chip_version.customer_can_review" class="mt-auto mb-auto" switch size="lg" disabled></b-form-checkbox>
                </div>
              </div>


            </b-form>
          </div>
        </b-tab>

        <b-tab title="Description" lazy>
          <div class="p-5">
            <b-form>
              <p class="p-3">Short description</p>
              <div v-html="chip_version.short_description"></div>

              <p class="p-3">Full description</p>
              <div v-html="chip_version.full_description"></div>
            </b-form>
          </div>
        </b-tab>

        <b-tab title="Images" lazy>
          <div class="p-5">
            <b-form>
              <div class="mt-4 p-3">
                <div class="img">
                  <img class="img__file" :src="chip_version.main_image">
                </div>
              </div>
            </b-form>
          </div>
        </b-tab>

        <b-tab title="Details" lazy>
          <div class="p-5">
            <b-form>
              <div v-if="chip_version.details.length < 1">
                <p>Chip type not have any details</p>
              </div>
              <div v-else>
                <div class="row details" v-for="detail in chip_version.details" :key="detail.name">
                  <div class="col-6">
                    <input type="text" v-model="detail.name" placeholder="Name" disabled>
                  </div>
                  <div class="col-6">
                    <input type="text" v-model="detail.value" placeholder="Value" disabled>
                  </div>
                </div>
              </div>
            </b-form>
          </div>
        </b-tab>

        <b-tab title="Shipping" lazy>
          <div class="p-5">
            <b-form>
              <div class="row">
                <div class="col-2 label">
                  <label>Weight (Gm)</label>
                </div>
                <div class="col-10">
                  <input type="number" v-model="chip_version.weight" placeholder="Weight (Gm)" disabled>
                </div>
              </div>

            </b-form>
          </div>
        </b-tab>
      </b-tabs>

    </div>
  </div>
</template>

<script>
export default {
  name: "ChipVersion",
  data() {
    return {
      isLoading: false,
      error: '',
      success: '',
      chip_version: {}
    }
  },
  created() {
    this.loadChipType(this.$route.params.id)
  },
  methods: {
    async loadChipType(id) {
      this.isLoading = true;

      let token = this.$store.getters.token;

      let myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let url = `https://live-guard.herokuapp.com/api/chip-versions/` + id;

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
            this.chip_version = result
            console.log(this.chip_version)
          })
          .catch(error => {
            this.error = error
            console.log(this.error)
          });

      this.isLoading = false;
    }
  }

}
</script>

<style scoped lang="scss">
@import "../../../assets/sass/dashboard-childs.scss";

.header {
  justify-content: space-between;
}

input {
  padding: 1rem 2rem;
  font-size: 1.5rem;
  background-color: rgba($color-white, .5);
  margin: 2rem 0 ;
  display: block;
  width: 100%;
  border: 1px solid #c1c1c1;

  &:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba($color-black, .1);
    border: 1px solid $color-primary;
  }

  &::-webkit-input-placeholder {
    color: $color-grey-dark-2;
  }

}

.img {
  max-height: 50rem;
  max-width: 50rem;

  & img {
    max-height: 100%;
    max-width: 100%;

  }
}


.badge {
  padding: 1rem 2rem;

  &::selection {
    background-color: $color-white;
    color: $color-danger;
  }
}

.hidden {
  display: none;
}

.btn-image-header {
  border: 1px solid #c1c1c1;
  padding: 5px 10px;
  color: $color-primary;
  width: 160px;
  margin: 10px;
  cursor: pointer;
}

.btn-image-header i {
  margin: auto 0;
  font-size: 120%;
}

.btn-image-header p {
  margin: auto 5px;
}

.btn-remove-image-header {
  border: 1px solid #c1c1c1;
  padding: 5px 10px;
  width: 200px;
  margin: 10px;
}

.btn-remove-image-header p {
  margin: auto 5px;
}

.btn-remove-image-header .fa-image {
  margin: auto 0;
  font-size: 120%;
  color: $color-primary;
}

.btn-remove-image-header .fa-times {
  margin: auto 5px auto auto;
}

.btn-remove-image-header .fa-times:hover {
  color: $color-primary;
}

.form__label {
  padding: 0 1rem;
}

.label {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-container  {
  display: flex;
  justify-content: center;
  align-items: center;

  & i {
    margin: 0 0.7rem;
    cursor: pointer;
    font-size: 1.8rem;

    &:hover {
      color: $color-primary;
    }
  }
}

</style>

