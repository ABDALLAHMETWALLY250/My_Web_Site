<template>
  <br /><br /><br />
  <div class="title w-100 bg-dark p-1">
    <h2 class="d-flex" style="align-items: center; justify-content: center">
      <lord-icon
        src="https://cdn.lordicon.com/flvisirw.json"
        trigger="loop"
        colors="primary:#1663c7"
        style="width: 50px; height: 50px"
      >
      </lord-icon>
      CONTACT
    </h2>
  </div>
  <br /><br />
  <div class="contain container">
    <div
      data-aos="zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-duration="2000"
      data-aos-offset="0"
      class="contact"
    >
      <h1>Contact Form</h1>
      <hr />
      <!-- Form Input -->
      <form class="cf">
        <div class="half left cf">
          <input required type="text" id="input-name" placeholder="Name" />
          <input
            required
            type="email"
            id="input-email"
            placeholder="Email address"
          />
          <input
            required
            type="text"
            id="input-subject"
            placeholder="Subject"
          />
        </div>
        <div class="half right cf">
          <textarea
            name="message"
            type="text"
            id="input-message"
            placeholder="Message"
          ></textarea>
        </div>
        <input type="submit" value="Submit" id="input-submit" />
      </form>
      <!-- End Form Input -->
    </div>
    <!-- Social Media -->
    <div
      data-aos="zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-duration="2000"
      data-aos-offset="0"
      class="social p-2"
    >
      <h1>Social Media</h1>
      <hr />

      <div
        style="
          display: flex;
          justify-content: space-around;
          align-items: center;
        "
      >
        <a
          class="hvrs-bob"
          title="FaceBook"
          target="_blank"
          href="https://www.facebook.com/abdallah.metwally.925/"
          ><i
            style="font-size: 50px; margin: 8px auto"
            class="fa-brands hvrs-bob fa-facebook"
          ></i>
          <p>FaceBook</p>
        </a>
        <a
          class="hvrs-bob"
          title="Call ME"
          target="_blank"
          href="tel:+20 1550736508"
        >
          <i
            style="font-size: 50px; margin: 8px auto"
            class="fa-solid hvrs-bob fa-phone"
          ></i>
          <p>Call Me</p>
        </a>
      </div>

      <hr />

      <div
        style="
          display: flex;
          justify-content: space-around;
          align-items: center;
        "
      >
        <a
          class="hvrs-bob"
          href="https://github.com/ABDALLAHMETWALLY250"
          title="GitHub"
          target="_blank"
          ><i
            style="font-size: 50px; margin: 8px auto"
            class="fa-brands hvrs-bob fa-github"
          ></i>
          <p>GitHub</p>
        </a>
        <a
          href="https://www.linkedin.com/in/abdallah-mohamed-5b9924224"
          target="_blank"
          class="hvrs-bob"
          title="LinkedIn"
          ><i
            style="font-size: 50px; margin: 8px auto"
            class="fa-brands hvrs-bob fa-linkedin"
          ></i>
          <p>Linked In</p>
        </a>
      </div>

      <hr />

      <div
        style="
          display: flex;
          justify-content: space-around;
          align-items: center;
        "
      >
        <a
          href="mailto:abdometwaly250@gmail.com"
          title="Mail Me"
          class="hvrs-bob"
          target="_blank"
        >
          <i
            style="font-size: 50px; margin: 8px auto"
            class="fa-solid hvrs-bob fa-envelope"
          ></i>
          <p>Mail Me</p>
        </a>
        <a
          class="hvrs-bob"
          href="https://wa.me/+201282488136"
          target="_blank"
          title="Whatsapp"
        >
          <i
            style="font-size: 50px; margin: 8px auto"
            class="fa-brands hvrs-bob fa-whatsapp"
          ></i>
          <p>WhatsApp</p>
        </a>
      </div>
    </div>
  </div>
  <!--End Social Media -->

  <br />
  <br />

  <!-- Buttons -->
  <buttons-comp>
    <template #btn-left>
      <div @click="$router.push('/works')" class="p-2">
        <i class="fa-solid fa-angles-left fa-shake"></i>
        <i class="fa-solid fa-briefcase"></i> Works
      </div>
    </template>

    <template #btn-right>
      <div @click="$router.push('/')" class="p-2">
        <i class="fa-solid fa-home"></i> Home
        <i class="fa-solid fa-angles-right fa-shake"></i>
      </div>
    </template>
  </buttons-comp>
  <!-- End Buttons -->
</template>

<script>
import ButtonsComp from "./ButtonsComp.vue";
export default {
  mounted() {
    window.scrollTo(0, 0);
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
.dark-theme h2 {
  color: #eee;
}
.title {
  box-shadow: 0 10px 20px -5px gray;
}
.contain {
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
}
.dark-theme .contain {
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
}
.contact {
  background: #eee;
  min-width: 40%;
  min-height: 50vh;
  border-radius: 20px;
  padding: 20px;
  border: 3px solid black;
}
.dark-theme .contact {
  background: #111;
  min-width: 40%;
  min-height: 50vh;
  border-radius: 20px;
  padding: 20px;
  border: 3px solid #eee;
}

.social {
  background: #eee;
  min-width: 40%;
  min-height: 50vh;
  border-radius: 20px;
  border: 3px solid rgb(0, 0, 0);
}
.dark-theme .social {
  background: #111;
  min-width: 40%;
  min-height: 50vh;
  border-radius: 20px;
  border: 3px solid #eee;
}

.fa-whatsapp::before {
  color: green;
  font-weight: normal !important;
}
.fa-facebook::before {
  color: #0d6efd;
  font-weight: normal !important;
}
.fa-phone::before {
  color: #0d6efd;
}
.fa-envelope::before {
  color: #0d6efd;
}
.fa-github::before {
  color: rgb(21, 21, 21);
  font-weight: normal !important;
}
.dark-theme .fa-github::before {
  color: #eee;
  font-weight: normal !important;
}
.fa-linkedin::before {
  color: #0d6efd;
  font-weight: normal !important;
}

@import url(https://fonts.googleapis.com/css?family=Merriweather);

h1 {
  text-align: center;
  color: #000000;
  text-shadow: 1px 1px 0 #eee;
}
.dark-theme h1 {
  text-align: center;
  color: #eee;
  text-shadow: 1px 1px 0 #eee;
}

form {
  max-width: 600px;
  text-align: center;
  margin: 20px auto;
}
form input,
form textarea {
  outline: 0;
  padding: 1em;
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  border-radius: 8px;
  display: block;
  width: 100%;
  margin-top: 1em;
  font-family: "Merriweather", sans-serif;
  -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  color: #eee;
  resize: none;
}
.dark-theme input,
.dark-theme textarea {
  outline: 0;
  padding: 1em;
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  border-radius: 8px;
  display: block;
  width: 100%;
  margin-top: 1em;
  font-family: "Merriweather", sans-serif;
  -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  background: #eee;
  color: #000;
  resize: none;
}
form input:focus,
form textarea:focus {
  box-shadow: 0 10px 20px -5px gray !important;
  border: 4px solid aqua;
}
form #input-submit {
  background-color: #eee;
  border: 3px solid #25d366;
  color: #000;
  padding: 10px 10px;
  position: relative;
  width: 100%;
  transition: 0.5s;
  font-size: 17px;
  border-radius: 0.4em;
}
form #input-submit:hover {
  box-shadow: 0 10px 20px -5px gray;
  background-color: #25d366;
}
form textarea {
  height: 126px;
}

.half {
  float: none;
  width: 100%;
  margin-bottom: 1em;
}

.right {
  width: 100%;
}

@media (max-width: 480px) {
  .half {
    width: 100%;
    float: none;
    margin-bottom: 0;
  }
}
/* Clearfix */
.cf:before,
.cf:after {
  content: " ";
  /* 1 */
  display: table;
  /* 2 */
}

.cf:after {
  clear: both;
}

@media screen and (max-width: 767px) {
  .contain {
    width: 100%;
    height: 100%;
    display: block;
  }
  .dark-theme .contain {
    width: 100%;
    height: 100%;
    display: block;
  }

  .social {
    background: #eee;
    min-width: 40%;
    min-height: 15vh;
    border-radius: 20px;
    margin: 10% auto;
  }
  .dark-theme .social {
    background: #111;
    min-width: 40%;
    min-height: 15vh;
    border-radius: 20px;
    margin: 10% auto;
  }
}

@media screen and (min-width: 767px) and (max-width: 1023px) {
  .contain {
    width: 100%;
    height: 100%;
    display: block;
  }
  .dark-theme .contain {
    width: 100%;
    height: 100%;
    display: block;
  }

  .social {
    background: #eee;
    min-width: 40%;
    min-height: 15vh;
    border-radius: 20px;
    margin-top: 8%;
  }
  .dark-theme .social {
    background: #111;
    min-width: 40%;
    min-height: 15vh;
    border-radius: 20px;
    margin-top: 8%;
  }
  .contact {
    background: #eee;
    min-width: 40%;
    min-height: 0vh;
    border-radius: 20px;
    padding: 20px;
  }
  .dark-theme .contact {
    background: #111;
    min-width: 40%;
    min-height: 0vh;
    border-radius: 20px;
    padding: 20px;
  }
}
p {
  font-size: larger;
  font-weight: bolder;
}
.dark-theme p {
  font-size: larger;
  font-weight: bolder;
  color: #eee;
}
@-webkit-keyframes hvrs-bob {
  0% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }

  50% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }

  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}

@keyframes hvrs-bob {
  0% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }

  50% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }

  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}

@-webkit-keyframes hvrs-bob-float {
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}

@keyframes hvrs-bob-float {
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}

.hvrs-bob {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}

.hvrs-bob:active,
.hvrs-bob:focus,
.hvrs-bob {
  -webkit-animation-name: hvrs-bob-float, hvrs-bob;
  animation-name: hvrs-bob-float, hvrs-bob;
  -webkit-animation-duration: 0.3s, 1.5s;
  animation-duration: 0.3s, 1.5s;
  -webkit-animation-delay: 0s, 0.3s;
  animation-delay: 0s, 0.3s;
  -webkit-animation-timing-function: ease-out, ease-in-out;
  animation-timing-function: ease-out, ease-in-out;
  -webkit-animation-iteration-count: 1, infinite;
  animation-iteration-count: 1, infinite;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-direction: normal, alternate;
  animation-direction: normal, alternate;
}
</style>
