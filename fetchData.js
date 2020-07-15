import axios from 'axios'

export const fetchData = (fn) => {
  axios.get('http://www.mengxiangyu.top:3001/mock.json')
    .then(data=>{
      fn(data.data.page)
    })
}
export const fetchOtherData = () => {
  return axios.get('http://www.mengxiangyu.top:3001/mock.json')
}
