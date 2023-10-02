<template>
  <div
    id="Home"
    class="alert alert-primary text-center font-monospace fw-bolder fs-normal e wow flash"
    data-aos="fade"
    data-aos-duration="1500"
    style="min-width: 100%"
    role="alert"
  >
    <br />
    <br />
    <br />

    <div data-aos="fade" data-aos-duration="1500" class="welcome">
      <span> Welcome </span>
      <VueWriter style="margin-left: 5px" :array="arr1" />
    </div>
  </div>
  <br />
  <br />
  <br />

  <div data-aos="fade" data-aos-duration="1500" class="row text-center">
    <div class="col-lg-8 col-sm-12 col-md-12">
      <h3 class="fw-bold" id="p">
        {{
          this.$store.state.VistorName
            ? "HI , " + this.$store.state.VistorName.toUpperCase()
            : "HI My Friend"
        }}
      </h3>
      <br />

      <div class="name">
        <h3>I'M</h3>
        <h2>ABDALLAH MOHAMED</h2>
      </div>

      <br />
      <div class="descrip">
        <h4 class="d">
          I'M A:
          <VueWriter class="writer" style="margin-left: 5px" :array="arr2" />
        </h4>
      </div>
      <br />
      <p class="detail">
        An ambitious front-end developer who aspires to everything new in
        programming, with more than one years of experience working on exciting
        projects. always use the most up-to-date technologies available to
        implement the project in the best possible quality with the ability to
        write clean and professional code.
      </p>
    </div>
    <div class="col-lg-4 col-sm-12 col-md-12 px-3">
      <lottie-player
        src="https://assets6.lottiefiles.com/packages/lf20_xRmNN8.json"
        background="transparent"
        speed="1"
        class="lottie px-2 text-center"
        loop
        autoplay
      ></lottie-player>
      <br /><br /><br />
    </div>
  </div>
  <!-- Buttons -->
  <buttons-comp>
    <template #btn-left>
      <div @click="goToContact" class="p-2">
        <i class="fa-solid fa-angles-left fa-shake"></i>
        <i class="fa-solid fa-message"></i> Contact
      </div>
    </template>

    <template #btn-right>
      <div @click="goToAbout" class="p-2">
        <i class="fa-solid fa-address-card"></i> About
        <i class="fa-solid fa-angles-right fa-shake"></i>
      </div>
    </template>
  </buttons-comp>
  <!-- End Buttons -->
  <br /><br />
</template>

<script>
import ButtonsComp from "./ButtonsComp.vue";
export default {
  data() {
    return {
      vist: true,
      arr1: [" In My Website"],
      arr2: ["FRONT-END", "CODING", "WEB DESINGER", "VUE DEVELOPER"],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    localStorage.setItem(
      "visitor",
      JSON.stringify(this.$store.state.VistorName)
    );
  },

  components: {
    ButtonsComp,
  },
  methods: {
    goToAbout() {
      this.$router.push("/about");
    },
    goToContact() {
      this.$router.push("/contact");
    },
  },
};
</script>

<style lang="scss" scoped>
.dark-theme .alert {
  background: gray;
}
.alert {
  background: lightblue;
}
.welcome {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.dark-theme .welcome {
  color: #111;
}
.dark-theme .writer {
  color: aqua;
}
.writer {
  color: #f44336;
}
.d {
  text-align: left;
  width: 100%;
  display: flex;
}

.dark-theme h2 {
  background: -webkit-linear-gradient(135deg, #e20001, #ffce22);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
h2 {
  text-transform: uppercase;
  background: linear-gradient(to right, #30cfd0 0%, #330867 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.dark-theme h3,
.dark-theme .descrip,
.dark-theme .detail {
  color: #eee;
}
@media screen and (max-width: 767px) {
  h2,
  h3,
  .descrip,
  .detail {
    text-align: center;
    padding: 0;
  }
  h2 {
    // font-size: 29px;
    font-size: 27px;
  }
  h4 {
    font-size: 22px;
  }
  h3 {
    font-size: 30px;
  }
  .d {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
  }
  .detail {
    // padding-left: 10px;
    // padding-right: 10px;
    // font-size: 18px;
    // text-align: center;
    // color: #101213;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 16px;
    text-align: center;
    color: #101213;
  }
  .row {
    display: flex;
    flex-direction: column-reverse;
  }
  .lottie {
    height: 50vh;
    width: 100%;
    margin-left: -9px;
  }
  h2,
  h3,
  .descrip {
    padding-left: 10px;
  }
}
@media screen and (min-width: 767px) and (max-width: 1023px) {
  .lottie {
    height: 570px;
    width: 100%;
  }

  h2 {
    font-size: 40px;
  }

  h3,
  h4 {
    font-size: 30px;
  }
  .detail {
    font-size: 20px;
  }
  .col {
    flex: 100%;
  }

  h3,
  .descrip,
  .detail {
    text-align: left;
    padding-inline: 37px;
    color: #101213;
  }
}
@media screen and (min-width: 1024px) {
  .lottie {
    height: 60vh;
    width: 100%;
  }
  h2 {
    font-size: 45px;
    padding: 0 0.5em !important;
  }
  h4 {
    font-size: 30px;
  }
  h3 {
    font-size: 35px;
  }
  .detail {
    font-size: 20px;
  }
  h2,
  h3,
  .descrip,
  .detail {
    text-align: left;
    padding-left: 100px;
    color: #000;
  }
}

.text-shadow-pop-br {
  -webkit-animation: text-shadow-pop-br 0.6s both;
  animation: text-shadow-pop-br 0.6s both;
}

@-webkit-keyframes text-shadow-pop-br {
  0% {
    text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555,
      0 0 #555555, 0 0 #555555, 0 0 #555555;
    -webkit-transform: translateX(0) translateY(0);
    transform: translateX(0) translateY(0);
  }
  100% {
    text-shadow: 1px 1px #555555, 2px 2px #555555, 3px 3px #555555,
      4px 4px #555555, 5px 5px #555555, 6px 6px #555555, 7px 7px #555555,
      8px 8px #555555;
    -webkit-transform: translateX(-8px) translateY(-8px);
    transform: translateX(-8px) translateY(-8px);
  }
}
@keyframes text-shadow-pop-br {
  0% {
    text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555,
      0 0 #555555, 0 0 #555555, 0 0 #555555;
    -webkit-transform: translateX(0) translateY(0);
    transform: translateX(0) translateY(0);
  }
  100% {
    text-shadow: 1px 1px #555555, 2px 2px #555555, 3px 3px #555555,
      4px 4px #555555, 5px 5px #555555, 6px 6px #555555, 7px 7px #555555,
      8px 8px #555555;
    -webkit-transform: translateX(-8px) translateY(-8px);
    transform: translateX(-8px) translateY(-8px);
  }
}

.main {
  padding: 15px;
}
</style>
