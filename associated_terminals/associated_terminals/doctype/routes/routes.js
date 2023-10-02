// Copyright (c) 2023, Sameed Hasan and contributors
// For license information, please see license.txt

frappe.ui.form.on("Routes", {
  refresh: function (frm) {
    // Add a custom button to trigger the method
    frm.add_custom_button(__("Get Parent and Child Data"), function () {
      frappe.call({
        method:
          "associated_terminals.associated_terminals.doctype.routes.api.get_tabs_menu_by_parent", // Adjust this path
        args: { parent_id: frm.doc.name },
        callback: function (response) {
          // Process the retrieved data here
          var data = response.message;
          console.log("data", data);
          // Handle the data as needed
        },
      });
    });
  },
});
