<template>
  <div class="flex w-full gap-x-8 border border-neutral-200 px-8 py-12">
    <div class="w-3/12">
      <img class="h-auto max-w-full" :src="require('@/assets/' + img)" alt="" />
    </div>

    <div class="flex w-6/12 flex-col justify-center gap-y-5">
      <h5 class="text-material-ebony-clay text-3xl font-semibold">
        {{ title }}
      </h5>

      <p class="font-light text-neutral-500">
        {{ content }}
      </p>

      <ButtonPrimary tag="a" href="#" class="w-fit hover:bg-affiliate">
        {{ btnText }}
      </ButtonPrimary>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from "@/components/ButtonPrimary.vue";
export default {
  name: "CardAffiliate",
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
};
</script>
