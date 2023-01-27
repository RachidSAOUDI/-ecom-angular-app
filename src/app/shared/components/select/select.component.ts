import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() title: string = "";
  @Input() data: any[] = [];
  @Output() selectedValue = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  filterChange(event: any) {
    this.selectedValue.emit(event)
  }
}
