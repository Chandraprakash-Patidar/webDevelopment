function bookAtexi() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Go to market');
      }, 2000);
    });
  }
  
  function watchAmovie() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Movie is not bad');
      }, 1000);
    });
  }
  
  function takeSomeBreakfast() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Breakfast is yummy!');
      }, 500);
    });
  }
  
  async function abc() {
    try {
      const msg = await bookAtexi();
      console.log(msg);
      const msg2 = await watchAmovie();
      console.log(msg2);
      const msg3 = await takeSomeBreakfast();
      console.log(msg3);
    } catch (error) {
      console.error('Error:', error);
    
    }
  }
  
  abc();
  