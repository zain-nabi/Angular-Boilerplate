import { Component, OnInit } from '@angular/core';

declare var datatable: any;
declare var $: any;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var datatable = $.HSCore.components.HSDatatables.init($('#datatable'), {
      select: {
          style: 'multi',
          selector: 'td:first-child input[type="checkbox"]',
          classMap: {
              checkAll: '#datatableCheckAll',
              counter: '#datatableCounter',
              counterInfo: '#datatableCounterInfo'
          }
      },
      language: {
          zeroRecords: '<div class="text-center p-4">' +
              '<i class="far fa-exclamation-triangle fa-2x"></i>' +
              '<p class="mb-0">No data to show</p>' +
              '</div>'
      }
  });
  $('.js-datatable-filter').on('change', function () {
      var $this = $('.js-datatable-filter'),
          elVal = $this.val(),
          targetColumnIndex = $this.data('target-column-index');
          $('#datatable').column(targetColumnIndex).search(elVal).draw();
  });
  $('#datatableSearch').on('mouseup', function () {
      var $input = $('#datatableSearch'),
          oldValue = $input.val();
      if (oldValue == "") return;
      setTimeout(function () {
          var newValue = $input.val();
          if (newValue == "") {
              // Gotcha
              datatable.search('').draw();
          }
      }, 1);
  });
  }

}
