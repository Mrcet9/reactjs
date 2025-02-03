import React from "react";

const HighOrder = (OriginalComponent) => {
    class NewComponent extends React.Component {
        render() {
            return <OriginalComponent {...this.props} name="this a my naik" />;
        }
    }
    return NewComponent;
};

export default HighOrder; // Fixed export
