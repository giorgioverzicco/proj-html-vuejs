<template>
  <div>
    <!-- Container -->
    <div
      class="container-lg mx-auto flex items-center justify-center gap-x-14 py-6"
    >
      <ButtonIcon
        v-for="(link, idx) in links"
        :key="idx"
        tag="a"
        :href="link.url"
      >
        <FontAwesomeIcon :icon="link.icon" class="fa-lg" />
        <span>{{ link.name }}</span>
      </ButtonIcon>
    </div>
    <!-- /Container -->
  </div>
</template>
<script>
import ButtonIcon from '@/components/atoms/Buttons/ButtonIcon'

export default {
  name: 'HeaderBottom',
  components: { ButtonIcon },
  data() {
    return {
      links: [
        {
          url: '#',
          name: 'Business',
          icon: 'fa-solid fa-chart-simple',
        },
        {
          url: '#',
          name: 'Design',
          icon: 'fa-solid fa-palette',
        },
        {
          url: '#',
          name: 'Development',
          icon: 'fa-solid fa-gear',
        },
        {
          url: '#',
          name: 'Lifestyle',
          icon: 'fa-regular fa-face-smile',
        },
        {
          url: '#',
          name: 'Office Productivity',
          icon: 'fa-solid fa-wallet',
        },
      ],
    }
  },
}
</script>
