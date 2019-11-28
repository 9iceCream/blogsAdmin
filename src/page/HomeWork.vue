<template>
    <el-card class="box-card">
        <el-divider>W O R K</el-divider>
        <div style="display: flex; margin-top: 10%; height: 25%;">
            <transition name="el-fade-in">
                <div class="transition-box">
                    <el-link icon="el-icon-edit" @click = "witerBlogs">写博客</el-link>
                </div>
            </transition>
            <transition name="el-fade-in">
                <div class="transition-box">
                    <el-link icon="el-icon-paperclip" @click = "manageBlogs">博客管理</el-link>
                </div>
            </transition>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "BlogWork",
        data(){
            return {
            }
        },
        methods:{
            witerBlogs:function () {
                this.$router.push({path:'/writeBlog'});
            },
            manageBlogs:function () {
                this.$router.push({path:'/manageBlogs'});
            },
        }
    }
</script>

<style scoped>
    .el-card {
        margin: 70px 10% 50px 5%;
    }
    .transition-box {
        margin: 5% 10% 5% 10%;
        width: 30%;
        height: 100px;
        border-radius: 4px;
        background-color: #9fff2e;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
    }
</style>
