import angular from 'angular';
import usersFactory from './users.factory';

const userModule = angular.module('usersFactory', [])

  .factory('usersFactory', usersFactory)

  .name;

export default userModule;
