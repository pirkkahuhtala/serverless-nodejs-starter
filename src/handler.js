export const hello = () =>
  Promise.resolve({
    statusCode: 200,
    body: 'Hello world!'
  });
