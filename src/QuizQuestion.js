import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component{
  handleClick(butonText){
    if (butonText=== this.props.quiz_question.answer){
      this.props.showNextQuestionHandler()
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
      </main>
    );
}

}

export default QuizQuestion