<template>
  <a :href="course.url">
    <div class="max-w-xs border border-neutral-200 bg-white">
      <img
        class="h-auto w-full object-cover"
        :src="require('@/assets/' + course.img)"
        alt=""
      />

      <div class="p-5">
        <div class="pb-4">
          <ButtonIcon class="mb-2 text-sm text-neutral-400">
            <span>{{ course.category }}</span>
            <FontAwesomeIcon icon="fa-solid fa-chevron-right" class="fa-xs" />
          </ButtonIcon>

          <h5 class="text-xl text-neutral-900">
            {{ course.title }}
          </h5>
        </div>

        <div class="flex items-center justify-between border-t pt-4">
          <div class="flex text-[#EFB467]">
            <FontAwesomeIcon
              v-for="n in Math.ceil(course.rating)"
              :key="n"
              icon="fa-solid fa-star"
            />
            <FontAwesomeIcon
              v-for="n in Math.ceil(5 - course.rating)"
              :key="n + 5"
              icon="fa-regular fa-star"
            />
          </div>

          <div class="flex flex-col items-end">
            <span class="text-sm text-neutral-400 line-through">
              ${{ course.original_price }}
            </span>
            <span class="font-semibold">${{ course.price }}</span>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import ButtonIcon from '@/components/atoms/Buttons/ButtonIcon'
export default {
  name: 'CardCourse',
  components: { ButtonIcon },
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
}
</script>
