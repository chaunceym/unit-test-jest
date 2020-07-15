import jestHooks from "./jestHooks"

const meng = new jestHooks()

beforeAll(()=>{
  console.log('在所有测试之前')
})
beforeEach(()=>{ console.log('在每个测试之前') })
test('语文写作业',()=>{
  meng.study(1)
  meng.doHomework()
  expect(meng.action).toEqual('语文写作业')
})

test('数学看书',()=>{
  meng.study(0)
  meng.lookBook()
  expect(meng.action).toEqual('数学看书')
})
afterAll(()=>{
  console.log('在所有测试之后')
})
afterEach(()=>{ console.log('在每个测试之后') })
