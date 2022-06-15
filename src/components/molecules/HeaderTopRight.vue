<template>
  <div class="flex gap-8">
    <NavigationBar />
    <SocialBar />
  </div>
</template>

<script>
import NavigationBar from '@/components/molecules/NavigationBar'
import SocialBar from '@/components/molecules/SocialBar.vue'

export default {
  name: 'HeaderTopRight',
  components: { NavigationBar, SocialBar },
}
</script>
