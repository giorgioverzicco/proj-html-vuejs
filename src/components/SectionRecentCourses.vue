<template>
  <AppSectionCourses class="gap-y-8">
    <template #header>
      <h3 class="text-center text-4xl font-bold text-secondary">
        Recent courses
      </h3>
    </template>

    <template #nav>
      <ul class="flex justify-center gap-x-2">
        <li v-for="(category, idx) in categories" :key="idx">
          <AppButton
            tag="a"
            :href="category.url"
            class="rounded-full px-6 py-2 text-accent transition-colors duration-300 hover:bg-ice hover:text-neutral-500"
            :class="{
              'bg-ice text-neutral-500': category.isActive,
            }"
          >
            {{ category.name }}
          </AppButton>
        </li>
      </ul>
    </template>

    <template #default>
      <GridCardCourse :courses="courses" />
    </template>

    <template #footer>
      <div class="flex justify-center">
        <ButtonPrimary>Show All</ButtonPrimary>
      </div>
    </template>
  </AppSectionCourses>
</template>

<script>
import AppSectionCourses from "@/components/AppSectionCourses.vue";
import GridCardCourse from "@/components/GridCardCourse.vue";
import AppButton from "@/components/AppButton.vue";
import ButtonPrimary from "@/components/ButtonPrimary.vue";

export default {
  name: "SectionRecentCourses",
  components: { ButtonPrimary, AppButton, AppSectionCourses, GridCardCourse },
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
      categories: [
        {
          url: "#",
          name: "All Categories",
          isActive: true,
        },
        {
          url: "#",
          name: "Business",
          isActive: false,
        },
        {
          url: "#",
          name: "Design",
          isActive: false,
        },
        {
          url: "#",
          name: "Development",
          isActive: false,
        },
        {
          url: "#",
          name: "IT & Software",
          isActive: false,
        },
        {
          url: "#",
          name: "Lifestyle",
          isActive: false,
        },
        {
          url: "#",
          name: "Marketing",
          isActive: false,
        },
        {
          url: "#",
          name: "Office Productivity",
          isActive: false,
        },
      ],
    };
  },
};
</script>
