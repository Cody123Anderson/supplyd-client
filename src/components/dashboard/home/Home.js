import React from 'react';
import { connect } from 'react-redux';

import TitleBar from '../TitleBar';
import constants from '../../../constants';
import { setTab } from '../../../actions/tabActions';
import Card from '../../ui-components/Card/Card';
import CreditCardIcon from 'material-ui-icons/CreditCard';
import GiftCardIcon from 'material-ui-icons/CardGiftcard';
import UploadIcon from 'material-ui-icons/CloudUpload';

import './Home.scss'

class Home extends React.Component {
    componentDidMount() {
        this.props.setTab(constants.upperDashboardLinks.home.name);
    }

    render() {
        return (
            <div>
                <TitleBar title="Welcome to Supplyd Dashboard!"/>
                <div className="home-card-container">
                    <Card className="home-card">
                        <div className="home-row-light">
                            <div className="home-card-header">
                                Finish setting up your account to get swag to your employees
                            </div>
                        </div>
                        <div className="home-row-dark">
                            <div className="home-action-icon-section">
                                <CreditCardIcon/>
                            </div>
                            <div className="home-action-description">
                                <div className="home-action-description-title">
                                    Add a payment source
                                </div>
                                <div className="home-action-description-paragraph">
                                </div>
                            </div>
                            <div className="home-action-button">
                            </div>
                        </div>
                        <div className="home-row-light">
                            <div className="home-action-icon-section">
                                <UploadIcon/>
                            </div>
                            <div className="home-action-description">
                                <div className="home-action-description-title">
                                    Upload company logo/artwork so we can design your swag!
                                </div>
                                <div className="home-action-description-paragraph">
                                </div>
                            </div>
                            <div className="home-action-button">
                            </div>
                        </div>
                        <div className="home-row-dark">
                            <div className="home-action-icon-section">
                                <GiftCardIcon/>
                            </div>
                            <div className="home-action-description">
                                <div className="home-action-description-title">
                                    Start sending new hire boxes!
                                </div>
                                <div className="home-action-description-paragraph">
                                </div>
                            </div>
                            <div className="home-action-button">
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default connect(null, { setTab })(Home);