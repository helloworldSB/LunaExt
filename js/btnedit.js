var submitbtn = document.getElementById("postsubmit");
submitbtn.innerHTML = "<span>检查并发表</span>";
var div2edit = document.getElementsByClassName("mtm mbm pnpost");
var para = document.createElement("p");
para.id = "now freetype";
para.style.fontSize = "16px";
para.style.color = "#ff0a89";
var node = document.createTextNode("请自由迫害，您的输入将由Luna保护！");
para.appendChild(node);
div2edit[0].appendChild(para);
