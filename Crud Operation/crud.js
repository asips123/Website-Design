var selectedRow=null;

function onFormSubmit(){
   
    var formData=readFormData();
    if(selectedRow==null)
    insertNewRecord(formData);
    else
    updateRecord(formData);
    reSetForm();


}
function readFormData(){
    var formData={};
    formData["fullName"]=document.getElementById("fullName").value;
    formData["phoneNumber"]=document.getElementById("phoneNumber").value;
    formData["emailId"]=document.getElementById("emailId").value;
    formData["placeName"]=document.getElementById("placeName").value;
    return formData;
}
function insertNewRecord(data){
    var table=document.getElementById("listDetails").getElementsByTagName("tbody")[0];
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.fullName;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.phoneNumber;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.emailId;
    cell4=newRow.insertCell(3);
    cell4.innerHTML=data.placeName;
    cell4=newRow.insertCell(4);
    cell4.innerHTML=`<a onClick="onEdit(this)" style="color:blue; text-decoration:underline; margin-right:5px;">Edit</a>
                    <a onClick="onDelete(this)" style="color:red;">Delete</a>`;
}
function reSetForm(){
    document.getElementById("fullName").value="";
    document.getElementById("phoneNumber").value="";
    document.getElementById("emailId").value="";
    document.getElementById("placeName").value="";

}
function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("fullName").value= selectedRow.cells[0].innerHTML;
    document.getElementById("phoneNumber").value= selectedRow.cells[1].innerHTML;
    document.getElementById("emailId").value= selectedRow.cells[2].innerHTML;
    document.getElementById("placeName").value= selectedRow.cells[3].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.fullName;
    selectedRow.cells[1].innerHTML=formData.phoneNumber;
    selectedRow.cells[2].innerHTML=formData.emailId;
    selectedRow.cells[3].innerHTML=formData.placeName;
}
function onDelete(td){
    if(confirm('Are you sure want delete this record?')){
    row = td.parentElement.parentElement;
    document.getElementById("listDetails").deleteRow(row.rowIndex);
    reSetForm();
 }
}
// function validate(){
//     isValid=true;
//     if(document.getElementById("fullName").value==""){
//         isValid=false;
//     document.getElementById("fullNameValidationError").classList.remove("hide");
// }
// }