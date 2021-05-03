import React, { Component } from 'react';

import './App.css';
import './appStyle.css';
import style from './appStyle.module.css';



import Stylesheet from './components/Stylesheet';
import InlineStyle from './components/InlineStyle';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Stylesheet primary={true} />
        <InlineStyle />

        <hr />

        <p className="error">Using simple stylesheet</p>

        {/* Styled modules can't be used in children unknowingly as we have to import them there explicitly which is not the case with the simple style sheets */}
        <p className={style.success}>Using module stylesheet</p>
      </div>
    )
  }
}

export default App


















// import React, { Component } from 'react';
// import './App.css';

// function getRandomNumber(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   let random = Math.floor(Math.random() * (max - min + 1)) + min;
//   return random;
// }
// class App extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       quotes: [],
//       selectedQuoteIndex: null
//     }
//     this.selectQuoteIndex = this.selectQuoteIndex.bind(this);
//   }


//   componentDidMount() {
//     fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
//       .then(data => data.json())
//       .then(quotes => this.setState({ quotes: quotes }))
//       .then(() => this.setState({ selectedQuoteIndex: this.selectQuoteIndex() }));
//   }

//   nextQuoteClickHandler() {
//     this.setState({
//       selectedQuoteIndex: getRandomNumber(1, this.state.selectedQuoteIndex)
//     })


//   }

//   selectQuoteIndex() {
//     if (!this.state.quotes.length) {
//       return;
//     }
//     return getRandomNumber(1, this.state.quotes.length - 1)
//   }

//   render() {
//     console.log('index', this.state.selectedQuoteIndex)
//     return (
//       <div className="App" id="quote-box">
//         <button onClick={() => this.nextQuoteClickHandler()} >next click!</button>
//         <p>{this.state.selectedQuoteIndex ? this.state.quotes[this.state.selectedQuoteIndex].quote : ''}</p>
//       </div>
//     );

//   }

// }

// export default App;