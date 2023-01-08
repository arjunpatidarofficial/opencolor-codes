import React, { useState } from "react";
import ColorPicker from "./components/colorPicker";
import Footer from "../../components/footer";
import Navbar from "../../components/navBar";
import { colorArray } from "../../components/colors";

const HtmlColor = () => {
  const colors = ["#fff000", "#f00000", "#F38100", "#239E6F", "#B639F9 "];

  const [color, setColor] = useState({
    hex: "#FF7800",
    rgb: {
      a: 1,
      b: 255,
      g: 0,
      r: 62,
    },
    hsl: {
      a: 1,
      h: 254.69,
      l: 0.5,
      s: 1,
    },
    hsv: {
      a: 1,
      h: 254.69,
      s: 1,
      v: 1,
    },
  });

  return (
    <div className="w-full h-screen bg-primary">
      <Navbar />

      <div className="flex flex-col items-start w-full px-5 sm:px-10 py-3">
        <div className="w-full border  rounded-md border-black  h-44 p-1">
          <div
            style={{
              backgroundColor: `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`,
            }}
            className="w-full  rounded flex justify-center items-center  h-full"
          >
            <h1 className="text-xl text-center sm:text-4xl font-bold text-white select-none px-5">
              Because of your smile, you make life more beautiful.
            </h1>
          </div>
        </div>

        <div className="w-full rounded-md  mt-5 p-1">
          <div className="w-full  rounded  border border-gray-300 bg-white p-3 sm:p-2">
            <div className="w-full flex flex-col sm:flex-row sm:items-center">
              <div className="w-full sm:w-8/12 flex flex-col space-y-5 sm:space-y-0 sm:space-x-7 sm:flex-row sm:items-center px-3">
                <div className="w-20 h-10 border border-gray-300 p-0.5 rounded-md">
                  <div
                    className="w-full h-full rounded"
                    style={{
                      backgroundColor: `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`,
                    }}
                  ></div>
                </div>
                <div className="flex  items-center">
                  <p className="text-sm text-gray-400 font-medium">HEX</p>
                  <p className="ml-3 font-semibold text-lg">
                    {color.hex.toUpperCase()}
                  </p>
                </div>
                <div className="flex  items-center">
                  <p className="text-sm text-gray-400 font-medium">RGB</p>
                  <p className="ml-3 font-semibold text-lg">{`${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a}`}</p>
                </div>
                <div className="flex  items-center">
                  <p className="text-sm text-gray-400 font-medium">HSL</p>
                  <p className="ml-3 font-semibold text-lg">{`${Math.trunc(
                    color.hsl.h
                  )}, ${Math.trunc(color.hsl.s * 100)}%, ${Math.trunc(
                    color.hsl.l * 100
                  )}%`}</p>
                </div>
              </div>
              <div className="w-full sm:w-4/12 flex items-center ">
                {/* <i class="fa-solid fa-download text-gray-400 text-lg"></i> */}
                <div className="border ml-0 mt-5 sm:mt-0 sm:ml-10 rounded-md border-gray-300 p-0.5">
                  <div className="flex flex-wrap">
                    {colors.map((color, index) => {
                      return (
                        <div
                          style={{ backgroundColor: color }}
                          className={`w-16 h-8 ${
                            index === 0
                              ? "rounded-l"
                              : index === colors.length - 1
                              ? "rounded-r"
                              : ""
                          }`}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Color Picker Code */}
      <div className="w-full flex flex-col px-5 sm:px-10">
        <div className=" bg-white mt-1 rounded-md">
          <div className="flex flex-col sm:flex-row mt-8">
            <div className="w-full sm:w-8/12 px-2 sm:px-5 pb-12">
              <ColorPicker
                color={color.hsl}
                onChange={(e) => {
                  setColor(e);
                }}
              />
            </div>
            <div className="flex justify-center w-full sm:w-4/12 sm:py-0 py-5 border-t sm:border-t-0">
              <div className="grid grid-cols-10 sm:h-48  w-full px-5">
                {colorArray.map((color) => {
                  return (
                    <div
                      style={{ backgroundColor: color }}
                      className="h-8"
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HtmlColor;
