<template>
  <br /><br /><br />
  <div class="title w-100 bg-dark p-1">
    <h2 class="d-flex" style="align-items: center; justify-content: center">
      <lord-icon
        src="https://cdn.lordicon.com/hwuyodym.json"
        trigger="loop"
        colors="primary:#1663c7"
        style="width: 40px; height: 40px"
      >
      </lord-icon>
      SERVICES
    </h2>
  </div>
  <div class="feat bg-gray pt-5 pb-5">
    <!-- Card -->
    <div class="container" v-if="data_services.length > 0">
      <div class="row">
        <div class="section-head col-sm-12"></div>
        <div
          data-aos="zoom-in-left"
          class="col-lg-4 col-sm-12 col-md-6"
          v-for="result in data_services"
          :key="result.id"
        >
          <div class="item">
            <span class="icon text-center feature_box_col_one"
              ><lord-icon
                :src="result.icon"
                trigger="loop"
                colors="primary:#4be1ec,secondary:#cb5eee"
                state="loop"
                style="width: 90px; height: 90px"
              >
              </lord-icon
            ></span>
            <h5>{{ result.title }}</h5>
            <p>
              {{ result.desc }}
            </p>

            <div class="buttons">
              <router-link to="/works">
                <a class="hvr-bob">
                  <button class="button">
                    <i class="fa-solid fa-briefcase"></i> Work
                  </button></a
                ></router-link
              >
              <router-link to="/contact">
                <a class="hvr-bob">
                  <button class="button-two">
                    <i class="fa-solid fa-message"></i> Contact
                  </button></a
                ></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Card -->
    <!-- Loadin Card -->
    <div class="container" v-else>
      <div class="row">
        <div class="section-head col-sm-12"></div>
        <div
          data-aos="zoom-in-left"
          class="col-lg-4 col-sm-12 col-md-6"
          v-for="n in 9"
          :key="n"
        >
          <div class="card m-3" aria-hidden="true">
            <div class="card-body">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
              </p>
              <a
                class="btn btn-primary disabled placeholder m-2 col-4"
                aria-disabled="true"
              ></a>
              <a
                class="btn btn-primary disabled placeholder m-2 col-4"
                aria-disabled="true"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Loadin Card -->
  </div>

  <!-- Buttons -->
  <buttons-comp>
    <template #btn-left>
      <div @click="$router.push('/about')" class="p-2">
        <i class="fa-solid fa-angles-left fa-shake"></i>
        <i class="fa-solid fa-address-card"></i> About
      </div>
    </template>

    <template #btn-right>
      <div @click="$router.push('/skills')" class="p-2">
        <i class="fa-solid fa-bolt"></i> Skills
        <i class="fa-solid fa-angles-right fa-shake"></i>
      </div>
    </template>
  </buttons-comp>
  <!-- End Buttons -->
</template>

<script>
import { mapActions, mapState } from "vuex";
import ButtonsComp from "./ButtonsComp.vue";
export default {
  mounted() {
    window.scrollTo(0, 0);
    this.get_data_services();
  },
  components: {
    ButtonsComp,
  },
  computed: {
    ...mapState(["data_services"]),
  },
  methods: {
    ...mapActions(["get_data_services"]),
  },
};
</script>

<style lang="scss" scoped>
h2 {
  color: dodgerblue;
  font-size: 35px;
}
h3 {
  color: dodgerblue;
}
.dark-theme h2,
.dark-theme h3 {
  color: #eee;
}

a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  outline: none;
}

a,
a:active,
a:focus {
  color: #333;
  text-decoration: none;
  transition-timing-function: ease-in-out;
  -ms-transition-timing-function: ease-in-out;
  -moz-transition-timing-function: ease-in-out;
  -webkit-transition-timing-function: ease-in-out;
  -o-transition-timing-function: ease-in-out;
  transition-duration: 0.2s;
  -ms-transition-duration: 0.2s;
  -moz-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
img {
  max-width: 100%;
  height: auto;
}
span,
a,
a:hover {
  display: inline-block;
  text-decoration: none;
  color: inherit;
}
.section-head {
  margin-bottom: 60px;
}

p.service_text {
  color: #cccccc !important;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
}
.section-head p,
p.awesome_line {
  color: #818181;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
}

.extra-text {
  font-size: 34px;
  font-weight: 700;
  color: #2f2f2f;
  margin-bottom: 25px;
  position: relative;
  text-transform: none;
}
.extra-text::before {
  content: "";
  width: 60px;
  height: 3px;
  background: #f91942;
  position: absolute;
  left: 0px;
  bottom: -10px;
  right: 0;
  margin: 0 auto;
}
.extra-text span {
  font-weight: 700;
  color: #f91942;
}
.item {
  background: #eee;
  text-align: center;
  padding: 30px 25px;
  box-shadow: 0 10px 20px -5px gray;
  border-radius: 100px 10px;
  border: 3px solid #111;
  margin-bottom: 30px;
  -webkit-transition: all 0.5s ease 0;
  transition: all 0.5s ease 0;
  transition: all 0.5s ease 0s;
  &:hover {
    background: #f91942;
    box-shadow: 0 8px 20px 0px rgba(0, 0, 0, 0.2);
    -webkit-transition: all 0.5s ease 0;
    transition: all 0.5s ease 0;
    transition: all 0.5s ease 0s;
    color: #eee;
    .item,
    span.icon {
      background: #eee;
      border-radius: 10px;
      -webkit-transition: all 0.5s ease 0;
      transition: all 0.5s ease 0;
      transition: all 0.5s ease 0s;
    }
  }
}
.dark-theme .item {
  background: #111;
  color: #eee;
  text-align: center;
  padding: 30px 25px;
  box-shadow: 0 10px 20px -5px gray;
  border-radius: 100px 10px;
  border: 3px solid #eee;
  margin-bottom: 30px;
  -webkit-transition: all 0.5s ease 0;
  transition: all 0.5s ease 0;
  transition: all 0.5s ease 0s;
}

.item:hover h5,
.item:hover p {
  color: #fff;
  -webkit-transition: all 0.5s ease 0;
  transition: all 0.5s ease 0;
  transition: all 0.5s ease 0s;
}
.item .icon {
  font-size: 40px;
  margin-bottom: 25px;
  color: #f91942;
  width: 90px;
  height: 90px;
  line-height: 96px;
  border-radius: 50%;
}

.dark-theme .item .feature_box_col_three,
.item .feature_box_col_one,
.item .feature_box_col_two,
.item .feature_box_col_four,
.item .feature_box_col_five,
.item .feature_box_col_six {
  background: #eee;
  border-radius: 5px;
}

.item p {
  font-size: 15px;
  line-height: 26px;
}
.item h5 {
  margin-bottom: 20px;
  color: rgb(13, 110, 253);
}
.mission p {
  margin-bottom: 10px;
  font-size: 15px;
  line-height: 28px;
  font-weight: 500;
}
.mission i {
  display: inline-block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #f91942;
  border-radius: 50%;
  color: #fff;
  font-size: 25px;
}
.mission .small-text {
  margin-left: 10px;
  font-size: 13px;
  color: #666;
}
.skills {
  padding-top: 0px;
}
.skills .prog-item {
  margin-bottom: 25px;
}
.skills .prog-item:last-child {
  margin-bottom: 0;
}
.skills .prog-item p {
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 10px;
}
.skills .prog-item .skills-progress {
  width: 100%;
  height: 10px;
  background: #e0e0e0;
  border-radius: 20px;
  position: relative;
}
.skills .prog-item .skills-progress span {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #f91942;
  width: 10%;
  border-radius: 10px;
  -webkit-transition: all 1s;
  transition: all 1s;
}
.skills .prog-item .skills-progress span:after {
  content: attr(data-value);
  position: absolute;
  top: -5px;
  right: 0;
  font-size: 10px;
  font-weight: 600;
  color: #eee;
  background: rgba(0, 0, 0, 0.9);
  padding: 3px 7px;
  border-radius: 30px;
}
.dark-theme .card {
  background-color: #111;
  color: #fff;
}
.title {
  width: 100%;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dark-theme .title {
  width: 100%;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px -5px gray;
}
.button {
  padding: 13px 8px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #0d6efd;
  transition: all 1000ms;
  font-size: 14px;
  position: relative;
  overflow: hidden;
  outline: 2px solid #0d6efd;
  display: flex;
  align-items: center;
  justify-content: center;
}

button:hover {
  color: #ffffff;
  transform: scale(1.1);
  outline: 2px solid #0d6efd;
  box-shadow: 4px 5px 17px -4px #0d6efd;
}

button::before {
  content: "";
  position: absolute;
  left: -50px;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #0d6efd;
  transform: skewX(45deg);
  z-index: -1;
  transition: width 1000ms;
}

button:hover::before {
  width: 250%;
}

.button-two {
  padding: 13px 8px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #fff;
  transition: all 1000ms;
  font-size: 14px;
  position: relative;
  overflow: hidden;
  outline: 2px solid #0d6efd;
  background: #0d6efd;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-two:hover {
  transform: scale(1.1);
  outline: 2px solid #70bdca;
  background: #fff !important;
  color: #0d6efd !important;
}

.button-two::before {
  content: "";
  position: absolute;
  left: -50px;
  top: 0;
  width: 0;
  height: 100%;
  background: #fff !important;
  color: #0d6efd !important;
  transform: skewX(45deg);
  z-index: -1;
  transition: width 1000ms;
}

.button-two:hover::before {
  width: 250%;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
}
.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  background-color: #0d6efd;
  padding: 14px 40px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: 0.4s;
}
@media screen and (max-width: 767px) {
  .item {
    border-radius: 20px;
  }
  .dark-theme .item {
    border-radius: 20px;
  }
}
@media screen and (min-width: 767px) and (max-width: 1023px) {
  .item {
    border-radius: 20px;
  }
  .dark-theme .item {
    border-radius: 20px;
  }
}
</style>
