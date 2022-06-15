<template>
  <footer class="divide-y-2 divide-neutral-200 divide-opacity-10">
    <FooterTop class="bg-material-footer text-neutral-100" />
    <FooterBottom class="bg-material-footer text-sm text-neutral-100" />
  </footer>
</template>

<script>
import FooterTop from '@/components/organisms/Footer/FooterTop'
import FooterBottom from '@/components/organisms/Footer/FooterBottom'

export default {
  name: 'TheFooter',
  components: { FooterBottom, FooterTop },
}
</script>
