import { Component, OnInit } from '@angular/core';
import {DayPilot} from "daypilot-pro-angular";


@Component({
  selector: 'app-randevu',
  templateUrl: './randevu.component.html',
  styleUrls: ['./randevu.component.css'],
  template: `<daypilot-calendar [config]="config"></daypilot-calendar>`
})
export class RandevuComponent implements OnInit {

  config: any = {locale: "en-us",
  viewType: "Week",
  columnWidthSpec: "Auto",
  cellDuration: 30,
  cellHeight: 20,
  crosshairType: "Header",
  businessBeginsHour: 9,
  businessEndsHour: 17,
  dayBeginsHour: 0,
  dayEndsHour: 24,
  eventArrangement: "Cascade",
  allowEventOverlap: true,
  timeRangeSelectedHandling: "Enabled",
  onTimeRangeSelected: function (args) {
    DayPilot.Modal.prompt("Hasta Adı Giriniz", "").then(function(modal) {
      var dp = args.control;
      dp.clearSelection();
      if (!modal.result) { return; }
      dp.events.add(new DayPilot.Event({
        start: args.start,
        end: args.end,
        id: DayPilot.guid(),
        text: modal.result
      }));
    });
  },
  eventMoveHandling: "Update",
  onEventMoved: function (args) {
    this.message("Event moved");
  },
  eventResizeHandling: "Update",
  onEventResized: function (args) {
    this.message("Event resized");
  },
  eventDeleteHandling: "Disabled",
  eventClickHandling: "Disabled",
  eventHoverHandling: "Disabled",
  };


  
  constructor() { }

  ngOnInit() {


  }

}
