<template>
  <section class="container-lg py-16">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <CardAffiliate
        img="img/instructor.png"
        title="Become an Instructor"
        content="Teach what you love. Masterstudy gives you the tools to create a course."
        btn-text="Start Teaching"
      />
      <CardAffiliate
        img="img/business.png"
        title="Access For Business"
        content="Get Unlimited access to 2.500 of top courses for your team."
        btn-text="Doing Business"
      />
    </div>
  </section>
</template>

<script>
import CardAffiliate from '@/components/molecules/CardAffiliate'

export default {
  name: 'SectionAffiliate',
  components: { CardAffiliate },
}
</script>
