class RegisterController {
  constructor(usersFactory,  $state) {
    "ngInject";
    this.usersFactory = usersFactory;
    this.$state = $state;

    this.user = {};
  }

  addUser() {
    this.user.id = this.generateId();
    this.usersFactory.addUser(this.user);
    this.$state.go('user-list');
  }

  generateId() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  }
}

export default RegisterController;
