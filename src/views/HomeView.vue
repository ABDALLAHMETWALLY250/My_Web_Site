<template>
  <div class="home">
    <NavCompont />
    <BgCompont />
    <HelloWorld />
    <FooterCompont />
    <LoadingScreen :isLoading="isLoading" />
    <main v-if="!isLoading"></main>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HomeComp.vue";
import NavCompont from "@/components/NavCompont.vue";
import BgCompont from "@/components/BgCompont.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";
import FooterCompont from "@/components/FooterCompont.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    NavCompont,
    BgCompont,
    LoadingScreen,
    FooterCompont,
  },
  data() {
    return { isLoading: true };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
};
</script>
