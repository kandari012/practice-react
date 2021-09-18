import React, { useState } from "react";
import { useAuth } from "./../hooks/index";
import { useToasts } from "react-toast-notifications";
import { Redirect } from "react-router-dom";
import "./../styles/settings.css";

function Settings() {
  const auth = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(auth.user ? auth.user.name : "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [savingForm, setSavingForm] = useState(false);
  const { addToast } = useToasts();

  // once user updated will remove password values to empty string
  const clearForm = () => {
    setPassword("");
    setconfirmPassword("");
  };

  const updateProfile = async () => {
    setSavingForm(true);
    if (!confirmPassword || !name || !password) {
      setSavingForm(false);
      return addToast("please fill all fields ", {
        appearance: "error",
      });
    }

    if (confirmPassword !== password) {
      setSavingForm(false);
      return addToast("password and confirm password not matching ", {
        appearance: "error",
      });
    }
    const response = await auth.updateUser(auth.user._id, password, name);

    if (response.success) {
      setEditMode(false);
      clearForm();

      addToast("user updated  successfully", {
        appearance: "success",
      });
    } else {
      addToast(response.message, {
        appearance: "error",
      });
    }

    setSavingForm(false);
  };

  if (!auth.user) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="setting">
      <h2>Profile</h2>
      <div className="div1">
        <div>Email</div>
        <br />
        <div>{auth.user ? auth.user.email : ""}</div>
      </div>
      <br />
      <div className="div1">
        <div>Name</div>
        <br />
        {editMode ? (
          <div>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
          </div>
        ) : (
          <div>{auth.user ? auth.user.name : ""}</div>
        )}
      </div>
      <br />
      {editMode && (
        <>
          <div className="div1">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            ></input>
          </div>

          <br />

          <div className="div1">
            <input
              type="password"
              onChange={(e) => setconfirmPassword(e.target.value)}
              value={confirmPassword}
              placeholder="Confirm Password"
            ></input>
          </div>
        </>
      )}

      <br />
      {editMode ? (
        <>
          <div>
            <button onClick={updateProfile} disabled={savingForm}>
              {savingForm ? "Saving profile ...." : "Save Profile"}
            </button>
          </div>
          <br />
          <div>
            <button
              onClick={() => {
                setEditMode(false);
              }}
            >
              Go back
            </button>
          </div>
        </>
      ) : (
        <div>
          <button
            onClick={() => {
              setEditMode(true);
            }}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default Settings;
