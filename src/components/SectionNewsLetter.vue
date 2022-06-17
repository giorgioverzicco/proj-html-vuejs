<template>
  <section class="bg-primary">
    <div class="container-md flex gap-x-6 pt-8 pb-14 text-white">
      <div class="w-7/12">
        <h4 class="mb-1 text-2xl font-medium">Subscribe our newsletter</h4>

        <p>
          There are manu variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words
        </p>
      </div>

      <div class="w-5/12">
        <form class="flex w-full flex-col gap-y-3">
          <label class="uppercase">Your E-mail Address</label>
          <div class="flex w-full">
            <input
              type="text"
              placeholder="Enter your E-mail"
              class="w-full bg-white px-3 py-2 text-secondary placeholder:text-neutral-500"
            />

            <AppButton class="bg-accent px-6 py-3 uppercase text-white">
              Subscribe
            </AppButton>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
export default {
  name: "SectionNewsletter",
  components: { AppButton },
};
</script>
