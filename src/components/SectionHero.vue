<template>
  <div class="mt-8 bg-primary text-white">
    <a href="#" class="relative flex">
      <div class="z-10 w-1/2 py-24 pl-48">
        <h1 class="text-5xl font-bold leading-normal">Udemy Affiliate Sales</h1>
        <p class="text-xl">
          Monetize your audience and attract new customers with Udemy!
        </p>
      </div>

      <div class="relative w-1/2">
        <svg
          class="absolute inset-y-0 -ml-48 h-full w-96 fill-current text-primary"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <polygon points="50,0 0,0 50,100 100,100" />
        </svg>

        <img
          class="h-full w-full object-cover"
          src="@/assets/img/hero.jpg"
          alt="Some guys smiling"
        />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "SectionHero",
};
</script>
