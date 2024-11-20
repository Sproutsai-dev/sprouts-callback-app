import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RedirectEmailSequencing = () => {
  const location = useLocation();

  // get the redirect url from the query
  const redirectUrl = new URLSearchParams(location.search).get("state");

  useEffect(() => {
    if (redirectUrl) {
      // Construct the full URL with original query parameters
      const fullRedirectUrl = new URL(redirectUrl, window.location.origin);

      // Copy all original query parameters to the new URL
      const searchParams = new URLSearchParams(location.search);
      searchParams.delete("state"); // Remove the redirectUrl param itself

      // Append remaining query params to the redirect URL
      searchParams.forEach((value, key) => {
        fullRedirectUrl.searchParams.append(key, value);
      });

      // Navigate to the constructed URL
      window.location.href = fullRedirectUrl.toString();
    }
  }, [redirectUrl, location.search]);

  return <div>Redirecting to {redirectUrl}...</div>;
};

export default RedirectEmailSequencing;
