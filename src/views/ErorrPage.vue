<template>
  <NavCompont />
  <BgCompont />
  <LoadingScreen />
  <br /><br /><br />
  <lottie-player
    src="https://assets4.lottiefiles.com/packages/lf20_bhw1ul4g.json"
    background="transparent"
    speed="1"
    class="lottie"
    loop
    style="width: 100%; height: 700px"
    autoplay
    data-aos="fade-up"
  ></lottie-player>
  <h2>OOPS! Page Not Found.</h2>
  <h3>You Can Go To...</h3>
  <br /><br />
  <div class="container">
    <div class="row">
      <div class="col-lg col-md-12 col-sm-12">
        <div data-aos="zoom-out" class="buttons mt-5">
          <router-link to="/">
            <a class="hvr-bob">
              <button><i class="fa-solid fa-house"></i> Home</button></a
            ></router-link
          >
          <router-link to="/about">
            <a class="hvr-bob">
              <button>
                <i class="fa-solid fa-address-card"></i> About Me
              </button></a
            ></router-link
          >
          <router-link to="/services">
            <a class="hvr-bob">
              <button>
                <i class="fa-solid fa-gear fa-spin"></i> services
              </button></a
            ></router-link
          >
        </div>
        <br /><br /><br />

        <div data-aos="zoom-in" class="buttons">
          <router-link to="/skills">
            <a class="hvr-bob">
              <button><i class="fa-solid fa-bolt"></i> skills</button></a
            ></router-link
          >
          <router-link to="/works">
            <a class="hvr-bob">
              <button><i class="fa-solid fa-briefcase"></i> My Work</button></a
            ></router-link
          >
          <router-link to="/contact">
            <a class="hvr-bob">
              <button><i class="fa-solid fa-message"></i> Contact Me</button></a
            ></router-link
          >
        </div>
      </div>
    </div>
  </div>
  <br /><br /><br />
  <FooterCompont class="mar" />
</template>

<script>
import BgCompont from "@/components/BgCompont.vue";
import NavCompont from "@/components/NavCompont.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";
import FooterCompont from "@/components/FooterCompont.vue";
export default {
  components: {
    BgCompont,
    NavCompont,
    LoadingScreen,
    FooterCompont,
  },
};
</script>

<style lang="scss" scoped>
.dark-theme h2,
.dark-theme h3 {
  color: #eee;
}
h2,
h3 {
  color: #000;
}
.buttons {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
button {
  color: #315cfd;
  text-transform: uppercase;
  border: 2px solid #315cfd;
  padding: 10px 10px;
  font-size: 16px;
  background: transparent;
  position: relative;
  overflow: hidden;
}

button:hover {
  color: white;
}
button::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 0%;
  top: 0;
  left: -40px;
  transform: skewX(45deg);
  background-color: #315cfd;
  z-index: -1;
  transition: all 1s;
}

button:hover::before {
  width: 160%;
}
@media screen and (max-width: 767px) {
  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  button {
    margin-top: 12px;
  }
}
@media screen and (min-width: 767px) and (max-width: 1023px) {
  .mar {
    margin-top: 160px;
  }
}
</style>
