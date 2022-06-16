<template>
  <main>
    <SectionHero />
    <SectionPopularCourses />
    <SectionLearnMore />
  </main>
</template>

<script>
import SectionPopularCourses from '@/components/organisms/Main/Sections/SectionPopularCourses'
import SectionHero from '@/components/organisms/Main/Sections/SectionHero'
import SectionLearnMore from '@/components/organisms/Main/Sections/SectionLearnMore'

export default {
  name: 'TheMain',
  components: { SectionLearnMore, SectionHero, SectionPopularCourses },
}
</script>
