import React from 'react';
import { useParams } from 'react-router-dom';
import * as api from './api';
import { Character } from './character.vm';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(null);
  const { id } = useParams<{ id: number }>();
  
  const handleLoadHotel = async () => {
    const apiHotel = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiHotel));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadHotel();
    }
  }, []);

  const handleSave = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
  };

  return <CharacterComponent character={character} />;
};
