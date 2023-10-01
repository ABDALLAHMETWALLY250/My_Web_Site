<template>
  <br /><br /><br />
  <div class="title bg-dark">
    <h2 class="text-center dflex">
      <lord-icon
        src="https://cdn.lordicon.com/hbvyhtse.json"
        trigger="loop"
        delay="1000"
        colors="primary:#1663c7 "
        style="width: 40px; height: 40px"
      >
      </lord-icon>
      ABOUT ME
    </h2>
  </div>
  <br />
  <!-- lottile   -->
  <div data-aos="zoomin" data-aos-duration="1500" class="row g-0 text-center">
    <div class="col-lg-6 col-md-6 col-sm-12">
      <lottie-player
        src="https://assets6.lottiefiles.com/packages/lf20_1LhsaB.json"
        background="transparent"
        speed="1"
        class="lottie"
        loop
        autoplay
      ></lottie-player>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12">
      <div class="intro">
        <p>HI, I Am Abdallah Mohamed Based In Mansoura</p>
      </div>

      <div class="descripe">
        <p>
          I Have One Year Experience In Front-End Development I Am A Front-End
          Web Developer From Egypt.I Can Provide Clean Code And Pixel Perfect
          Design .I Also Make The Website More & More Interactive With Web
          Animations. I Can Provide Clean Code And Pixel Perfect Design. I Also
          Make The Website More & More Interactive With Web Animation. A
          Responsive Design Makes Your Website Accessible To All Users,
          Regardless Of Their Device.
        </p>
      </div>
    </div>
  </div>
  <!--  End lottile   -->

  <!-- Personal Details -->
  <div class="w-100">
    <div
      style="font-size: 16px; font-weight: bolder; text-align: left"
      class="row gf p-2"
    >
      <div data-aos="fade-right" class="col das fw-bold">
        <p style="border-bottom: 2px solid" class="card-text">
          <i class="fa-solid fa-user"></i> Name : Abdallah Mohamed
        </p>
        <p style="border-bottom: 2px solid" class="card-text">
          <i class="fa-solid fa-user"></i> Age : 21 years
        </p>
        <p style="border-bottom: 2px solid" class="card-text">
          <i class="fa-solid fa-location-dot"></i> Addresse : Mansoura, Egypt
        </p>
        <p style="border-bottom: 2px solid" class="card-text">
          <i class="fa-solid fa-briefcase"></i> Work Status : Front-End (Vue.js)
        </p>
      </div>
      <div data-aos="fade-left" class="col cv fw-bold">
        <p style="border-bottom: 2px solid; margin-top: 14px" class="card-text">
          <i class="fa-solid fa-phone"></i> Phone : +20 1550736508
        </p>
        <p style="border-bottom: 2px solid ;d-flex " class="card-text">
          <i class="fa-solid fa-envelope"></i> Email :
          <b style="text-transform: lowercase">a</b>bdometwaly250@<b
            style="text-transform: lowercase"
            >g</b
          >mail.<b style="text-transform: lowercase">c</b>om
        </p>
        <p style="border-bottom: 2px solid" class="card-text">
          <i class="fa-solid fa-briefcase"></i> Freelancer : Available
        </p>
        <p style="border-bottom: 2px solid" class="card-text">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1N8LjsD625mcSjq7CfWK-Ltthz25tx7ER/view?usp=sharing"
            download
            class="hvr-bob btn-primary btn d-block text-center"
            style="font: 20px sans-serif"
          >
            <i class="fa-solid fa-graduation-cap"></i>
            My C.V
          </a>
        </p>
      </div>
    </div>
  </div>
  <!--End Personal Details -->

  <!-- Cards -->
  <div class="container-fluid" v-if="data_about.length > 0">
    <div
      class="row row-cols-1 row-cols-md-2 g-4 text-center"
      data-aos="zoom-in-left"
      data-aos-duration="1500"
      style="width: 100%; margin: auto"
    >
      <div
        data-aos="zoom-in-right"
        data-aos-duration="1500"
        class="col-lg-4 col-sm-12 col-md-6 wow fadeIn"
        v-for="result in data_about"
        :key="result.id"
      >
        <div class="card cal">
          <div class="card-body text-center hvr-sweep-to-right toi">
            <h5 class="card-title"><i :class="result.icon"></i></h5>
            <p class="card-text fw-bolder">{{ result.title }}</p>
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
  </div>
  <!-- End-Cards -->
  <!-- Loading Card -->
  <div class="container" v-else>
    <div class="row">
      <div class="section-head col-sm-12"></div>
      <div
        data-aos="zoom-in-left"
        class="col-lg-4 col-sm-12 col-md-6"
        v-for="n in 6"
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
  <!-- End Loading Card -->
  <!-- Good At -->
  <div class="title bg-dark mt-4">
    <h2 class="text-center dflex" data-aos="fade-up" data-aos-duration="1500">
      <i class="fa-solid fa-medal" style="padding-right: 5px"></i> I'm Good at
    </h2>
  </div>

  <div class="good-in mt-2 mb-3">
    <div class="container-fluid">
      <div
        class="row row-cols-1 row-cols-md-2 g-4 text-center"
        data-aos="fade-right"
        data-aos-duration="1500"
        style="width: 100%; margin: auto"
      >
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          class="col-lg-6 col-md-6 col-sm-12 wow fadeIn"
        >
          <div class="card cal">
            <div
              class="card-body toi hvr-sweep-to-right"
              style="text-align: left"
            >
              <p class="card-text fw-bolder">
                <i class="fa-solid fa-medal"></i> BootStrap
              </p>
              <p class="card-text fw-bolder">
                <i class="fa-solid fa-medal"></i> Vue Js
              </p>
              <p class="card-text fw-bolder">
                <i class="fa-solid fa-medal"></i> Jquery
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          class="col-lg-6 col-md-6 col-sm-12"
        >
          <div class="card cal">
            <div
              class="card-body toi hvr-sweep-to-right"
              style="text-align: left"
            >
              <p class="card-text fw-bolder">
                <i class="fa-solid fa-medal"></i> Front-End Developer
              </p>
              <p class="card-text fw-bolder">
                <i class="fa-solid fa-medal"></i> HTML,CSS,JavaScript
              </p>
              <p class="card-text fw-bolder">
                <i class="fa-solid fa-medal"></i> Sass,GitHub
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Good At -->

  <!-- Buttons -->
  <buttons-comp>
    <template #btn-left>
      <div @click="$router.push('/')" class="p-2">
        <i class="fa-solid fa-angles-left fa-shake"></i>
        <i class="fa-solid fa-home"></i> Home
      </div>
    </template>

    <template #btn-right>
      <div @click="$router.push('/services')" class="p-2">
        <i class="fa-solid fa-gear fa-spin"></i> Services
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
  data() {
    return {};
  },
  mounted() {
    window.scrollTo(0, 0);
    this.get_data_about();
  },
  components: {
    ButtonsComp,
  },
  computed: {
    ...mapState(["data_about"]),
  },
  methods: {
    ...mapActions(["get_data_about"]),
  },
};
</script>

<style lang="scss" scoped>
.dark-theme .intro {
  border-bottom: 2px solid #eee;
  width: 100%;
}
@media screen and (max-width: 767px) {
  .gf {
    text-align: left;
    display: grid;
    margin-left: 0px;
  }

  .lottie {
    height: 50vh;
    width: 100%;
  }
  .descripe {
    width: 100%;
    padding: 5px;
    p {
      font-size: 19px !important;
    }
  }

  .intro {
    width: 100%;
    text-align: center;
    padding: 5px;
    p {
      font-size: 26px !important;
      margin-bottom: 0;
    }
  }
  .dark-theme .card-body {
    background: #0c0d0e;
    color: white;
  }
  .btn {
    font-size: 14px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .gf {
    margin-left: 0px;
  }
  .cv {
    border-left: 2px solid #0c0d0e;
  }
  .dark-theme .cv {
    border-left: 2px solid #eee;
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;
  }
  .lottie {
    width: 100%;
  }
  .descripe {
    width: 100%;
    text-align: left;
    p {
      font-size: 18px !important;
      padding-inline: 5px;
    }
  }

  .intro {
    width: 100%;
    text-align: center;
    padding: 5px;
    p {
      font-size: 25px !important;
      margin-bottom: 0;
    }
  }

  .btn {
    font-size: 15px;
  }
  .dark-theme .card-body {
    background: #0c0d0e;
    color: white;
  }
}
@media screen and (min-width: 1024px) {
  .gf {
    margin-left: 0px;
  }
  .cv {
    border-left: 2px solid #0c0d0e;
  }
  .dark-theme .cv {
    border-left: 2px solid #eee;
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lottie {
    height: 40vh;
    width: 100%;
  }
  .descripe {
    width: 100%;
    padding: 8px;
    text-align: left;
    p {
      font-size: 20px !important;
    }
  }

  .intro {
    width: 100%;
    text-align: center;
    padding: 5px;
    p {
      font-size: 28px !important;
    }
  }

  .btn {
    font-size: 16px;
  }
  .dark-theme .card-body {
    background: #000;
    color: white;
  }
}

.row {
  width: 100%;
}
.dark-theme .descripe,
.dark-theme .intro {
  border-bottom: 2px solid #eee;
  width: 100%;
}

.intro,
.descripe {
  border-bottom: 2px solid #0c0d0e;
  width: 100%;
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
h2 {
  color: dodgerblue;
  font-size: 30px;
}
.dark-theme h2 {
  color: #eee;
}
p {
  color: #0c0d0e;
  font-size: 18px;
}
.dark-theme p {
  color: #eee;
  font-size: 18px;
}
.dflex {
  display: flex;
  align-items: center;
  justify-content: center;
}
.lord {
  width: 42px;
  height: 39px;
}
.cal {
  border: 3px solid #0c0d0e;
  background-color: #eee;
  box-shadow: 0 10px 20px -5px #111;
}
.dark-theme .cal {
  border: 3px solid #eee;
  background-color: #000;
  box-shadow: 0 10px 20px -5px gray;
}

.card-body:hover .card-text {
  color: #eee;
}
.card-body .card-title,
.card-body .card-text {
  font-size: 20px;
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

.btn span:last-child {
  display: none;
}

.btn:hover {
  transition: 0.4s;
  border: 2px dashed #00bfa6;
  background-color: #fff;
  color: #00bfa6;
}

.btn:active {
  background-color: #87dbd0;
}
</style>
