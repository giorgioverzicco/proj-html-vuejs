<template>
  <section class="relative">
    <img
      class="h-auto max-w-full object-cover"
      src="@/assets/img/bg-learn.png"
      alt=""
    />

    <div
      class="container-md absolute inset-0 flex h-full w-full flex-col justify-center"
    >
      <div class="w-1/2 space-y-6 text-secondary">
        <h2 class="text-5xl font-bold">
          Limitless learning, more possibilities
        </h2>

        <p class="text-lg">
          Online courses open the opportunity for learning to almost anyone,
          regardless of their scheduling commitments.
        </p>

        <ButtonPrimary tag="a" href="#"> Read More </ButtonPrimary>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonPrimary from "@/components/ButtonPrimary.vue";
export default {
  name: "SectionLearnMore",
  components: { ButtonPrimary },
};
</script>
