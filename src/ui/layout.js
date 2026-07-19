const { getTheme } = require("./theme");
const { getComponents } = require("./components");

function renderPage(title, body, script = "") {

return `

<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

<title>${title}</title>

<style>

${getTheme()}

${getComponents()}

</style>

</head>

<body>

<div class="container">

${body}

</div>

<script>

${script}

</script>

</body>

</html>

`;

}

module.exports = {
    renderPage
};