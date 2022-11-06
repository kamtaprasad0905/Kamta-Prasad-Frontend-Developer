import axios from "axios";
const BASE_URL = " https://72da-47-9-180-125.ap.ngrok.io";
const get = async (url: string, token: string | null, _config: any = {}) => {
  const config: any = { ..._config };
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return await axios.get(url, { ...config }).then((res: any) => res.data);
};
const post = async (url: string, token: string | null, data = {}, _config = {}) => {
  const config: any = { ..._config };
  if (token) {
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return axios
    .post(url, data, { ...config })
    .then((res: any) => {
      if (res.status) {
        const { data, status } = res;
        return { data, status };
      } else {
        return {
          status: 200,
          data: res,
        };
      }
    })
    .catch(({ response }: any) => {
      return response;
    });
};
const users = {
  signUp: async (params: any) => {
    try {
      const res = await post(`${BASE_URL}/test/api/Users/registerUser`, null, params);
      if (res?.status === 400) {
        return {
          error: true,
          message: [res.data.message],
        };
      } else if (res?.statusCode === 401) {
        return {
          error: true,
          message: ["Incorrect Email Address or password."],
        };
      }
      return res.data;
    } catch (e) {
      return {
        error: true,
        message: e,
      };
    }
  },

  signIn: async (params: any) => {
    try {
      const res = await post(`${BASE_URL}/test/api/Users/loginUser`, null, params);
      if (res?.status === 400) {
        return {
          error: true,
          message: [res.data.message],
        };
      } else if (res?.statusCode === 401) {
        return {
          error: true,
          message: ["Incorrect Email Address or password."],
        };
      }
      return res.data;
    } catch (e) {
      return {
        error: true,
        message: e,
      };
    }
  },
  getCapsules: async (page = 0, status: string, type: string, limit = 8) => {
    let queryString;
    if (status) {
      queryString = new URLSearchParams({
        offset: page.toString(),
        status,
        type,
        order: "asc",
        limit: limit.toString(),
      }).toString();
    } else {
      queryString = new URLSearchParams({
        status,
        type,
        order: "asc",
        limit: limit.toString(),
        offset: page.toString(),
      }).toString();
    }
    return await get(`https://api.spacexdata.com/v3/capsules?${queryString}`, null);
  },
  getCapsuleById: async (id: string) => {
    return await get(`https://api.spacexdata.com/v3/capsules/${id}`, null);
  },
};
export default users;
