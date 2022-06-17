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
        {
          url: "#",
          img: "img/powder.jpg",
          category: "Arts & Crafts",
          title: "Foundation for Mastering Watercolor Painting",
          rating: 5,
          original_price: 19.99,
          price: 10.0,
        },
        {
          url: "#",
          img: "img/wine.jpg",
          category: "Food & Beverage",
          title: "Get Wine-Smart",
          rating: 4,
          original_price: 49.99,
          price: 25.0,
        },
        {
          url: "#",
          img: "img/pencil.jpg",
          category: "Arts & Crafts",
          title: "The Colored Pencil Drawing Course",
          rating: 4,
          original_price: 34.99,
          price: 18.0,
        },
        {
          url: "#",
          img: "img/draw-2.jpg",
          category: "Arts & Crafts",
          title: "Paint Realistic Watercolor and Botanicals - STUDIO BASICS",
          rating: 4,
          original_price: 69.99,
          price: 35.0,
        },
        {
          url: "#",
          img: "img/brush.jpg",
          category: "Arts & Crafts",
          title: "Mastering Brushstrokes - Part 1",
          rating: 5,
          original_price: 19.99,
          price: 10.0,
        },
        {
          url: "#",
          img: "img/draw.jpg",
          category: "Arts & Crafts",
          title: "Paint Realistic Watercolor and Botanicals - MAGNOLIAS",
          rating: 5,
          original_price: 69.99,
          price: 35.0,
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
