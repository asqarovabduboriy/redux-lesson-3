import React, { useState } from "react";
import "./CreateUser.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../context/userClise";
function CreateUser() {
  const dispatch = useDispatch();
  const user = {
    id: new Date().getTime(),
    name: "",
    profession: "",
    age: '',
    phone: "",
    address: "",
    university: "",
    gender: "",
  };
  const [userData, setUserData] = useState(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    setUserData(user);
    dispatch(setUser(userData));
  };

  const handleGenderChange = (e) => {
    setUserData({ ...userData, gender: e.target.value });
  };
  
  return (
    <div className="create__user">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit} className="create__user-form" action="">
        <input
        required
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          type="text"
          placeholder="name"
        />
        <input
        required
          value={userData.profession}
          onChange={(e) =>
            setUserData({ ...userData, profession: e.target.value })
          }
          type="text"
          placeholder="profession"
        />
        <input
        required 
          value={userData.age} 
          type="number" 
          placeholder="age" 
          onChange={(e) => setUserData({ ...userData, age: e.target.value })} 
        />
        <input
        required
          value={userData.phone}
          type="number"
          placeholder="phone number"
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
        />
        <input
        required
          value={userData.address}
          type="text"
          placeholder="address"
          onChange={(e) => setUserData({ ...userData, address: e.target.value })}
        />
        <input
        required
          value={userData.university}
          type="text"
          placeholder="university"
          onChange={(e) => setUserData({ ...userData, university: e.target.value })}
        />
        <select name="gender" id="gender" value={userData.gender} onChange={handleGenderChange}>
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateUser;
