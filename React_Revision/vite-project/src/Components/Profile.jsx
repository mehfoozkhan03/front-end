import React from 'react'

export const Profile = ({value}) => {
  return (
    <div style={{margin:"40px auto",border:"1px solid white",width:"70%",padding:"20px",borderRadius:"10px", }}>
        <div className="profile-user" style={{display:"flex",gap:"20px",justifyContent:"space-evenly",alignItems:"center"}}>
            <img src={value.img} alt={value.name} width="100" height="100" style={{borderRadius:"50%"}}/>
            <div style={{textAlign:"left"}}>
                <h2>{value.id}</h2>
                <h3>{value.name}</h3>
                <h4>{value.email}</h4>
            </div>
        </div>
        <div style={{display:"flex"}} >
          {
            value.techStack?.map(el=>  <span key={el.name} className="profile-stack" style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",gap:"20px",margin:"20px auto"}}>
                <img src={el.img} alt={el.name} width="50" height="50"/>
                <label>{el.name}</label>
            </span>)
          }
        </div>
    </div>
  )
}
