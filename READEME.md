# 学习 Jest 前端单元测试

## 匹配器

- toBe()

是最常用的一种匹配器, 简单理解就是全等 === 

- toEqual()

当不严格匹配但要求值相等的话就可以用 toEqual(), 比如判断两个对象之间的值

- ToBeNull()

只匹配 null 值, 不匹配 undefined 

- ToBeUndefined()

只匹配 undefined

- toBeDefined()

只要定义过了就可通过测试

- toBeTruthy()

true 类型匹配器, 非0, 非null, 非undefined等都可以通过

- toBeFalsy()

false 类型匹配器, 只要是 falsy 都可以匹配, null, undefined, 0, NaN, ''

- toBeGreaterThan()

用来做数字比较, 只要大于测试的数值, 就可通过

- toBeLessThan() 匹配器

与 toBeGreaterThan 相反, 小于测试的数值, 就可通过

- toBeGreaterThanOrEqual()

当测试结果数据大于等于期待数字时, 可以通过

- toBeLessThanOrEqual()

当测试结果数据小于等于期待数字时, 可以通过

- toBeCloseTO()

可以自动清除 JS 浮点精度错误的匹配器

- toMatch()

字符串包含匹配器

- toContain()

数组匹配器

- toThrow()

对异常处理的匹配器, 可以检测一个方法是否会出异常

- not()

not 匹配器是 Jest 特殊的匹配器, 相反或取反的意思

## 让 Jest 模块化转为 ES6

```bash
yarn add @babel/core @babel/preset-env
```

在 .babelrc 里编写配置

```json
{
  "presets": [
    [
      "@babel/preset-env",{
      "targets": {
        "node": "current"
      }
    }
    ]
  ]
}
```

## 实现异步测试

- 回调函数式

利用 axios 异步加载数据

测试方法用到 done(), 等异步方法结束再执行测试代码

- 直接返回 Promise

在测试代码里使用 Promise, 必须用 return, 否则报错

```js
test('fetchOtherData测试',()=>{
  return fetchOtherData().then(data=>{ // return 才能成功
    expect(data.data.page).toEqual(null)
  })
})
```

## Jest 四个钩子函数

- beforeAll() 所有测试之前
- beforeEach() 每个测试之前
- afterEach() 每个测试之后
- afterAll() 所有测试之后

## 测试项目分组

当测试用例多了之后, 代码就会更加繁杂

因此我们可以给测试代码分类, 方便管理页方便阅读

Jest 的 describe() 方法可以实现分组

```js
describe('异步加载测试',()=>{
  test('获取商品数据',()=>{
    // todo 
  })
})
```

## 钩子函数作用域

- 钩子函数在父级分组可作用域子集，类似继承
- 钩子函数同级分组作用域互不干扰，各起作用
- 先执行外部的钩子函数，再执行内部的钩子函数



