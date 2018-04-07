<template>
    <div>
        <div v-for="cat in cats">
            <div>{{cat.title}}</div>
            <div>{{cat.description}}</div>
            <img v-bind:src="cat.image"
                 v-bind:alt="cat.title"
            />
        </div>
    </div>
</template>

<script>
    import DataService from '../services/dataSerivice';

    export default {
        name: "Dashboard",
        data() {
            return {cats: []}
        },
        created() {
            DataService.getCatsCards()
                .then((cats) => {
                    this.cats = cats;
                });
        }
    }
</script>

<style scoped>

</style>