function towerBuilder(nFloors) {
  const arrResult = [];
  let num = 1;
  let star = '*';

  for (let i = 0; i < nFloors; i++) {
    let stars = '';
    for (let j = nFloors - 1; j > i; j--) {
      stars += ' ';
    }

    stars += star.repeat(num);
    num += 2;

    for (let j = nFloors - 1; j > i; j--) {
      stars += ' ';
    }

    console.log(stars);

    arrResult.push(stars);
  }

  return arrResult;
}

towerBuilder(3);
