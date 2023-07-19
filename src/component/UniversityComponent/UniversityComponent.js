import { Collapse } from "antd";
import React from "react";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: "1",
    label: "Addis Ababa",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "Hawasa",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "Wachamo",
    children: <p>{text}</p>,
  },
];

const UniversityComponent = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className=" flex justify-center items-center mt-4">

       <Collapse accordion items={items} className="w-1/2"/>
    </div>
 
  );
};

export default UniversityComponent;
