<template>
  <div>
    <ul class="flex gap-x-3">
      <li v-for="(link, idx) in links" :key="idx">
        <a :href="link.url">
          <FontAwesomeIcon :icon="link.icon" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SocialBar',
  data() {
    return {
      links: [
        {
          url: '#',
          icon: 'fa-brands fa-facebook',
        },
        {
          url: '#',
          icon: 'fa-brands fa-twitter',
        },
        {
          url: '#',
          icon: 'fa-brands fa-instagram',
        },
        {
          url: '#',
          icon: 'fa-brands fa-linkedin',
        },
        {
          url: '#',
          icon: 'fa-brands fa-google-plus',
        },
        {
          url: '#',
          icon: 'fa-brands fa-youtube',
        },
      ],
    }
  },
}
</script>
