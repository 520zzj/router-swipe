<template>
    <div class="test">
        <ul class="navBar">
            <li>
                <router-link to="/pageOne" :class="{active:index==0}">页面1</router-link>
            </li>
             <li>
                <router-link to="/pageTwo" :class="{active:index==1}">页面2</router-link>
            </li>
             <li>
                <router-link to="/pageThree" :class="{active:index==2}">页面3</router-link>
            </li>
        </ul>
        <div class="swipe">
        <v-touch v-on:swipeleft="swipeleft" v-on:swiperight="swiperight">
         <transition :name="direction">
                <!-- <keep-alive> -->
                    <router-view class=".router-view" key="index"></router-view>        
                <!-- </keep-alive> -->
            </transition>
        </v-touch>
           
        </div>
    </div>
</template>
<script>
import vueOne from "./pages/pageOne.vue"
import vueTwo from "./pages/pageTwo.vue"
import vueThree from "./pages/pageThree.vue"
export default {
    data(){
        return{
            direction:"forward",
            index:0//记录当前页面内容对应子组件
        }
    },
    components:{
        vueOne,
        vueTwo,
        vueThree
    },
    watch:{
        '$route' (to,from){
            // 控制滑动方向
            this.direction=to.meta.index<from.meta.index?"back":"forward"
            // 获取当前页面的子组件的index
            this.index=to.meta.index
        }
       
    },
    methods:{
        swipeleft(){
            console.log(this.$route.meta.index)
            switch (this.$route.meta.index) {
                case 0:
            this.$router.push({"path":"/pageTwo"})                    
                    break;
                case 1:
            this.$router.push({"path":"/pageThree"})
                    break;
                default:
                    break;
            }
        },
        swiperight(){
              switch (this.$route.meta.index) {
                case 2:
            this.$router.push({"path":"/pageTwo"})                    
                    break;
                case 1:
            this.$router.push({"path":"/pageOne"})
                    break;
                default:
                    break;
            }
        }
    }
}   
</script>
<style>
.swipe{
    width:100%;
    height: 400px;
}

/* 使不同routerView位置重合 */
.router-view{
    position: absolute;
    top:0;
    left:0;
}
/* 左滑也就是前进的样式 */
.forward-leave-active{
    transition:all 1s linear;
}
.forward-leave-to{
    transform: translateX(-100%);
}
.forward-enter{
    transform: translateX(100%);
}
.forward-enter-active{
    transition: all 1s linear;
}
/* 右滑既是后退的样式 */
.back-enter{
    transform: translateX(-100%);
}
.back-enter-active{
    transition: all 1s linear;
}
.back-leave-to{
    transform: translateX(100%);
}
.back-leave-active{
    transition: all 1s linear;
}
.transitionBody{
    transition: all 1s linear;
}
/* 头部样式 */
.test .navBar{
    display:flex;
    justify-content:center;
}
.test .navBar li{
    padding:10px 15px;

}
/* tab高亮显示 */
.test .navBar .active{
    background:red;
}
</style>


