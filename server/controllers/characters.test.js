import charactersMock from '@common/characters.json';
import characters from './characters';

describe('/characters:', () => {
  it('/getCharacters:', () => {
    const method = characters.getCharacters;
    expect(method).toStrictEqual(charactersMock.results);
  });

  it('/getOneCharacter:', () => {
    const req = { params: { id: 3 } };
    const method = characters.getOneCharacter(req);
    expect(method).toEqual(charactersMock.results[2]);
  });
});
