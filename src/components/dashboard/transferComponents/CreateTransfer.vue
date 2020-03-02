<template>
    <div>        
        <div class="create">            
            <div class="title"><h2>Create new transfer</h2></div>
            <div class="content">
                <div class="input-container">
                    <h3>Select Origin account</h3>                
                    <div class="search">
                        <v-select :options="options"></v-select>
                    </div>
                </div>
                <div class="input-container">
                    <h3>Destination account</h3>
                    <input type="text">
                </div>
                <div class="input-container">
                    <h3>Amount</h3>
                    <input type="text">
                </div>   
                <div class="input-container">
                    <div class="btn-container">
                        <button class="btn btn-primary">Transfer</button>
                    </div>
                    <div class="btn-container">
                        <button class="btn btn-default">Cancel</button>
                    </div>
                </div>             
            </div>            
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    Vue.component('v-select', VueSelect.VueSelect);
    export default {
        data() {
            return {
                options: [
                'foo',
                'bar',
                'baz'
                ]
            }
        }

    }
</script>
<style scoped>
    .create {
        border:1px solid #000;
        border-radius: 25px;
        max-width: 350px;
        margin:0 auto;
        padding: 25px
    }
    input {
        width: 100%;
    }
    .input-container:nth-last-child(1) {
        display: flex;
        justify-content: flex-end;
        margin-top: 30px;
    }
</style>