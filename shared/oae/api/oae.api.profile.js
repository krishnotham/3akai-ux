/*!
 * Copyright 2012 Sakai Foundation (SF) Licensed under the
 * Educational Community License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may
 * obtain a copy of the License at
 *
 *     http://www.osedu.org/licenses/ECL-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS IS"
 * BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

define(['exports', 'oae/api/oae.core'], function(exports, oae) {

    /**
     * Request a profile section from a user's profile.
     * 
     * @param  {String}         userId              User id of the user for who we want to retrieve a profile section
     * @param  {String}         sectionId           Id of the profile section we want to retrieve
     * @param  {Function}       callback            Standard callback method takes arguments `err` and `section`
     * @param  {Object}         callback.err        Error object containing error code and error message
     * @param  {Object}         callback.section    JSON object representing the user's profile section. This will be the same as what was saved by the user
     */
    var getSection = exports.getSection = function(userId, sectionId, callback) {
        if (!userId) {
            throw new Error("A userId should be provided.");
        } else if (!sectionId) {
            throw new Error("A sectionId should be provided");
        }
        var url = '/api/user/' + userId + '/profile/' + sectionId;
        $.ajax({
            'url': url,
            'success': function(data) {
                callback(null, data);
            },
            'error': function(jqXHR, textStatus) {
                callback({'code': jqXHR.status, 'msg': jqXHR.statusText});
            }
        });
    };
    
    /**
     * Get an overview of all of the sections for which a user has profile information set and their visibility setting.
     * 
     * @param  {String}         userId              User id of the user for who we want to retrieve the profile section visibility overview
     * @param  {Function}       callback            Standard callback method takes arguments `err` and `vis`
     * @param  {Object}         callback.err        Error object containing error code and error message
     * @param  {Object}         callback.vis        JSON object representing all of the user's profile sections and their visibility. The keys are the profile section ids, and the values are the visibility settings for those sections
     */
    var getSectionOverview = exports.getSectionOverview = function(userId, callback) {
        if (!userId) {
            throw new Error("A userId should be provided.");
        }

        $.ajax({
            'url': '/api/user/' + userId + '/profile/sections',
            'success': function(data) {
                callback(null, data);
            },
            'error': function(jqXHR, textStatus) {
                callback({'code': jqXHR.status, 'msg': jqXHR.statusText});
            }
        });
    };
    
    /**
     * Set a profile section for the currently logged in user.
     * 
     * @param  {String}         sectionId           Id of the profile section we want to set
     * @param  {String}         [visibility]        Visibility of the profile section. This can be public, loggedin or private
     * @param  {Object}         sectionData         JSON object representing the profile section that needs to be stored. The object will be stored (and later on retrieved) as is
     * @param  {Boolean}        [overwrite]         Whether or not values that are already in the profile section but are not in the updated values should be overwritten or not
     * @param  {Function}       [callback]          Standard callback method takes argument `err`
     * @param  {Object}         [callback.err]      Error object containing error code and error message
     */
    var setSection = exports.setSection = function(sectionId, visibility, sectionData, overwrite, callback) {
        if (!sectionId) {
            throw new Error("A sectionId should be provided.");
        }
        // Require oae here to avoid a cyclical dependency.
        var oae = require('oae/api/oae.core');

        // Get the current user and construct the endpoint url.
        var userId = oae.data.me.userId;
        var url = '/api/user/' + userId + '/profile/' + sectionId;

        // Depending on the supplied parameters we send more or less data.
        var data = {
            'data': JSON.stringify(sectionData)
        };
        if (visibility) {
            data.visibility = visibility;
        }
        if (overwrite) {
            data.overwrite = true;
        }

        // Perform the request
        $.ajax({
            'url': url,
            'type': 'POST',
            'data': data,
            'success': function() {
                callback(null);
            },
            'error': function(jqXHR, textStatus) {
                callback({'code': jqXHR.status, 'msg': jqXHR.statusText});
            }
        });
    };
    
    /**
     * Delete a profile section for the currently logged in user.
     * 
     * @param  {String}         sectionId           Id of the profile section we want to delete
     * @param  {Function}       [callback]          Standard callback method takes argument `err`
     * @param  {Object}         [callback.err]      Error object containing error code and error message
     */
    var deleteSection = exports.deleteSection = function(sectionId, callback) {
        if (!sectionId) {
            throw new Error("A sectionId should be provided.");
        }
        // Require oae here to avoid a cyclical dependency.
        var oae = require('oae/api/oae.core');

        // Get the current user and construct the endpoint url.
        var userId = oae.data.me.userId;
        var url = '/api/user/' + userId + '/profile/' + sectionId;

        // Perform the request
        $.ajax({
            'url': url,
            'type': 'DELETE',
            'success': function(data) {
                callback(null, data);
            },
            'error': function(jqXHR, textStatus) {
                callback({'code': jqXHR.status, 'msg': jqXHR.statusText});
            }
        });
    };
    
    /**
     * Update a profile section's visibility for the currently logged in user
     * 
     * @param  {String}         sectionId           Id of the profile section we want to set visibility for
     * @param  {String}         [visibility]        The profile section's new visibility. This can be public, loggedin or private
     * @param  {Function}       [callback]          Standard callback method takes argument `err`
     * @param  {Object}         [callback.err]      Error object containing error code and error message
     */
    var updateVisibility = exports.updateVisibility = function(sectionId, visibility, callback) {};

});