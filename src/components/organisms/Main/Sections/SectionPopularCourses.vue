<template>
  <section class="container-lg my-24 space-y-6">
    <h3 class="text-xl font-bold text-material-ebony-clay">
      Popular Development Courses
    </h3>

    <CardCourseGrid :courses="courses" />
  </section>
</template>
<script>
import CardCourseGrid from '@/components/organisms/CardCourseGrid'

export default {
  name: 'SectionPopularCourses',
  components: { CardCourseGrid },
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
      ],
    }
  },
}
</script>
