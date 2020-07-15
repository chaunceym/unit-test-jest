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




