const vscode = require("vscode");
const { openSettingsPanel } = require("../settings/settingsPanel");

function registerOpenSettings(){

    return vscode.commands.registerCommand(

        "deveyes.openSettings",

        ()=>{

            openSettingsPanel();

        }

    );

}

module.exports = registerOpenSettings;