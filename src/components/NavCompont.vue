<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <img
        class="rounded-3 imgs p-1 hvrs-bob"
        src="https://us.123rf.com/450wm/photoart23d/photoart23d1705/photoart23d170500084/77462832-rojo-de-la-letra-a-3d-aislado-en-blanco-representaci%C3%B3n-3d.jpg"
        alt="Error.."
      />
      <router-link to="/"
        ><a class="navbar-brand" href="#"> ABDALLAH</a></router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link to="/">
            <li class="nav-item hvr-bob hvr-underline-from-cente">
              <a class="nav-link active" aria-current="page" href="#"
                ><i class="fa-solid fa-house"></i> Home</a
              >
            </li>
          </router-link>
          <router-link to="/about">
            <li class="nav-item hvr-bob hvr-underline-from-cente">
              <a class="nav-link" href="#"
                ><i class="fa-solid fa-address-card"></i> About Me</a
              >
            </li>
          </router-link>
          <router-link to="/services">
            <li class="nav-item hvr-bob hvr-underline-from-cente">
              <a class="nav-link" href="#"
                ><i class="fa-solid fa-gear fa-spin"></i> services</a
              >
            </li>
          </router-link>
          <router-link to="/skills">
            <li class="nav-item hvr-bob hvr-underline-from-cente">
              <a class="nav-link" href="#"
                ><i class="fa-solid fa-bolt"></i> skills</a
              >
            </li>
          </router-link>
          <router-link to="/works">
            <li class="nav-item hvr-bob hvr-underline-from-cente">
              <a class="nav-link" href="#"
                ><i class="fa-solid fa-briefcase"></i> works</a
              >
            </li>
          </router-link>
          <router-link to="/contact">
            <li class="nav-item hvr-bob hvr-underline-from-cente">
              <a class="nav-link" href="#"
                ><i class="fa-solid fa-message"></i> contact</a
              >
            </li>
          </router-link>

          <li class="nav-item mode">
            <a class="nav-link" href="#"> <ThemeMode /></a>
          </li>
        </ul>
        <!-- <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
      </div>
    </div>
  </nav>
</template>

<script>
import ThemeMode from "@/components/ThemeMode.vue";
export default {
  components: {
    ThemeMode,
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: rgba(13, 110, 253);
  box-shadow: 0 10px 20px -5px gray;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 9999;
  text-align: -webkit-left;
}
.dark-theme .navbar {
  background-color: #101213;
  box-shadow: 0 10px 20px -5px gray;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 9999;
}
.navbar-nav .nav-link.active,
.nav-link,
.navbar-brand {
  color: #eee;
}
.nav-link {
  font-size: 18px;
}
.dark-theme .nav-link,
.dark-theme .nav-link.active {
  color: #42b983;
}
.dark-theme .nav-link:hover,
.dark-theme .nav-link.active:hover {
  color: #eee;
}
.navbar-brand {
  font-size: 30px;
}
.navbar-toggler {
  background: white;
}
.imgs {
  width: 45px;
  height: 45px;
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

@media screen and (min-width: 767px) and (max-width: 1023px) {
  .navbar-toggler-icon,
  .navbar-toggler,
  .navbar-brand,
  .imgs {
    display: none;
  }
  .collapse:not(.show) {
    display: block;
  }
  ul {
    display: -webkit-inline-box;
    width: 100%;
    li {
      padding-right: 25px;
    }
  }
}
.hver-bob {
  padding-left: 5px;
}
</style>
