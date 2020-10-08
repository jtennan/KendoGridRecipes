(async function () {
    'use strict';

    const response = await fetch("/data/people.json", { method: 'GET', cache: 'no-cache' });    // Fetch info: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

    if (response.status !== 200) {
        alert('fail');
    }

    const jsonData = await response.json();

    const localDataSource = new kendo.data.DataSource({ data: jsonData, pageSize: 10 });        // Kendo DataSource info: https://docs.telerik.com/kendo-ui/api/javascript/data/datasource

    $("#data-grid").kendoGrid({
        height: 600,
        sortable: true,

        dataSource: localDataSource,

        columns: [
            { field: 'Id',        title: 'Id' },
            { field: 'FirstName', title: 'First Name' },
            { field: 'LastName',  title: 'Last Name' },
            { field: 'Email',     title: 'Email' },
        ],

        toolbar: ["search"],

        pageable: {
            pageSizes: [5, 10, 20, "all"],
            buttonCount: 5,
            pageSize: 10,
            page: 1,
        },
    });

}());