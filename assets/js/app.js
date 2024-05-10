// Feather Icon
feather.replace();

const sidebarMenuButton = document.querySelector("#edug-sidebar-menu-button");
const sidebarMenuContents = document.querySelector("#edug-sidebar-menu-contents");

sidebarMenuButton.addEventListener("click", event => {

    let isCollapsed = sidebarMenuContents.getAttribute("data-isCollapsed") == "true";

    sidebarMenuContents.setAttribute("data-isCollapsed", !isCollapsed);

});