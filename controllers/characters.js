import characters from '@common/characters.json';

const getCharacters = characters.results;

const getOneCharacter = (req) => {
  const { results } = characters;
  const { id } = req.params;
  return results.filter((result) => result.id === parseInt(id, 10))[0];
};

module.exports = { getCharacters, getOneCharacter };
