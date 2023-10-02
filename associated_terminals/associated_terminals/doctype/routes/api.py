import frappe
from frappe import get_all

@frappe.whitelist()
def get_parent_and_child_data():
    # Fetch the data
    data = get_all("Routes", fields=["name","title", "path", "element", "ishidden", "icon"],filters={"ishidden": 0})

    # Include child table data by querying the child table directly
    for row in data:
        roles = frappe.get_all("RoutesRoles", filters={"parent": row['name']}, fields=["title"])
        tabs = frappe.get_all("Page Tabs", filters={"parent": row['name']}, fields=["key","label","content"])
        row["tabs"]=tabs
        user_roles = []
        for role in roles:
            user_roles.append(role.title)
        row['roles']=user_roles
        

    

     # Sort the data array by the "name" field
    sorted_data = sorted(data, key=lambda x: x["name"])

    return sorted_data


@frappe.whitelist()
def modify_submenu_data(data):
    # Iterate through the data and modify the "subMenu" and "content" fields
    modified_data = []
    for item in data:
        sub_menu = item.get("subMenu", [])

        # Remove the "subMenu" field if it's an empty list
        if not sub_menu:
            item.pop("subMenu", None)
        else:
            # Remove the "content" field if "subMenu" is not an empty list
            item.pop("content", None)

        # Add the modified item to the result
        modified_data.append(item)

    return modified_data
@frappe.whitelist()
def transform_tabs_data(input_data):
    grouped_data = {}  # Dictionary to store grouped data

    # Iterate through the input data
    for item in input_data:
        key = item["key"]
        label = item["label"]
        content = item["content"]
        groupby = item["groupby"]

        # If the item has a "groupby" value, create a subgroup for it
        if groupby:
            if groupby not in grouped_data:
                # Create a subgroup for the "groupby" value
                grouped_data[groupby] = {
                    "key": groupby,
                    "label": groupby,
                    "content": None,
                    "subMenu": []
                }
            # Add the current item to the subgroup
            grouped_data[groupby]["subMenu"].append({
                "key": key,
                "label": label,
                "content": content
            })
        else:
            # If there's no "groupby" value, add the item directly
            grouped_data[key] = {
                "key": key,
                "label": label,
                "content": content,
                "subMenu": []
            }

    # Convert the grouped dictionary to a list
    grouped_list = list(grouped_data.values())

    return modify_submenu_data(grouped_list)





@frappe.whitelist()
def get_tabs_menu_by_parent(parent_id):
    try:
        # Fetch the data
        tabs = frappe.get_all("Page Tabs", filters={"parent": parent_id}, fields=["key", "label", "content","groupby","creation"])

        # Sort the tabs data if needed
        # sorted_tabs = sorted(tabs, key=lambda x: x["key"])
        sorted_data = sorted(tabs, key=lambda x: x["creation"], reverse=True)
        
        return transform_tabs_data(sorted_data)
        # return tabs
    except Exception as e:
        frappe.log_error(f"Error in get_tabs_menu_by_parent: {str(e)}")
        return None
    

   