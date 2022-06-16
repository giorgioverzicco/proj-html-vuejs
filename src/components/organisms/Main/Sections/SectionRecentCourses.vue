<template>
  <section class="container-lg my-24 flex flex-col items-center gap-y-10">
    <h3 class="text-4xl font-bold text-material-ebony-clay">Recent Courses</h3>

    <ul class="flex gap-x-2">
      <li v-for="(category, idx) in categories" :key="idx">
        <a
          :href="category.url"
          class="rounded-full px-6 py-2 text-material-search transition-colors duration-300 hover:bg-slate-100 hover:text-neutral-500"
          :class="{
            'bg-slate-100 text-neutral-500': category.isActive,
          }"
          >{{ category.name }}</a
        >
      </li>
    </ul>

    <CardCourseGrid :courses="courses" />

    <ButtonPrimary tag="a" href="#">Show All</ButtonPrimary>
  </section>
</template>
<script>
import CardCourseGrid from '@/components/organisms/CardCourseGrid'
import ButtonPrimary from '@/components/atoms/Buttons/ButtonPrimary'

export default {
  name: 'SectionRecentCourses',
  components: { ButtonPrimary, CardCourseGrid },
  data() {
    return {
      courses: [
        {
          url: '#',
          img: 'img/ios.jpg',
          category: 'Development',
          title: 'The Complete iOS 10 & Swift 3 Developer Course',
          rating: 4,
          original_price: 199.99,
          price: 100.0,
        },
        {
          url: '#',
          img: 'img/web-design.jpg',
          category: 'Development',
          title: 'Web Design for Beginners: Real World Coding in HTML & CSS',
          rating: 5,
          original_price: 129.99,
          price: 65.0,
        },
        {
          url: '#',
          img: 'img/github.jpg',
          category: 'Development',
          title: 'GitHub Ultimate: Master Git and GitHub - Beginner to Expert',
          rating: 4,
          original_price: 99.99,
          price: 50.0,
        },
        {
          url: '#',
          img: 'img/ios-2.jpg',
          category: 'Development',
          title: 'The Complete iOS 11 & Swift Developer Course - Build 20 Apps',
          rating: 4,
          original_price: 199.99,
          price: 100.0,
        },
        {
          url: '#',
          img: 'img/java.jpg',
          category: 'Development',
          title: 'Android Java Masterclass - Become an App Developer',
          rating: 4,
          original_price: 99.99,
          price: 50.0,
        },
        {
          url: '#',
          img: 'img/xamarin.jpg',
          category: 'Development',
          title: 'Xamarin Forms: Build Native Cross-platform Apps with C#',
          rating: 4,
          original_price: 189.99,
          price: 95.0,
        },
        {
          url: '#',
          img: 'img/ios.jpg',
          category: 'Development',
          title: 'The Complete iOS 10 & Swift 3 Developer Course',
          rating: 4,
          original_price: 199.99,
          price: 100.0,
        },
        {
          url: '#',
          img: 'img/web-design.jpg',
          category: 'Development',
          title: 'Web Design for Beginners: Real World Coding in HTML & CSS',
          rating: 5,
          original_price: 129.99,
          price: 65.0,
        },
        {
          url: '#',
          img: 'img/github.jpg',
          category: 'Development',
          title: 'GitHub Ultimate: Master Git and GitHub - Beginner to Expert',
          rating: 4,
          original_price: 99.99,
          price: 50.0,
        },
        {
          url: '#',
          img: 'img/ios-2.jpg',
          category: 'Development',
          title: 'The Complete iOS 11 & Swift Developer Course - Build 20 Apps',
          rating: 4,
          original_price: 199.99,
          price: 100.0,
        },
        {
          url: '#',
          img: 'img/java.jpg',
          category: 'Development',
          title: 'Android Java Masterclass - Become an App Developer',
          rating: 4,
          original_price: 99.99,
          price: 50.0,
        },
        {
          url: '#',
          img: 'img/xamarin.jpg',
          category: 'Development',
          title: 'Xamarin Forms: Build Native Cross-platform Apps with C#',
          rating: 4,
          original_price: 189.99,
          price: 95.0,
        },
      ],
      categories: [
        {
          url: '#',
          name: 'All Categories',
          isActive: true,
        },
        {
          url: '#',
          name: 'Business',
          isActive: false,
        },
        {
          url: '#',
          name: 'Design',
          isActive: false,
        },
        {
          url: '#',
          name: 'Development',
          isActive: false,
        },
        {
          url: '#',
          name: 'IT & Software',
          isActive: false,
        },
        {
          url: '#',
          name: 'Lifestyle',
          isActive: false,
        },
        {
          url: '#',
          name: 'Marketing',
          isActive: false,
        },
        {
          url: '#',
          name: 'Office Productivity',
          isActive: false,
        },
      ],
    }
  },
}
</script>
