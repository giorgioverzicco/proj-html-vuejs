<template>
  <div>
    <!-- Container -->
    <div class="container-lg flex items-center gap-x-12 py-6">
      <BaseLogo url="#" />
      <HeaderSearchSection class="flex-grow" />
      <HeaderAffiliateSection />
      <HeaderUserSection />
    </div>
    <!-- /Container -->
  </div>
</template>

<script>
import BaseLogo from '@/components/molecules/BaseLogo'
import HeaderSearchSection from '@/components/organisms/Header/Sections/HeaderSearchSection'
import HeaderAffiliateSection from '@/components/organisms/Header/Sections/HeaderAffiliateSection'
import HeaderUserSection from '@/components/organisms/Header/Sections/HeaderUserSection'

export default {
  name: 'HeaderBody',
  components: {
    HeaderUserSection,
    HeaderAffiliateSection,
    HeaderSearchSection,
    BaseLogo,
  },
}
</script>
