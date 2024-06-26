export const fetchData = async (
  url: string,
  method: string,
  body: object,
  isAuthRequired: Boolean,
  jwtToken: string
) =>
  await fetch(url, {
    method,
    body: method === "GET" ? undefined : JSON.stringify(body),
    headers: isAuthRequired
      ? {
          Authorization: `Bearer ${jwtToken}`,
        }
      : undefined,
  });
