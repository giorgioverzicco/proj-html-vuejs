<template>
  <AppCard class="border border-neutral-200 bg-white">
    <template #image>
      <img
        class="h-auto max-w-full object-cover"
        :src="require('@/assets/' + course.img)"
        alt=""
      />
    </template>

    <template #header>
      <ButtonIcon class="mb-2 text-sm text-neutral-400">
        <span>{{ course.category }}</span>
        <FontAwesomeIcon icon="fa-solid fa-chevron-right" class="fa-xs" />
      </ButtonIcon>
    </template>

    <template #default>
      <h5 class="mb-5 flex-grow text-material-ebony-clay">
        {{ course.title }}
      </h5>
    </template>

    <template #footer>
      <div class="flex items-center justify-between space-y-4 border-t">
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

        <div class="flex h-full flex-col items-end">
          <span class="text-sm text-neutral-400 line-through">
            ${{ course.original_price }}
          </span>
          <span class="font-semibold">${{ course.price }}</span>
        </div>
      </div>
    </template>
  </AppCard>
</template>

<script>
import AppCard from '@/components/molecules/AppCard'
import ButtonIcon from '@/components/atoms/Buttons/ButtonIcon'
export default {
  name: 'CardCourse',
  components: { ButtonIcon, AppCard },
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
}
</script>
