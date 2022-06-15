<template>
  <div>
    <div class="container-md mx-auto flex gap-x-24 py-14">
      <FooterTopLeft class="w-1/2" />
      <FooterTopRight class="w-1/2" />
    </div>
  </div>
</template>
<script>
import FooterTopLeft from '@/components/organisms/Footer/FooterTopLeft'
import FooterTopRight from '@/components/organisms/Footer/FooterTopRight'

export default {
  name: 'FooterTop',
  components: { FooterTopLeft, FooterTopRight },
}
</script>
