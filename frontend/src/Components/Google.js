import React, { useState } from "react";
import GoogleLogin from "react-google-login";

export default function Google() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  const responseGoogle = (response) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  };

  return (
    <div>
      <h1>login with google </h1>
      <h2>{name}</h2>
      <h2>{email}</h2>
      <img src={url} alt={name} />
      <GoogleLogin
        clientId='341044279952-5mceqhdqjnt46ke8kdkua74odui8fc2o.apps.googleusercontent.com'
        buttonText='Login'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
