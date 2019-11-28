<template>
    <div>
        <el-card class="box-card" v-show="showCard">
            <el-table
                    :data="tableData"
                    border>
                    <!--style="width: 100%"-->
                <el-table-column
                        fixed
                        prop="title"
                        label="标题"
                        width="150px">
                </el-table-column>
                <el-table-column
                        prop="id"
                        label="ID"
                        width="60px">
                </el-table-column>
                <el-table-column
                        prop="info"
                        label="简介"
                        width="200px">
                </el-table-column>
                <el-table-column
                        prop="tags"
                        label="标签"
                        width="150px">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="160px">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
    import {config} from '../config'
    export default {
        name: "BLogsManage",
        data(){
            return {
                showCard: false,
                tableData: []
            }
        },
        methods:{
            toBlogPaage: function(param){
                this.$router.push("/blogPage/" + param);
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
                var deleteData = {
                    blogId: row.blogId,
                    ownerId: row.ownerId,
                };
                console.log(deleteData);
                this.$axios.post(config.baseurl+'/blogs/deleteBlogContent',deleteData).then(resp => {
                    console.log(resp);
                    if(resp.data.code === 0){
                        this.$message.success("删除博客成功");
                        this.tableData.splice(index, 1);
                    }else{
                        this.$message.error(resp.data.message);
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        },
        beforeMount() {
            //加载博主的所有博客数据
            this.$axios.get(config.baseurl+'/blogs/blogsInfo',{}).then(resp => {
                console.log(resp);
                if(resp.data.code === 1005){
                    this.$message("博客空空如也");
                }else{
                    this.tableData = resp.data.data;
                    this.showCard = true;
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }
</script>

<style scoped>
    .el-card {
        margin: 70px 10% 50px 5%;
    }
</style>
