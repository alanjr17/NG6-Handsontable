import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import registerComponent from './register.component';

const registerModule = angular.module('register', [
  uiRouter,
])

  .component('register', registerComponent)

  .name;

export default registerModule;
