<template>
  <AppSectionCourses class="gap-y-3">
    <template #header>
      <h3 class="text-xl font-bold text-secondary">
        Popular Development Courses
      </h3>
    </template>

    <template #default>
      <GridCardCourse :courses="courses" />
    </template>
  </AppSectionCourses>
</template>

<script>
import AppSectionCourses from "@/components/AppSectionCourses.vue";
import GridCardCourse from "@/components/GridCardCourse.vue";

export default {
  name: "SectionPopularDevCourses",
  components: { AppSectionCourses, GridCardCourse },
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
