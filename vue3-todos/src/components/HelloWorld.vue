<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
export default {
  name: 'HelloWorld',
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
