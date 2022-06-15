<template>
  <div class="flex items-center gap-x-6">
    <ButtonIcon
      v-for="(link, idx) in links"
      :key="idx"
      tag="a"
      :href="link.name"
    >
      <FontAwesomeIcon :icon="link.icon" class="text-material-search" />
      <span>{{ link.name }}</span>
    </ButtonIcon>
  </div>
</template>

<script>
import ButtonIcon from '@/components/atoms/Buttons/ButtonIcon'

export default {
  name: 'HeaderAffiliateSection',
  components: { ButtonIcon },
  data() {
    return {
      links: [
        {
          url: '#',
          name: 'Become an Instructor',
          icon: 'fa-solid fa-bullhorn',
        },
        {
          url: '#',
          name: 'For Enterprise',
          icon: 'fa-solid fa-briefcase',
        },
      ],
    }
  },
}
</script>
