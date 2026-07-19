function getSettingsStyles() {

    return `

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{

    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background: var(--vscode-editor-background);
    color: var(--vscode-editor-foreground);
    padding:40px;

}

.container{

    max-width:700px;
    margin:0 auto;

}

h1{

    font-size:28px;
    font-weight:600;
    margin-bottom:8px;
    color:var(--vscode-editor-foreground);

}

.subtitle{

    color:var(--vscode-descriptionForeground);
    margin-bottom:30px;
    font-size:14px;

}

.card{

    background:var(--vscode-sideBar-background);
    border:1px solid var(--vscode-panel-border);
    border-radius:8px;
    padding:22px;
    margin-bottom:20px;

}

.card h2{

    font-size:17px;
    font-weight:600;
    margin-bottom:18px;
    color:var(--vscode-editor-foreground);

}

.option{

    display:flex;
    align-items:center;
    padding:10px 0;
    cursor:pointer;
    transition:0.2s;

}

.option:hover{

    padding-left:8px;

}

.option input{

    margin-right:12px;
    cursor:pointer;

}

button{

    width:100%;
    height:42px;
    border:none;
    border-radius:6px;
    font-size:14px;
    font-weight:600;
    cursor:pointer;
    transition:.2s;

}

#saveBtn{

    background:var(--vscode-button-background);
    color:var(--vscode-button-foreground);

}

#saveBtn:hover{

    background:var(--vscode-button-hoverBackground);

}

#resetStatsBtn,
#resetStreakBtn{

    background:transparent;
    color:var(--vscode-editor-foreground);
    border:1px solid var(--vscode-panel-border);

}

#resetStatsBtn:hover,
#resetStreakBtn:hover{

    background:rgba(255,255,255,.05);

}

#resetAllBtn{

    background:#b42318;
    color:white;

}

#resetAllBtn:hover{

    background:#912018;

}

.footer{

    margin-top:35px;
    text-align:center;
    color:var(--vscode-descriptionForeground);
    font-size:12px;

}

hr{

    border:none;
    border-top:1px solid var(--vscode-panel-border);
    margin:18px 0;

}

`;
}

module.exports = {
    getSettingsStyles
};