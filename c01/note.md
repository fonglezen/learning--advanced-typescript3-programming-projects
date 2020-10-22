# Typescrpt的高级特性

## 联合类型

当某一个函数只有一个参数，但期望该参数是某个类型或另一个类型时，则使用联合类型。

```javascript
  constructor(private start : number, private end : number) {

  }
```
注意这里construtor的写法，实际上相当于：
```javascript

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
