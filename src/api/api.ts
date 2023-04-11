// import axios from '../utils/axios';
// import {User} from "../store/reducers/users";
//
// function API() {
//   const API_HOST = 'https://jsonplaceholder.typicode.com';
//   const urlString = (params?: Record<string, string>) => {
//     if (!params) return '';
//     const urlParams = new URLSearchParams();
//     for (const [name, value] of Object.entries(params)) {
//       if (value) { // ignore params without value
//         urlParams.append(name, value);
//       }
//     }
//     return urlParams.toString();
//   };
//
//   const makeUrl = (url:string, options?:Record<string, string>) => {
//     const _options = {
//       ...options,
//     };
//
//     return `${API_HOST}/${url}?${urlString(_options)}`;
//   };
//
//   const GET = (url:string, urlParams?:Record<string, string>) => axios({
//     method: 'GET',
//     url: makeUrl(url, urlParams),
//     headers: { Cache: 'no-cache' },
//   }).then((res) => {
//     return res.data;
//   }).catch((error) => {
//     if (error.response) {
//       const errRes = {
//         data: error.response.data,
//         status: error.response.status,
//         statusText: error.response.statusText,
//       };
//       console.error('GET ERROR RESPONSE', errRes);
//       throw errRes;
//     }
//     throw error;
//   });
//
//   return {
//     USERS: {
//       getUsersById: (id:string):Promise<User> => GET(`users/${id}`),
//     },
//   };
// }
//
// export default API;
