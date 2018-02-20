import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import registerComponent from './register.component';

const registerModule = angular.module('register', [
  uiRouter,
])

  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('register', {
        url: '/register',
        component: 'register',
      });
  })

  .component('register', registerComponent)

  .name;

export default registerModule;
