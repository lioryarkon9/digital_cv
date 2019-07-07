import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {setAppView} from './actions/appSettings';
import HomeView from './views/Home';


class Root extends React.Component {
    componentDidMount () {
        this.props.setAppView();
    }
    render () {
        return (
            <Router>
                <Switch>
                    <Route exact path={'/'} component={HomeView}/>
                    <Route path={'*'} component={(browserStuff) => <h2>Error: Page Not Found</h2>}/>
                </Switch>
            </Router>
        );
    }
}

const MapDispatchToProps = dispatch => {
    return {
        setAppView: () => dispatch(setAppView())
    }
}

export default connect(null, MapDispatchToProps)(Root);