import React from 'react';


const WithLogic = App => {
    return class AppLogic extends React.Component {
        render () {
            return (
                <App
                    {...this.props}
                />
            );
        }
    }
}

export default WithLogic;