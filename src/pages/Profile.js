import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleUser } from "../api";
import "./../styles/profile.css";
import { useToasts } from "react-toast-notifications";
import { useHistory, Redirect } from "react-router-dom";
import { useAuth } from "./../hooks/index";

function Profile() {
  const [user, setUser] = useState({});
  // to get the userid passed in the params of the link
  const { id } = useParams();
  const { addToast } = useToasts();
  const history = useHistory();
  const auth = useAuth();

  useEffect(() => {
    const getUser = async () => {
      const response = await getSingleUser(id);
      if (response.success) {
        setUser(response.data.user);
      } else {
        addToast(response.message, {
          appearance: "error",
        });
        return history.push("/");
      }
    };
    getUser();
  }, [id]);

  if (!auth.user) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="profile">
      <h2>Profile</h2>
      <div>
        <div>Email</div>
        <br />
        <div>{user.email}</div>
      </div>
      <br />
      <div>
        <div>Name</div>
        <br />
        <div>{user.name}</div>
      </div>
    </div>
  );
}

export default Profile;
