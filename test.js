/* 1. Функция принимает массив пользователей. Исходные данные см. ниже. Возвращает объект, состоящий из двух полей: female и male. Данные
  поля являются массивами, в которых содержаться пользователи, подходящие по категории gender соответственно.
  Также, вместо двух полей first_name и last_name у каждого из объектов должно быть поле fullName в котором будут объеденины убранные поля 
(first_name и last_name). Количество пользователей может быть не ограничено.*/

const modifyUsers = (users) => {
  return users.reduce((obj, user) => {
    if (!obj[user.gender]) {
      obj[user.gender] = [];
    }
    let { first_name, last_name, ...newUser } = user;
    newUser.fullName = `${first_name} ${last_name}`;
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
  let url;
  const maxSquare = boxarts.reduce((max, boxart) => {
    if (boxart.width * boxart.height > max) {
      url = boxart.url;
      return boxart.width * boxart.height;
    }
    return max;
  }, 0);
  return url;
};

/*7 написать функцию которая принимает в себя массив из числовых и строчных-числовых значений.
Данная функция должна вернуть массив в котором числовые значения исходного массива стали строчными
а строчные числовыми*/

const numbersAndStrings = (elements) => {
  return elements.map((element) =>
    Number.isInteger(element) ? element + "" : +element
  );
};

/*8 написать функцию которая принимает в себя 2 массива, а возвращает один, состоящий из 2
которые пришли в нее*/
const joinArrays = (firstArray, secondArray) => {
  return [...firstArray, ...secondArray];
};

/* 9. написать функцию которая принимает слудующие значения: первым аргументом - строковое значение,
вторым - допустимое количество символов.
если длинна строки больше чем допустимое количество символов, строка должна обрезаться, а в конце
добавляется многоточие*/

const cutString = (string, amount) => {
  return string.length <= amount ? string : string.substr(0, amount) + "...";
};
