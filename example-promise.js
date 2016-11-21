function getTempCallback (location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Monrovia', function (err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});


function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(79);
      reject('City not found');
    }, 1000);
  });
}

getTempPromise('Monrovia').then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err);
});

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('You must provide number for both argument');
    }
  });
}


addPromise(20, 4).then(function (answer) {
  console.log('You answer: ', answer);
}, function (err) {
  console.log('error', err);
});
