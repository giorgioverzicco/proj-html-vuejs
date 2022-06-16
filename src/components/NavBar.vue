<template>
  <nav>
    <ul class="flex gap-x-6">
      <li v-for="(link, idx) in links" :key="idx">
        <a :href="link.url">{{ link.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      links: [
        {
          url: "#",
          name: "Home",
        },
        {
          url: "#",
          name: "Pages",
        },
        {
          url: "#",
          name: "Course Formats",
        },
        {
          url: "#",
          name: "Courses",
        },
        {
          url: "#",
          name: "Demos",
        },
      ],
    };
  },
};
</script>
