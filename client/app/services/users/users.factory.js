const UsersFactory = function ($localStorage) {
  "ngInject";
  
  this.$localStorage = $localStorage.$default({
    users: []
  });
  this.users = this.$localStorage.users;

  const getUsers = () => this.users;

  const addUser = (newUser) => {
    this.users.push(newUser);
  }

  return { 
    getUsers,
    addUser 
  };

};

export default UsersFactory;
