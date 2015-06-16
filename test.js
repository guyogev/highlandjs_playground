var _ = highland;

var fibGenerator = function () {
    var a = 0, b = 1;
    return function(push, next) {
        push(null, b);
        b = b+a; a = b-a;
        next();
    };
} ();

var nGenerator =  function () {
  var i = 0;
  return function (push, next) {
    push(null, i);
    i++;
    next();
  };
} ();

var randGenerator = function () {
    return function (push, next) {
      push(null, Math.floor((Math.random() * 100) + 1));
      next();
    };
  } ();

var sevenBoom = function (n) {
  return (n % 7 === 0 || n.toString().indexOf('7') !== -1) ? 'BOOM!' : n;
}

setInterval( function (){
  _(randGenerator).take(1).map(sevenBoom).each(console.log.bind(console));
}, 500);

