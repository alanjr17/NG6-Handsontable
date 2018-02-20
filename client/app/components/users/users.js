import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import usersComponent from './users.component';

const usersModule = angular.module('users', [
  uiRouter,
])

  .component('users', usersComponent)

  .name;

export default usersModule;
