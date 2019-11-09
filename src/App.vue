<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "App",
        /*mounted () {//check 登录
            if(this.$router.currentRoute.name != 'UserIndex'){
                alert(this.$router.currentRoute.name);
            }
        }*/
    }
</script>

<style scoped>
</style>
