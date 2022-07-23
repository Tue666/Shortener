import axiosInstance from "./axiosInstance";

const shrtcodeApi = {
  // [GET] /shorten?url
  shorten: (shortenUrl) => {
    const url = `/shorten?url=${shortenUrl}`;
    return axiosInstance.get(url);
  },

  // [GET] /infor?code
  infor: (shortenCode) => {
    const url = `/infor?code=${shortenCode}`;
    return axiosInstance.get(url);
  },
};

export default shrtcodeApi;
