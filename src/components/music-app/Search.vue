<template>
<form class="d-flex">
    <input class="form-control me-sm-2" type="text" placeholder="Search a country" @input="searching">
  </form>
</template>

<script>
const axios = require('axios');
export default {
  name: 'Search',
  data() {
    return {
      countrySet:[]
    }
  },
  methods: {
    searching(event){
      
      if(event.target.value.length>1){
        axios.get(' https://restcountries.eu/rest/v2/name/'+event.target.value)
          .then((response)=>{
            // handle success
            this.countrySet = response.data;
          })
          .catch((error)=>{
            // handle error
            console.log(error);
          })
          .then(()=>{
            // always executed
          });

          this.$emit('newCountrySet',this.countrySet)
        
      }
      

      
    }
  },
}
</script>

<style scoped>
.search-box{
  margin-top:30px;
  width: 50%;
}
</style>
