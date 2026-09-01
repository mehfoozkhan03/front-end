import React from "react";

export const Profile = ({ value }) => {
  console.log(value);
  return (
    <div style={{ border: "1px solid white",borderRadius:"20px", margin:"20px auto", width:'fit-content' ,padding:"10px 70px" }}>
      <div
        className="profile_img"
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          margin: "40px 0",
        }}
      >
        <img src={value.img} alt={value.name} style={{ borderRadius: "50%" }} />
        <div className="user_info" style={{display:"flex",flexDirection:"column",textAlign:"start"}}>
          <h2>ID : {value.id}</h2>
          <h2>Name : {value.name}</h2>
          <h3>Email : {value.email}</h3>
        </div>
      </div>
      <div
        className="techStack_info"
        style={{ display: "flex", gap: "20px", justifyContent: "center" }}
      >
        {value?.techStack?.map((el, i) => {
          return (
            <span className={`stack_${i+1}`} key={i}>
              <img
                src={el.img}
                alt={el.name}
                style={{ width: "100px", height: "100px" }}
              />
              <h3>{el.name}</h3>
            </span>
          );
        })}
      </div>
    </div>
  );
};
