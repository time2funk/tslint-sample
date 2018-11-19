
function hello (name: string) {
	return (`Hello ${name}`);
}

const a = () => {
	console.log(hello('Hell'));	
};

console.log(a());
