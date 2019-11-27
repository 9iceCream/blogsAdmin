<template>
    <div style="opacity: 1;">
        <el-form :model="registerInfo" :rules="rules" status-icon ref="registerInfo" class="demo-ruleForm">
            <el-avatar size="large" src="http://www.monolog7.com/avatar_user.jpg"></el-avatar>
            <el-form-item prop="name">
                <el-input
                        placeholder="请输入用户名"
                        v-model="registerInfo.name"
                        clearable style="margin-top: 10%">
                </el-input>
            </el-form-item>
            <el-form-item prop="passwd">
                <el-input placeholder="请输入密码" v-model="registerInfo.passwd" show-password style="margin-top: 7%"></el-input>
            </el-form-item>

            <el-form-item prop="repasswd">
                <el-input placeholder="确认密码" v-model="registerInfo.repasswd" show-password style="margin-top: 7%"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button-group style="margin-top: 10%">
                    <el-button type="primary" @click="registerHandle('registerInfo')">注册</el-button>
                    <el-button type="info" plain @click="login">已有账户？登录</el-button>
                </el-button-group>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data:function(){
            var checkUser = (rule, value, callback)=>{
                if(!value){
                    callback(new Error("用户名不能为空！"))
                }
                callback()
            };
            var checkPass = (rule, value, callback)=>{
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.registerInfo.passwd !== '') {
                        this.$refs.registerInfo.validateField('repasswd');
                    }
                    callback();
                }
            };
            var checkRePass = (rule, value, callback)=>{
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.registerInfo.passwd) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            }
            return {
                registerInfo:{
                    name: '',
                    passwd: '',
                    repasswd: ''
                },
                rules: {
                    name:[
                        {validator: checkUser, trigger: 'blur'}
                    ],
                    passwd:[
                        {validator: checkPass, trigger: 'blur'}
                    ],
                    repasswd:[
                        {validator: checkRePass, trigger: 'blur'}
                    ]
                }
            }
        },
        methods:{
            registerHandle:function(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log(this.registerInfo)
                        this.$axios.post('http://www.monolog7.com:8080/blogs/user',this.registerInfo).then(resp => {
                            if(resp.data.code!==0){
                                this.$message({
                                    message: resp.data.message,
                                    type: 'warning'
                                });
                            }else {
                                this.$message({
                                    message: resp.data.message,
                                    type: 'success'
                                });
                                this.$router.push({path:'/userLogin'})
                            }
                            console.log(resp)
                        }).catch(err => {
                            console.log(err)
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
               /* this.$axios.get('http://localhost:8080/hello',{}).then(resp => {
                    console.log(resp)
                }).catch(err => {
                    console.log(err)
                })*/
            },
            login:function (){
                this.$router.push({path:'/userLogin'});
            }
        }
    }
</script>

<style scoped>

</style>
