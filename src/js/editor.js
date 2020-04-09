inputVal=document.getElementsByClassName('input');
outputVal= document.getElementById('output');
for (let i=0; i<inputVal.length; i++){
	inputVal[i].addEventListener('keyup', function(){
	html=document.getElementsByClassName('html')[0].value;
	css=document.getElementsByClassName('css')[0].value;
	js=document.getElementsByClassName('js')[0].value;

	output.srcdoc = `
		<html>
		<head>
		<style>${css}</style>
		</head>
		<body>
		${html}
		<script>${js}</script>
		</body>
		</html>
	`
	})
}