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
import SectionPopularDevCourses from "@/components/SectionPopularDevCourses.vue";
import SectionRecentCourses from "@/components/SectionRecentCourses.vue";
import SectionPopularCourses from "@/components/SectionPopularCourses.vue";
import SectionHero from "@/components/SectionHero.vue";
import SectionLearnMore from "@/components/SectionLearnMore.vue";
import SectionNewsletter from "@/components/SectionNewsLetter.vue";
import SectionAffiliate from "@/components/SectionAffiliate.vue";
import SectionTestimonial from "@/components/SectionTestimonial.vue";

export default {
  name: "TheMain",
  components: {
    SectionTestimonial,
    SectionAffiliate,
    SectionNewsletter,
    SectionLearnMore,
    SectionHero,
    SectionPopularCourses,
    SectionRecentCourses,
    SectionPopularDevCourses,
  },
};
</script>
