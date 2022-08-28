const receivesAFunction = (book) => 
{
    book();
};
const returnsANamedFunction = () => {
    return function receivesAFunction(diary) {};
  };

  const returnsAnAnonymousFunction = () => {
      return function () {};

  };