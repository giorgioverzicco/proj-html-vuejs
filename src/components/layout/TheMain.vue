<template>
  <main>
    <SectionHero />
    <SectionPopularCourses />
    <SectionLearnMore />
    <SectionRecentCourses />
  </main>
</template>

<script>
import SectionPopularCourses from '@/components/organisms/Main/Sections/SectionPopularCourses'
import SectionHero from '@/components/organisms/Main/Sections/SectionHero'
import SectionLearnMore from '@/components/organisms/Main/Sections/SectionLearnMore'
import SectionRecentCourses from '@/components/organisms/Main/Sections/SectionRecentCourses'

export default {
  name: 'TheMain',
  components: {
    SectionRecentCourses,
    SectionLearnMore,
    SectionHero,
    SectionPopularCourses,
  },
}
</script>
