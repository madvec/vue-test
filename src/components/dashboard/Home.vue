<template>
    <div>
        <h2>Welcome to your online banking {{user.firstName}}!</h2>
        <hr>
        <div class="col-xs-12 col-sm-4">
            <Chart :transaction="user.userTransaction"></Chart>        
        </div>
        <div class="col-xs-12 col-sm-4">
            <Expenses></Expenses>        
        </div>
        <div class="col-xs-12 col-sm-4">
            <Balance></Balance>        
        </div>
    </div>
</template>
<script>
import { userService } from '../../_services';
import Chart from './homeComponents/Chart'
import Expenses from './homeComponents/Expenses'
import Balance from './homeComponents/Balance'

export default {
    components: {        
        Chart, Expenses, Balance
    },
    data() {
        return {
            user:{}                                          
        }
    },
    created () {        
        this.user = JSON.parse(localStorage.getItem('user'));    
    },
    mounted() {
        
    }
}
</script>
