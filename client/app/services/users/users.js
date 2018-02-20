import angular from 'angular';
import UsersFactory from './users.factory';

const userModule = angular.module('users', [])

  .factory('Users', UsersFactory)

  .name;

export default userModule;
