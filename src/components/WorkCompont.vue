<template>
  <br /><br /><br />
  <div class="title bg-dark">
    <h2 class="text-center dflex">
      <lord-icon
        src="https://cdn.lordicon.com/twprnhsj.json"
        trigger="loop"
        delay="1000"
        colors="primary:#1663c7,secondary:#1663c7"
        style="width: 50px; height: 50px"
      >
      </lord-icon>
      WORKS
    </h2>
  </div>
  <br />
  <!-- Works Content -->
  <div class="container text-center" v-if="data_works.length > 0">
    <div class="row">
      <div class="section-head col-sm-12"></div>
      <div
        data-aos="zoom-in"
        class="col-lg-4 col-sm-12 col-md-6"
        v-for="work in data_works"
        :key="work.id"
      >
        <figure class="imghvr-hinge-left">
          <img :src="work.img" />
          <figcaption>
            <h3>{{ work.title }}</h3>
            <div class="dflex w-100" style="margin-top: 2rem">
              <p
                style="border-radius: 5px"
                class="bg-light text-dark p-1 dflex"
              >
                <i class="fa-brands fa-html5"></i> {{ work.html }}
              </p>
              <p
                style="border-radius: 5px"
                class="bg-light text-dark p-1 dflex"
              >
                <i class="fa-brands fa-css3-alt"></i> {{ work.CSS }}
              </p>
              <p
                style="border-radius: 5px"
                :class="` bg-light text-dark p-1 dflex ${
                  work.JS ? work.JS : 'No'
                }`"
              >
                <i class="fa-brands fa-js"></i> {{ work.JS }}
              </p>
              <p
                style="border-radius: 5px"
                :class="` bg-light text-dark p-1 dflex ${
                  work.BootStrap ? work.BootStrap : 'No'
                }`"
              >
                <i class="fa-brands fa-bootstrap"></i>
                {{ work.BootStrap }}
              </p>
              <p
                style="border-radius: 5px"
                :class="` bg-light text-dark p-1 dflex ${
                  work.Vuetify ? work.Vuetify : 'No'
                }`"
              >
                <i class="fa-brands fa-vuejs"></i>
                {{ work.Vuetify }}
              </p>
              <p
                style="border-radius: 5px"
                :class="` bg-light text-dark p-1 dflex ${
                  work.Vue ? work.Vue : 'No'
                }`"
              >
                <i class="fa-brands fa-vuejs"></i>
                {{ work.Vue }}
              </p>
            </div>

            <div
              class="dflex w-100"
              style="margin-top: 2rem; gap: 0.2rem !important"
            >
              <button type="button" class="btn btn-success">
                <i class="fa-solid fa-link"></i> DEMO
                <a
                  :href="work.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </button>
              <button type="button" class="btn btn-success">
                <i class="fa-regular fa-code-branch"></i> REPO
                <a
                  :href="work.repo"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </button>
              <button class="eye">
                <i class="fa-solid fa-eye"></i> {{ work.views }}
              </button>
            </div>
          </figcaption>
        </figure>
      </div>
      <div data-aos="zoom-in" class="col-lg-4 col-sm-12 col-md-6">
        <figure class="imghvr-hinge-left">
          <img
            src="https://transvelo.github.io/freshcart/assets/images/slider-image-1.jpeg"
          />
          <figcaption>
            <h3>LeaderCommerce</h3>
            <div class="dflex w-100" style="margin-top: 2rem">
              <p
                style="border-radius: 5px"
                class="bg-light text-dark p-1 dflex"
              >
                <i class="fa-brands fa-html5"></i> HTML
              </p>
              <p
                style="border-radius: 5px"
                class="bg-light text-dark p-1 dflex"
              >
                <i class="fa-brands fa-css3-alt"></i> CSS
              </p>
              <p
                style="border-radius: 5px"
                class="bg-light text-dark p-1 dflex"
              >
                <i class="fa-brands fa-js"></i> JS
              </p>
              <p
                style="border-radius: 5px"
                class="bg-light text-dark p-1 dflex"
              >
                <i class="fa-brands fa-bootstrap"></i> BootStrap
              </p>
              <p
                style="border-radius: 5px"
                class="bg-light text-dark p-1 dflex"
              >
                <i class="fa-brands fa-vuejs"></i> Vue
              </p>
              <p
                style="border-radius: 5px"
                class="bg-light text-dark medium p-1 dflex"
              >
                Progress <i class="fa-solid fa-spinner fa-spin"></i>
              </p>
            </div>

            <div
              class="dflex w-100"
              style="margin-top: 2rem; gap: 0.2rem !important"
            >
              <button type="button" class="btn btn-success">
                <i class="fa-solid fa-link"></i> DEMO
                <a
                  href="https://leader-commerce.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </button>
              <button type="button" class="btn btn-success">
                <i class="fa-regular fa-code-branch"></i> REPO
                <a
                  href="https://github.com/ABDALLAHMETWALLY250/leader-commerce"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </button>
              <button class="eye"><i class="fa-solid fa-eye"></i> 10</button>
            </div>
            <p
              style="border-radius: 5px"
              class="bg-light small text-dark p-1 mt-3"
            >
              Progress <i class="fa-solid fa-spinner fa-spin"></i>
            </p>
          </figcaption>
        </figure>
      </div>

      <div class="col-lg-4"></div>
      <div data-aos="zoom-in" class="col-lg-4 col-sm-12 col-md-6">
        <figure class="imghvr-hinge-left">
          <img
            src="https://thumbs.dreamstime.com/b/vector-logo-coding-companies-company-199205353.jpg"
          />
          <figcaption>
            <h3>Leader-Coding</h3>
            <div class="dflex w-100" style="margin-top: 2rem">
              <p
                style="border-radius: 5px"
                class="bg-light text-dark p-1 dflex"
              >
                <i class="fa-brands fa-html5"></i> HTML
              </p>
              <p
                style="border-radius: 5px"
                class="bg-light text-dark p-1 dflex"
              >
                <i class="fa-brands fa-css3-alt"></i> CSS
              </p>
              <p
                style="border-radius: 5px"
                class="bg-light text-dark p-1 dflex"
              >
                <i class="fa-brands fa-js"></i> JS
              </p>
              <p
                style="border-radius: 5px"
                class="bg-light text-dark p-1 dflex"
              >
                <i class="fa-brands fa-bootstrap"></i> BootStrap
              </p>
              <p
                style="border-radius: 5px"
                class="bg-light text-dark p-1 dflex"
              >
                <i class="fa-brands fa-vuejs"></i> Vue
              </p>
              <p
                style="border-radius: 5px"
                class="bg-light text-dark medium p-1 dflex"
              >
                Progress <i class="fa-solid fa-spinner fa-spin"></i>
              </p>
            </div>

            <div
              class="dflex w-100"
              style="margin-top: 2rem; gap: 0.2rem !important"
            >
              <button type="button" class="btn btn-success">
                <i class="fa-solid fa-link"></i> DEMO
                <a
                  href="https://leader-coding.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </button>
              <button type="button" class="btn btn-success">
                <i class="fa-regular fa-code-branch"></i> REPO
                <a
                  href="https://github.com/ABDALLAHMETWALLY250/leader-coding"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </button>
              <button class="eye"><i class="fa-solid fa-eye"></i> 10</button>
            </div>
            <p
              style="border-radius: 5px"
              class="bg-light small text-dark p-1 mt-3"
            >
              Progress <i class="fa-solid fa-spinner fa-spin"></i>
            </p>
          </figcaption>
        </figure>
      </div>
      <div class="col-lg-4"></div>
    </div>
  </div>
  <!-- End Works Content -->
  <!-- Loadding Works Content -->

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
  <!-- End Loadding Works Content -->

  <!-- Buttons -->
  <buttons-comp>
    <template #btn-left>
      <div @click="$router.push('/skills')" class="p-2">
        <i class="fa-solid fa-angles-left fa-shake m-0"></i>
        <i class="fa-solid fa-bolt"></i> Skills
      </div>
    </template>

    <template #btn-right>
      <div @click="$router.push('/contact')" class="p-2">
        <i class="fa-solid fa-message m-0"></i> Contact
        <i class="fa-solid fa-angles-right fa-shake"></i>
      </div>
    </template>
  </buttons-comp>
  <!-- End Buttons -->
</template>

<script>
import axios from "axios";
import ButtonsComp from "./ButtonsComp.vue";
export default {
  data() {
    return {
      data_works: [],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    axios
      .get(
        "https://my-json-server.typicode.com/ABDALLAHMETWALLY250/work-dp/works"
      )
      .then((res) => {
        this.data_works = res.data;
      });
  },
  components: {
    ButtonsComp,
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

.dflex {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
figure {
  background-color: transparent;
  width: 100%;
  height: 400px;
  border-radius: 6px;
  border: 3px solid #000;
  box-shadow: 0 10px 20px -5px #111;
  object-fit: cover;
  margin-bottom: 8px;
}
.dark-theme figure {
  background-color: transparent;
  width: 100%;
  height: 400px;
  border-radius: 6px;
  border: 3px solid #eee;
  box-shadow: 0 10px 20px -5px gray;
  object-fit: cover;
  margin-bottom: 8px;
}
.dark-theme .card {
  background-color: #111;
  color: #fff;
}
img {
  width: 100% !important;
  height: 400px;
  object-fit: cover;
  border-radius: 6px;
}
img:hover {
  scale: 2;
}
i {
  font-size: 20px;
  margin-right: 5px;
}
.medium {
  display: none !important;
}

@media screen and (max-width: 767px) {
  img {
    width: 100%;
  }
  .n {
    width: 100% !important;
  }
  .medium {
    display: none !important;
  }
  .small {
    display: block !important;
  }
}

@media screen and (min-width: 767px) and (max-width: 1023px) {
  .eye {
    margin-top: 8px;
  }
  .small {
    display: none !important;
  }
  .medium {
    display: block !important;
  }
}

@media screen and (min-width: 1024px) {
  .dflex {
    margin-top: 1rem;
  }
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
}
button,
button:focus {
  font-size: 17px;
  padding: 10px 10px;
  border-radius: 0.7rem;
  background-image: linear-gradient(#25d366);
  border: 2px solid rgb(50, 50, 50);
  border-bottom: 5px solid rgb(50, 50, 50);
  box-shadow: 0px 1px 6px 0px #25d366;
  transform: translate(0, -3px);
  transition: 0.2s;
  transition-timing-function: linear;
  display: flex !important;
  align-items: center;
  justify-content: center;
}
.fa-js,
.fa-html5,
.fa-css3-alt,
.fa-bootstrap {
  font-weight: normal !important;
}
button:active {
  transform: translate(0, 0);
  border-bottom: 2px solid rgb(50, 50, 50);
}
p {
  margin-right: 7px;
}
.n {
  width: 48%;
}

.vue {
  display: flex !important;
}
.No {
  display: none !important;
}
</style>
