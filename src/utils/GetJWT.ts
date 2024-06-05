export const GetJWT = () => {
  let token = "";
  document.cookie.split(";").forEach((kvp) => {
    if (kvp.split("=")[0].trim() === "jwtToken") {
      token = kvp.split("=")[1];
      return;
    }
  });
  return token;
};
