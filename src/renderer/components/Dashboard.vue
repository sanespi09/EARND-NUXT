<template>
    <div class="dash-container">
        <div class="dash-tabs">
            <div @click="onTabChange('Ingresos')">Ingresos</div>
            <div @click="onTabChange('Gastos')">Gastos</div>
        </div>
        <div class="dash-content">
            <keep-alive>
                <component :is="selectedTab" :props="user">
            </keep-alive>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        selectedTab: 'Ingresos'
    },
    components: {

    },
    props: {
        user: Object
    },
    methods: {
        onTabChange: function (tab){
            selectedTab = tab;
        }
    }
}
</script>

<style scoped>

</style>