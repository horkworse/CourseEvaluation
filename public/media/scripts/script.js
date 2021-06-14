function open() {
    document.getElementById('open_case').setAttribute("style", "opacity:1; transition: 1s; height: 100%;");
    document.getElementById('open_fnct').setAttribute("style", "display:none;");
    document.getElementById('close_fnct').setAttribute("style", "display:block;");
}

function close() {
    document.getElementById('open_case').setAttribute("style", "display:none;");
    document.getElementById('close_fnct').setAttribute("style", "display:none;");
    document.getElementById('open_fnct').setAttribute("style", "display:block");
}