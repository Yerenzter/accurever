OnClear = () => {
    getText = document.getElementById("yr-text");
    getResult = document.getElementById("yr-result");

    getText.value = '';
    getResult.innerHTML = '';
}

OnClrBtnShow = () => {
    
}

OnReverse = () => {
    getText = document.getElementById("yr-text").value;
    getResult = document.getElementById("yr-result");
    
    for(r=getText.length-1; r > -1; r--) {
        makeChildOnResult = document.createTextNode(getText[r]);
        getResult.appendChild(makeChildOnResult);
    }
}
