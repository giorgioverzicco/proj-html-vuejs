<template>
  <div class="flex gap-8">
    <NavigationBar />
    <SocialBar />
  </div>
</template>

<script>
import NavigationBar from '@/components/molecules/Header/Bars/NavigationBar'
import SocialBar from '@/components/molecules/Header/Bars/SocialBar.vue'

export default {
  name: 'HeaderTopRight',
  components: { NavigationBar, SocialBar },
}
</script>
