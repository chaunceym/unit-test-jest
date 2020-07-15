const index = require('./index')
const {main,main2} = index

test('保健1 300元', ()=>{
  expect(main(300)).toBe('至尊享受')
})
test('保健2 2000元', ()=>{
  expect(main2(2000)).toBe('双人服务')
})


