<template>
  <div>
    <ButtonIcon class="font-medium uppercase">
      <FontAwesomeIcon icon="fa-solid fa-bars" />
      <span>Category</span>
    </ButtonIcon>
  </div>
</template>

<script>
import ButtonIcon from '@/components/atoms/Buttons/ButtonIcon'

export default {
  name: 'DropdownCategory',
  components: { ButtonIcon },
}
</script>
