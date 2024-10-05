import React from "react";
import logo from "../assets/Logo.png";
import qms from "../assets/qms.png";
import horizontal from "../assets/three-horizontal.png";
import teachers from "../assets/teachers.png";
import dept from "../assets/dept.png";
import add from "../assets/add.png";
import library from "../assets/library.png";

const SideBar = () => {
  return (
    <div className="sider">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <img style={{ width: "30px", height: "40px" }} src={logo} alt="logo" />
        <img style={{ width: "30px", height: "20px" }} src={qms} alt="" />
        <img
          style={{ width: "25px", height: "25px" }}
          src={horizontal}
          alt=""
        />
      </div>
      <br />
      <br />
      <br />
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "30px",
              height: "30px",
              padding: "10px",
              marginLeft: "40px",
            }}
            src={teachers}
            alt=""
          />
          <h2
            style={{
              backgroundColor: "white",
              width: "170px",
              marginLeft: "20px",
              borderStartStartRadius: "20px",
              borderEndStartRadius: "20px",
              paddingLeft: "10px",
              color: "black",
            }}
          >
            Teachers
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "30px",
              height: "30px",
              padding: "10px",
              marginRight: "27px",
            }}
            src={dept}
            alt=""
          />
          <h2 style={{ marginRight: "0px" }}>Department</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "30px",
              height: "30px",
              padding: "10px",
              marginRight: "27px",
            }}
            src={library}
            alt=""
          />
          <h2 style={{ marginRight: "50px" }}>Library</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "30px",
              height: "30px",
              padding: "10px",
              marginRight: "1px",
            }}
            src={add}
            alt=""
          />
          <h2 style={{ marginRight: "0px" }}>Add Teachers</h2>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
