import { DataService } from './data-service.js';

class Program {

    static async main(args = []) {

        const jsonData = await DataService.run('/data/people.json');

        const localDataSource = new kendo.data.DataSource({ data: jsonData, pageSize: 10 });

        const emailTemplate = kendo.template($("#email-template").html());      // Kendo Templates info: https://docs.telerik.com/kendo-ui/framework/templates/overview

        $("#template-grid").kendoGrid({
            height: 600,
            sortable: true,

            dataSource: localDataSource,

            columns: [
                { field: 'Id',        title: 'Id',         attributes: { id: '#= Id #' } },
                { field: 'FirstName', title: 'First Name', attributes: { style: 'font-weight: bold; color: red;' } },
                { field: 'LastName',  title: 'Last Name',  attributes: { style: 'font-weight: bold; color: red;' } },
                { field: 'Email',     title: 'Email',      attributes: { class: 'email-link' },   template: emailTemplate },
                { field: 'Custom',    title: 'Custom',     attributes: { class: 'custom-field' }, template: '<div><span>#= LastName #, #= FirstName #</div>' },
            ],

            toolbar: ["search"],

            pageable: {
                pageSizes: [5, 10, 20, "all"],
                buttonCount: 5,
                pageSize: 10,
                page: 1,
            },
        });
    }
}


Program.main();