<template>
    <div>
        <div class="row">
            <div class="col-sm-6 col-xs-12"><CreateTransfer></CreateTransfer></div>
            <div class="col-sm-6 col-xs-12"><Chart></Chart></div>            
            <div class="col-sm-12 col-xs-12">
                <div v-for="i in 2" :key="i" class="table-content">
                    <History></History>
                </div>
            </div>            
        </div>        
    </div>
</template>

<script>
import { userService } from '../../_services';
import Chart from '../dashboard/transferComponents/Chart'
import CreateTransfer from '../dashboard/transferComponents/CreateTransfer'
import History from '../dashboard/transferComponents/History'
export default {
    components: {
        Chart, CreateTransfer, History
    }
}
</script>
