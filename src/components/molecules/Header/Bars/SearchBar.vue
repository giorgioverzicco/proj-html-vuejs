<template>
  <form class="flex w-full">
    <input
      type="text"
      placeholder="Search courses"
      class="w-full bg-slate-200 p-3 placeholder:text-neutral-500"
    />
    <ButtonSubmit>
      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
    </ButtonSubmit>
  </form>
</template>

<script>
import ButtonSubmit from '@/components/atoms/Buttons/ButtonSubmit'

export default {
  name: 'SearchBar',
  components: { ButtonSubmit },
}
</script>
