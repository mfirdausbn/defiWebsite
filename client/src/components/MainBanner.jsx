import React from "react";
import { Button, Rating } from "flowbite-react";
import FootBar from "./FootBar";

const MainBanner = () => {
  return (
    <div className="h-screen bg-blue-200">
      <div className="p-36 text-7xl w-1/2 font-semibold">
        <div>
          HIGH YIELDS
          <br />
          EVERY WEEK.
          <br />
          ENOUGH SAID.
        </div>
        <div className="mt-16 text-4xl">
          The most transparent, safe and easy way to invest in DeFi and Web3
        </div>
        <div className="mt-16">
          <Button pill={true} size="xl">
            <div className="px-8 py-1 text-lg">Sign up Now</div>
          </Button>
        </div>
        <div className="flex mt-16">
          <div className="text-xl">
            <div className="flex">
              <Rating size="lg">
                <Rating.Star />
              </Rating>
              <a className="pt-2" href="">
                {" "}
                Trustpilot
              </a>
            </div>
            <Rating size="lg">
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
            </Rating>
            <div className="ml-2 text-sm">
              TrustScore <span className="font-bold">4.7</span> |
              <span className="font-bold">777</span> reviews
            </div>
          </div>
          <div className="border-l-2 border-gray-400 text-lg mx-20"></div>
          <div className="">
            <div className=" text-sm text-gray-500 mt-4">Download the App</div>
            <div className="mt-2 flex ">
              <a href="">
                <img
                  className="w-10 mx-4"
                  src="https://icons-for-free.com/iconfiles/png/512/apps+brand+google+logo+play+store+icon-1320192742256274335.png"
                  href=""
                ></img>
              </a>
              <a href="">
                <img
                  className="h-8"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Apple_logo_dark_grey.svg/1724px-Apple_logo_dark_grey.svg.png"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
