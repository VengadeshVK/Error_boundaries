import React from "react";

class NameErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError() {
        return {
            hasError: true,
        }
    }

    render() {
        if (this.state.hasError) {
            return <h3>Error handled</h3>
        }
        return (this.props.children)
    }
}

export default NameErrorBoundary