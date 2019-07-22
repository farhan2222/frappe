frappe.listview_settings['Auto Email Report'] = {
	onload: function(listview) {
		listview.page.add_action_item(__("Send Now"), function() {
			listview.call_for_selected_items("frappe.email.doctype.auto_email_report.auto_email_report.send_now");
		});
	}
};
