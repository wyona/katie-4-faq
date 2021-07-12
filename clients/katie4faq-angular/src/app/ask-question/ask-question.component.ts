import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Submit question to Katie
   * @param question Question asked by user
   */
  submitQuestion(question: string): void {
    if (question.length === 0) {
      alert("WARNING: Please enter a question!");
      return;
    }

    console.info("Submit question to Katie: " + question);
    // TODO: Submit question to Katie and display answer below input field
  }

}
