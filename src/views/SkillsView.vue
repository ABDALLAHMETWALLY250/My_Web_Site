<template>
  <NavCompont />
  <BgCompont />
  <SkillsCompont />
  <FooterCompont />
  <LoadingScreen :isLoading="isLoading" />
  <main v-if="!isLoading"></main>
</template>

<script>
import NavCompont from "@/components/NavCompont.vue";
import BgCompont from "@/components/BgCompont.vue";
import SkillsCompont from "@/components/SkillsCompont.vue";
import FooterCompont from "@/components/FooterCompont.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";
export default {
  components: {
    NavCompont,
    BgCompont,
    SkillsCompont,
    FooterCompont,
    LoadingScreen,
  },
};
</script>

<style lang="scss" scoped></style>
