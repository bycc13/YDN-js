//当函数可以记住并访问所在的此法作用域时，就产生了闭包，即使函数时在此法作用域之外执行的
{
	function closure1(){
		function foo(){
			var a=2;
			function bar(){
				console.log(a)
			}
			return bar
		}
		var baz=foo();
		baz()// 2  闭包。通常foo()执行完，内部作用域会被销毁，但因为闭包，使得该作用域一直存活，以供bar()在之后任何时间进行引用
	}
	closure1(); //bar被正常执行，且是在自己定义的此法作用域以外的地方执行
}

{
	function closure2(){
		function foo(){
			var a=2;
			function baz(){
				console.log(a)
			}
			fn=baz;
		}
		function bar(){
			fn();
		}
		foo();
		bar() // 2  
	}
	closure2();
}
