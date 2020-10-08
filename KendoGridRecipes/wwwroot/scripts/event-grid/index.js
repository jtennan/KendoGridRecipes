import { DataService } from './data-service.js';

class Program {

    static async main(args = []) {

        const jsonData = await DataService.run('/data/people.json');
        const localDataSource = new kendo.data.DataSource({ data: jsonData, pageSize: 10 });
        const actionsTemplate = kendo.template($("#actions-template").html());      // Kendo Templates info: https://docs.telerik.com/kendo-ui/framework/templates/overview

        $("#actions-grid").kendoGrid({
            height: 600,
            sortable: true,

            dataSource: localDataSource,

            columns: [
                { field: 'Id',        title: 'Id' },
                { field: 'FirstName', title: 'First Name' },
                { field: 'LastName',  title: 'Last Name' },
                { field: 'Email',     title: 'Email' },
                { field: 'Actions',   title: 'Actions', template: actionsTemplate },
            ],

            toolbar: ["search"],

            pageable: {
                pageSizes: [5, 10, 20, "all"],
                buttonCount: 5,
                pageSize: 10,
                page: 1,
            },

            dataBound: () => Program.onGridLoaded(),        // dataBound info: https://docs.telerik.com/kendo-ui/api/javascript/ui/grid/events/databound
        });
    }

    static onGridLoaded() {
        const editBtns = document.querySelectorAll('[data-edit-record]');

        for (const btn of editBtns) {
            const id = btn.getAttribute('data-edit-record');
            btn.addEventListener('click', () => alert(`button ${id} clicked`));
        }


        const deleteBtns = document.querySelectorAll('[data-delete-record]');

        for (const btn of deleteBtns) {
            const id = btn.getAttribute('data-delete-record');
            const baseUrl = btn.getAttribute('data-delete-url');
            const url = `${baseUrl}?id=${id}`;
            btn.addEventListener('click', () => alert(`delete url is: ${url}`));
        }
    }
}


Program.main();