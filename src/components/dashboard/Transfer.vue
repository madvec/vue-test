<template>
    <div>
        <div class="row">
            <div class="col-sm-6 col-xs-12"></div>
            <div class="col-sm-6 col-xs-12"><Chart></Chart></div>
            <div class="col-sm-12 col-xs-12"></div>
        </div>        
    </div>
</template>

<script>
import { userService } from '../../_services';
import Chart from '../dashboard/transferComponents/Chart'
export default {
    components: {
        Chart
    }
}
</script>