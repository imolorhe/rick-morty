import Header from './Header.vue';
import { shallowMount } from '@vue/test-utils';

describe('Header', () => {
  it('should render', () => {
    const comp = shallowMount(Header, {
      stubs: {
        RouterLink: true,
      }
    });
    expect(comp.find('.logo').exists()).toBe(true);
    expect(comp.text()).toContain('Rick\'s Place');
  });
});
