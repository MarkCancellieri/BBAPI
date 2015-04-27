'use strict';

// Module dependencies
var mongoose          = require('mongoose');
var Board             = mongoose.model('Board');

// Create a new board.
var createBoard = function (req, res) {
  var newBoard = new Board({
    name: req.body.name
  });
  newBoard.save(function(err, board) {
    if (!err) {
      console.log('Saved board: ' + board._id);
      res.status(201).json(board);
    } else {
      console.dir(err);
      res.status(500).json(err);
    }
  });
};

module.exports = createBoard;
