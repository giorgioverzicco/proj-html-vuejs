<template>
  <AppCard class="border border-neutral-200 bg-white text-secondary">
    <template #image>
      <a href="#">
        <img
          class="h-auto max-w-full object-cover"
          :src="require('@/assets/' + course.img)"
          alt=""
        />
      </a>
    </template>

    <template #header>
      <AppButton class="mb-2 text-sm text-neutral-400">
        <span>{{ course.category }}</span>
        <FontAwesomeIcon icon="fa-solid fa-chevron-right" class="fa-xs" />
      </AppButton>
    </template>

    <template #default>
      <h5 class="mb-5 flex-grow">
        {{ course.title }}
      </h5>
    </template>

    <template #footer>
      <div class="flex items-center justify-between space-y-4 border-t">
        <div class="flex text-star">
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
          <span
            v-if="course.original_price"
            class="text-sm text-neutral-400 line-through"
          >
            ${{ course.original_price }}
          </span>
          <span class="font-semibold">${{ course.price }}</span>
        </div>
      </div>
    </template>
  </AppCard>
</template>

<script>
import AppCard from "@/components/AppCard.vue";
import AppButton from "@/components/AppButton.vue";
export default {
  name: "CardCourse",
  components: { AppButton, AppCard },
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
};
</script>
