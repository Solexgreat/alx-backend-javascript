const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('Hooks', function () {
  let spyConsole;
  beforeEach(function () {
    spyConsole = sinon.spy(console, 'log');
  });

