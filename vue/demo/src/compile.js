class Compiler{
    // 负责解析模版
    // 模版，vue实例
    constructor(el,vm) {
        // 先存后编译
        // dom对象或者选择器
        this.el = typeof el == 'string' ? document.querySelector(el) : el;
        this.vm = vm;
        // 编译： 重绘或者重流
        if(this.el){
            // 1. 把el中所有的子节点都放入到内存中， fragment
            let fragment = this.node2fragment(this.el);
            // 2. 内存中编译
            this.compile(fragment)
            // 3. 把fragement一次性添加到页面 
            this.el.appendChild(fragment);

        }
    }


    // 处理子节点的核心方法
    node2fragment(node) {
        console.log(node)
        let fragment = document.createDocumentFragment();
        let childNodes = node.childNodes;
        // 将子节点转换为数组
        this.toArray(childNodes).forEach(node => {
            fragment.appendChild(node)
        })
        return fragment
    }
    
    compile(fragment) {
      let childNodes = fragment.childNodes;
      this.toArray(childNodes).forEach(node => {
          console.log(node)
        //   元素
        if(this.isElementNode(node)){
            this.compileElement(node)

        }

        if(this.isTextNode(node)){
            this.compileText();
        }

        if(node.childNodes && node.childNodes.length > 0){
            this.compile(node)
        }

      })
    }

    compileElement(node){
        console.log("需要解析html标签");
        // 获取当前节点下的所有属性
        let attributes = node.attributes
        this.toArray(attributes).forEach(v => {
            // 解析vue指令
            console.log(v)
            let name = v.name;
            
            if(this.isDirective(name)){
                console.log(name)
                let type = name.slice(2)
                let value = v.value
                if(type === 'text'){
                    node.textContent = this.vm.$data[value]
                }
                if(type === 'html'){
                    node.innerHTML = this.vm.$data[value]
                }

                if(type === 'model'){
                    node.value = this.vm.$data[value]
                }

                if(this.isEventDirective(type)){
                    console.log("hehe")

                }
            }

        })
    }

    compileText(node){
        console.log("需要解析文本");
    }

    // tool
    toArray(arr) { //[].slice //借用数组
       return [].slice.call(arr)
    }

    isElementNode(node) {
        // nodeType 节点类型 1. 元素节点  3. 文本节点
        return node.nodeType === 1
    }

    isTextNode(node) {
        return node.nodeType === 3
    }

    isDirective(name) {
        return name.startsWith("v-")
    }

    isEventDirective(name) {
        return name.split(":")[0] === "on"
    }
}