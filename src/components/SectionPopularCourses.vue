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
          img: "img/web.jpg",
          category: "Development",
          title: "Web Design for Beginners: Real World Coding in HTML & CSS",
          rating: 5,
          original_price: 129.99,
          price: 65.0,
        },
        {
          url: "#",
          img: "img/github.jpg",
          category: "Development",
          title: "GitHub Ultimate: Master Git and GitHub - Beginner to Expert",
          rating: 4,
          original_price: 99.99,
          price: 50.0,
        },
        {
          url: "#",
          img: "img/ios-2.jpg",
          category: "Development",
          title: "The Complete iOS 11 & Swift Developer Course - Build 20 Apps",
          rating: 4,
          original_price: 199.99,
          price: 100.0,
        },
        {
          url: "#",
          img: "img/java.jpg",
          category: "Development",
          title: "Android Java Masterclass - Become an App Developer",
          rating: 4,
          original_price: 99.99,
          price: 50.0,
        },
        {
          url: "#",
          img: "img/xamarin.jpg",
          category: "Development",
          title: "Xamarin Forms: Build Native Cross-platform Apps with C#",
          rating: 4,
          original_price: 189.99,
          price: 95.0,
        },
      ],
    };
  },
};
</script>
