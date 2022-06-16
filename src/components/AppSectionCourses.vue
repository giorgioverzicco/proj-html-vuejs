<template>
  <section class="container-lg flex flex-col py-20">
    <slot name="header" />
    <slot name="nav" />
    <slot />
    <slot name="footer" />
  </section>
</template>

<script>
export default {
  name: "AppSectionCourses",
};
</script>
