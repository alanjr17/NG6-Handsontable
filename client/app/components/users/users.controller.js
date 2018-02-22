import Handsontable from 'handsontable-pro';

class UsersController {
  constructor(usersFactory, $state, $scope) {
    "ngInject";
    this.$state = $state;
    this.$scope = $scope;
    this.usersFactory = usersFactory;
    this.users = this.usersFactory.getUsers();

    this.selectedUser = {};
  }

  $onInit() {
    this.hot = this.initTable();
  }

  initTable() {
    const hotElement = document.getElementById('hot-table');
    const hotSettings = {
      data: this.users,
      rowHeaders: true,
      colHeaders: this.generateHeaders(),
      readOnly: true,
      afterSelection: (userIndex) => {
        this.selectUser(userIndex);
      }
    };

    return new Handsontable(hotElement, hotSettings);
  }

  selectUser(userIndex) {
    this.$scope.$apply(() => {
      this.selectedUser = this.users[userIndex];
    });
  }

  editUser() {
    this.$state.go('user', {id: this.selectedUser.id});
  }

  generateHeaders() {
    let headers = [];
    if (this.users && this.users.length) {
      headers = Object.keys(this.users[0]);
    }
    return headers;
  }
}

export default UsersController;
