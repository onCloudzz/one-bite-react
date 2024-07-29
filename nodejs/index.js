import Circle from './circle.js';
import lodash from 'lodash';

console.log(Circle.PI, Circle.getArea(1), Circle.getCircumference(1)); // 3.141592 3.141592 6.283184
const arr = [1, 1, 1, 2, 2, 1, 1, 4, 4, 3, 2];
const uniqueArr = lodash.uniq(arr);

console.log(uniqueArr);