<template>
  <div>
    <!-- Container -->
    <div class="container mx-auto flex items-center justify-between py-4">
      <HeaderTopLeft />
      <HeaderTopRight />
    </div>
    <!-- /Container -->
  </div>
</template>

<script>
import HeaderTopLeft from '@/components/molecules/Header/HeaderTopLeft'
import HeaderTopRight from '@/components/molecules/Header/HeaderTopRight'
export default {
  name: 'HeaderTop',
  components: { HeaderTopRight, HeaderTopLeft },
}
</script>

<style scoped></style>
