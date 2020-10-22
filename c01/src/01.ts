class  RangeValidateionBase {
  constructor(private start : number, private end : number) {

  }

  protected Rangecheck(value: number) : boolean {
    return value >= this.start && value <= this.end;
  }

  // 把字符串转为数字
  protected GetNumber(value : string) : number {
    return new Number(value).valueOf();
  }
}

// 确保只对string或number执行验证

// 写法1
class SeparateTypeRangeValidation extends RangeValidateionBase {
  IsInRangeString(value : string) : boolean {
    return this.Rangecheck(this.GetNumber(value));
  }
  IsInRangeNumber(value : number) : boolean {
    return this.Rangecheck(value);
  }
}


// 写法2
class AnyRangeValidation extends RangeValidateionBase {
  IsInRange(value: any) : boolean {
    if(typeof value === 'number') {
      return this.Rangecheck(value);
    }else if(typeof value === 'string') {
      return this.Rangecheck(this.GetNumber(value));
    }
    return false;
  }
}

// 写法3，使用联合类型, 类型通过使用 ｜ 进行联合
class UnionRangeValidation extends RangeValidateionBase {
  isInRange(value: string | number) : boolean {
    if(typeof value === 'number') {
      return this.Rangecheck(value);
    }

    return this.Rangecheck(this.GetNumber(value));
  }
}