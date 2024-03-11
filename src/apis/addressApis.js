import axios from "axios";

export const fetchProvinces = async () => {
  try {
    const response = await axios.get("https://vapi.vnappmob.com/api/province/");
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách tỉnh:", error);
    return [];
  }
};

export const fetchDistrictsByProvinceId = async (province_id) => {
  try {
    const response = await axios.get(
      `https://vapi.vnappmob.com/api/province/district/${province_id}`
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách quận/huyện:", error);
    return [];
  }
};

export const fetchWardsByDistrictId = async (district_id) => {
  try {
    const response = await axios.get(
      `https://vapi.vnappmob.com/api/province/ward/${district_id}`
    );
    return response.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh sách phường.xã:", error);

    return [];
  }
};
