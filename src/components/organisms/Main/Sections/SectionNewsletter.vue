<template>
  <section class="bg-cube-coral-red">
    <div class="container-md flex gap-x-6 pt-8 pb-14 text-white">
      <div class="w-8/12">
        <h4 class="mb-1 text-xl font-medium">Subscribe our newsletter</h4>
        <p>
          There are manu variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words
        </p>
      </div>
      <div class="w-4/12">
        <FormInputSubmit
            label="Your E-mail address"
            placeholder="Enter your E-mail"
        >
          <span class="uppercase">Subscribe</span>
        </FormInputSubmit>
      </div>
    </div>
  </section>
</template>
<script>
import FormInputSubmit from '@/components/molecules/Header/Bars/FormInputSubmit'

export default {
  name: 'SectionNewsletter',
  components: {FormInputSubmit}
}
</script>