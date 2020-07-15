import {fetchData,fetchOtherData} from "./fetchData"

test('fetchData测试',(done)=>{
  fetchData((page)=>{
    expect(page).toEqual(null)
    done()
  })
})
// then 写才是
test('fetchOtherData测试',()=>{
  return fetchOtherData().then(data=>{ // return 才能成功
    expect(data.data.page).toEqual(null)
  })
})
// await async 写测试
test('fetchOtherData测试',async ()=>{
  const result = await fetchOtherData()
  expect(result.data.page).toEqual(null)
})
