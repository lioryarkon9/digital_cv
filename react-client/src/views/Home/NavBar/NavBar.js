import React from 'react';
import {Link} from 'react-router-dom';


const DesktopSideBar = props => {
    return (
        <div>
            <div>Explore Projects</div>
            <div>
                <Link to='./app1'>app1</Link>
            </div>
            <div>
                <Link to='./app2'>app2</Link>
            </div>
        </div>
    );
}

export default DesktopSideBar;