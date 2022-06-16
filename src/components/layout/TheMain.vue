<template>
  <main>
    <SectionHero />
    <SectionPopularDevCourses />
    <SectionLearnMore />
    <SectionRecentCourses />
    <SectionNewsletter />
    <SectionPopularCourses />
  </main>
</template>

<script>
import SectionPopularDevCourses from '@/components/organisms/Main/Sections/SectionPopularDevCourses'
import SectionHero from '@/components/organisms/Main/Sections/SectionHero'
import SectionLearnMore from '@/components/organisms/Main/Sections/SectionLearnMore'
import SectionRecentCourses from '@/components/organisms/Main/Sections/SectionRecentCourses'
import SectionPopularCourses from '@/components/organisms/Main/Sections/SectionPopularCourses'
import SectionNewsletter from '@/components/layout/SectionNewsletter'

export default {
  name: 'TheMain',
  components: {
    SectionNewsletter,
    SectionPopularCourses,
    SectionRecentCourses,
    SectionLearnMore,
    SectionHero,
    SectionPopularDevCourses,
  },
}
</script>
