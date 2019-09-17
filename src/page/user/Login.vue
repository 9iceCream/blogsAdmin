<template>
    <div>
        <el-input
                placeholder="请输入内容"
                v-model="username"
                clearable>
        </el-input>
        <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
        <el-button-group>
            <el-button type="primary" @click="loginHandle">登录</el-button>
            <el-button type="info" plain @click="">没有账户？注册</el-button>
        </el-button-group>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data:function(){
            return {
                username:'',
                password:''
            }
        },
        methods:{
            loginHandle:function(){
                this.$axios.get('http://localhost:8080/hello',{}).then(resp => {
                    console.log(resp)
                }).catch(err => {
                    console.log(err)
                })
            },
            register:function (){
                console.log("注册")
            }
        }
    }
</script>

<style scoped>

</style>