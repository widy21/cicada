'use strict';
import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    let loginFailed = false;
    if( this.isPost() ) {
      let token = this.post('token');
      let configToken = this.config('token');
      if( token === configToken ) {
        this.cookie('token', token, {
          timeout: 365 * 24 * 3600
        });
        return this.redirect('/');
      } else loginFailed = true;
    }
    this.assign('loginFailed', loginFailed);
    return this.display();
  }
}
