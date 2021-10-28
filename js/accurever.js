OnClear = () => {
	getText = document.getElementById("yr-text");
	getClrBtn = document.getElementById("yr-clear");
	getResult = document.getElementById("yr-result");
	
	getText.value = '';
	getResult.innerHTML = '...';
	
	getClrBtn.style.opacity = '0%';
}

OnEnterColor = () => {
	getLay = document.getElementsById("yr-root");
	getHangerText = document.getElementById("yr-hanger-text").value;
	setHanger = document.getElementById("yr-hanger");
	
	getLay.style.backgroundColor = getHangerText;
	setHanger.style.animation = 'FadeOut';
	setHanger.style.animationDuration = '0.3s';
	setHanger.style.display = 'none';
}

OnResult = () => {
	getText = document.getElementById("yr-text").value;
	
	p = document.getElementById("yr-result");
	getText == '' ? p.innerHTML = "Oops! you need to put something." : p.innerHTML = '';
	for(r=getText.length-1; r > -1; r--) {
		pData = document.createTextNode(getText[r]); 
		p.appendChild(pData); 
	}
}

OnShowClearBtn = () => {
	getLay = document.getElementById("yr-root");
	getText = document.getElementById("yr-text").value;
	setText = document.getElementById("yr-text");
	setCurTime = document.getElementById("yr-time");
	getClrBtn = document.getElementById("yr-clear");
	setHanger = document.getElementById("yr-hanger");
	setHanger1 = document.getElementById("yr-hanger1");
	
	getText == '' ? getClrBtn.style.opacity = '0%' : getClrBtn.style.opacity = '100%';
	
	if(getText == 'flanx::set://background_color') {
		setHanger.style.display = 'flex';
		setHanger.style.animation = 'FadeIn';
		setHanger.style.animationDuration = '0.3s';
		setText.value = '';
	}
}
