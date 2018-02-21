import angular from 'angular';
import Users from './users/users';

const serviceModule = angular.module('app.service', [
  Users
])

  .name;

export default serviceModule;
