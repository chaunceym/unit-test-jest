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





