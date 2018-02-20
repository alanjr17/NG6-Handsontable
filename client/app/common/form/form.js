import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import formComponent from './form.component';

const formModule = angular.module('form', [
  uiRouter,
])

  .component('userForm', formComponent)

  .name;

export default formModule;
