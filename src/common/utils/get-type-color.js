const backgrondColor = {
  fire: '#FC5C5C',
  grass: '#5EE2B4',
  water: '#6AB1E5',
  bug: '#6EE25B',
  electric: '#F6D958',
  poison: '#EF78F5',
  ground: '#B7914D',
  fairy: '#BC78FF',
  normal: '#B3D052',
  fighting: '#FC8C4A',
  psychic: '#FF60AC',
  rock: '#FFB254',
  ghost: '#656FFF',
};

export const getColorType = type => {
  return backgrondColor[type];
};
