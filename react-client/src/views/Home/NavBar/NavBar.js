import React from 'react';
import {Link} from 'react-router-dom';
import {URL_COURSE_CART_VIEW} from '../../../consts';


const DesktopSideBar = props => {
    return (
        <div>
            <div>Explore Projects</div>
            <div>
                <Link to={URL_COURSE_CART_VIEW}>CourseCartApp</Link>
            </div>
        </div>
    );
}

export default DesktopSideBar;