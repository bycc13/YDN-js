{
  function scope1() {
    function bar(a) {
      i = 3;
      console.log(a + i);
    }
    for (var i = 0; i < 10; i++) {
      bar(i * 2); //死循环11
    }
  }
  // scope1()  
}

{
  function scope2() {
    var foo = true;
    if (foo) {
      let bar = 1;
    }
    console.log(bar) //bar is not defined
  }
  // scope2()
}

{
  function scope3() {
    foo(); // 1
    var foo;
    function foo() {
      console.log(1)
    }
    foo = function () {
      console.log(2)
    }
  }
  // scope3(); // 提升。函数先被提升，然后变量再提升。且当函数和变量同名时（重复声明），变量会被忽略
}

{
  function scope4() {
    foo(); // 3
    function foo() {
      console.log(1)
    }
    var foo = function () {
      console.log(2)
    }
    function foo() {
      console.log(3)
    }
  }
  scope4();// 提升。尽管重复的var声明被忽略，但出现在后面的函数声明会覆盖前面的函数生命
}

{
  function scope5(){
    foo();
    var a=true;
    if(a){
      function foo(){
        console.log("a")
      }
    }else {
      function foo(){
        console.log("b")
      }
    }
  }
  scope5(); //b 同scope4()
}