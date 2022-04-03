<template>
  <div class="chip_types">
    <div class="header d-flex">
      <h2 class="heading-secondary">Add new user</h2>
    </div>

    <main class="main-spinner" v-if="isLoading">
      <b-spinner class="spinner mt-5" label="Loading..."></b-spinner>
    </main>

    <div v-else>
      <b-form @submit.prevent="" class="mt-4 p-3">

        <div class="messages">
          <h2 class="messages__error" v-if="error">{{ error }}</h2>
          <h2 class="messages__success" v-if="success">{{ success }}</h2>
        </div>

        <div class="row">
          <div class="col-2 label">
            <label>Name</label>
          </div>
          <div class="col-10">
            <input v-model="user.name" type="text" placeholder="Name">
          </div>
        </div>

        <div class="row">
          <div class="col-2 label">
            <label>Email</label>
          </div>
          <div class="col-10">
            <input v-model="user.email" type="email" placeholder="Email">
          </div>
        </div>

        <div class="row">
          <div class="col-2 label">
            <label>Password</label>
          </div>
          <div class="col-10">
            <input v-model="user.password" type="password" placeholder="Password">
          </div>
        </div>

        <div class="row">
          <div class="col-2 label">
            <label>Gender</label>
          </div>
          <div class="col-10">
            <b-form-select v-model="user.gender" :options="gender_options"></b-form-select>
          </div>
        </div>

        <div class="row">
          <div class="col-2 label">
            <label>address</label>
          </div>
          <div class="col-10">
            <input v-model="user.address" type="text" placeholder="Address">
          </div>
        </div>

        <div class="row">
          <div class="col-2 label">
            <label>Date of birth</label>
          </div>
          <div class="col-10">
            <input v-model="user.date_of_birth" type="date">
          </div>
        </div>

        <div class="row">
          <div class="col-2 label">
            <label>Facebook URL</label>
          </div>
          <div class="col-10">
            <input v-model="user.facebook_url" type="url" placeholder="Facebook URL">
          </div>
        </div>

        <div class="row">
          <div class="col-2 label">
            <label>Twitter URL</label>
          </div>
          <div class="col-10">
            <input v-model="user.twitter_url" type="url" placeholder="Twitter URL">
          </div>
        </div>

        <div class="row">
          <div class="col-2 label">
            <label>Instagram URL</label>
          </div>
          <div class="col-10">
            <input v-model="user.instagram_url" type="url" placeholder="Instagram URL">
          </div>
        </div>

        <div class="row">
          <div class="col-2 label">
            <label>Roles</label>
          </div>
          <div class="col-10">
            <b-form-group v-slot="{ ariaDescribedby }">
              <b-form-checkbox-group
                  id="checkbox-group-2"
                  v-model="user.roles_id"
                  :aria-describedby="ariaDescribedby"
                  name="flavour-2"
              >
                <div v-for="role in roles" :key="role.id" class="d-flex">
                  <b-form-checkbox :value="role.id"></b-form-checkbox>
                  <span class="me-2 ms-2">{{ role.role }}</span> -
                  <span class="me-2 ms-2">{{ role.description }}</span>
                </div>
              </b-form-checkbox-group>
            </b-form-group>
          </div>
        </div>

        <div class="row mt-5 mb-5">
          <div class="col-2 label">
            <label>Avatar</label>
          </div>
          <div class="col-10">
            <div v-if="user.avatar === ''" >
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
              <img class="img__file" :src="user.avatar">
            </div>
          </div>

        </div>

        <button type="submit" class="btn mt-5">Add new chip type</button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddNewUser",
  data() {
    return {
      isLoading: false,
      error: '',
      success: '',
      roles: '',
      user: {
        name: '',
        email: '',
        password: '',
        about: '',
        phone: '',
        gender: null,
        address: '',
        date_of_birth: '',
        facebook_url: '',
        twitter_url: '',
        instagram_url: '',
        avatar: '',
        avatar_file: '',
        roles_id: []
      },
      gender_options: [
        { value: null, text: 'Please select your gender' },
        { value: "male", text: 'Male' },
        { value: "female", text: 'Female' },
      ]
    }
  },
  created() {
    this.loadRoles();
  },
  methods: {
    changeImage(e) {
      this.user.avatar_file = e.target.files[0];
      this.$emit('input', this.user.avatar_file);
      let reader = new FileReader();
      reader.readAsDataURL(this.user.avatar_file);
      reader.onload = e => {
        this.user.avatar = e.target.result;
      }

    },
    browseImage() {
      this.$refs.mainImage.click();
    },
    removerImage() {
      this.user.avatar = '';
      this.user.avatar_file = '';
    },
    async loadRoles() {
      this.isLoading = true;

      let token = this.$store.getters.token;

      let myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + token);

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let url = "https://live-guard.herokuapp.com/api/roles";

      await fetch(url, requestOptions)
          .then(response => response.json())
          .then(result => {
            this.roles = result;
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
@import "../../../assets/sass/dashboard-childs.scss";

.header {
  justify-content: space-between;
}

input, .custom-select {
  padding: 1rem 2rem;
  font-size: 1.5rem;
  background-color: rgba($color-white, .5);
  margin: 2rem 0;
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

.label {
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-select {
  height: auto;
}

</style>