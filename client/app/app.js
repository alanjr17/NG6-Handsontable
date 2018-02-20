import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import Common from './common/common';
import Components from './components/components';
import Services from './services/services';
import AppComponent from './app.component';

angular.module('app', [
  uiRouter,
  Common,
  Components,
  Services
])
  .config(($locationProvider) => {
    'ngInject';

    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
