import ErrorRepository from '../ErrorRepository';

test('Проверка получение текста ошибки', () => {
  const error = new ErrorRepository();
  error.errorSet('EvalError', 'представляет ошибку, которая генерируется при выполнении глобальной функции eval()');
  expect(error.translate('EvalError')).toBe('представляет ошибку, которая генерируется при выполнении глобальной функции eval()');
});

test('Проверка отуствие кода ошибки', () => {
  const error = new ErrorRepository();
  expect(error.translate('EvвalError')).toBe('Unknown error');
});
