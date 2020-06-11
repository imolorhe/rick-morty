import CharacterCard from './CharacterCard.vue';
import { shallowMount } from '@vue/test-utils';

describe('CharacterCard', () => {
  it('should render the character basic details', () => {
    const character = {
      name: 'Character',
      image: 'character.jpg',
      gender: 'Gender',
      status: 'Alive',
      species: 'Human',
      origin: {
        name: 'Origin',
      },
      location: {
        name: 'Location',
      },
    };
    const comp = shallowMount(CharacterCard, {
      propsData: {
        character,
      },
    });

    expect(comp.html()).toMatchSnapshot();
  });
  it('should render status as green if alive', () => {
    const character = {
      name: 'Character',
      image: 'character.jpg',
      gender: 'Gender',
      status: 'Alive',
      species: 'Human',
      origin: {
        name: 'Origin',
      },
      location: {
        name: 'Location',
      },
    };
    const comp = shallowMount(CharacterCard, {
      propsData: {
        character,
      },
    });
    expect(
      comp
        .find('[tid="character-card-status"]')
        .classes('text-green-600')
    ).toBe(true);
  });
  it('should render status as red if dead', () => {
    const character = {
      name: 'Character',
      image: 'character.jpg',
      gender: 'Gender',
      status: 'Dead',
      species: 'Human',
      origin: {
        name: 'Origin',
      },
      location: {
        name: 'Location',
      },
    };
    const comp = shallowMount(CharacterCard, {
      propsData: {
        character,
      },
    });
    expect(
      comp
        .find('[tid="character-card-status"]')
        .classes('text-red-600')
    ).toBe(true);
  });
  it('should emit click with the character when clicked', () => {
    const character = {
      name: 'Character',
      image: 'character.jpg',
      gender: 'Gender',
      status: 'Dead',
      species: 'Human',
      origin: {
        name: 'Origin',
      },
      location: {
        name: 'Location',
      },
    };
    const comp = shallowMount(CharacterCard, {
      propsData: {
        character,
      },
    });
    comp.trigger('click');
    expect(comp.emitted('click').length).toBe(1);
    expect(comp.emitted('click')[0]).toEqual([character]);
  });
});
