import frappe
@frappe.whitelist()
def get_logged_user():
    doc = frappe.get_doc('User', frappe.session.user)
    user_roles = []

    for role in doc.roles:
        user_roles.append(role.role)

    curr_user = {
		"name":doc.name,
		"email":doc.email,
		"full_name":doc.full_name,
		"username":doc.username,
		"roles": user_roles,
    "image":doc.user_image   
    }
    
    return curr_user