import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import userComponent from './user.component';

const userModule = angular.module('user', [
  uiRouter,
])

  .component('user', userComponent)

  .name;

export default userModule;
