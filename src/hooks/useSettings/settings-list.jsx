export const SettingsList = () => {
    // Each setting is a true/false switch, and does not accept complex values (so far)
    // TODO: Find a way to implement complex values in the change handling while keeping the list decoupled from the hook
    return [
        {
            key: "keepSidebarOpen",
            text: "Keep the sidebar open after navigating to another page",
            defaultValue: false,
        },
        {
            key: "darkMode",
            text: "Dark Mode (experimental)",
            defaultValue: false,
        },
    ];
}
