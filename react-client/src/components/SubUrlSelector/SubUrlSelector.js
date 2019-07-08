import React from 'react';
import {Link} from 'react-router-dom';
import './SubUrlSelector.css';


class SubUrlSelector extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    render () {
        return (
            <div className='SubUrlSelector'>
                <div onClick={e => this.setState({isOpen: !this.state.isOpen})}>
                    <b>{this.props.mainPath}</b>
                </div>
                {this.state.isOpen ? 
                    this.props.subPaths.map(item => (
                        <div key={'_sub-path-' + item.value}>
                            <Link 
                                to={item.value}
                                onClick={e => {
                                    if (item.isNewTab) {
                                        e.preventDefault();
                                        window.open(item.value, '_blank');
                                    }
                                }}
                            >
                                    {item.label}
                            </Link>
                        </div>
                    ))
                : null}
            </div>
        );
    }
}

SubUrlSelector.defaultProps = {
    mainPath: '',
    subPaths: [{value: 'path1', label: 'path1Txt', isNewTab: false}, {value: 'path2', label: 'path2Txt', isNewTab: false}]
}


export default SubUrlSelector;