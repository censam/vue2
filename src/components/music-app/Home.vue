<template>
<div class="container search-box">
    <search></search>
    <search-results @newCountrySet="changeSearch($event)" ></search-results>
    {{countryResult}}
    
</div>
</template>

<script>
import Search from './Search.vue'
import SearchResults from './SearchResults.vue'
export default {
  name: 'Home',
  data() {
    return {
      countryResult:[]
    }
  },
  methods: {
    changeSearch(countryResult){
      console.log('ooooooooooooo');
      console.log(countryResult);
      
      
      this.countryResult = countryResult
    }
  },
  components: {
    Search,
    SearchResults
  }
}
</script>

<style scoped>
.search-box{
  margin-top: 40px;
  width: 50%;
}
</style>
