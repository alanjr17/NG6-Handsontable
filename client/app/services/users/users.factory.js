const UsersFactory = function ($localStorage, $filter) {
  "ngInject";
  
  this.$filter = $filter;
  this.$localStorage = $localStorage.$default({
    users: []
  });
  this.users = this.$localStorage.users;

  const getUsers = () => angular.copy(this.users);

  const addUser = (newUser) => {
    this.users.push(newUser);
  };

  const getUserById = (id) => {
    return angular.copy(this.$filter('filter')(this.users, {'id': id})[0]);
  };

  const updateUser = (updUser) => {
    angular.forEach(this.users, function(user) {
      if(user.id === updUser.id) {
        angular.extend(user, updUser);
      }
    });
  };

  return { 
    getUsers,
    addUser,
    getUserById,
    updateUser
  };

};

export default UsersFactory;
