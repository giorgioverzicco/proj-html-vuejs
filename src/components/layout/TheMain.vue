<template>
  <main>
    <SectionHero />
    <SectionPopularDevCourses />
    <SectionLearnMore />
    <SectionRecentCourses />
    <SectionPopularCourses />
  </main>
</template>

<script>
import SectionPopularDevCourses from '@/components/organisms/Main/Sections/SectionPopularDevCourses'
import SectionHero from '@/components/organisms/Main/Sections/SectionHero'
import SectionLearnMore from '@/components/organisms/Main/Sections/SectionLearnMore'
import SectionRecentCourses from '@/components/organisms/Main/Sections/SectionRecentCourses'
import SectionPopularCourses from '@/components/organisms/Main/Sections/SectionPopularCourses'

export default {
  name: 'TheMain',
  components: {
    SectionPopularCourses,
    SectionRecentCourses,
    SectionLearnMore,
    SectionHero,
    SectionPopularDevCourses,
  },
}
</script>
