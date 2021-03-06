import template from './<%= name %>.html';
import controller from './<%= name %>.controller';
import './<%= name %>.scss';

const <%= name %>Component = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
};

export default <%= name %>Component;
