// TODO: write your code here
import sortObjectProperties from './sortObject';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

const arr = ['name', 'level'];

console.log(sortObjectProperties(obj, arr));
