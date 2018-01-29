<template>
  <div class="index">
    this is index
  </div>
</template>

<script>
import { getData } from '../js/get'
export default {
  created(){
   this._getData()
  },
  data(){
    return{
      tab:[
        {
          name:'index1',
          path:'/index1',
          id:'index1'
        },
        {
          name:'index2',
          path:'/index2',
          id:'index2'
        }
      ]
    }
  },
  methods:{
    _getData(){
      getData().then((res)=>{
        console.log(res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .index{
   font-size: 30px;
 }
  .tab{
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid blue;
  }
  .tab > div{
    display:inline-block;
    width: 50%;
    height: 50px;
    float: left;
    line-height: 50px;
  }
  .active{
    background: red;
    color: #ffffff;
  }
</style>
