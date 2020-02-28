<template>
    <header id="header">
        <nav>
            <ul>            
                <li>Company</li>                                            
                <li v-if="auth"><router-link active-class="active" to="/home">Home</router-link></li>
                <li v-if="auth"><router-link active-class="active" to="/transfer">Transfer</router-link></li>
                <li v-if="auth"><router-link to="/login">Log Out</router-link></li>
            </ul>
        </nav>
    </header>    
</template>

<script>
import { store } from '../../store/store'
export default {
  data () {
    return {
      
    }
  },  
  computed: {
    auth () { return this.$store.getters.isAuthenticated }    
  }
}
</script>

<style scoped>
#header {
  color:#ffffff;
    height: 55px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(19, 18, 18);
    padding: 0 20px;
  }

  .logo {
    font-weight: bold;
    color: white;
  }

  .logo a {
    text-decoration: none;
    color: white;
  }

  nav {
    height: 100%;
    width: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  li {
    margin: 0 16px;    
  }

  li:nth-last-child(1) {
    margin-left: auto;
  }

  li a {
    display: block;
    line-height: 390%;
    text-decoration: none;
    padding: 0 5px;
    color: #ffffff;
  }

  li a.active {
    background-color:#000;
  }

  li a:hover,
  li a:active,
  li a.router-link-active {
    color: #ffffff;
  }

  .logout {
    background-color: transparent;
    border: none;
    font: inherit;
    color: white;
    cursor: pointer;
  }
</style>