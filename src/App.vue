<template>
  <div>
    <div class="header">
      <Header></Header>
    </div>
    <div class="outer-wrapper">
      <div class="holder">
        <div class="container-fluid section">
          <router-view></router-view>
        </div>
      </div>      
    </div>    
  </div>
</template>
<script>
import Header from './components/header/Header';
export default {  
  data () {
    return {
      
    }
  },
  components: { 
    Header
  }
}
</script>

<style>
  .outer-wrapper {    
    min-height: calc(100vh - 55px);    
    position: relative;
  }

  .holder {
    max-width: 1300px;
    margin: 0 auto;
    width: 100%;
  }

  .section {
    padding: 20px
  }
  
  h2 {
    font-size: 24px;
    font-weight: 600;
    text-align: center
  }

  h3 {
    color:rgb(72, 78, 78);
    font-weight: 600;
    font-size:16px
  }

  .table-bordered {
    padding: 15px;
  }

  img {
    margin: 0 auto;
  }

  .btn {
    margin: 0 5px;
  }

</style>
