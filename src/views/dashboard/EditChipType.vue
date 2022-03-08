<template>
  <div class="chip_types">
    <div class="header d-flex">
      <h2 class="heading-secondary">Edit chip type: {{ chip_type.name }}</h2>
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
            <b-form @submit.prevent="updateOverview">
              <div class="row">
                <div class="col-2 label">
                  <label>Name</label>
                </div>
                <div class="col-10">
                  <input type="text" v-model="chip_type.name" placeholder="Name" required>
                </div>
              </div>
              <div class="row">
                <div class="col-2 label">
                  <label>Alias</label>
                </div>
                <div class="col-10">
                  <input type="text" v-model="chip_type.alias" placeholder="Alias" required>
                </div>
              </div>
              <div class="row">
                <div class="col-2 label">
                  <label>Cost</label>
                </div>
                <div class="col-10">
                  <input type="number" v-model="chip_type.cost" placeholder="Cost" required>
                </div>
              </div>
              <div class="row">
                <div class="col-2 label">
                  <label>Price</label>
                </div>
                <div class="col-10">
                  <input type="number" v-model="chip_type.price" placeholder="Price" required>
                </div>
              </div>
              <div class="row">
                <div class="col-2 label">
                  <label>Discount percent</label>
                </div>
                <div class="col-10">
                  <input type="number" v-model="chip_type.discount_percent" placeholder="Discount percent" required>
                </div>
              </div>
              <div class="row">
                <div class="col-2 label">
                  <p class="form__label">Enabled</p>
                </div>
                <div class="col-10">
                  <b-form-checkbox v-model="chip_type.enabled" class="mt-auto mb-auto" switch size="lg"></b-form-checkbox>
                </div>
              </div>
              <div class="row">
                <div class="col-2 label">
                  <p class="form__label">In stock</p>
                </div>
                <div class="col-10">
                  <b-form-checkbox v-model="chip_type.in_stock" class="mt-auto mb-auto" switch size="lg"></b-form-checkbox>
                </div>
              </div>

              <button type="submit" class="btn mt-5">Update overview</button>

            </b-form>
          </div>
        </b-tab>

        <b-tab title="Description" lazy>
          <div class="p-5">
            <b-form @submit.prevent="updateDescription">
              <p class="p-3">Short description</p>
              <ejs-richtexteditor :height="300" v-model="chip_type.short_description"></ejs-richtexteditor>

              <p class="p-3">Full description</p>
              <ejs-richtexteditor :height="600" v-model="chip_type.full_description"></ejs-richtexteditor>

              <button type="submit" class="btn mt-5">Update description</button>

           </b-form>
          </div>
        </b-tab>

        <b-tab title="Images" lazy>
          <div class="p-5">
            <b-form @submit.prevent="updateImages">
              <div class="mt-4 p-3">
                <div v-if="chip_type.mainImage === ''" >
                  <input type="file" accept="image/" class="hidden" ref="mainImage" @change="changeImage" required>
                  <button type="reset" @click="browseImage" class="btn-image-header d-flex">
                    <i class="far fa-image"></i>
                    <p>Choose image</p>
                  </button>
                </div>
                <div v-else>
                  <button type="reset" class="btn-remove-image-header d-flex">
                    <p>Image uploaded</p>
                    <i @click="removerImage" class="far fa-times"></i>
                  </button>
                </div>
                <div class="img">
                  <img class="img__file" :src="chip_type.mainImage">
                </div>

              </div>

              <button type="submit" class="btn mt-5">Update images</button>

            </b-form>
          </div>
        </b-tab>

        <b-tab title="Details" lazy>
          <div class="p-5">
            <b-form @submit.prevent="updateDetails">
              <h2 class="messages__error text-white">Name must be unique</h2>
              <div class="row details" v-for="detail in chip_type.details" :key="detail.name">
                <div class="col-6">
                  <input type="text" v-model="detail.name" placeholder="Name" required>
                </div>
                <div class="col-5">
                  <input type="text" v-model="detail.value" placeholder="Value" required>
                </div>
                <div class="col-1 icon-container">
                  <i @click="removeDetail(detail)" class="fas fa-trash"></i> |
                  <i @click="addDetail" class="fas fa-plus"></i>
                </div>
              </div>

              <div v-if="chip_type.details.length < 1">
                <div class="col-1 icon-container">
                  <i @click="addDetail" class="fas fa-plus"></i>
                </div>
              </div>
              <button type="submit" class="btn mt-5">Update details</button>
            </b-form>
          </div>
        </b-tab>

        <b-tab title="Shipping" lazy>
          <div class="p-5">
            <b-form @submit.prevent="updateShipping">
              <div class="row">
                <div class="col-2 label">
                  <label>Weight (Gm)</label>
                </div>
                <div class="col-10">
                  <input type="number" v-model="chip_type.weight" placeholder="Weight (Gm)" required>
                </div>
              </div>

              <button type="submit" class="btn mt-5">Update shipping</button>
            </b-form>
          </div>
        </b-tab>
      </b-tabs>

    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";

Vue.use(RichTextEditorPlugin);

export default {
  name: "EditChipType",
  provide: {
    richtexteditor:[Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar]
  },
  data() {
    return {
      isLoading: false,
      error: '',
      success: '',
      chip_type: {}
    }
  },
  created() {
    this.loadChipType(this.$route.params.id)
  },
  methods: {
    changeImage(e) {
      this.chip_type.mainImageFile = e.target.files[0];
      this.$emit('input', this.chip_type.mainImageFile);
      let reader = new FileReader();
      reader.readAsDataURL(this.chip_type.mainImageFile);
      reader.onload = e => {
        this.chip_type.mainImage = e.target.result;
      }

    },
    browseImage() {
      this.$refs.mainImage.click();
    },
    removerImage() {
      this.chip_type.mainImage = '';
      this.chip_type.mainImageFile = '';
    },
    removeDetail(detail) {
      const index = this.details.indexOf(detail);
      if (index > -1) {
        this.chip_type.details.splice(index, 1); // 2nd parameter means remove one item only
      }
    },
    addDetail() {
      this.chip_type.details.push({
        "name": null,
        "value": null,
      })
    },
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

      let url = `https://live-guard.herokuapp.com/api/chip-types/` + id;

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
            if (result.details.length > 0) {
              this.chip_type = result
            } else {
              result.details.push({
                "name": null,
                "value": null,
              })
            }
            console.log(this.chip_type)
          })
          .catch(error => {
            this.error = error
            console.log(this.error)
          });

      this.isLoading = false;
    },
    async updateOverview() {
      this.isLoading = true;

      let token = this.$store.getters.token;

      let myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        "name": this.chip_type.name,
        "alias": this.chip_type.alias,
        "cost": this.chip_type.cost,
        "price": this.chip_type.price,
        "discount_percent": this.chip_type.discount_percent,
        "in_stock": this.chip_type.in_stock,
        "enabled": this.chip_type.enabled
      });

      let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      let url = 'https://live-guard.herokuapp.com/api/chip-types/' + this.chip_type.id + '/overview';

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
            this.success = result.message
          })
          .catch(error => {
            this.error = error.message
            console.log(error)
          });

      this.isLoading = false;
    },
    async updateDescription() {
      this.isLoading = true;

      let token = this.$store.getters.token;

      let myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        "short_description": this.chip_type.short_description,
        "full_description": this.chip_type.full_description,
      });

      let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      let url = 'https://live-guard.herokuapp.com/api/chip-types/' + this.chip_type.id + '/description';

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
            this.success = result.message
          })
          .catch(error => {
            this.error = error.message
            console.log(error)
          });

      this.isLoading = false;
    },
    async updateImages() {},
    async updateDetails() {
      this.isLoading = true;

      let token = this.$store.getters.token;

      let myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        "details": this.chip_type.details,
      });

      let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      let url = 'https://live-guard.herokuapp.com/api/chip-types/' + this.chip_type.id + '/details';

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
            this.success = result.message
          })
          .catch(error => {
            this.error = error.message
            console.log(error)
          });

      this.isLoading = false;
    },
    async updateShipping() {
      this.isLoading = true;

      let token = this.$store.getters.token;

      let myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        "weight": this.chip_type.weight,
      });

      let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      let url = 'https://live-guard.herokuapp.com/api/chip-types/' + this.chip_type.id + '/shipping';

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
            this.success = result.message
          })
          .catch(error => {
            this.error = error.message
            console.log(error)
          });

      this.isLoading = false;
    },
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/sass/dashboard-childs.scss";
@import "../../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";

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
