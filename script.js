var label=createlabels("label","for","first name","firstname");
var br1=createlinebreak("br");
var input=createinput("input","text","firstname","id","firstname");
var br2=createlinebreak("br");

var label1=createlabels("label","for","middle name"," middlename");
var br3=createlinebreak("br");
var input1=createinput("input","text","middlename","id","middl;ename");
var br4=createlinebreak("br");

var label2=createlabels("label","for","last name","lastname");
var br5=createlinebreak("br");
var input2=createinput("input","text","lastname","id","lastname");
var br6=createlinebreak("br");

var password=createlabels("label","number","number","phonenumber");
var br7=createlinebreak("br");
var passinput=createinput("input","type","number","id","number");
var br8=createlinebreak("br");


document.body.append(label,br1,input,br2,label1,br3,input1,br4,label2,br5,input2,br6,password,br7,passinput,br8);


function createlabels(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}
//it is returning an HTML element
//<label for="email">Mail</label>

function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
}
function createlinebreak(tagname){
var ele=document.createElement(tagname);
return ele;
}
