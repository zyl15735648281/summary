// vue的构造函数，用于创建vue实例
class Vue{
   constructor(options){
       options = options || {};
       this.$el = options.el;
       this.$data = options.data;

       if(this.$el){
        //    commpile 负责解析内容,需要什么去解析模版，模版和数据
        console.log(2222)
           let c = new Compiler(this.$el,this);
           console.log(c)
           //    文本节点 or 插值表达式
       }
   }
}