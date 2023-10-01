<template>
  <NavCompont />
  <AboutsdCompont />
  <ContactCompont />
  <LoadingScreen :isLoading="isLoading" />
  <main v-if="!isLoading"></main>
</template>

<script>
import NavCompont from "@/components/NavCompont.vue";
import AboutsdCompont from "@/components/BgCompont.vue";
import ContactCompont from "@/components/ContactCompont.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";
export default {
  components: {
    NavCompont,
    AboutsdCompont,
    ContactCompont,
    LoadingScreen,
  },
};
</script>

<style lang="scss" scoped></style>
