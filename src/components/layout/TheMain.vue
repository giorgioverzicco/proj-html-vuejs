<template>
  <main>
    <SectionHero />
    <SectionPopularDevCourses />
    <SectionLearnMore />
    <SectionRecentCourses />
  </main>
</template>

<script>
import SectionPopularDevCourses from '@/components/organisms/Main/Sections/SectionPopularDevCourses'
import SectionHero from '@/components/organisms/Main/Sections/SectionHero'
import SectionLearnMore from '@/components/organisms/Main/Sections/SectionLearnMore'
import SectionRecentCourses from '@/components/organisms/Main/Sections/SectionRecentCourses'

export default {
  name: 'TheMain',
  components: {
    SectionRecentCourses,
    SectionLearnMore,
    SectionHero,
    SectionPopularDevCourses,
  },
}
</script>
