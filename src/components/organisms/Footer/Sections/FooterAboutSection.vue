<template>
  <FooterSection>
    <template #header>
      <h2>About</h2>
    </template>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </FooterSection>
</template>
<script>
import FooterSection from '@/components/organisms/Footer/Sections/FooterSection'

export default {
  name: 'FooterAboutSection',
  components: { FooterSection },
}
</script>
