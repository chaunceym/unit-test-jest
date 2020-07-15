test('测试007',()=>{
  expect('007号').toBe('007号')
})
test('toBeGreaterThan',()=>{
  expect(10).toBeGreaterThan(9)
})
const errorThrow = ()=>{
  throw new Error('this is a new Error')
}
test('error',()=>{
  expect(errorThrow).toThrow('this is a new Error')
})
