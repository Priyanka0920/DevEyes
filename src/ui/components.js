function getComponents() {

return `

/* ===========================================================
   CONTAINER
=========================================================== */

.container{

    max-width:960px;
    margin:40px auto;
    padding:0 24px;

}

/* ===========================================================
   PAGE HEADER
=========================================================== */

.page-header{

    margin-bottom:30px;

}

.page-title{

    font-size:28px;
    font-weight:600;
    color:var(--text);
    margin-bottom:6px;

}

.page-subtitle{

    color:var(--secondary);
    font-size:14px;

}

/* ===========================================================
   CARD
=========================================================== */

.card{

    background:var(--surface);
    border:1px solid var(--border);
    border-radius:10px;
    padding:24px;
    margin-bottom:20px;
    transition:.2s ease;

}

.card:hover{

    border-color:var(--primary);

}

.section-title{

    font-size:18px;
    font-weight:600;
    margin-bottom:20px;

}

/* ===========================================================
   SUMMARY CARDS
=========================================================== */

.summary-grid{

    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:18px;
    margin-bottom:20px;

}

.summary-card{

    background:rgba(255,255,255,.03);
    border:1px solid var(--border);
    border-radius:10px;
    padding:22px;
    transition:.2s ease;

}

.summary-card:hover{

    transform:translateY(-2px);
    border-color:var(--primary);

}

.summary-label{

    color:var(--secondary);
    font-size:13px;
    margin-bottom:12px;

}

.summary-number{

    font-size:34px;
    font-weight:700;
    color:var(--text);

}

/* ===========================================================
   METRIC ROW
=========================================================== */

.metric{

    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:16px 0;
    border-bottom:1px solid var(--border);

}

.metric:last-child{

    border-bottom:none;

}

.metric-value{

    font-size:18px;
    font-weight:700;

}

/* ===========================================================
   PROGRESS BAR
=========================================================== */

.progress{

    width:100%;
    height:10px;
    background:#2b2b2b;
    border-radius:20px;
    overflow:hidden;
    margin-top:12px;

}

.progress-fill{

    height:100%;
    background:var(--primary);
    transition:width .5s ease;

}

.progress-text{

    margin-top:12px;
    color:var(--secondary);
    font-size:13px;

}

/* ===========================================================
   SETTINGS
=========================================================== */

.setting-row{

    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:18px 0;
    border-bottom:1px solid var(--border);

}

.setting-row:last-child{

    border-bottom:none;

}

.setting-title{

    font-size:15px;
    font-weight:600;
    margin-bottom:4px;

}

.setting-description{

    color:var(--secondary);
    font-size:13px;
    line-height:1.6;

}

/* ===========================================================
   CHIPS
=========================================================== */

.chip-group{

    display:flex;
    flex-wrap:wrap;
    gap:12px;

}

.chip{

    min-width:74px;
    height:40px;

    border:1px solid var(--border);
    background:transparent;
    color:var(--text);

    border-radius:8px;

    cursor:pointer;

    transition:.2s ease;

    font-size:14px;

}

.chip:hover{

    border-color:var(--primary);

}

.chip.active{

    background:var(--primary);
    color:white;
    border-color:var(--primary);

}

/* ===========================================================
   BUTTONS
=========================================================== */

.primary-btn{

    width:100%;
    height:46px;

    border:none;
    border-radius:8px;

    background:var(--primary);
    color:white;

    cursor:pointer;

    font-size:15px;
    font-weight:600;

    transition:.2s ease;

}

.primary-btn:hover{

    background:var(--primaryHover);

}

.secondary-small{

    width:90px;
    height:36px;

    border:1px solid var(--border);

    background:transparent;

    color:var(--text);

    border-radius:6px;

    cursor:pointer;

    transition:.2s ease;

}

.secondary-small:hover{

    background:rgba(255,255,255,.06);

}

.danger-small{

    width:90px;
    height:36px;

    border:none;

    border-radius:6px;

    background:#d64545;

    color:white;

    cursor:pointer;

    transition:.2s ease;

}

.danger-small:hover{

    background:#bf3434;

}

/* ===========================================================
   ACTIVITY
=========================================================== */

.activity-item{

    padding:14px 0;
    border-bottom:1px solid var(--border);
    color:var(--secondary);

}

.activity-item:last-child{

    border-bottom:none;

}

/* ===========================================================
   TIP
=========================================================== */

.tip-text{

    color:var(--secondary);
    line-height:1.8;

}

/* ===========================================================
   FOOTER
=========================================================== */

.footer{

    margin-top:30px;
    text-align:center;
    color:var(--secondary);
    font-size:12px;

}

/* ===========================================================
   RESPONSIVE
=========================================================== */

@media(max-width:800px){

.summary-grid{

    grid-template-columns:1fr;

}

.setting-row{

    flex-direction:column;
    align-items:flex-start;
    gap:16px;

}

.secondary-small,
.danger-small{

    width:100%;

}

}

`;

}

module.exports = {
    getComponents
};