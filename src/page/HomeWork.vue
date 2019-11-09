<template>
    <div style="display: flex; margin-top: 10%; height: 25%;">
    <transition name="el-fade-in">
        <div class="transition-box">
            <el-link icon="el-icon-edit" @click = "witerBlogs">写博客</el-link>
        </div>
    </transition>
    <transition name="el-fade-in">
        <div class="transition-box">
            <el-link icon="el-icon-paperclip">博客管理</el-link>
        </div>
    </transition>
</div>
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
            }
        }
    }
</script>

<style scoped>
    .transition-box {
        margin-bottom: 10px;
        width: 200px;
        height: 100px;
        border-radius: 4px;
        background-color: #9fff2e;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
    }
</style>