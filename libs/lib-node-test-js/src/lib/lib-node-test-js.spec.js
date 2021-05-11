import { libNodeTestJs } from './lib-node-test-js';
describe('libNodeTestJs', () => {
  it('should work', () => {
    expect(libNodeTestJs()).toEqual('lib-node-test-js');
  });
});
