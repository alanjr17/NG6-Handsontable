import template from './form.html';
import controller from './form.controller';
import './form.scss';

const formComponent = {
  restrict: 'E',
  bindings: {
    user: '<',
    onSubmit: '&'
  },
  template,
  controller,
};

export default formComponent;
