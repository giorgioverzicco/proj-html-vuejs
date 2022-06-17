<template>
  <div class="bg-ice">
    <AppSectionCourses class="gap-y-6">
      <template #header>
        <div class="space-y-2 text-center">
          <h3 class="text-4xl font-bold text-secondary">Popular courses</h3>
          <p class="font-light">
            Discover our most popular courses for self learning
          </p>
        </div>
      </template>

      <template #default>
        <GridCardCourse :courses="courses" />
      </template>

      <template #footer>
        <div class="flex justify-center text-slate-300">
          <AppButton
            class="border border-r-0 border-slate-300 bg-white px-4 py-3 transition-colors duration-300 hover:bg-accent"
          >
            <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
          </AppButton>

          <AppButton
            class="border border-slate-300 bg-white px-4 py-3 transition-colors duration-300 hover:bg-accent"
          >
            <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
          </AppButton>
        </div>
      </template>
    </AppSectionCourses>
  </div>
</template>

<script>
import AppSectionCourses from "@/components/AppSectionCourses.vue";
import GridCardCourse from "@/components/GridCardCourse.vue";
import AppButton from "@/components/AppButton.vue";

export default {
  name: "SectionPopularCourses",
  components: { AppButton, AppSectionCourses, GridCardCourse },
  data() {
    return {
      courses: [
        {
          url: "#",
          img: "img/ios.jpg",
          category: "Development",
          title: "The Complete iOS 10 & Swift 3 Developer Course",
          rating: 4,
          original_price: 199.99,
          price: 100.0,
        },
        {
          url: "#",
          img: "img/css.jpg",
          category: "Design",
          title: "CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass)",
          rating: 5,
          original_price: 199.99,
          price: 100.0,
        },
        {
          url: "#",
          img: "img/web.jpg",
          category: "Development",
          title: "Web Design for Beginners: Real World Coding in HTML & CSS",
          rating: 5,
          original_price: 129.99,
          price: 65.0,
        },
        {
          url: "#",
          img: "img/colors.jpg",
          category: "Design",
          title: "Digitally Painting Light and Color: Amateur to Master",
          rating: 4,
          original_price: 139.99,
          price: 70.0,
        },
        {
          url: "#",
          img: "img/typo.jpg",
          category: "Arts & Crafts",
          title: "Become an Arabic Calligraphy Artist from Scratch",
          rating: 5,
          price: 199.99,
        },
        {
          url: "#",
          img: "img/ninja.jpg",
          category: "Google",
          title: "Google Searching Ninja!",
          rating: 4,
          original_price: 89.99,
          price: 45.0,
        },
      ],
    };
  },
};
</script>
