'use strict';
import React, { PropTypes as T } from 'react';
import c from 'classnames';

var PageFooter = React.createClass({
  displayName: 'PageFooter',

  propTypes: {
    className: T.string,
    partnerAgreement: T.func,
    codeOfPractice: T.func
  },

  render: function () {
    return (
      <footer
        className={c('page__footer', this.props.className)}
        role='contentinfo'>
        <div className='page__prime-nav'>
          <div className="nav-block">
            <ul className="browse-menu">
              <li>
                <a title="Code Of Practice"
                  className="browse-menu__item"
                  onClick={this.props.codeOfPractice}
                  href="#">
                     Code Of Practice
                </a>
              </li>
              <li>
                <a title="Partner Agreement"
                  className="browse-menu__item"
                  onClick={this.props.partnerAgreement}
                  href="#">
                     Partner Agreement
                </a>
              </li>
              <li className="browse-menu__item sub-nav-block-wrapper">
                <div className="sub-nav-block"></div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
});

module.exports = PageFooter;
