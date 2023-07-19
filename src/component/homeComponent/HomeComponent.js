import React from "react";
import { Button, Space } from "antd";
import { Navigate } from "react-router-dom";

const HomeComponent = () => {
    // const universityHandler =() =>{
    //     Navigate
    // }
  return (
    <div className="w-full flex flex-col justify-center items-center pt-10">
      <Button className="w-56 bg-gray-500 m-2 cursor-pointer hover:scale-110" onClick={()=>(<Navigate to="/university" />)}>University</Button>
      <Button className="w-56 bg-gray-500 m-2 cursor-pointer hover:scale-110">Year</Button>
      <Button className="w-56 bg-gray-500 m-2 cursor-pointer hover:scale-110">Department</Button>
      <Button className="w-56 bg-gray-500 m-2 cursor-pointer hover:scale-110">Scholarship</Button>
      
    </div>
  );
};

export default HomeComponent;
