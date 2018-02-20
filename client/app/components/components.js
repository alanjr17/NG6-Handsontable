import angular from 'angular';
import Home from './home/home';
import Register from './register/register';
import User from './user/user';
import Users from './users/users';
import About from './about/about';

const componentModule = angular.module('app.components', [
  Home,
  Register,
  User,
  Users,
  About
])

  .name;

export default componentModule;
