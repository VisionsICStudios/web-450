

import { Component, OnInit } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { PresentationService } from '../../../shared/services/presentation.service';


@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})

export class PresentationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
