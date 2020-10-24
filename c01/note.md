# Typescrpt的高级特性

## 联合类型

当某一个函数只有一个参数，但期望该参数是某个类型或另一个类型时，则使用联合类型。

```typescript
  constructor(private start : number, private end : number) {

  }
```
注意这里construtor的写法，实际上相当于：
```typescript

private start : number = 0;
private end : number = 0;
construtor(start: number, end : number) {
  this.start = start;
  this.end = end;
}
```
如果需要检查参数或者以某种方式处理参数，则应该使用这种展开参数的形式。
如果只是为私有字段赋值，那么第一种形式是一种非常优雅的方式。

要确保对联合列表中的每个类型使用对应的typeof检查。


## 交叉类型

交叉类型由多个类型组合而成，具有各个类型的所有属性。

## 类型别名

使用type关键字定义类型别名，帮助团队创建根据一致的代码。

```typescript
type StringOrNumber = string | number;
type NullableStringOrNumber = null | StringOrNumber;
```

## 展开、解构、REST为ES6已有语法，略过。

作者提到一点很重要：

> 需要重点强调的是，查看生成的JavaScript十分重要。TypeScript非常擅长因此复杂的处理，不让我们看到。但是我们应该熟悉生成的JavaScript。使用不同版本的ECMAscript标准进行编译，然后查看生成的代码，对于理解底层过程很有帮助。


## 使用装饰器进行AOP（Aspect-Oriented Programming） 面向切面编程

面向切面编程：切开一段代码并将其分离到另外一个位置，从而提取出重复性代码。

demo代码：./src/AOP.ts

装饰器只能在类中使用，不能对一个独立的函数使用装饰器。


## mixin组成类型


## 泛型


