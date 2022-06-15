<template>
  <div class="flex items-center gap-x-6">
    <ButtonIcon tag="a" href="#" class="text-material-search">
      <FontAwesomeIcon icon="fa-regular fa-user" />
      <span>Log in</span>
    </ButtonIcon>

    <ButtonPrimary tag="a" href="#">Sign Up</ButtonPrimary>

    <ButtonIcon tag="a" href="#">
      <FontAwesomeIcon
        icon="fa-regular fa-bookmark"
        class="fa-xl text-material-search"
      />
    </ButtonIcon>
  </div>
</template>

<script>
import ButtonIcon from '@/components/atoms/Buttons/ButtonIcon'
import ButtonPrimary from '@/components/atoms/Buttons/ButtonPrimary'

export default {
  name: 'HeaderUserSection',
  components: { ButtonPrimary, ButtonIcon },
}
</script>
