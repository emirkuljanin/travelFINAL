'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TravelSchema = new Schema({
  name: String,
  info: String,
  description: String,
  travelOwner: String,
  travelNumber: String,
  clientName: String,
  active: Boolean,
  documents: [ {type: mongoose.Schema.Types.ObjectId , ref: 'Document'} ]
}, {autoIndex:true});

module.exports = mongoose.model('Travel', TravelSchema);
