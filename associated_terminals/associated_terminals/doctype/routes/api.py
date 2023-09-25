import frappe
from frappe import get_all

@frappe.whitelist()
def get_parent_and_child_data():
    # Fetch the data
    data = get_all("Routes", fields=["name","title", "path", "element", "ishidden", "icon"],filters={"ishidden": 0})

    # Include child table data by querying the child table directly
    for row in data:
        roles = frappe.get_all("RoutesRoles", filters={"parent": row['name']}, fields=["title"])
        user_roles = []
        for role in roles:
            user_roles.append(role.title)
        row['roles']=user_roles

    

     # Sort the data array by the "name" field
    sorted_data = sorted(data, key=lambda x: x["name"])

    return sorted_data