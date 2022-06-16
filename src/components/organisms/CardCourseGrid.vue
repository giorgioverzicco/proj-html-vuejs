<template>
  <div
    class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
  >
    <CardCourse v-for="(course, idx) in courses" :key="idx" :course="course" />
  </div>
</template>
<script>
import CardCourse from '@/components/molecules/CardCourse'

export default {
  name: 'CardCourseGrid',
  components: { CardCourse },
  props: {
    courses: {
      type: Array,
      required: true,
    },
  },
}
</script>
