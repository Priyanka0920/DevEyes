function getDashboardStyles() {

    return `

body{

    font-family:'Segoe UI',sans-serif;
    background:#1e1e1e;
    color:white;
    margin:0;
    padding:30px;

}

.container{

    max-width:1000px;
    margin:auto;

}

.header{

    text-align:center;
    margin-bottom:40px;

}

.header h1{

    font-size:42px;
    margin-bottom:10px;

}

.header p{

    color:#bdbdbd;

}

.cards{

    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:20px;

}

.card{

    background:#252526;
    padding:25px;
    border-radius:15px;
    text-align:center;
    box-shadow:0 5px 15px rgba(0,0,0,.35);

}

.card h2{

    color:#4FC3F7;

}

.number{

    font-size:48px;
    font-weight:bold;
    margin-top:15px;

}

.section{

    margin-top:40px;

}

.progress{

    width:100%;
    height:20px;
    background:#333;
    border-radius:30px;
    overflow:hidden;

}

.progress-bar{

    height:100%;
    background:#4CAF50;
    transition:.5s;

}

.percentage{

    text-align:right;
    margin-top:10px;

}

.streak{

    background:#252526;
    padding:20px;
    border-radius:15px;
    text-align:center;

}

.tip{

    background:#252526;
    padding:20px;
    border-radius:15px;
    line-height:1.6;

}

.footer{

    margin-top:50px;
    text-align:center;
    color:gray;

}

`;

}

module.exports={
    getDashboardStyles
};