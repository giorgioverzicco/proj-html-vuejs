<template>
  <div class="flex gap-x-8">
    <AppButton class="text-accent">
      <FontAwesomeIcon icon="fa-regular fa-user" />
      <span>Log in</span>
    </AppButton>

    <ButtonPrimary tag="a" href="#">Sign Up</ButtonPrimary>

    <AppButton class="text-accent">
      <FontAwesomeIcon icon="fa-regular fa-bookmark" class="fa-xl" />
    </AppButton>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
import ButtonPrimary from "@/components/ButtonPrimary.vue";

export default {
  name: "HeaderBodyUser",
  components: { ButtonPrimary, AppButton },
};
</script>
