import React from 'react';
import {URL_COURSE_CART_VIEW} from '../../../consts';
import SubUrlSelector from '../../../components/SubUrlSelector';


const DesktopSideBar = props => {
    return (
        <div>
            <div>Explore Projects</div>
            <div>
                <SubUrlSelector
                    mainPath='CourseCartApp'
                    subPaths={[
                        {value: URL_COURSE_CART_VIEW, label: 'view as sub app'},
                        {value: 'https://bitbucket.org/lysoftware/course_cart/src/master/', label: 'view code', isNewTab: true}
                    ]}
                />
            </div>
        </div>
    );
}

export default DesktopSideBar;