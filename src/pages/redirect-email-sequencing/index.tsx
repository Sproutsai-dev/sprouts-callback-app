import React, { useEffect } from "react";

type Props = {};

const RedirectEmailSequencing = (props: Props) => {
  // get the email from the query
  const email = new URLSearchParams(window.location.search).get("email");

  // get the redirect url from the query
  const redirectUrl = new URLSearchParams(window.location.search).get(
    "redirectUrl"
  );

  useEffect(() => {
    if (email && redirectUrl) {
      //   window.location.href = redirectUrl;
      console.log(window.location.href?.split("?")[1]);
    }
  }, [email, redirectUrl]);

  console.log(email, redirectUrl);
  return <div>Redirecting to {redirectUrl}</div>;
};

export default RedirectEmailSequencing;
