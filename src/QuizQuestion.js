import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component{

  constructor(props){
    super(props)
    this.state = {incorrectAnswer:false}

}
  handleClick(butonText){
    if (butonText=== this.props.quiz_question.answer){
      this.setState( (state) => {
        return {incorrectAnswer:false};
      } );
      this.props.showNextQuestionHandler()
    }
    else
    {
      this.setState( (state) => {
        return {incorrectAnswer:true};
      } );
    }

  }
render(){
    return(
        <main>
        
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
         { this.props.quiz_question.answer_options.map((x,i) =>
          <QuizQuestionButton key={i} button_text={x} clickHandler={this.handleClick.bind(this)}/>
          )}
         
          </ul>
        </section>
        {this.state.incorrectAnswer?  <span className='error'>Sorry, that's not right</span> :null }
      </main>
    );
}

}

export default QuizQuestion