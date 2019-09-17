<template>
    <div>
        <el-card :body-style="{ padding: '0px' }">
            <img :src="blog.coverImg" class="image">
            <div style="padding: 14px;">
                <div class="myBlogName">
                    {{ blog.title }}
                </div>
                <div class="myBlogContent" v-html="blog.contents">
                </div>
                <div class="myBlogTag">
                    <el-tag type="info" style="margin-right: 15px" v-for="tag in blog.tagArr">{{ tag }}</el-tag>
                </div>
                <el-divider></el-divider>
                <div class="bottom clearfix">
                    <time class="time">{{ blog.timeStr }}</time>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "BlogPage",
        data(){
            return {
                blog: {
                    id: 1,
                    title: 'VUE使用指南',
                    info: '博客简介1',
                    coverImg: 'http://116.62.213.246/blogs/imgs/cover-img-default.jpg',
                    contents: '优质体验 我们做了一个简单的网址导航，虽然是第一个正式版，但也是第五个版本了。因为前四个版本在不断调试的过程中出现了审美疲劳，自己看腻了就重做了。 优秀的产品始终不会流露出的艳俗气质，所谓的艳俗气质就是经不起时间的考验。 处处细微 一切都是理所当然。你会发现，不同的网络环境，将得到不同的搜索体验。我们会对不同的网络环境进行识别，当更好的搜索引擎可用时，不需要额外的操作，我们会尽力切换到更好的搜索引擎。 *当 Google 服务可用时，图片搜索与学术搜索将会调用 Google 搜索引擎。 细分群体 我们针对年轻的大学生群体，制作了专属的校园导航，可在设置中开启并选择你的的学校，使得平时能更方便地进入教务系统、邮件系统、图书馆系统等等。 *目前收录的校园导航链接较少，可在 GitHub 中提交你的学校常用链接。 人生必有痴，而后有成。我们也会不断地跟进技术，将网站能够以更好地形式呈现',
                    images: {
                        name: 'img-1',
                        addr: ''
                    },
                    tagArr: ['标签一','标签二'],
                    timeStr: '2019-09-07T05:55:07.226Z'
                }
            }
        },
        methods:{

        },
        mounted() {
            console.log("请求参数：" + this.$route.params.id);
        },
        beforeMount() {
            //加载具体博客信息
            this.$axios.get('http://localhost:8080/blogs/blogContent?blogId=' + this.$route.params.id,{}).then(resp => {
                console.log(resp)
                this.blog = resp.data;
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
    .myBlogContent {
        font-size: x-large;
        color: #666666;
        margin: 30px 5% 20px 5%;
    }
    .myBlogTag {
        margin: 50px 5% 50px 5%;
    }
</style>
