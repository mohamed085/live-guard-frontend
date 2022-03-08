<template>
  <div class="chip_types">
    <div class="header d-flex">
      <h2 class="heading-secondary">Add new chip type</h2>
    </div>

    <main class="main-spinner" v-if="isLoading">
      <b-spinner class="spinner mt-5" label="Loading..."></b-spinner>
    </main>

    <div v-else>
      <div class="messages">
        <h2 class="messages__error" v-if="error">{{ error }}</h2>
        <h2 class="messages__success" v-if="success">{{ success }}</h2>
      </div>

      <b-form @submit.prevent="addNewChipType" class="mt-4 p-3">

        <b-tabs class="tabs" content-class="mt-3"
                active-nav-item-class="font-weight text-uppercase text-success"
                nav-class="text-secondary"
                fill >
          <b-tab title="Overview" active>
            <div class="p-5">
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


            </div>
          </b-tab>

          <b-tab title="Description" lazy>
            <div class="p-5">
              <p class="p-3">Short description</p>
              <ejs-richtexteditor :height="300" v-model="chip_type.short_description"></ejs-richtexteditor>

              <p class="p-3">Full description</p>
              <ejs-richtexteditor :height="600" v-model="chip_type.full_description"></ejs-richtexteditor>
            </div>
          </b-tab>

          <b-tab title="Images" lazy>
            <div class="p-5">
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
            </div>
          </b-tab>

          <b-tab title="Shipping" lazy>
            <div class="p-5">
              <div class="row">
                <div class="col-2 label">
                  <label>Weight (Gm)</label>
                </div>
                <div class="col-10">
                  <input type="number" v-model="chip_type.weight" placeholder="Weight (Gm)" required>
                </div>
              </div>

            </div>
          </b-tab>
        </b-tabs>

        <button type="submit" class="btn mt-5">Add new chip type</button>
      </b-form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";
import router from "@/router";

Vue.use(RichTextEditorPlugin);


export default {
  name: "AddNewChipType",
  provide: {
    richtexteditor:[Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar]
  },
  data() {
    return {
      isLoading: false,
      error: '',
      success: '',
      chip_type: {
        name: '',
        alias: '',
        in_stock: true,
        enabled: true,
        short_description: '',
        full_description: '',
        cost: '',
        price: '',
        discount_percent: '',
        weight: '',
        mainImage: '',
        mainImageFile: '',
      }
    }
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
    async addNewChipType() {
      this.isLoading = true;

      let token = this.$store.getters.token;

      let myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);

      let formdata = new FormData();
      formdata.append("name", this.chip_type.name);
      formdata.append("alias", this.chip_type.alias);
      formdata.append("shortDescription", this.chip_type.short_description);
      formdata.append("fullDescription", this.chip_type.full_description);
      formdata.append("cost", this.chip_type.cost);
      formdata.append("price", this.chip_type.price);
      formdata.append("weight", this.chip_type.weight);
      formdata.append("mainImageFile", this.chip_type.mainImageFile);
      formdata.append("inStock", this.chip_type.in_stock);
      formdata.append("enabled", this.chip_type.enabled);

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      let url = "http://localhost:8081/api/chip-types";

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
            this.success = result
            router.push("/chip-types")
          })
          .catch(error => {
            this.error = error.message
            console.log(error)
          });
      this.isLoading = false;
    }
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

.nav-tabs .nav-item .nav-link {
  color: $color-grey-dark !important;
  font-size: 10rem;
}

.label {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
