export function loginApi(username: string, password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        resolve('123'); 
      } else {
        reject(new Error('Неверный логин или пароль'));
      }
    }, 2000); 
  });
}
