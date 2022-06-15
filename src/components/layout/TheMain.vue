<template>
  <main>
    <AppHero />
    <SectionPopularCourses />
  </main>
</template>

<script>
import AppHero from '@/components/molecules/AppHero'
import SectionPopularCourses from '@/components/organisms/SectionPopularCourses'

export default {
  name: 'TheMain',
  components: { SectionPopularCourses, AppHero },
}
</script>
