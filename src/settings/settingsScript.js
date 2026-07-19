function getSettingsScript(){

return`

const vscode = acquireVsCodeApi();

let selected =
document.querySelector(".chip.active").dataset.value;

document.querySelectorAll(".chip")
.forEach(chip=>{

chip.addEventListener("click",()=>{

document.querySelectorAll(".chip")
.forEach(c=>c.classList.remove("active"));

chip.classList.add("active");

selected=chip.dataset.value;

});

});

document.getElementById("saveBtn")
.onclick=()=>{

vscode.postMessage({

command:"saveSettings",

interval:Number(selected)

});

};

document.getElementById("resetStatsBtn")
.onclick=()=>{

vscode.postMessage({

command:"resetStatistics"

});

};

document.getElementById("resetStreakBtn")
.onclick=()=>{

vscode.postMessage({

command:"resetStreak"

});

};

document.getElementById("resetAllBtn")
.onclick=()=>{

vscode.postMessage({

command:"resetAll"

});

};

`;

}

module.exports={
getSettingsScript
};