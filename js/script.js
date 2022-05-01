function search() {
	returnTable();
	let textSearch = document.getElementById("textSearch");
	let tableRow = document.getElementsByTagName("tr");
	let result = document.getElementById("results");
	let searchString = new RegExp(textSearch.value, 'i');
	let count = 0;
	for (let i = 1; i < tableRow.length; i++) {
		currentValue = tableRow[i].getElementsByTagName("td")[1];
		if (textSearch.value == "") {
			return result.innerHTML = "Ничего не найдено";
		}
		if (currentValue.innerHTML.search(searchString) != -1) {
			count++;
			currentValue.style.backgroundColor = "red";
		}
	}
	return (count > 0) ? result.innerHTML = "Количество найденных совпадений: " + count : result.innerHTML = "Ничего не найдено";
}

function returnTable() {
	let tableRow = document.getElementsByTagName("tr");
	for (let i = 1; i < tableRow.length; i++) {
		currentValue = tableRow[i].getElementsByTagName("td");
		for (let j = 1; j < currentValue.length; j++) {
			if (i % 2 == 1)
				currentValue[j].style.cssText = "td{background-color = #cdcfd2} &:hover{background-color: $table-hover;}";
			else
				currentValue[j].style.cssText = "td{background-color = #e7e8e8} &:hover{background-color: $table-hover;}";
		}

	}
}