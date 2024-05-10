import React, { useState } from "react";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import { removeuser, editUser } from "../../context/userClise";
import { useDispatch } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { toast } from "react-toastify";

function Users({ data }) {
  const dispatch = useDispatch();
  const [editingUser, setEditingUser] = useState(null);
  const [editName, setEditName] = useState("");
  const [editProfession, setEditProfession] = useState("");
  const [editAge, setEditAge] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editUniversity, setEditUniversity] = useState("");
  const [editGender, setEditGender] = useState("");

  const handleEdit = (user) => {
    setEditingUser(user);
    setEditName(user.name);
    setEditProfession(user.profession);
    setEditAge(user.age);
    setEditPhone(user.phone);
    setEditAddress(user.address);
    setEditUniversity(user.university);
    setEditGender(user.gender);
  };

  const handleEditSubmit = () => {
    dispatch(
      editUser({
        id: editingUser.id,
        updatedUser: {
          name: editName,
          profession: editProfession,
          age: editAge,
          phone: editPhone,
          address: editAddress,
          university: editUniversity,
          gender: editGender,
        },
      }),
    );
    toast.success("User updated successfully");
    setEditingUser(null);
  };

  const users = data?.map((el,index) => (
    <div className="users__card" key={el.id ? el.id : index}>
      <img src={el.gender === "male" ? male : female} alt="" />
      <h2>{el.name}</h2>
      <p>{el.profession}</p>
      <p>{el.age}</p>
      <p>{el.phone}</p>
      <p>{el.address}</p>
      <p>{el.university}</p>
      <div className="users__buttons">
      <button className="remove" onClick={() => dispatch(removeuser(el)   )}><RiDeleteBin6Line /> Remove</button>
      <button className="edit" onClick={() => handleEdit(el)}><MdEdit /> Edit</button>
      </div>
    </div>
  ));

  return (
    <div className="users__wrapper">
      {users}
      {editingUser && (
        <div className="modal">
          <div className="modal__content">
            <h2>Edit User</h2>
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
            <input
              type="text"
              value={editProfession}
              onChange={(e) => setEditProfession(e.target.value)}
            />
            <input
              type="number"
              value={editAge}
              onChange={(e) => setEditAge(e.target.value)}
            />
            <input
              type="number"
              value={editPhone}
              onChange={(e) => setEditPhone(e.target.value)}
            />
            <input
              type="text"
              value={editAddress}
              onChange={(e) => setEditAddress(e.target.value)}
            />
            <input
              type="text"
              value={editUniversity}
              onChange={(e) => setEditUniversity(e.target.value)}
            />

            <select
              value={editGender}
              onChange={(e) => setEditGender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <button onClick={handleEditSubmit}>Save</button>
            <button onClick={() => setEditingUser(null)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
