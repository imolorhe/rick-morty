import Pagination from './Pagination.vue';
import { shallowMount } from '@vue/test-utils';

describe('Pagination', () => {
  it('should render defaults', () => {
    const comp = shallowMount(Pagination);

    expect(comp.isVueInstance()).toBe(true);
    expect(comp.find('[data-tid="showing_from"]').text()).toBe('1');
    expect(comp.find('[data-tid="showing_to"]').text()).toBe('1');
    expect(comp.find('[data-tid="total_count"]').text()).toBe('1');
    expect(comp.find('[data-tid="previous"]').attributes('disabled')).toBe('disabled');
    expect(comp.find('[data-tid="next"]').attributes('disabled')).toBe('disabled');
  });

  it('should render correct counts based on props', () => {
    const comp = shallowMount(Pagination, {
      propsData: {
        itemsPerPage: 5,
        page: 2,
        itemCount: 12,
      },
    });

    expect(comp.find('[data-tid="showing_from"]').text()).toBe('6');
    expect(comp.find('[data-tid="showing_to"]').text()).toBe('10');
    expect(comp.find('[data-tid="total_count"]').text()).toBe('12');
  });

  it('should enable previous button if previous page exists', () => {
    const comp = shallowMount(Pagination, {
      propsData: {
        itemsPerPage: 5,
        page: 2,
        itemCount: 12,
      },
    });
    expect(comp.find('[data-tid="previous"]').attributes('disabled')).toBeFalsy();
  });

  it('should enable next button if next page exists', () => {
    const comp = shallowMount(Pagination, {
      propsData: {
        itemsPerPage: 5,
        page: 2,
        itemCount: 12,
      },
    });
    expect(comp.find('[data-tid="next"]').attributes('disabled')).toBeFalsy();
  });

  it('should emit go-to event with previous page if previous button is clicked', () => {
    const comp = shallowMount(Pagination, {
      propsData: {
        itemsPerPage: 5,
        page: 2,
        itemCount: 12,
      },
    });
    comp.find('[data-tid="previous"]').trigger('click');
    expect(comp.emitted('go-to').length).toBe(1);
    expect(comp.emitted('go-to')[0]).toEqual([1]);
  });

  it('should emit go-to event with next page if next button is clicked', () => {
    const comp = shallowMount(Pagination, {
      propsData: {
        itemsPerPage: 5,
        page: 2,
        itemCount: 12,
      },
    });
    comp.find('[data-tid="next"]').trigger('click');
    expect(comp.emitted('go-to').length).toBe(1);
    expect(comp.emitted('go-to')[0]).toEqual([3]);
  });
});