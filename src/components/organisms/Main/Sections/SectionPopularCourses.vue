<template>
  <section class="bg-slate-100">
    <div
      class="container-lg flex flex-col items-center py-24 text-material-ebony-clay"
    >
      <h3 class="text-4xl font-bold leading-tight">Popular courses</h3>
      <p class="mb-10 font-light">
        Discover our most popular courses for self learning
      </p>

      <CardCourseGrid :courses="courses" class="mb-10" />

      <div class="flex text-slate-300">
        <ButtonIcon
          class="border border-r-0 border-slate-300 bg-white px-4 py-3 transition-colors duration-300 hover:bg-material-search"
        >
          <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
        </ButtonIcon>
        <ButtonIcon
          class="border border-slate-300 bg-white px-4 py-3 transition-colors duration-300 hover:bg-material-search"
        >
          <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
        </ButtonIcon>
      </div>
    </div>
  </section>
</template>

<script>
import CardCourseGrid from '@/components/organisms/CardCourseGrid'
import ButtonIcon from '@/components/atoms/Buttons/ButtonIcon'
export default {
  name: 'SectionPopularCourses',
  components: { ButtonIcon, CardCourseGrid },
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

<style scoped></style>
