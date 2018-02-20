import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import userComponent from './user.component';

const userModule = angular.module('user', [
  uiRouter,
])

  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('user', {
        url: '/user',
        component: 'user',
      });
  })

  .component('user', userComponent)

  .name;

export default userModule;
