import React, { useEffect, useState } from "react";
import { MyLabel } from "./label";
import { MyInput, MyInputToggle } from "./input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserSchemaRegister } from "../schema/UserSchemaRegister";
import {
  fetchDistrictsByProvinceId,
  fetchProvinces,
  fetchWardsByDistrictId,
} from "../apis/addressApis";
import MyCheckBox from "./input/MyCheckBox";
import { toast } from "react-toastify";
import { MyDropdown } from "./dropdown";
import { About } from "./about";
import axios from "axios";
const SignUp = () => {
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const {
    setValue,
    reset,
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(UserSchemaRegister),
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const provinces = await fetchProvinces();
        setProvinces(provinces?.results);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách tỉnh:", error);
      }
    };

    fetchData();
  }, []);
  const handleChangeProvince = (e) => {
    setValue("province", e.target.value);
    const fetchData = async () => {
      try {
        const data = await fetchDistrictsByProvinceId(
          e.target.options[e.target.selectedIndex].id
        );
        setDistricts(data?.results);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách quận/huyện:", error);
      }
    };

    fetchData();
  };
  const handleChangeDistrict = (e) => {
    setValue("district", e.target.value);
    const fetchData = async () => {
      try {
        const data = await fetchWardsByDistrictId(
          e.target.options[e.target.selectedIndex].id
        );
        setWards(data?.results);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách quận/huyện:", error);
      }
    };

    fetchData();
  };
  const handleChangeWard = (e) => {
    setValue("ward", e.target.value);
  };

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
        delay: 0,
        autoClose: 1000,
      });
    }
  }, [errors]);
  const onSubmit = async (values) => {
    if (!isValid) return;
    try {
      const response = await axios.post(
        "https://dev-fe-exam.viajsc.com/ExamUser/register-user",
        values
      );
      console.log(response);
      if (response.data.success) {
        toast.success("Đăng ký thành công!");
        reset({
          shopName: "",
          phoneNumber: "",
          email: "",
          userName: "",
          password: "",
          confirmPassword: "",
          address: "",
          province: "",
          district: "",
          ward: "",
          acceptTerm: null,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center  justify-between px-[80px] py-[64px]">
      <div className="h-[484px] w-[800px]">
        <h1 className="text-primary text-2xl font-semibold text-center mb-7">
          ĐĂNG KÝ TÀI KHOẢN
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-6 gap-4"
        >
          <div className="col-span-2">
            <MyLabel htmlFor="shopName">
              Tên cửa hàng
              <span className="text-primary"> *</span>
            </MyLabel>
            <MyInput
              control={control}
              name="shopName"
              placeholder="Nhập tên người dùng"
              id="shopName"
            ></MyInput>
          </div>
          <div className="col-span-2">
            <MyLabel htmlFor="phoneNumber">
              Số điện thoại
              <span className="text-primary"> *</span>
            </MyLabel>
            <MyInput
              control={control}
              name="phoneNumber"
              placeholder="Nhập số điện thoại..."
              id="phoneNumber"
            ></MyInput>
          </div>
          <div className="col-span-2">
            <MyLabel htmlFor="email">Email</MyLabel>
            <MyInput
              control={control}
              name="email"
              placeholder="Nhập email..."
              id="email"
            ></MyInput>
          </div>
          <div className="col-span-2">
            <MyLabel htmlFor="userName">Tên người dùng</MyLabel>
            <MyInput
              control={control}
              name="userName"
              placeholder="Nhập tên người dùng..."
              id="userName2"
            ></MyInput>
          </div>
          <div className="relative col-span-2">
            <MyLabel htmlFor="password2">
              Mật khẩu
              <span className="text-primary"> *</span>
            </MyLabel>
            <MyInputToggle
              control={control}
              name="password"
              placeholder="Nhập mật khẩu..."
              id="password2"
            ></MyInputToggle>
          </div>
          <div className="relative col-span-2">
            <MyLabel htmlFor="confirmPassword">
              Xác nhận mật khẩu
              <span className="text-primary"> *</span>
            </MyLabel>
            <MyInputToggle
              control={control}
              name="confirmPassword"
              placeholder="Xác nhận mật khẩu..."
              id="confirmPassword"
            ></MyInputToggle>
          </div>
          <div className="col-span-6">
            <MyLabel htmlFor="address">Địa chỉ</MyLabel>
            <MyInput
              control={control}
              name="address"
              placeholder="Nhập số nhà, toà nhà, tên đường...."
              id="address"
            ></MyInput>
          </div>
          <div className="col-span-2">
            <MyLabel htmlFor="province">Thành phố</MyLabel>
            <MyDropdown
              control={control}
              data={provinces}
              name="province"
              id="province"
              prefix="province"
              handleChange={handleChangeProvince}
            >
              Chọn Thành phố
            </MyDropdown>
          </div>
          <div className="col-span-2">
            <MyLabel htmlFor="district">Quận/ Huyện</MyLabel>
            <MyDropdown
              control={control}
              data={districts}
              name="district"
              id="district"
              prefix="district"
              handleChange={handleChangeDistrict}
            >
              Chọn Quận/ Huyện
            </MyDropdown>
          </div>
          <div className="col-span-2">
            <MyLabel htmlFor="ward">Phường/ Xã</MyLabel>
            <MyDropdown
              control={control}
              data={wards}
              name="ward"
              id="ward"
              prefix="ward"
              handleChange={handleChangeWard}
            >
              Chọn Phường/ Xã
            </MyDropdown>
          </div>
          <div className="col-span-5">
            <MyCheckBox id="acceptTerm" control={control} name="acceptTerm">
              Tôi đã đọc và đồng ý với
              <a href="#" className="text-primary">
                {" "}
                Chính sách bảo mật thông tin
              </a>
            </MyCheckBox>
          </div>
          <div className="col-span-1">
            <button
              type="submit"
              className="bg-primary h-full w-full rounded-md text-white"
            >
              {isSubmitting ? (
                <div className="mx-auto w-5 h-5 border-4 border-white border-t-4 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Đăng ký"
              )}
            </button>
          </div>
        </form>
      </div>
      <About></About>
    </div>
  );
};

export default SignUp;
