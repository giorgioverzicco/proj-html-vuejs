<template>
  <FooterSection>
    <template #header>
      <h2>Social Network</h2>
    </template>

    <div class="flex flex-wrap gap-3">
      <ButtonSocial
        v-for="(social, idx) in socials"
        :key="idx"
        :icon="social.icon"
        :class="social.color"
      />
    </div>
  </FooterSection>
</template>

<script>
import FooterSection from "@/components/FooterSection.vue";
import ButtonSocial from "@/components/ButtonSocial.vue";

export default {
  name: "FooterSocialSection",
  components: { ButtonSocial, FooterSection },
  data() {
    return {
      socials: [
        {
          icon: "fa-brands fa-facebook",
          color: "bg-facebook",
        },
        {
          icon: "fa-brands fa-instagram",
          color: "bg-instagram",
        },
        {
          icon: "fa-brands fa-linkedin",
          color: "bg-linkedin",
        },
        {
          icon: "fa-brands fa-pinterest",
          color: "bg-pinterest",
        },
        {
          icon: "fa-brands fa-twitter",
          color: "bg-twitter",
        },
        {
          icon: "fa-solid fa-basketball",
          color: "bg-basket",
        },
        {
          icon: "fa-brands fa-google-plus",
          color: "bg-google",
        },
        {
          icon: "fa-brands fa-skype",
          color: "bg-skype",
        },
      ],
    };
  },
};
</script>
