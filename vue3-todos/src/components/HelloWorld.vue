<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{count}}</h2>
    his: {{his}}
    
    <h2>double: {{double}}</h2>
    <h3>{{obj.foo}}</h3>
    {{obj}}
    
    <div class="todos">
      <ul>
        <li>
          <span class="square"></span>
          <span>吃饭，睡觉</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {ref, reactive, onMounted, computed} from "vue"

// 1. ref 的作用， ref 和 reactive的区别 ref和reactive同时使用，区别在哪里
export default {
  name: 'HelloWorld',
  setup(props) {
    console.log("这是 props", props);
    const count = ref(1)
    // console.log(typeof count.value)
    // console.dir(ref)
    const his = 1
    const obj = reactive({
      foo: '张艳丽'
    })
    onMounted(() => {
      console.log("页面加载完才出来么")
    })
    console.log("我看看你是什么时候打印1")
    const double = computed(() => count.value * 2)
    
    return {
      count,
      obj,
      his,
      double
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.todos{
	margin: 0 auto;
	width: 300px;
	height: 500px;
	padding: 20px;
	background-color: #00FFFF;
}
ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
}
li {
  display: inline-block;
  margin: 0 10px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: left;
}
.square{
	display: inline-block;
	width: 20px;
	height: 20px;
	border: 1px solid #CCCCCC;
	margin-right: 20px;
	vertical-align: middle;
}
a {
  color: #42b983;
}
</style>
