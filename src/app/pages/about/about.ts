import { Component } from '@angular/core';
import { Accordion } from '../../components/accordion/accordion';
import { Paragraph } from '../../components/paragraph/paragraph';

@Component({
  selector: 'app-about',
  imports: [Accordion , Paragraph],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
