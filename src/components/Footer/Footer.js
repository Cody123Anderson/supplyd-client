import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class Footer extends React.Component {
  static propTypes = {
    links: PropTypes.array
  };

  static defaultProps = {
    links: []
  };

  renderLinks() {
    const { links } = this.props;
    return links.map(link => (
      <span className="supplyd-footer-link" key={link.to}>
        <a href={link.to}>
          {link.name}
        </a>
      </span>
    ));
  }

  render() {
    return (
      <div className="supplyd-footer">
        {this.renderLinks()}
      </div>
    )
  }
}

export default Footer;