<template>
  <section class="relative">
    <img
      class="h-auto max-w-full object-cover"
      src="@/assets/img/bg.png"
      alt=""
    />

    <div
      class="container-md absolute inset-0 flex h-full w-full flex-col justify-center"
    >
      <div class="w-1/2 text-material-ebony-clay">
        <h2 class="text-4xl font-bold leading-loose">
          Limitless learning, more possibilities
        </h2>

        <p class="mb-8 text-lg">
          Online courses open the opportunity for learning to almost anyone,
          regardless of their scheduling commitments.
        </p>

        <ButtonPrimary tag="a" href="#"> Read More </ButtonPrimary>
      </div>
    </div>
  </section>
</template>
<script>
import ButtonPrimary from '@/components/atoms/Buttons/ButtonPrimary'
export default {
  name: 'SectionLearnMore',
  components: { ButtonPrimary },
}
</script>
