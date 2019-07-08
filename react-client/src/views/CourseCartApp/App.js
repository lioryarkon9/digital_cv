import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';
import CourseCartWrapper from './views/AppWrapper';
import CoursesGrid from './views/CoursesGrid';
import CartView from './views/Cart';
import './App.css';
import WithLogic from './AppLogic/WithLogic';
import AppWrapper from '../AppWrapper';


class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            AllCourses: [],
            SelectedCourses: [],
            searchValue: '',
            searchOptions: []
        }
        this.setCourses = this.props.setCourses.bind(this);
        this.getCoursees = this.props.getCoursees.bind(this);
        this.addToSelected = this.props.addToSelected.bind(this);
        this.removeFromSelected = this.props.removeFromSelected.bind(this);
        this.onChangeSearchInput = this.props.onChangeSearchInput.bind(this);
        this.sortCoursesByParam = this.props.sortCoursesByParam.bind(this);
        this.prsistCartItemToLocalStorage = this.props.prsistCartItemToLocalStorage.bind(this);
        this.removeCartItemFromLocalStorage = this.props.removeCartItemFromLocalStorage.bind(this);
        this.getCartItemFromLocalStorage = this.props.getCartItemFromLocalStorage.bind(this);
    }
    componentDidMount () {
        this.setCourses();
    }
    render () {
        return (
            <AppWrapper>
                
                <CourseCartWrapper
                    numItemsInCart={this.state.SelectedCourses.length}
                >
                    <p>
                        The app you are currently viewing is an online shopping cart for courses of various types.
                        The courses objects are fetched from a JSON file. You can add/remove any course to/from your shopping cart and monitor your total $ and amount of courses,
                        as well as sort the available course objects by difficulty level or price (with the select dropdown) and filter them by their name 
                        with the text input.
                        All data is saved to localStorage so you will still be able to view it on page refresh, the layout is responsive.
                    </p>
                    <Row id='CourseCartApp'>
                        <Col 
                            sm={{span: 9, order: 1}}
                            xs={{span: 12, order: 12}}
                            style={{marginTop: 1 + '%'}}
                        >
                            <CoursesGrid
                                AllCourses={this.state.AllCourses}
                                SelectedCourses={this.state.SelectedCourses}
                                addToSelected={this.addToSelected}
                                removeFromSelected={this.removeFromSelected}
                                onChangeSearchInput={this.onChangeSearchInput}
                                searchValue={this.state.searchValue}
                                searchOptions={this.state.searchOptions}
                                sortCoursesByParam={this.sortCoursesByParam}
                            />
                        </Col>
                        <Col 
                            sm={{span: 3, order: 12}}
                            xs={{span: 12, order: 1}}
                        >
                            <CartView
                                SelectedCourses={this.state.SelectedCourses}
                            />
                        </Col>
                    </Row>
                </CourseCartWrapper>
            </AppWrapper>
        );
    }
}

export default WithLogic(App);