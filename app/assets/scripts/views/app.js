/*
 * App wraps header body and footer
 */

'use strict';

import React, {PropTypes as T} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import c from 'classnames';

import PageHeader from '../components/page-header';
import PageFooter from '../components/page-footer';
import ErrorModal from '../components/error-modal';
import AgreementModal from '../components/agreement-modal';

import {
  fetchProfile,
  removeErrors,
  hideAgreements,
  displayPartnerAgreement,
  displayCodeOfPractice
} from '../actions';

// Top-level application component
// Just contains header, footer, and container for actual views
var App = React.createClass({
  displayName: 'App',

  propTypes: {
    routes: T.array,
    children: T.object,
    dispatch: T.func,
    profile: T.object,
    route: T.object,
    roles: T.array,
    secret: T.string,
    router: T.object,
    error: T.object,
    agreement: T.object
  },

  componentDidMount: function () {
    if (
      this.props.roles &&
      (this.props.roles.includes('IP') || this.props.roles.includes('SP'))
    ) { this.props.dispatch(fetchProfile()); }
  },

  render: function () {
    const pageClass = _.get(_.last(this.props.routes), 'pageClass', '');
    const hidden = !this.props.route.auth.loggedIn();
    return (
      <div className={c('page', pageClass)}>
        <PageHeader
          className={c({hidden})}
          roles={this.props.roles}
          profile={this.props.profile}
        />
        <main className="page__body" role="main">
          <div style={{display: this.props.error.isErrorModalVisible ? 'block' : 'none'}}>
            <ErrorModal
              onLogout={() => {
                this.props.dispatch(removeErrors());
                this.props.router.push('/logout');
              }}
              onClose={() => {
                this.props.dispatch(removeErrors());
              }}
              errorMsg={this.props.error.errorMsg}
            />
          </div>
          <div style={{display: this.props.agreement.isAgreementModalVisible ? 'block' : 'none'}}>
            <AgreementModal
              onClose={() => {
                this.props.dispatch(hideAgreements());
              }}
              agreementType={this.props.agreement.agreementType}
            />
          </div>
          {this.props.children}
        </main>
        <PageFooter
          className={c({hidden})}
          partnerAgreement={(e) => {
            e.preventDefault();
            this.props.dispatch(displayPartnerAgreement());
          }}
          codeOfPractice={(e) => {
            e.preventDefault();
            this.props.dispatch(displayCodeOfPractice());
          }}
        />
      </div>
    );
  }
});

// /////////////////////////////////////////////////////////////////// //
// Connect functions

const mapStateToProps = state => {
  return {
    dispatch: state.dispatch,
    roles: state.auth.roles,
    profile: state.auth.profile,
    secret: state.auth.secret,
    error: state.errors,
    agreement: state.agreement
  };
};

module.exports = connect(mapStateToProps)(App);
