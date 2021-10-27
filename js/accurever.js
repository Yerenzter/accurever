OnClear = () => {
    const getText = document.getElementById("yr-text");
    const getResult = document.getElementById("yr-result");

    getText.value = '';
    getResult.innerHTML = '';
}

OnClrBtnShow = () => {
    
}

OnReverse = () => {
    const getText = document.getElementById("yr-text").value;
    const getResult = document.getElementById("yr-result");
    
    for(r=getText.length-1; r > -1; r--) {
        const makeChildOnResult = document.createTextNode(getText[r]);
        getResult.appendChild(makeChildOnResult);
    }
}
