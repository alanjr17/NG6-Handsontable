class UsersController {
  constructor(usersFactory, $state) {
    "ngInject";
    this.$state = $state;
    this.usersFactory = usersFactory;
    this.users = this.usersFactory.getUsers();

    this.selectedUser = {};
  }

  selectUser(user) {
    this.selectedUser = user;
  }

  editUser() {
    this.$state.go('user', {id: this.selectedUser.id});
  }
}

export default UsersController;
