import React from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Paragraph from "./Paragraph";
import Button from "./Button";

const Banner = () => {
  return (
    <section className=" bg-home-bg-image bg-no-repeat bg-cover bg-center  pt-[150px] pb-[150px]">
      <Container>
        <Heading
          tagname="h1"
          style="text-[75px]  w-[300px] capitalize font-bold leading-[91px]"
          text={[
            "we are extremly ",
            <span className="text-orrange capitalize">organic</span>,
          ]}
        />
        <Paragraph style="text-[#676767] mt-[20px] mb-[30px] w-[402px]" text="Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet,consectetur adipiscing elit." />
        <Button text="shop now" style={" bg-dark-green border-none text-white py-[14px] px-[50px] font-[20px] font-semibold rounded-[10px]"}/>
        {/* <h1 className=" "></h1> */}
      </Container>
    </section>
  );
};

export default Banner;
