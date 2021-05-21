import React, { Component } from 'react';

const withComponent = WrappedComponent => {
    class withComponent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }
        render() {
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} />
        }
    }
    return withComponent;
}

export default withComponent;













// Code Without Naming Conventions
// import React, { Component } from 'react';

// const UpdateComponent = (OriginalComponent) => {
//     class NewComponent extends Component {
//         constructor(props) {
//             super(props)

//             this.state = {
//                 count: 0
//             }
//         }

//         incrementCount = () => {
//             this.setState(prevState => {
//                 return { count: prevState.count + 1 }
//             })
//         }
//         render() {
//             return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} />
//         }
//     }
//     return NewComponent;
// }

// export default UpdateComponent;

