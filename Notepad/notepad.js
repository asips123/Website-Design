function onload_text(){
    document.getElementById("output").value="Enter your Text..."
}
function bold_click(){
    document.getElementById("output").style.fontWeight="bold"
}
function italic_click(){
    document.getElementById("output").style.fontStyle="italic"
}
function underline_click(){
    document.getElementById("output").style.textDecoration="underline"
}
function normal_click(){
    document.getElementById("output").style.fontStyle="normal"
    document.getElementById("output").style.textDecoration="none"
    document.getElementById("output").style.fontWeight="normal"
}