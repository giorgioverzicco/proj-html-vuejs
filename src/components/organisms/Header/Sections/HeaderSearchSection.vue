<template>
  <div class="flex items-center gap-x-3">
    <DropdownCategory />
    <SearchBar />
  </div>
</template>

<script>
import DropdownCategory from '@/components/molecules/Dropdowns/DropdownCategory'
import SearchBar from '@/components/molecules/Header/Bars/SearchBar'

export default {
  name: 'HeaderSearchSection',
  components: { DropdownCategory, SearchBar },
}
</script>
