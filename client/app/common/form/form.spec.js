import FormModule from './form';
import FormController from './form.controller';
import FormComponent from './form.component';
import FormTemplate from './form.html';

describe('Form', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(FormModule));

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new FormController();
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      const controller = makeController();

      expect(controller.name).toBeDefined();
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(FormTemplate).toMatch(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = FormComponent;

    it('includes the intended template', () => {
      expect(component.template).toEqual(FormTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(FormController);
    });
  });
});
