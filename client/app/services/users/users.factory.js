const UsersFactory = function () {
  const user = {};

  const getUser = () => user;

  return { getUser };
};

export default UsersFactory;
