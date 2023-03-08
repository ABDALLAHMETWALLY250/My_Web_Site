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
    <p id="p">{{ x != null ? "HI " + x.toUpperCase() : "HI My Friend" }}</p>
    <div data-aos="fade" data-aos-duration="1500" class="welcome">
      <span> Welcome </span>
      <VueWriter style="margin-left: 5px" :array="arr1" />
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />

  <div data-aos="fade" data-aos-duration="1500" class="row">
    <div class="col cotwo">
      <h3 class="fw-bold">hI I'M</h3>
      <br />
      <h2 class="text-shadow-pop-br">ABDALLAH MOHAMED</h2>
      <br />
      <div class="descrip">
        <h4 class="d">
          I'M A:<VueWriter
            class="writer"
            style="margin-left: 5px"
            :array="arr2"
          />
        </h4>
      </div>
      <br />
      <p class="detail">
        i work in front-end development and i have two experience in dealing
        with code , programming and web technologies, and i have built a many
        projects that have icreassed my experience and trained alot , i am a
        fast leaner and always love to develope myself.
      </p>
    </div>
    <div class="col">
      <lottie-player
        src="https://assets6.lottiefiles.com/packages/lf20_xRmNN8.json"
        background="transparent"
        speed="1"
        class="lottie"
        loop
        autoplay
      ></lottie-player>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: prompt(" Please Enter Full Name "),
      arr1: [" In My Website"],
      arr2: ["FRONT-END", "CODING", "WEB DESINGER", "VUE DEVELOPER"],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
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
  color: gold !important;
}
h2 {
  color: darkred !important;
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
    font-size: 32px;
  }
  h4 {
    font-size: 22px;
  }
  h3 {
    font-size: 30px;
  }
  .d {
    text-align: center;
    padding-left: 90px;
  }
  .detail {
    padding-left: 13px;
    padding-right: 10px;
    font-size: 20px;
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
  .descrip,
  .detail {
    text-align: center;
    padding-left: 15px;
    color: #101213;
  }
  .dark-theme .alert {
    color: blue;
  }
}
@media screen and (min-width: 767px) and (max-width: 1023px) {
  .lottie {
    height: 570px;
    width: 100%;
  }
  .dark-theme .alert {
    color: blue;
  }
  h2 {
    font-size: 40px;
  }
  h4 {
    font-size: 30px;
  }
  h3 {
    font-size: 30px;
  }
  .detail {
    font-size: 20px;
  }
  .col {
    flex: 100%;
  }
  h2,
  h3,
  .descrip,
  .detail {
    text-align: left;
    padding-left: 45px;
    color: #101213;
  }
}
@media screen and (min-width: 1024px) {
  .lottie {
    height: 60vh;
    width: 100%;
  }
  h2 {
    font-size: 40px;
  }
  h4 {
    font-size: 30px;
  }
  h3 {
    font-size: 30px;
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
</style>
