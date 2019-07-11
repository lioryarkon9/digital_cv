import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import HomeView from './views/Home';
import CourseCartApp from './views//CourseCartApp';
import RaimenWarsAppContainer from './containers/RaimenWarsApp/App';
import {URL_COURSE_CART_VIEW, URL_RAIMEN_WARS_VIEW} from './consts';


class Root extends React.Component {
    componentDidMount () {
        this.props.setAppView();
    }
    render () {
        return (
            <Router>
                <Switch>
                    <Route exact path={'/'} component={HomeView}/>
                    <Route 
                        path={URL_COURSE_CART_VIEW.slice(1, URL_COURSE_CART_VIEW.length)}
                        component={CourseCartApp}
                    />
                    <Route 
                        path={URL_RAIMEN_WARS_VIEW.slice(1, URL_RAIMEN_WARS_VIEW)} 
                        component={RaimenWarsAppContainer}
                    />
                    <Route path={'*'} component={(browserStuff) => <h2>Error: Page Not Found</h2>}/>
                </Switch>
            </Router>
        );
    }
}

export default Root;