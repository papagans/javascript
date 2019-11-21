var myFirstlist = [1, 5, 12, 4, 3];
var mySecondlist = [2, 3, 4, 5, 6, 7, 8, 9, 10];
var myThirdlist = [3, 10, 17];
function averageSum(someList){
	let average = 0;
	let sum = 0;
	for (let i = 0; i < someList.length; i++) {
		sum = sum + someList[i];
	};
	average = sum / someList.length;
	console.log(average);
};
averageSum(myFirstlist);
averageSum(mySecondlist);
averageSum(myThirdlist);