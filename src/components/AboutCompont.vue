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
  <div data-aos="zoomin" data-aos-duration="1500" class="row g-0 text-center">
    <div class="col-sm-6 col-md-8">
      <lottie-player
        src="https://assets6.lottiefiles.com/packages/lf20_1LhsaB.json"
        background="transparent"
        speed="1"
        class="lottie"
        loop
        autoplay
      ></lottie-player>
    </div>
    <div class="col-6 col-md-4">
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
      <p style="border-bottom: 2px solid" class="card-text">
        <i class="fa-solid fa-envelope"></i> Email :
        <b style="text-transform: lowercase">a</b>bdometwaly250@
        <b style="text-transform: lowercase">g</b>mail.
        <b style="text-transform: lowercase">c</b>om
      </p>
      <p style="border-bottom: 2px solid" class="card-text">
        <i class="fa-solid fa-briefcase"></i> Freelancer : Available
      </p>
      <p style="border-bottom: 2px solid" class="card-text">
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1X2BqhnLiVEssUnIhA_eBZtZxahL8rZc4/view?usp=share_link"
          download
          class="hvr-bob btn-primary d-block"
        >
          <i class="fa-solid fa-graduation-cap"></i>
          My C.V as PDF
        </a>
      </p>
    </div>
  </div>

  <div
    class="row row-cols-1 row-cols-md-2 g-4 text-center"
    data-aos="zoom-in-left"
    data-aos-duration="1500"
    style="width: 100%; margin: auto"
  >
    <div
      data-aos="zoom-in-right"
      data-aos-duration="1500"
      class="col wow fadeIn"
    >
      <div class="card cal">
        <div class="card-body text-center hvr-sweep-to-right toi">
          <h5 class="card-title"><i class="fa-solid fa-user ou"></i></h5>
          <p class="card-text fw-bolder">+10 Projects Complates</p>
          <div class="buttons">
            <router-link to="/works">
              <a class="hvr-bob">
                <button>
                  <i class="fa-solid fa-briefcase"></i> My Work
                </button></a
              ></router-link
            >
            <router-link to="/contact">
              <a class="hvr-bob">
                <button>
                  <i class="fa-solid fa-message"></i> Contact Me
                </button></a
              ></router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      data-aos="zoom-in-left"
      data-aos-duration="1500"
      class="col wow fadeIn"
    >
      <div class="card cal">
        <div class="card-body toi hvr-sweep-to-right text-center">
          <h5 class="card-title"><i class="fa-solid fa-mug-hot ou"></i></h5>
          <p class="card-text fw-bolder">+1000 Cup of coffe</p>
          <div class="buttons">
            <router-link to="/works">
              <a class="hvr-bob">
                <button>
                  <i class="fa-solid fa-briefcase"></i> My Work
                </button></a
              ></router-link
            >
            <router-link to="/contact">
              <a class="hvr-bob">
                <button>
                  <i class="fa-solid fa-message"></i> Contact Me
                </button></a
              ></router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      data-aos="zoom-in-right"
      data-aos-duration="1500"
      class="col wow fadeIn"
    >
      <div class="card cal">
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          class="card-body toi hvr-sweep-to-right text-center"
        >
          <h5 class="card-title"><i class="fa-solid fa-face-smile ou"></i></h5>
          <p class="card-text fw-bolder">+100 Satisfied Clients</p>
          <div class="buttons">
            <router-link to="/works">
              <a class="hvr-bob">
                <button>
                  <i class="fa-solid fa-briefcase"></i> My Work
                </button></a
              ></router-link
            >
            <router-link to="/contact">
              <a class="hvr-bob">
                <button>
                  <i class="fa-solid fa-message"></i> Contact Me
                </button></a
              ></router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      data-aos="zoom-in-left"
      data-aos-duration="1500"
      class="col wow fadeIn"
    >
      <div class="card cal">
        <div class="card-body toi hvr-sweep-to-right text-center">
          <h5 class="card-title"><i class="fa-solid fa-face-smile ou"></i></h5>
          <p class="card-text fw-bolder">+2 Years job experience</p>
          <div class="buttons">
            <router-link to="/works">
              <a class="hvr-bob">
                <button>
                  <i class="fa-solid fa-briefcase"></i> My Work
                </button></a
              ></router-link
            >
            <router-link to="/contact">
              <a class="hvr-bob">
                <button>
                  <i class="fa-solid fa-message"></i> Contact Me
                </button></a
              ></router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      data-aos="zoom-in-right"
      data-aos-duration="1500"
      class="col wow fadeIn"
    >
      <div class="card cal">
        <div class="card-body toi hvr-sweep-to-right text-center">
          <h5 class="card-title"><i class="fa-solid fa-code ou"></i></h5>
          <p class="card-text fw-bolder">+2000 lines of code</p>
          <div class="buttons">
            <router-link to="/works">
              <a class="hvr-bob">
                <button>
                  <i class="fa-solid fa-briefcase"></i> My Work
                </button></a
              ></router-link
            >
            <router-link to="/contact">
              <a class="hvr-bob">
                <button>
                  <i class="fa-solid fa-message"></i> Contact Me
                </button></a
              ></router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      data-aos="zoom-in-left"
      data-aos-duration="1500"
      class="col wow fadeIn"
    >
      <div class="card cal">
        <div class="card-body toi hvr-sweep-to-right text-center">
          <h5 class="card-title"><i class="fa-solid fa-medal ou"></i></h5>
          <p class="card-text fw-bolder">+5 Awards won</p>
          <div class="buttons">
            <router-link to="/works">
              <a class="hvr-bob">
                <button>
                  <i class="fa-solid fa-briefcase"></i> My Work
                </button></a
              ></router-link
            >
            <router-link to="/contact">
              <a class="hvr-bob">
                <button>
                  <i class="fa-solid fa-message"></i> Contact Me
                </button></a
              ></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="title bg-dark mt-4">
    <h2 class="text-center dflex" data-aos="fade-up" data-aos-duration="1500">
      <i class="fa-solid fa-medal" style="padding-right: 5px"></i> I'm Good at
    </h2>
  </div>
  <div class="good-in mt-2 mb-3">
    <div
      class="row row-cols-1 row-cols-md-2 g-4 text-center"
      data-aos="fade-right"
      data-aos-duration="1500"
      style="width: 100%; margin: auto"
    >
      <div data-aos="zoom-in" data-aos-duration="1500" class="col wow fadeIn">
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
      <div data-aos="zoom-in" data-aos-duration="1500" class="col">
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
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
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

  .col-md-8,
  .col-md-4 {
    width: 100%;
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
  }
  .btn {
    font-size: 14px;
  }
}
@media screen and (min-width: 767px) and (max-width: 1023px) {
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
    height: 355px;
    width: 100%;
  }
  .descripe {
    width: 100%;
    padding: 8px;
    text-align: left;
    p {
      font-size: 16px !important;
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
  .col-md-8,
  .col-md-4 {
    width: 50%;
  }
  .col-md-4 {
    padding: 5px;
  }
  .btn {
    font-size: 15px;
  }
  .dark-theme .card-body {
    background: #0c0d0e;
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
    height: 50vh;
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
  .col-md-8,
  .col-md-4 {
    width: 50%;
  }
  .btn {
    font-size: 16px;
  }
  .dark-theme .card-body {
    background: #000;
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
}
.dark-theme .cal {
  border: 3px solid #eee;
  background-color: #000;

  box-shadow: 0 10px 20px -5px gray;
}

.dark-theme i {
  color: #eee;
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
.card-body:hover .card-text {
  color: #eee;
}
.card-body .card-title,
.card-body .card-text {
  font-size: 20px;
}
</style>
