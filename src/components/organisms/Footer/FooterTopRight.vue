<template>
  <div class="flex gap-x-12">
    <FooterSocialSection class="w-1/2" />
    <FooterDiscountSection class="w-1/2" />
  </div>
</template>

<script>
import FooterDiscountSection from '@/components/molecules/Footer/Sections/FooterDiscountSection'
import FooterSocialSection from '@/components/molecules/Footer/Sections/FooterSocialSection'

export default {
  name: 'FooterTopRight',
  components: { FooterDiscountSection, FooterSocialSection },
}
</script>
