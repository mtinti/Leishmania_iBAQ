let X1='m_HCZ';
let Y1='m_DD8';
let X2='FC2';
let Y2='INT2';

let Y_LABEL_SCATTER1 = 'iBAQ DD8';
let X_LABEL_SCATTER1 = 'iBAQ HCZ';

let Y_LABEL_SCATTER2 = 'Intensity';
let X_LABEL_SCATTER2 = 'Fold Change';

let FLIP_Y1=false;
let FLIP_Y2=false;

let PLOT_WIDTH=550;
let PLOT_HEIGHT=400;

let PROJECT_TITLE='Absolute Protein Quantification';
let TAB_TITLE='Leishmania'

let _margin_1 = 0;
let _margin_2 = 0;

let _border_1_x = 0;
let _border_1_y = -10;

let _border_2_x = 10;
let _border_2_y = -2;

let BOX_PLOT_COLS_1 = ['DD8_1', 'DD8_2', 'DD8_3'];
let BOX_PLOT_COLS_2 = ['HCZ_1', 'HCZ_2', 'HCZ_3'];

//for the bar plot legend
let CONDITION_1 = 'DD8';
let CONDITION_2 = 'HCZ';


let COLOR_SELECTION_TABLE = 'orange';
let COLOR_SELECTION_CIRCLE = 'orange';

let Y_LABEL_BARPLOT = 'iBAQ';

//names of the file with the data
//scatter plots
let File_1 = 'indata.csv';
//bar plots
let File_2 = 'indata2.csv';

//these are th columns to show from file n1
//positions og Gene_acc','Gene_id' must not change
let COLUMNS_TO_TABULATE = ['Gene_acc','Gene_id','m_HCZ','m_DD8','FC2', 'INT2', 'Desc', 'pg_index'];