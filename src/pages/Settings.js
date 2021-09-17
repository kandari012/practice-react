import React, { useState } from "react";
import { useAuth } from "./../hooks/index";

function Settings() {
  const auth = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(auth.user ? auth.user.name : "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [savingForm, setSavingForm] = useState(false);

  const updateProfile = () => {
    console.log("hello");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h4>Profile</h4>
      <div>
        <div>Email</div>
        <br />
        <div>{auth.user ? auth.user.email : ""}</div>
      </div>
      <br />
      <div>
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
          <div>
            <div>Password</div>
            <br />
            <div>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              ></input>
            </div>
          </div>
          <br />
          <div>
            <div>Confirm password</div>
            <br />
            <div>
              <input
                type="password"
                onChange={(e) => setconfirmPassword(e.target.value)}
                value={confirmPassword}
              ></input>
            </div>
          </div>
        </>
      )}

      <br />
      {editMode ? (
        <>
          <div>
            <button onClick={updateProfile}>Save Profile</button>
          </div>
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
