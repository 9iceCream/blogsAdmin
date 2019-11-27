<template>
    <div>
        <div v-for="item in blogs" v-show="showCard">
            <transition name="el-zoom-in-top">
                <el-card :body-style="{ padding: '0px' }">
                    <img :src="item.coverImg" class="image">
                    <div style="padding: 14px;">
                        <div class="myBlogName">
                            {{ item.title }}
                        </div>
                        <div class="myBlogInfo">
                            {{ item.info }}
                        </div>
                        <div class="myBlogTag">
                            <el-tag type="info" style="margin-right: 15px" v-for="tag in item.tagArr">{{ tag }}</el-tag>
                        </div>
                        <el-divider></el-divider>
                        <div class="bottom clearfix">
                            <time class="time">{{ item.timeStr }}</time>
                            <el-button type="text" class="button" @click="toBlogPaage(item.id)">阅读</el-button>
                        </div>
                    </div>
                </el-card>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeMainBlog",
        data(){
            return {
                showCard: false,
                blogs: [
                    /*{
                        id: 1,
                        title: '博客标题1',
                        info: '博客简介1',
                        content: '博客内容',
                        coverImg: 'http://116.62.213.246/blogs/imgs/cover-img-default.jpg',
                        images: {
                            name: 'img-1',
                            addr: ''
                        },
                        tagArr: ['标签一','标签二'],
                        timeStr: '2019-09-07T05:55:07.226Z'
                    },{
                        id: 2,
                        title: '博客标题2',
                        info: '博客简介2',
                        content: '博客内容',
                        coverImg: 'http://116.62.213.246/blogs/imgs/cover-img-default.jpg',
                        images: {
                            name: 'img-1',
                            addr: ''
                        },
                        tagArr: ['标签一','标签二','标签三'],
                        timeStr: '2019-09-07T05:55:07.226Z'
                    }*/
                ]
            }
        },
        methods:{
            toBlogPaage: function(param){
                this.$router.push("/blogPage/" + param);
            }
        },
        beforeMount() {
            //加载博主的所有博客数据
            this.$axios.get('http://www.monolog7.com:8080/blogs/blogsInfo',{}).then(resp => {
                console.log(resp)
                if(resp.data.code == 1005){
                    this.$message("博客空空如也");
                }else{
                    this.blogs = resp.data.data;
                    this.showCard = true;
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }
</script>

<style scoped>
    .time {
        font-size: 13px;
        color: #999;
    }
    .button {
        padding: 0;
        float: right;
    }
    .image {
        width: 100%;
        display: block;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
    .el-card {
        margin: 70px 10% 50px 5%;
    }
    .myBlogName {
        font-size: xx-large;
        color: black;
        margin: 30px 5% 20px 5%;
    }
    .myBlogInfo {
        font-size: x-large;
        color: #666666;
        margin: 30px 5% 20px 5%;
    }
    .myBlogTag {
        margin: 50px 5% 50px 5%;
    }
</style>
