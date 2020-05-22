import CharacterCard from './CharacterCard.vue';
import { shallowMount } from '@vue/test-utils';

describe('CharacterCard', () => {
  it('should render the character', () => {
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
    expect(comp.contains(character.name));
    expect(comp.contains(character.image));
    expect(comp.contains(character.gender));
    expect(comp.contains(character.status));
    expect(comp.contains(character.species));
    expect(comp.contains(character.origin.name));
    expect(comp.contains(character.location.name));
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
