/* 1. Функция принимает массив пользователей. Исходные данные см. ниже. Возвращает объект, состоящий из двух полей: female и male. Данные
  поля являются массивами, в которых содержаться пользователи, подходящие по категории gender соответственно.
  Также, вместо двух полей first_name и last_name у каждого из объектов должно быть поле fullName в котором будут объеденины убранные поля 
(first_name и last_name). Количество пользователей может быть не ограничено.*/

const modifyUsers = (users) => {
  return users.reduce((obj, user) => {
    if (!obj[user.gender]) {
      obj[user.gender] = [];
    }
    const newUser = {};
    Object.assign(newUser, user);
    newUser.fullName = `${user.first_name} ${user.last_name}`;
    delete newUser.first_name;
    delete newUser.last_name;
    obj[user.gender].push(newUser);
    return obj;
  }, {});
};

/* 2. Преобразуйте массив в объект используя функцию reduce.*/

const arrayToObject = (array) => {
  return array.reduce((obj, item) => {
    obj[item.id] = item.title;
    return obj;
  }, {});
};

/* 3. Выведите массив ids для релизов у которых рейтинг 5.0. */

const getHighId = (releases) => {
  return releases.reduce((highReleases, release) => {
    if (release.rating[0] === 5.0) {
      highReleases.push(release.id);
    }
    return highReleases;
  }, []);
};

/*4. С помощью функций map, reduce, вывести url у которого самая большая площадь*/

const getBiggestSquare = (boxarts) => {
  const maxSquare = boxarts.reduce(
    (max, boxart) =>
      boxart.width * boxart.height > max ? boxart.width * boxart.height : max,
    0
  );
  let url;
  boxarts.map((boxart) => {
    if (boxart.height * boxart.width === maxSquare) {
      url = boxart.url;
    }
  });
  return url;
};

/*7 написать функцию которая принимает в себя массив из числовых и строчных-числовых значений.
Данная функция должна вернуть массив в котором числовые значения исходного массива стали строчными
а строчные числовыми*/

const numbersAndStrings = (elements) => {
  return elements.reduce((modifyElements, element) => {
    if (Number.isInteger(element)) {
      modifyElements.push(element + "");
    } else {
      modifyElements.push(+element);
    }
    return modifyElements;
  }, []);
};

/*8 написать функцию которая принимает в себя 2 массива, а возвращает один, состоящий из 2
которые пришли в нее*/
const joinArrays = (firstArray, secondArray) => {
  return secondArray.reduce((currentArray, item) => {
    currentArray.push(item);
    return currentArray;
  }, firstArray);
};

/* 9. написать функцию которая принимает слудующие значения: первым аргументом - строковое значение,
вторым - допустимое количество символов.
если длинна строки больше чем допустимое количество символов, строка должна обрезаться, а в конце
добавляется многоточие*/

const cutString = (string, amount) => {
  return string.length <= amount ? string : string.substr(0, amount) + "...";
};
