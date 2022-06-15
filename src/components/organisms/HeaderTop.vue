<template>
  <div class="border-b-2 border-b-neutral-100">
    <!-- Container -->
    <div
      class="container mx-auto flex items-center justify-between py-3 text-sm text-neutral-400"
    >
      <HeaderTopLeft />
      <HeaderTopRight />
    </div>
    <!-- /Container -->
  </div>
</template>

<script>
import HeaderTopLeft from '@/components/molecules/HeaderTopLeft'
import HeaderTopRight from '@/components/molecules/HeaderTopRight'
export default {
  name: 'HeaderTop',
  components: { HeaderTopRight, HeaderTopLeft },
}
</script>

<style scoped></style>
