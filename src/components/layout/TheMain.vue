<template>
  <main>
    <SectionHero />
    <SectionPopularCourses />
  </main>
</template>

<script>
import SectionPopularCourses from '@/components/organisms/Main/Sections/SectionPopularCourses'
import SectionHero from '@/components/organisms/Main/Sections/SectionHero'

export default {
  name: 'TheMain',
  components: { SectionHero, SectionPopularCourses },
}
</script>
