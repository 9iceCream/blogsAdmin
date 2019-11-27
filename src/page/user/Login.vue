<template>
    <div style="opacity: 1;">
        <el-form :model="loginInfo" :rules="rules" status-icon ref="loginInfo" class="demo-ruleForm">
            <el-avatar size="large" src="http://www.monolog7.com/avatar_user.jpg"></el-avatar>
            <el-form-item prop="name">
                <el-input
                        placeholder="请输入用户名"
                        v-model="loginInfo.name"
                        clearable style="margin-top: 10%">
                </el-input>
            </el-form-item>
            <el-form-item prop="passwd">
                <el-input placeholder="请输入密码" v-model="loginInfo.passwd" show-password style="margin-top: 10%"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button-group style="margin-top: 15%">
                    <el-button type="primary" @click="submitForm('loginInfo')">登录</el-button>
                    <el-button type="info" plain @click="register">没有账户？注册</el-button>
                </el-button-group>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data:function(){
            var checkUser = (rule, value, callback) => {
                if(!value){
                    callback(new Error("用户名不能为空！"))
                }
                callback()
            };
            var checkPass = (rule, value, callback) => {
                if(!value){
                    callback(new Error("请输入密码！"))
                }
                callback()
            };
            return {
                loginInfo:{
                    name:'',
                    passwd:''
                },
                rules:{
                    name:[
                        {validator: checkUser, trigger: 'blur'}
                    ],
                    passwd:[
                        {validator: checkPass, trigger: 'blur'}
                    ]
                }
            }
        },
        methods:{
            submitForm(formName){
                //校验
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.post('http://www.monolog7.com:8080/blogs/login',this.loginInfo).then(resp => {
                            if(resp.data.code !== 0){
                                this.$message({
                                    message: resp.data.message,
                                    type: 'warning'
                                })
                            }else{
                                /*this.$message({
                                    message:resp.data.message,
                                    type:'success'
                                })*/
                                /*this.sessionStorage.setItem('userId',resp.data.userId)*/
                                this.$router.push({path:'/blogsAdmin'});
                            }
                        }).catch(err => {
                            console.log(err)
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            register:function (){
                this.$router.push({path:'/userRegister'});
            }
        }
    }
</script>

<style scoped>

</style>
