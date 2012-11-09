/*
 * Licensed to the Sakai Foundation (SF) under one
 * or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership. The SF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

/* Define globals */
sakai_global = {};
/**
 * window.debug, a console dot log wrapper
 * adapted from html5boilerplate.com's window.log and Ben Alman's window.debug
 *
 * Only logs information when sakai.config.displayDebugInfo is switched on
 *
 * debug.log, debug.error, debug.warn, debug.debug, debug.info
 * usage: debug.log('argument', {more:'arguments'})
 *
 * paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
 * benalman.com/projects/javascript-debug-console-log/
 * https://gist.github.com/466188
 */
window.debug = (function() {
    var that = {},
        methods = [ 'error', 'warn', 'info', 'debug', 'log', 'trace'],
        idx = methods.length;

    var createLogMethod = function(method) {
        that[method] = function() {
            if (!window.console) {
                return;
            }
            if (console.firebug) {
                console[method].apply(console, arguments);
            } else if (console[method]) {
                console[method](Array.prototype.slice.call(arguments));
            } else {
                console.log(Array.prototype.slice.call(arguments));
            }
        };
    };

    while (--idx>=0) {
        createLogMethod(methods[idx]);
    }

    return that;
})();


/**
 * @name Array
 * @namespace
 * Array extensions for Sakai
 */
if (!(Array.indexOf || [].indexOf)) {

    /**
    * Finds the first occurrence of an element in an array and returns its
    * position. This only kicks in when the native .indexOf method is not
    * available in the browser.
    *
    * @param {Object/String/Integer} obj The element we are looking for
    * @param {Integer} start Where the search starts within the array
    *
    * @returns Returns the position of the first matched element
    * @type Integer
    */
    Array.prototype.indexOf = function(obj,start) {

        for(var i=(start||0),j=this.length; i<j; i++) {
            if (this[i]===obj) {
                return i;
            }
        }
        return -1;

    };
}

// If you change the RequireJS paths, please check out
// https://confluence.sakaiproject.org/x/sq_CB
require(
    {
        baseUrl:'/shared/',
        paths: {
            'jquery-plugins': 'js/jquery-plugins',
            'jquery': 'js/jquery',
            'jquery-ui': 'js/jquery-ui.custom',
            'jquery-cookie': 'js/jquery-plugins/jquery.cookie',
            'jquery-jstree': 'js/jquery-plugins/jsTree/jquery.jstree.sakai-edit',
            'jquery-fileupload': 'js/jquery-plugins/jquery.fileupload',
            'jquery-iframe-transport': 'js/jquery-plugins/jquery.iframe-transport',
            'jquery-pager': 'js/jquery-plugins/jquery.pager.sakai-edited',
            'jquery-tagcloud': 'js/jquery-plugins/jquery.tagcloud',
            'underscore': 'js/underscore'
        },
        priority: ['jquery', 'underscore']
    }
);

require(
    [
        'jquery',
        'sakai/sakai.api.core',
        'sakai/sakai.jquery-extensions',
        'underscore',
        'jquery-ui',
        'js/l10n/globalize',
        'js/html-sanitizer',
        'jquery-plugins/jquery.equal-height-columns',
        'jquery-plugins/jquery.contentchange.sakai-edited',
        'jquery-plugins/jquery.timeago',
        'jquery-plugins/jqmodal.sakai-edited',
        'jquery-plugins/jquery.ba-bbq',
        'jquery-plugins/jquery.ba-hashchange',
        'jquery-plugins/jquery.threedots',
        'jquery-plugins/jquery.form',
        'jquery-plugins/gritter/jquery.gritter.sakai-edit',
        'jquery-plugins/jquery.jcarousel.sakai-edit',
        'jquery-plugins/jquery.jeditable.sakai-edited',
        'jquery-plugins/jquery.infinitescroll-sakai'
    ],
    function($, sakai) {
        sakai.api.User.loadMeData(function(success, data) {
            // Start i18n
            sakai.api.i18n.init(data);
        });
        return sakai;
    }
);