'use strict';

import { JSDOM } from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const dom = new JSDOM('<!doctype html><html><body></body></html>');
const win = dom.window;

global.document = dom.window.document;
global.window = win;

Object.keys(window).forEach((key) => {
    if (!(key in global)) {
        global[key] = window[key];
    }
});

chai.use(chaiImmutable);