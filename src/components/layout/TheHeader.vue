<template>
  <header>
    <HeaderTop
      class="border-b-2 border-b-neutral-100 bg-white text-sm text-neutral-400"
    />
    <HeaderBody class="bg-white text-sm text-neutral-600" />
  </header>
</template>

<script>
import HeaderTop from '@/components/organisms/Header/HeaderTop'
import HeaderBody from '@/components/organisms/Header/HeaderBody'

export default {
  name: 'TheHeader',
  components: { HeaderBody, HeaderTop },
}
</script>
