var util = require('util');
var EventEmitter = require('events').EventEmitter;
var fs = require('fs');

var NEXT_ID = 0;
var MyEmitter = function() {
  EventEmitter.call(this);
  this.id = NEXT_ID;
  NEXT_ID++;
  console.log('CREATED EMITTER WITH ID:', this.id)
  self = this;
  this.on('finish', function() {
    console.log('FINISH EVENT . CONSTRUCTOR LISTENER .',
                'LISTENER ID:', self.id,
                '. ORIGINATOR ID:', this.id);
  });
};

util.inherits(MyEmitter, EventEmitter);

var setFinishListener = function(emitter) {
  emitter.on('finish', function() {
    console.log('FINISH EVENT . NON-CONSTRUCTOR LISTENER .',
                'LISTENER ID:', emitter.id,
                '. ORIGINATOR ID:', this.id);
  });
}

var emitter0 = new MyEmitter();
var emitter1 = new MyEmitter();

setFinishListener(emitter0);
setFinishListener(emitter1);

emitter0.emit('finish');
emitter1.emit('finish');

// The following is logged to the console:
// FINISH EVENT . CONSTRUCTOR LISTENER . LISTENER ID: 1 . ORIGINATOR ID: 0
// FINISH EVENT . NON-CONSTRUCTOR LISTENER . LISTENER ID: 0 . ORIGINATOR ID: 0
// FINISH EVENT . CONSTRUCTOR LISTENER . LISTENER ID: 1 . ORIGINATOR ID: 1
// FINISH EVENT . NON-CONSTRUCTOR LISTENER . LISTENER ID: 1 . ORIGINATOR ID: 1