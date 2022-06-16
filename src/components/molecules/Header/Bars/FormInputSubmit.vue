<template>
  <form class="flex w-full flex-col">
    <label v-if="label" class="mb-3 uppercase">{{ label }}</label>
    <div class="flex w-full">
      <input
        type="text"
        :placeholder="placeholder"
        class="w-full bg-slate-100 p-3 placeholder:text-neutral-500"
      />
      <ButtonSubmit>
        <slot />
      </ButtonSubmit>
    </div>
  </form>
</template>

<script>
import ButtonSubmit from '@/components/atoms/Buttons/ButtonSubmit'

export default {
  name: 'FormInputSubmit',
  components: { ButtonSubmit },
  props: {
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
}
</script>
