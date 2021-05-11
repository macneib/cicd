import { nodeTestLib } from './node-test-lib';

describe('nodeTestLib', () => {
  it('should work', () => {
    expect(nodeTestLib()).toEqual('node-test-lib');
  });
});
