import React from "react";

const Footer = () => {
  return (
    <div className="h-[400px] w-full bg-primary pt-[48px] px-[80px]">
      <div className="grid grid-cols-3 gap-x-[80px]">
        <div className="col-span-1">
          <div className="">
            <img src="./logo2.png" alt="" />
          </div>
          <div className="w-[320px] text-white text-sm">
            <h1 className="  font-semibold tracking-wide my-2">
              CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN ỨNG DỤNG THÔNG MINH VIỆT
            </h1>
            <p>Mã Số Thuế: 0106494214</p>
            <p>Ngày hoạt động: 27/03/2014</p>
            <p>Sở Kế Hoạch và Đầu Tư Thành Phố Hà Nội</p>
          </div>
          <div className="flex items-center justify-start gap-x-2 mt-2">
            <span>
              <img src="./Facebook.png" alt="social" />
            </span>
            <span>
              <img src="./Instagram.png" alt="social" />
            </span>
            <span>
              <img src="./Instagram-1.png" alt="social" />
            </span>
            <span>
              <img src="./YT.png" alt="social" />
            </span>
            <span>
              <img src="./Instagram-2.png" alt="social" />
            </span>
          </div>
        </div>
        <div className="flex items-center justify-around col-span-2 ">
          <div className="text-white font-semibold">
            <h1>Liên hệ</h1>
            <div className="flex items-center gap-x-2 my-1">
              <span>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1330_26341)">
                    <path
                      d="M15.1908 4.803C15.1908 4.06967 14.5908 3.46967 13.8574 3.46967H3.19076C2.45742 3.46967 1.85742 4.06967 1.85742 4.803V12.803C1.85742 13.5363 2.45742 14.1363 3.19076 14.1363H13.8574C14.5908 14.1363 15.1908 13.5363 15.1908 12.803V4.803ZM13.8574 4.803L8.52409 8.12967L3.19076 4.803H13.8574ZM13.8574 12.803H3.19076V6.13633L8.52409 9.46967L13.8574 6.13633V12.803Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1330_26341">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.523438 0.802979)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span>contact@viajsc.com</span>
            </div>
            <div className="flex items-center gap-x-2 my-1">
              <span>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1330_26353)">
                    <path
                      d="M4.88344 4.13631C4.92344 4.72965 5.02344 5.30965 5.18344 5.86298L4.38344 6.66298C4.1101 5.86298 3.93677 5.01631 3.87677 4.13631H4.88344ZM11.4568 12.1496C12.0234 12.3096 12.6034 12.4096 13.1901 12.4496V13.443C12.3101 13.383 11.4634 13.2096 10.6568 12.943L11.4568 12.1496ZM5.52344 2.80298H3.1901C2.82344 2.80298 2.52344 3.10298 2.52344 3.46965C2.52344 9.72965 7.59677 14.803 13.8568 14.803C14.2234 14.803 14.5234 14.503 14.5234 14.1363V11.8096C14.5234 11.443 14.2234 11.143 13.8568 11.143C13.0301 11.143 12.2234 11.0096 11.4768 10.763C11.4101 10.7363 11.3368 10.7296 11.2701 10.7296C11.0968 10.7296 10.9301 10.7963 10.7968 10.923L9.3301 12.3896C7.44344 11.423 5.89677 9.88298 4.93677 7.99631L6.40344 6.52965C6.5901 6.34298 6.64344 6.08298 6.5701 5.84965C6.32344 5.10298 6.1901 4.30298 6.1901 3.46965C6.1901 3.10298 5.8901 2.80298 5.52344 2.80298Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1330_26353">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.523438 0.802979)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span>1900 9999</span>
            </div>
            <div className="flex items-center gap-x-2 my-1">
              <span>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1330_26359)">
                    <path
                      d="M8.52409 2.13629C5.94409 2.13629 3.85742 4.22296 3.85742 6.80296C3.85742 10.303 8.52409 15.4696 8.52409 15.4696C8.52409 15.4696 13.1908 10.303 13.1908 6.80296C13.1908 4.22296 11.1041 2.13629 8.52409 2.13629ZM5.19076 6.80296C5.19076 4.96296 6.68409 3.46962 8.52409 3.46962C10.3641 3.46962 11.8574 4.96296 11.8574 6.80296C11.8574 8.72296 9.93742 11.5963 8.52409 13.3896C7.13742 11.6096 5.19076 8.70296 5.19076 6.80296Z"
                      fill="white"
                    />
                    <path
                      d="M8.52409 8.46962C9.44456 8.46962 10.1908 7.72343 10.1908 6.80296C10.1908 5.88248 9.44456 5.13629 8.52409 5.13629C7.60361 5.13629 6.85742 5.88248 6.85742 6.80296C6.85742 7.72343 7.60361 8.46962 8.52409 8.46962Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1330_26359">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.523438 0.802979)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span>16, Ngõ 204, Trần Duy Hưng, Trung Hòa, Cầu Giấy, HN </span>
            </div>
            <div className="mt-4">
              <img src="./icon-bct 1.png" alt="" />
            </div>
          </div>
          <div className="text-white font-semibold">
            <h1>TẢI ỨNG DỤNG</h1>
            <div className="mt-4 flex items-start gap-x-4">
              <div className="">
                <img src="./qr.png" alt="" />
              </div>
              <div className="">
                <img src="./ios.png" alt="" />
                <img src="./android.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-white mt-4">
        <h1 className="font-semibold">CHÍNH SÁCH BẢO MẬT</h1>
        <h2 className="mt-2">Copyright © 2021 VIA JSC. All rights reserved.</h2>
      </div>
    </div>
  );
};

export default Footer;
