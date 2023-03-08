<template>
  <NavCompont />
  <BgCompont />
  <WorkCompont />
  <FooterCompont />
  <LoadingScreen :isLoading="isLoading" />
  <main v-if="!isLoading"></main>
</template>

<script>
import NavCompont from "@/components/NavCompont.vue";
import BgCompont from "@/components/BgCompont.vue";
import WorkCompont from "@/components/WorkCompont.vue";
import FooterCompont from "@/components/FooterCompont.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";
export default {
  components: {
    NavCompont,
    BgCompont,
    WorkCompont,
    FooterCompont,
    LoadingScreen,
  },
};
</script>

<style lang="scss" scoped></style>
