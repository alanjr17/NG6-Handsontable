import angular from 'angular';
import UsersFactory from './users.factory';

const userModule = angular.module('usersFactory', [])

  .factory('Users', UsersFactory)

  .name;

export default userModule;
