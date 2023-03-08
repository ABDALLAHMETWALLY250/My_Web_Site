<template>
  <div :class="{ loader: true, fadeout: !isLoading }" v-if="!isloaded">
    <svg class="gegga">
      <defs>
        <filter id="gegga">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="7"
            result="blur"
          ></feGaussianBlur>
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"
            result="inreGegga"
          ></feColorMatrix>
          <feComposite
            in="SourceGraphic"
            in2="inreGegga"
            operator="atop"
          ></feComposite>
        </filter>
      </defs>
    </svg>
    <svg class="snurra" width="200" height="200" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="linjärGradient">
          <stop class="stopp1" offset="0"></stop>
          <stop class="stopp2" offset="1"></stop>
        </linearGradient>
        <linearGradient
          y2="160"
          x2="160"
          y1="40"
          x1="40"
          gradientUnits="userSpaceOnUse"
          id="gradient"
          xlink:href="#linjärGradient"
        ></linearGradient>
      </defs>
      <path
        class="halvan"
        d="m 164,100 c 0,-35.346224 -28.65378,-64 -64,-64 -35.346224,0 -64,28.653776 -64,64 0,35.34622 28.653776,64 64,64 35.34622,0 64,-26.21502 64,-64 0,-37.784981 -26.92058,-64 -64,-64 -37.079421,0 -65.267479,26.922736 -64,64 1.267479,37.07726 26.703171,65.05317 64,64 37.29683,-1.05317 64,-64 64,-64"
      ></path>
      <circle class="strecken" cx="100" cy="100" r="64"></circle>
    </svg>
    <svg class="skugga" width="200" height="200" viewBox="0 0 200 200">
      <path
        class="halvan"
        d="m 164,100 c 0,-35.346224 -28.65378,-64 -64,-64 -35.346224,0 -64,28.653776 -64,64 0,35.34622 28.653776,64 64,64 35.34622,0 64,-26.21502 64,-64 0,-37.784981 -26.92058,-64 -64,-64 -37.079421,0 -65.267479,26.922736 -64,64 1.267479,37.07726 26.703171,65.05317 64,64 37.29683,-1.05317 64,-64 64,-64"
      ></path>
      <circle class="strecken" cx="100" cy="100" r="64"></circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
  props: ["isLoading"],
  data: () => {
    return {
      isloaded: false,
    };
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.isloaded = true;
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.loader {
  background-color: #333;
  bottom: 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  padding-top: 10vh;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 54441;
}

.fadeout {
  animation: fadeout 0.5s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
.gegga {
  width: 0;
}

.snurra {
  filter: url(#gegga);
}

.stopp1 {
  stop-color: #f700a8;
}

.stopp2 {
  stop-color: #ff8000;
}

.halvan {
  animation: Snurra1 10s infinite linear;
  stroke-dasharray: 180 800;
  fill: none;
  stroke: url(#gradient);
  stroke-width: 23;
  stroke-linecap: round;
}

.strecken {
  animation: Snurra1 3s infinite linear;
  stroke-dasharray: 26 54;
  fill: none;
  stroke: url(#gradient);
  stroke-width: 23;
  stroke-linecap: round;
}

.skugga {
  filter: blur(5px);
  opacity: 0.3;
  position: absolute;
  transform: translate(3px, 3px);
}

@keyframes Snurra1 {
  0% {
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dashoffset: -403px;
  }
}
</style>
