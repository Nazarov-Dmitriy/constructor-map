
export default class ErrorRepository {
  constructor(error) {
    this.error = error;
    this.errorMap = new Map();
  }

  errorSet(error, errorText) {
    this.errorMap.set(error, errorText);
  }

  translate(code) {
    if (this.errorMap.has(code)) {
      return this.errorMap.get(code)
    } else {
      return 'Unknown error';
    }
  }
}

const errord = new ErrorRepository();
errord.errorSet('EvalError', 'представляет ошибку, которая генерируется при выполнении глобальной функции eval()');
errord.errorSet('RangeError', 'ошибка генерируется, если параметр или переменная, представляют число, которое находится вне некотоого допустимого диапазона');
errord.errorSet('ReferenceError', 'ошибка генерируется при обращении к несуществующей ссылке');
console.log(errord.translate('EvalError'));

