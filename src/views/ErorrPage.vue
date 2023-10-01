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
              <button class="button">
                <i class="fa-solid fa-house"></i> Home
              </button></a
            ></router-link
          >
          <router-link to="/about">
            <a class="hvr-bob">
              <button class="button">
                <i class="fa-solid fa-address-card"></i> About Me
              </button></a
            ></router-link
          >
          <router-link to="/services">
            <a class="hvr-bob">
              <button class="button">
                <i class="fa-solid fa-gear fa-spin"></i> services
              </button></a
            ></router-link
          >
        </div>
        <br /><br /><br />

        <div data-aos="zoom-in" class="buttons">
          <router-link to="/skills">
            <a class="hvr-bob">
              <button class="button">
                <i class="fa-solid fa-bolt"></i> skills
              </button></a
            ></router-link
          >
          <router-link to="/works">
            <a class="hvr-bob">
              <button class="button">
                <i class="fa-solid fa-briefcase"></i> My Work
              </button></a
            ></router-link
          >
          <router-link to="/contact">
            <a class="hvr-bob">
              <button class="button">
                <i class="fa-solid fa-message"></i> Contact Me
              </button></a
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
.button {
  padding: 15px 20px;
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
  outline: 2px solid #2c9caf;
}

button:hover {
  color: #ffffff;
  transform: scale(1.1);
  outline: 2px solid #70bdca;
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
  padding: 20px 20px;
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
  outline: 2px solid #2c9caf;
  background: #0d6efd;
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
  color: #2c9caf !important;
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
  justify-content: space-around;
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
