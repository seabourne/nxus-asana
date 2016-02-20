/* 
* @Author: Mike Reich
* @Date:   2016-02-05 07:45:34
* @Last Modified 2016-02-19
*/

'use strict';

import _ from 'underscore'

import Asana from 'asana'

const defaultOpts = {

}

/**
 * A Nxus module for interacting with the Asana API. Built on top of the Asana API module.
 *
 * ## Configuration
 *
 * The module exposes the API client through a series of Nxus responders.  First, you'll need to enter your personal access token in the package.json config:
 * 
 * ```
 * 'config': {
 *   'asana-api': {
 *     'token': 'your token goes here'
 *   }
 * }
 * ```
 * 
 * or using an env variable `ASANA_PERSONAL_TOKEN`.
 * 
 * @example
 *
 * app.get('asana-api').users().then((Users) => Users.findById(...))
 * 
 */
export default class Module {
  constructor(app) {
    this.app = app
    this.opts = _.extend({}, app.config['asana-api'], defaultOpts)
    if(this.app.config.ASANA_PERSONAL_TOKEN)
      this.opts.token = this.app.config.ASANA_PERSONAL_TOKEN
    app.get('asana-api').use(this)
    .respond('projects')
    .respond('tasks')
    .respond('events')
    .respond('users')
    .respond('me')
    .respond('teams')
    .respond('workspaces')
    .respond('tags')
    .respond('stories')
    .respond('attachments')

    this.client = this._createClient()
  }

  /**
   * Returns the projects endpoint
   * @return {function} A wrapper for the Asana API Projects endpoint.
   */
  projects() {
    return Promise.resolve(this.client.projects)
  }

  /**
   * Returns the tasks endpoint
   * @return {function} A wrapper for the Asana API Tasks endpoint.
   */
  tasks() {
    return Promise.resolve(this.client.tasks)
  }

  /**
   * Returns the users endpoint
   * @return {function} A wrapper for the Asana API Users endpoint.
   */
  users() {
    return Promise.resolve(this.client.users)
  }

  /**
   * Returns the current Asana user
   * @return {Object} The current user's object.
   */
  me() {
    return Promise.resolve(this.client.users.me())
  }

  /**
   * Returns the events endpoint
   * @return {function} A wrapper for the Asana API Events endpoint.
   */
  events() {
    return Promise.resolve(this.client.events)
  }

  /**
   * Returns the teams endpoint
   * @return {function} A wrapper for the Asana API Teams endpoint.
   */
  teams() {
    return Promise.resolve(this.client.teams)
  }

  /**
   * Returns the workspaces endpoint
   * @return {function} A wrapper for the Asana API Workspaces endpoint.
   */
  workspaces() {
    return Promise.resolve(this.client.workspaces)
  }

  /**
   * Returns the tags endpoint
   * @return {function} A wrapper for the Asana API Tags endpoint.
   */
  tags() {
    return Promise.resolve(this.client.tags)
  }

  /**
   * Returns the stories endpoint
   * @return {function} A wrapper for the Asana API Stories endpoint.
   */
  stories() {
    return Promise.resolve(this.client.stories)
  }

  /**
   * Returns the attachments endpoint
   * @return {function} A wrapper for the Asana API Attachments endpoint.
   */
  attachments() {
    return Promise.resolve(this.client.attachments)
  }

  _createClient() {
    if(!this.opts || !this.opts.token) throw new Error('Must specify an Asana personal token, either in config.asana-id or with ASANA_PERSONAL_TOKEN')
    return Asana.Client.create().useAccessToken(this.opts.token);
  }
} 