

import { Component, OnInit } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { QuizService } from '../../../shared/services/quiz.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})

export class QuizComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
