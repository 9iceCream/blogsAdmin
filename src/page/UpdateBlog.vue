<template>
    <div id = "WriteBlog" style="height: 100%">
        <!--<mark-down style="height: 100%" @on-save="save" @on-paste-image="pasteImage"/>-->
        <el-container style="height: 100%">
            <el-header style="height: 20%;padding-top: 3%">
                <el-form :model="blog" label-width="80px">
                    <!--<el-form :model="blog" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">-->
                    <el-form-item label="标题" required>
                        <el-input v-model="blog.title"></el-input>
                    </el-form-item>
                    <el-form-item label="简介" prop="name">
                        <el-input v-model="blog.info"></el-input>
                    </el-form-item>
                    <!--<el-form-item label="标签" prop="name">
                        <el-input v-model="blog.tags" aria-placeholder="以逗号分隔，例如：明天,你好"></el-input>
                    </el-form-item>-->
                </el-form>
            </el-header>
            <el-main style="height: 73%">
                <mavon-editor style="height: 100%" ref="md" v-model="value" @imgAdd="$imgAdd" @change="change" @save="save" />
            </el-main>
            <el-footer style="height: 7%;padding-bottom: 2%">
                <el-row>
                    <el-button type="info" @click="submitBlog">提交</el-button>
                </el-row>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import { mavonEditor } from 'mavon-editor';
    import 'mavon-editor/dist/css/index.css'
    import {config} from '../config'

    export default {
        name: "WriteBlog",
        components: {
            mavonEditor
        },
        // component:mavonEditor,
        data(){
            return {
                blog: {
                    blogId: 0,
                    title: '',
                    ownerId: 0,
                    info: '',
                    tags: '',
                    contents: this.html,
                    contentsMd: this.value
                },
                value: '',
                html: ''
            }
        },
        methods:{
            save: function(value,render) {
                this.html = render;
                this.value = value;
                console.log(this.html)
                console.log(this.value)
                /*alert(content.html);
                alert(content.value)*/
                /*this.html = render;
                this.value = value;
                console.log(this.blog)
                console.log(this.html);*/
            },
            submitBlog(){
                // 提交标签
                this.$prompt('请输入博客标签,逗号分隔！', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'/*,
                    inputPattern: /[\w]+(?:\，[\w]*)?/,
                    inputErrorMessage: '邮箱格式不正确'*/
                }).then(({ value }) => {
                    this.$message({
                        type: 'success',
                        message: '你的博客标签是: ' + value
                    });
                    this.blog.tags = value

                    this.blog.contents = this.html
                    this.blog.contentsMd = this.value
                    console.log(this.blog)
                    this.$axios.post(config.baseurl + '/blogs/blogContent',this.blog).then(resp => {
                        // this.owner = resp.data;
                        console.log(resp);
                    }).catch(err => {
                        console.log(err)
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            },
            // 将图片上传到服务器，返回地址替换到md中
            $imgAdd(pos, $file){
                var formdata = new FormData();
                formdata.append('file', $file);
                this.$axios({
                    url: '这里是服务端url',
                    method: 'post',
                    data: formdata,
                    headers: { 'Content-Type': 'multipart/form-data' },
                }).then((url) => {
                    console.log(url);
                    this.$refs.md.$img2Url(pos, url.data);
                })
            },
            change(value, render){
                // render 为 markdown 解析后的结果
                this.html = render;
                this.value = value;
            }
        },
        beforeMount() {
            /*this.blog.blogId = parseInt(new Date().getTime()/1000);
            console.log(this.blog.blogId);*/
            this.$axios.get(config.baseurl + '/blogs/blogContent?blogId=' + this.$route.params.id,{}).then(resp => {
                console.log(resp)
                // this.blog = resp.data;
                // this.html = resp.data.data.contents;
                this.value = resp.data.contentsMd;
                this.blog = resp.data;
            }).catch(err => {
                console.log(err)
            })
        }
    }
</script>

<style scoped>
    .el-header{
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        /*line-height: 60px;*/
    }
    .el-footer {
        background-color: #E9EEF3;
        color: #333;
        text-align: right;
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        /*line-height: 160px;*/
    }
</style>
