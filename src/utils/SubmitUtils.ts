export const onSubmit = async (
  refetch: (val: any) => void,
  username: string,
  password: string
) => {
  console.log("challll jaaaaaa");
  refetch({ username, password });
};
