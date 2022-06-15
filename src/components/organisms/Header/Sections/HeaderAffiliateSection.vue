<template>
  <div class="flex items-center gap-x-6">
    <ButtonIcon tag="a" href="#">
      <FontAwesomeIcon
        icon="fa-solid fa-bullhorn"
        class="text-material-search"
      />
      <span>Become an Instructor</span>
    </ButtonIcon>

    <ButtonIcon tag="a" href="#">
      <FontAwesomeIcon
        icon="fa-solid fa-briefcase"
        class="text-material-search"
      />
      <span>For Enterprise</span>
    </ButtonIcon>
  </div>
</template>

<script>
import ButtonIcon from '@/components/atoms/Buttons/ButtonIcon'

export default {
  name: 'HeaderAffiliateSection',
  components: { ButtonIcon },
}
</script>
