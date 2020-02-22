var judge = true;
var win = 0;
var arr = new Array(); // 1是白色，2是黑色
       for(var i=0;i<15;i++){
          arr[i]=new Array(i);
          for(var j=0;j<15;j++){
             arr[i][j]=0;
       }
}

function judge1(row, col, count, color) {
	if ((arr[row][col + 1] == color) && (col + 1 < 15)) {
		count = count + 1;
		if(count == 5) {
			if(color == 1) {
				win = 1;
			}
			else if (color == 2) {
				win = 2;
			}
		}
		else {
			judge1(row, col + 1, count, color);
		}
	}
	else {
		return;
	}
}

function judge2(row, col, count, color) {
	if ((arr[row + 1][col] == color) && (row + 1 < 15)) {
		count = count + 1;
		if(count == 5) {
			if(color == 1) {
				win = 1;
			}
			else if (color == 2) {
				win = 2;
			}
		}
		else {
			judge2(row + 1, col, count, color);
		}
	}
	else {
		return;
	}
}

function judge3(row, col, count, color) {
	if ((arr[row + 1][col + 1] == color) && (row + 1 < 15) && (col + 1 < 15)) {
		count = count + 1;
		if(count == 5) {
			if(color == 1) {
				win = 1;
			}
			else if (color == 2) {
				win = 2;
			}
		}
		else {
			judge3(row + 1, col + 1, count, color);
		}
	}
	else {
		return;
	}
}

function judge4(row, col, count, color) {
	if ((arr[row + 1][col - 1] == color) && (row + 1 < 15) && (col - 1 >= 0)) {
		count = count + 1;
		if(count == 5) {
			if(color == 1) {
				win = 1;
			}
			else if (color == 2) {
				win = 2;
			}
		}
		else {
			judge4(row + 1, col - 1, count, color);
		}
	}
	else {
		return;
	}
}

function judge_win(color) {
	for(var i=0; i<15; i++) {
		for (var j=0; j<15; j++) {
			if (arr[i][j] == 1) {
				var count = 1;
				judge1(i, j, 1, color);
				judge2(i, j, 1, color);
				judge3(i, j, 1, color);
				judge4(i, j, 1, color);
			}
			else if (arr[i][j] == 2) {
				var count = 1;
				judge1(i, j, 1, color);
				judge2(i, j, 1, color);
				judge3(i, j, 1, color);
				judge4(i, j, 1, color);
			}
		}
	}
	if (win == 1) {
		alert('白棋胜');
	}
	else if (win == 2) {
		alert('黑棋胜');
	}
}

function getRowAndCol(str, c_color) {
	var a = [];
	var temp = 0; //记录逗号的位置
	
	for (var i = 0; i<str.length; i++) {
		if(str[i] == ',') {
			temp = i;
			break;
		}
	}
	
	if (c_color == 'black') {
		var row = parseInt(str.slice(0, temp));
		var col = parseInt(str.slice(temp+1, str.length));
		arr[row][col] = 2;
		judge_win(2);
	}
	else {
		var row = parseInt(str.slice(0, temp));
		var col = parseInt(str.slice(temp+1, str.length));
		arr[row][col] = 1;
		judge_win(1);
	}
	
}

function testVisibility(id)
{   
    var a = document.getElementById(String(id)+'-c');
	if(a.style.visibility == 'hidden') {
		a.style.visibility = "visible";
		if (judge) {
			a.style.background = "white";
			getRowAndCol(id, 'white');
			judge = false;
		}
		else {
			a.style.background = "black";
			getRowAndCol(id, 'black');
			judge = true;
		}
	}
}   

var getChessId = function(e) {
	var arr = e.path;//arr是table元素的路径情况
	var td_id = arr[arr.length - 9].id;
	testVisibility(td_id);
}