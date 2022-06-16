<template>
  <FormInputSubmit placeholder="Search courses">
    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
  </FormInputSubmit>
</template>

<script>
import FormInputSubmit from '@/components/molecules/Header/Bars/FormInputSubmit'

export default {
  name: 'SearchBar',
  components: { FormInputSubmit },
}
</script>
