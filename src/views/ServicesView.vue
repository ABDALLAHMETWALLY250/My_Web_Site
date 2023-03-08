<template>
  <NavCompont />
  <AboutsdCompont />
  <ServicesCompont />
  <FooterCompont />
      <LoadingScreen :isLoading="isLoading" />
    <main v-if="!isLoading"></main>
</template>

<script>
import NavCompont from "@/components/NavCompont.vue";
import AboutsdCompont from "@/components/BgCompont.vue";
import ServicesCompont from "@/components/ServicesCompont.vue";
import FooterCompont from "@/components/FooterCompont.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";
export default {
  components: {
    NavCompont,
    AboutsdCompont,
    ServicesCompont,
    FooterCompont,
    LoadingScreen,
  },
};
</script>

<style lang="scss" scoped></style>
