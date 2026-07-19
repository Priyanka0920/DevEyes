function getTheme() {

    return `

:root{

    --primary:#007ACC;
    --primaryHover:#0E639C;

    --success:#2EA043;
    --warning:#D29922;
    --danger:#DA3633;

    --bg:var(--vscode-editor-background);
    --surface:var(--vscode-sideBar-background);

    --text:var(--vscode-editor-foreground);
    --secondary:var(--vscode-descriptionForeground);

    --border:var(--vscode-panel-border);

    --radius:8px;

}

*{

    margin:0;
    padding:0;
    box-sizing:border-box;

}

body{

    font-family:"Segoe UI",sans-serif;
    background:var(--bg);
    color:var(--text);

}

`;

}

module.exports = {
    getTheme
};