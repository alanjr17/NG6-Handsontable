class UserController {
  constructor($stateParams, $state, usersFactory) {
    "ngInject";
    
    this.$stateParams = $stateParams;
    this.$state = $state;
    this.usersFactory = usersFactory;

    this.user = this.usersFactory.getUserById(this.$stateParams.id);
  }

  updateUser() {
    this.usersFactory.updateUser(this.user);
    this.$state.go('user-list');
  }
}

export default UserController;
