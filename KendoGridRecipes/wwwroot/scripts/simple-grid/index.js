(function () {
    'use strict';

    // https://demos.telerik.com/kendo-ui/grid/from-table

    $("#simple-grid").kendoGrid({
        height: 600,
        sortable: true,

        pageable: {
            //refresh: true,
            pageSizes: [5, 10, 20, "all"],
            buttonCount: 5,
            pageSize: 10,
            page: 1,
        },
    });

}());