'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CaseSchema = new Schema({
  name: String,
  info: String,
  description: String,
  caseOwner: String,
  caseNumber: String,
  clientName: String,
  active: Boolean
});

module.exports = mongoose.model('Case', CaseSchema);
