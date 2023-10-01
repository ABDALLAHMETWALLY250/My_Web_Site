<template>
  <NavCompont />
  <BgCompont />

    <AboutCompont />

  <FooterCompont />
  <LoadingScreen :isLoading="isLoading" />
  <main v-if="!isLoading"></main>
</template>

<script>
import NavCompont from "@/components/NavCompont.vue";
import BgCompont from "@/components/BgCompont.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";
import AboutCompont from "@/components/AboutCompont.vue";
import FooterCompont from "@/components/FooterCompont.vue";
export default {
  components: {
    NavCompont,
    BgCompont,
    LoadingScreen,
    AboutCompont,
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

<style lang="scss" scoped></style>
