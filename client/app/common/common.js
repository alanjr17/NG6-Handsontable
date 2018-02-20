import angular from 'angular';
import Navbar from './navbar/navbar';
import Form from './form/form';

const commonModule = angular.module('app.common', [
  Navbar,
  Form
])

  .name;

export default commonModule;
