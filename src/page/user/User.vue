<template>
    <div class="center-letter">
        <el-button-group>
            <router-link to="/user/login"><el-button type="info" icon="el-icon-user-solid">登录</el-button></router-link>
            <router-link to="/user/register"><el-button type="info" icon="el-icon-user">注册</el-button></router-link>
        </el-button-group>
        <el-card class="box-card">
            <router-view></router-view>
        </el-card>
    </div>
</template>

<script>

    export default {
        name: "User",
    }
</script>

<style scoped>
    .box-card {
        width: 480px;
        height: 500px;
        border-radius: 4px;
        margin:0 auto;
    }
    .center-letter {
        margin:0 auto;
        text-align: center;
    }
</style>