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

define(['exports'], function(exports) {

    /**
     * Get a full content profile.
     * 
     * @param  {String}       contentId           Content id of the content item we're trying to retrieve
     * @param  {Function}     callback            Standard callback method
     * @param  {Object}       callback.err        Error object containing error code and error message
     * @param  {Content}      callback.content    Content object representing the retrieved content
     */
    var getContent = exports.getContent = function(contentId, callback) {};
    
    /**
     * Create a new link.
     * 
     * @param  {String}         name                Display title for the created content item
     * @param  {String}         [description]       The content item's description
     * @param  {String}         [visibility]        The content item's visibility. This can be public, loggedin or private
     * @param  {String}         link                The URL that should be stored against this content item
     * @param  {String[]}       [managers]          Array of user/group ids that should be added as managers to the content item
     * @param  {String[]}       [viewers]           Array of user/group ids that should be added as viewers to the content item
     * @param  {Function}       [callback]          Standard callback method
     * @param  {Object}         [callback.err]      Error object containing error code and error message
     * @param  {Content}        [callback.content]  Content object representing the created content
     */
    var createLink = exports.createLink = function(name, description, visibility, link, managers, viewers, callback) {};
    
    /**
     * Create a new file.
     * 
     * @param  {String}       name                Display title for the created content item
     * @param  {String}       [description]       The content item's description
     * @param  {String}       [visibility]        The content item's visibility. This can be public, loggedin or private
     * @param  {Element}      $file               jQuery element representing the file upload form field that contains the file to be uploaded
     * @param  {String[]}     [managers]          Array of user/group ids that should be added as managers to the content item
     * @param  {String[]}     [viewers]           Array of user/group ids that should be added as viewers to the content item
     * @param  {Function}     [callback]          Standard callback method
     * @param  {Object}       [callback.err]      Error object containing error code and error message
     * @param  {Content}      [callback.content]  Content object representing the created content
     */
    var createFile = exports.createFile = function(name, description, visibility, $file, managers, viewers, callback) {};
    
    /**
     * Create a new Sakai Doc.
     * 
     * @param  {String}       name                Display title for the created content item
     * @param  {String}       [description]       The content item's description
     * @param  {String}       [visibility]        The content item's visibility. This can be public, loggedin or private
     * @param  {String[]}     [managers]          Array of user/group ids that should be added as managers to the content item
     * @param  {String[]}     [viewers]           Array of user/group ids that should be added as viewers to the content item
     * @param  {Function}     [callback]          Standard callback method
     * @param  {Object}       [callback.err]      Error object containing error code and error message
     * @param  {Content}      [callback.content]  Content object representing the created content
     */
    var createSakaiDoc = exports.createSakaiDoc = function(name, description, visibility, managers, viewers, callback) {};
    
    /**
     * Update a content item's metadata.
     * 
     * @param  {String}       contentId           Content id of the content item we're trying to update
     * @param  {Object}       params              JSON object where the keys represent all of the profile field names we want to update and the values represent the new values for those fields
     * @param  {Function}     [callback]          Standard callback method
     * @param  {Object}       [callback.err]      Error object containing error code and error message
     */
    var updateContent = exports.updateContent = function(contentId, params, callback) {};
    
    /**
     * Delete a content item through the REST API.
     * 
     * @param  {String}        contentId           Content id of the content item we're trying to delete
     * @param  {Function}      callback            Standard callback method
     * @param  {Object}        callback.err        Error object containing error code and error message
     */
    var deleteContent = exports.deleteContent = function(contentId, callback) {};
    
    /**
     * Get the viewers and managers of a content item.
     * 
     * @param  {String}          contentId           Content id of the content item we're trying to retrieve the members for
     * @param  {String}          [start]             The principal id to start from (this will not be included in the response)
     * @param  {Number}          [limit]             The number of members to retrieve.
     * @param  {Function}        callback            Standard callback method
     * @param  {Object}          callback.err        Error object containing error code and error message
     * @param  {User[]|Group[]}  callback.members    Array that contains an object for each member. Each object has a role property that contains the role of the member and a profile property that contains the principal profile of the member
     */
    var getMembers = exports.getMembers = function(contentId, start, limit, callback) {};
    
    /**
     * Change the members and managers of a content item.
     * 
     * @param  {String}       contentId           Content id of the content item we're trying to update the members for
     * @param  {Object}       updatedMembers      JSON Object where the keys are the user/group ids we want to update membership for, and the values are the roles these members should get (manager or viewer). If false is passed in as a role, the principal will be removed as a member
     * @param  {Function}     [callback]          Standard callback method
     * @param  {Object}       [callback.err]      Error object containing error code and error message
     */
    var updateMembers = exports.updateMembers = function(contentId, updatedMembers, callback) {};
    
    /**
     * Share a content item.
     * 
     * @param  {String}       contentId           Content id of the content item we're trying to share
     * @param  {String[]}     principals          Array of principal ids with who the content should be shared
     * @param  {Function}     [callback]          Standard callback method
     * @param  {Object}       [callback.err]      Error object containing error code and error message
     */
    var shareContent = exports.shareContent = function(contentId, principals, callback) {};
    
    /**
     * Get a principal library.
     * 
     * @param  {String}         principalId         User or group id for who we want to retrieve the library
     * @param  {String}         [start]             The content id to start from (this will not be included in the response). If the first page is needed, null should be passed in.
     * @param  {Number}         [limit]             The number of content items to retrieve.
     * @param  {Function}       callback            Standard callback method
     * @param  {Object}         callback.err        Error object containing error code and error message
     * @param  {Content[]}      callback.items      Array of content items representing the content items present in the library
     */
    var getLibrary = exports.getLibrary = function(principalId, start, limit, callback) {};
    
    /**
     * Set the thumbnail URL of a piece of content. For links and Sakai Docs, this will just be a thumbnail representing their type.
     * For uploaded files, we will first check if a thumbnail URL is already set on the back-end side (which will use the generated
     * previews). If this is not present, we add a icon URL based on the file's mimeType
     * 
     * @param  {Content}        contentObj          Content object for which to set the thumbnail. This object will be modified to include the thumbnail URL.
     * @api private
     */
    var setThumbnail = function(contentObj) {};
    
    /**
     * Sets the mime type information on a piece of content, based on the mimetype mapping above. 
     * The mime type information will contain the following items:
     * 
     * - cssClass: CSS Class that can be used to show a small 16x16 icon
     * - description: Describes the type of content this is
     * 
     * Unrecognized content types or mimetypes will default to the 'Other' type.
     * 
     * @param  {Content}        contentObj          Content object for which to set the mimetype information. This object will be modified to include the mimetype info.
     * @api private
     */
    var setMimeTypeInfo = function(contentObj) {};
    
    /**
     * Sets the filesize of a file to be a human readable string. This will only be done for uploaded files, other content items will remain unchanged.
     * 
     * @param  {Content}        contentObj          Content object for which to set the readable filesize information. This object will be modified to include the mimetype info.
     * @api private
     */
    var setFileSize = function(contentObj) {};

    /**
     * Gets the comments on a content item
     *
     * @param  {String}       contentId           Content id of the content item we're trying to get comments for
     * @param  {String}       start               Determines the point at which content items are returned for paging purposed.
     * @param  {Integer}      limit               Number of items to return.
     * @param  {Function}     callback            Standard callback method
     * @param  {Object}       callback.err        Error object containing error code and error message
     * @param  {Comment[]}    callback.comments   Array of comments on the content item
     */
    var getComments = exports.getComments = function(contentId, start, limit, callback) {
        if (!contentId) {
            throw new Error('A content ID should be provided');
        }

        var data = {
            'start': start,
            'limit': limit
        };

        $.ajax({
            'url': '/api/content/' + contentId + '/comments',
            'type': 'GET',
            'data': data,
            'success': function(data) {
                callback(null, data);
            },
            'error': function(jqXHR, textStatus) {
                callback({'code': jqXHR.status, 'msg': jqXHR.statusText});
            }
        });
    };

    /**
     * Creates a comment on a content item or a reply to another comment if the `replyTo` parameter is specified
     *
     * @param  {String}       contentId           Content id of the content item we're trying to comment on
     * @param  {String}       body                The comment to be placed on the content item
     * @param  {String}       [replyTo]           Id of the comment to reply to
     * @param  {Function}     callback            Standard callback method
     * @param  {Object}       callback.err        Error object containing error code and error message
     */
    var createComment = exports.createComment = function(contentId, body, replyTo, callback) {
        if (!contentId) {
            throw new Error('A content ID should be provided');
        } else if (!body) {
            throw new Error('A comment should be provided');
        }

        var data = {
            'body': body,
            'replyTo': replyTo
        };

        $.ajax({
            'url': '/api/content/' + contentId + '/comments',
            'type': 'POST',
            'data': data,
            'success': function(data) {
                callback(null, data);
            },
            'error': function(jqXHR, textStatus) {
                callback({'code': jqXHR.status, 'msg': jqXHR.statusText});
            }
        });
    };

    /**
     * Deletes a comment from a content item
     *
     * @param  {String}       contentId           Content id of the content item we're trying to delete a comment from
     * @param  {String}       commentId           The ID of the comment to delete
     * @param  {Function}     callback            Standard callback method
     * @param  {Object}       callback.err        Error object containing error code and error message
     * @param  {Comment}      callback.comment    If the comment is not deleted, but instead flagged as deleted, the comment with properties stripped from it returns.
     */
    var deleteComment = exports.deleteComment = function(contentId, commentId, callback) {
        if (!contentId) {
            throw new Error('A content ID should be provided');
        } else if (!commentId) {
            throw new Error('A comment ID should be provided');
        }

        $.ajax({
            'url': '/api/content/' + contentId + '/comments/' + commentId,
            'type': 'DELETE',
            'success': function(comment) {
                callback(null, comment);
            },
            'error': function(jqXHR, textStatus) {
                callback({'code': jqXHR.status, 'msg': jqXHR.statusText});
            }
        });
    };

});
