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
import ButtonSocial from '@/components/atoms/Buttons/ButtonSocial'
import FooterSection from '@/components/organisms/Footer/Sections/FooterSection'

export default {
  name: 'FooterSocialSection',
  components: { ButtonSocial, FooterSection },
  data() {
    return {
      socials: [
        {
          icon: 'fa-brands fa-facebook',
          color: 'bg-[#3B5998]',
        },
        {
          icon: 'fa-brands fa-instagram',
          color: 'bg-[#C32AA3]',
        },
        {
          icon: 'fa-brands fa-linkedin',
          color: 'bg-[#0077B5]',
        },
        {
          icon: 'fa-brands fa-pinterest',
          color: 'bg-[#BD081C]',
        },
        {
          icon: 'fa-brands fa-twitter',
          color: 'bg-[#1DA1F2]',
        },
        {
          icon: 'fa-solid fa-basketball',
          color: 'bg-[#EA4C89]',
        },
        {
          icon: 'fa-brands fa-google-plus',
          color: 'bg-[#DB4437]',
        },
        {
          icon: 'fa-brands fa-skype',
          color: 'bg-[#00AFF0]',
        },
      ],
    }
  },
}
</script>
