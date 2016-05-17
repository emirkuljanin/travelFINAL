'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DocumentSchema = new Schema({
  travel: {type: mongoose.Schema.Types.ObjectId , ref: 'Travel'},
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Document', DocumentSchema);
