import HousesParser from './houses';

const var1 = 'четные 2-28, нечетные 1-21'
const var2 = 'нечетные 11+, четные 42+';
const var3 = 'четные с 20 и вся улица до конца';
const var4 = '7/1, 11, 17, 17/1, 17/2, 8/2, 15, 15/1, 15а';
const var5 = '12, 22, 36, 42, 45, 100-106';
const var6 = 'четные 2-28; нечетные 1-21';
const var7 = 'четные 2-28 нечетные 1-21';
const var8 = 'четные2-28нечетные1-21';


test(var1, () => {
  const obj = new HousesParser(var1);
  expect(obj.isHouseIncluded('2')).toBe(true);
  expect(obj.isHouseIncluded('22')).toBe(true);
  expect(obj.isHouseIncluded('28')).toBe(true);
  expect(obj.isHouseIncluded('1')).toBe(true);
  expect(obj.isHouseIncluded('7')).toBe(true);
  expect(obj.isHouseIncluded('21')).toBe(true);

  expect(obj.isHouseIncluded('27')).toBe(false);
  expect(obj.isHouseIncluded('23')).toBe(false);
});


test(var2, () => {
  const obj = new HousesParser(var2);
  expect(obj.isHouseIncluded('13')).toBe(true);
  expect(obj.isHouseIncluded('42')).toBe(true);
  expect(obj.isHouseIncluded('1666')).toBe(true);
  expect(obj.isHouseIncluded('1667')).toBe(true);  

  expect(obj.isHouseIncluded('9')).toBe(false);
  expect(obj.isHouseIncluded('10')).toBe(false);
  expect(obj.isHouseIncluded('40')).toBe(false);
});


test(var3, () => {
  const obj = new HousesParser(var3);
  expect(obj.isHouseIncluded('20')).toBe(true);
  expect(obj.isHouseIncluded('44')).toBe(true);
  expect(obj.isHouseIncluded('1666')).toBe(true);

  expect(obj.isHouseIncluded('19')).toBe(false);
  expect(obj.isHouseIncluded('141')).toBe(false);
});

test(var4, () => {
  const obj = new HousesParser(var4);
  expect(obj.isHouseIncluded('17/2')).toBe(true);
  expect(obj.isHouseIncluded('8/2')).toBe(true);
  expect(obj.isHouseIncluded('15а')).toBe(true);

  expect(obj.isHouseIncluded('7')).toBe(false); 
});


test(var5, () => {
  const obj = new HousesParser(var5);
  expect(obj.isHouseIncluded('12')).toBe(true);
  expect(obj.isHouseIncluded('100')).toBe(true);
  expect(obj.isHouseIncluded('102')).toBe(true);
  expect(obj.isHouseIncluded('106')).toBe(true);

  expect(obj.isHouseIncluded('13')).toBe(false);
  expect(obj.isHouseIncluded('108')).toBe(false); 
});


test(var6, () => {
  const obj = new HousesParser(var6);
  expect(obj.isHouseIncluded('2')).toBe(true);
  expect(obj.isHouseIncluded('22')).toBe(true);
  expect(obj.isHouseIncluded('28')).toBe(true);
  expect(obj.isHouseIncluded('1')).toBe(true);
  expect(obj.isHouseIncluded('7')).toBe(true);
  expect(obj.isHouseIncluded('21')).toBe(true);

  expect(obj.isHouseIncluded('27')).toBe(false);
  expect(obj.isHouseIncluded('23')).toBe(false);
});


test(var7, () => {
  const obj = new HousesParser(var7);
  expect(obj.isHouseIncluded('2')).toBe(true);
  expect(obj.isHouseIncluded('22')).toBe(true);
  expect(obj.isHouseIncluded('28')).toBe(true);
  expect(obj.isHouseIncluded('1')).toBe(true);
  expect(obj.isHouseIncluded('7')).toBe(true);
  expect(obj.isHouseIncluded('21')).toBe(true);

  expect(obj.isHouseIncluded('27')).toBe(false);
  expect(obj.isHouseIncluded('23')).toBe(false);
});


test(var8, () => {
  const obj = new HousesParser(var8);
  expect(obj.isHouseIncluded('2')).toBe(true);
  expect(obj.isHouseIncluded('22')).toBe(true);
  expect(obj.isHouseIncluded('28')).toBe(true);
  expect(obj.isHouseIncluded('1')).toBe(true);
  expect(obj.isHouseIncluded('7')).toBe(true);
  expect(obj.isHouseIncluded('21')).toBe(true);

  expect(obj.isHouseIncluded('27')).toBe(false);
  expect(obj.isHouseIncluded('23')).toBe(false);
});
