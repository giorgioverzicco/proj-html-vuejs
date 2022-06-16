<template>
  <div class="flex w-full gap-x-8 border border-neutral-200 px-8 py-12">
    <div class="w-3/12">
      <img class="h-auto max-w-full" :src="require('@/assets/' + img)" alt="" />
    </div>

    <div class="flex w-6/12 flex-col justify-center">
      <h5 class="mb-4 text-3xl font-semibold text-material-ebony-clay">
        {{ title }}
      </h5>
      <p class="mb-4 text-sm font-light text-neutral-500">
        {{ content }}
      </p>
      <ButtonPrimary tag="a" href="#" class="w-fit">
        {{ btnText }}
      </ButtonPrimary>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from '@/components/atoms/Buttons/ButtonPrimary'
export default {
  name: 'CardAffiliate',
  components: { ButtonPrimary },
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    btnText: {
      type: String,
      required: true,
    },
  },
}
</script>
