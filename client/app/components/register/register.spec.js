import RegisterModule from './register';
import RegisterController from './register.controller';
import RegisterComponent from './register.component';
import RegisterTemplate from './register.html';

describe('Register', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(RegisterModule));

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new RegisterController();
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
      expect(RegisterTemplate).toMatch(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = RegisterComponent;

    it('includes the intended template', () => {
      expect(component.template).toEqual(RegisterTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(RegisterController);
    });
  });
});
