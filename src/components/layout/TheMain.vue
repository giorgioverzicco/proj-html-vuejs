<template>
  <main>
    <SectionHero />
    <SectionPopularDevCourses />
    <SectionLearnMore />
    <SectionRecentCourses />
    <SectionNewsletter />
    <SectionPopularCourses />
    <SectionAffiliate />
    <SectionTestimonial />
  </main>
</template>

<script>
import SectionPopularDevCourses from '@/components/organisms/Main/Sections/SectionPopularDevCourses'
import SectionHero from '@/components/organisms/Main/Sections/SectionHero'
import SectionLearnMore from '@/components/organisms/Main/Sections/SectionLearnMore'
import SectionRecentCourses from '@/components/organisms/Main/Sections/SectionRecentCourses'
import SectionPopularCourses from '@/components/organisms/Main/Sections/SectionPopularCourses'
import SectionNewsletter from '@/components/organisms/Main/Sections/SectionNewsletter'
import SectionAffiliate from '@/components/organisms/Main/Sections/SectionAffiliate'
import SectionTestimonial from '@/components/organisms/Main/Sections/SectionTestimonial'

export default {
  name: 'TheMain',
  components: {
    SectionTestimonial,
    SectionAffiliate,
    SectionNewsletter,
    SectionPopularCourses,
    SectionRecentCourses,
    SectionLearnMore,
    SectionHero,
    SectionPopularDevCourses,
  },
}
</script>
