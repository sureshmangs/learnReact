import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something Went Wrong</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary


// Erro Boundary
// A class component that implements either one or both of the lifecycle methods
// getDerivedStateFromError or componeDidCatc becomes an Error Boundary

// The static method getDerivedStateFromError method is used to render a fallback UI after
// an error is thrown and the componentDidCatch method is used to log the error information

// Error boundary are React component that catch JavaScript error in their child component
// tree, log those errors, and display a fallback UI.

// A class component becomes an Error Boundary by defining either or both of 
// getDerivedStateFromError and componentDidCatch lifecycle methods.