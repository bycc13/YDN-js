{
  function this1() {
    function foo(num) {
      console.log("foo:" + num);
      foo.count++;
    }
    foo.count = 0;
    var i;
    for (i = 0; i < 10; i++) {
      if (i > 5) {
        foo(i);
      }
    }
    console.log(foo.count);
  }
  // this1(); foo:6 foo:7 foo:8 foo:9 4
}

{
  // 调用栈
  function this2() {
    function baz() {
      // 调用栈：baz
      console.log('baz');
      bar();
    }
    function bar() {
      // 调用栈：baz -> bar
      console.log('bar');
      foo();
    }
    function foo() {
      // 调用栈：baz -> bar -> foo
      console.log('foo');
    }
    baz();
  }
  // this2(); // baz bar foo
}

{
  // 默认规则： this绑定全局
  // function foo() {
  //   console.log(this.a); // 2
  // }
  // var a = 2;
  // foo();
}

{
  // 隐形绑定： 考虑调用位置是否有上下文对象
  function this3() {
    function foo() {
      console.log(this.a); // 2
    }
    var obj = {
      a: 2,
      foo: foo
    };
    var a = 4;
    obj.foo();
  }
  // this3();
}

{
  function this4() {
    function foo() {
      console.log(this.a); // 42
    }
    var obj2 = {
      a: 42,
      foo: foo
    }
    var obj1 = {
      a: 2,
      obj2: obj2
    }
    obj1.obj2.foo();
  }
  // this4();
}

{
  // 显示绑定 call(...)  apply(...)
  function this5() {
    function foo() {
      console.log(this.a); // 5
    }
    var obj = {
      a: 5
    }
    foo.call(obj);
  }
  // this5(); //call(obj)把obj这个对象绑定到foo的this中
}

{
  // 显示绑定 call(...)  apply(...)
  function this6() {
    function foo() {
      console.log(this.a);
    }
    var obj = {
      a: 6
    }
    var bar = function () {
      foo.call(obj);
    }
    bar(); // 6
    setTimeout(bar, 2000); // 6

    // 硬绑定的bar不可能再修改它的this
    bar.call(window); // 6
  }
  // this6();
}

{
  // 由于硬绑定是非常常用的模式，所以es5提供内置方法 Funtion.prortotype.bind
  function this7() {
    function foo(val) {
      console.log(this.a, val);
      return this.a + val;
    }
    var obj = {
      a: 7
    }
    var bar = foo.bind(obj);
    var b = bar(3); // 7 3 
    console.log(b); // 10
  }
  // this7();
}

{
  // API调用的上下文 提供了可供选择的参数“上下文（context）”,作用与bind(...)一样，确保回调函数内使用指定的this
  function this8() {
    var arr = [1, 2, 3];
    function foo(el) {
      console.log(el + "," + this.id);
    }
    var obj = {
      id: "awesome"
    }
    arr.forEach(foo, obj); // 1,awesome 2,awesome 3,awesome
  }
  // this8();
}

{
  function this9() {
    function foo(something) {
      this.a = something;
    }
    var obj1 = {
      foo: foo
    }
    var obj2 = {}
    obj1.foo(2);
    console.log(obj1.a); // 2
    obj1.foo.call(obj2, 3);
    console.log(obj2.a); // 3 call优先于隐式绑定
    var bar = new obj1.foo(4);
    console.log(obj1.a); // 2
    console.log(bar.a); // 4 new优先于隐式绑定
  }
  // this9()
}

{
  // var a = 10;
  // var a = 20;
  // function baz() {
  //   console.log('baz1')
  // }
  // function baz() {
  //   console.log('baz2')
  // }
  // function foo() {
  //   var a = 3;
  //   var self = this;
  //   setTimeout(function () {
  //     console.log(self.baz, a);
  //   }, 1000);
  // }
  // foo() // 2
}
