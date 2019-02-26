import  request  from '../utils/request'
import axios from 'axios'
axios.defaults.baseURL="http://111.231.59.56:5000/api";
// export const GetBlogs = (nowpage,pagesize) => {
//     console.log(nowpage,pagesize,request)
//     return request({
//         url:'/blog',
//         data:{
//             nowpage,
//             pagesize
//         }
//     })
// }
export const GetBlogs = (nowpage,pagesize) =>axios.get("/blog?nowpage="+nowpage+"&&pagesize="+pagesize)