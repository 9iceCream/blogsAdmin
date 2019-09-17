<template>
    <div class="center-letter">
        <el-button-group>
            <el-button type="info" icon="el-icon-user-solid">登录</el-button>
            <el-button type="info" icon="el-icon-user">注册</el-button>
        </el-button-group>
        <el-card class="box-card">
        </el-card>
    </div>

</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                activeName: 'second'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
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