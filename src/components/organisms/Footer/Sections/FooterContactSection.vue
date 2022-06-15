<template>
  <FooterSection>
    <template #header>
      <h2>Contact</h2>
    </template>

    <div class="space-y-4">
      <p>USA, California 20, First Avenue, California</p>

      <div>
        <p>Tel.: +1 212 458 300 32</p>
        <p>Fax: +1 212 375 24 14</p>
      </div>

      <p class="text-neutral-400">info@masterstudy.com</p>
    </div>
  </FooterSection>
</template>

<script>
import FooterSection from '@/components/organisms/Footer/Sections/FooterSection'

export default {
  name: 'FooterContactSection',
  components: { FooterSection },
}
</script>
