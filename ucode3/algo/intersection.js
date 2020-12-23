const users = [
{
	id:1,
	companies: ['a','b','c']
},
{
	id:2,
	companies: ['d','b','e']
},
{
	id:3,
	companies: ['x','y','z']
}
];

const myUser = {
	id:4,
	companies: ['b','e']
};

const intersection = (myCompanies, userCompanies) => {
	for(let i=0;i< myCompanies.length;i++ ) {
		const myCurrentCompany = myCompanies[i]; 
		for(let j=0;j< userCompanies.length;j++ ) {
			if(myCurrentCompany == userCompanies[j]) {
				return true;
			}
		}	
	}
	return false;
}

const getUsersWithTheSameCompany = () => {
	const usersWithSameCompany = [];
	for (let i = 0;i< users.length;i++) {
		const currentUser = users[i];
		if(intersection(myUser.companies, currentUser.companies)) {
			usersWithSameCompany.push(currentUser);
		}
	}
	return usersWithSameCompany;
}

const result =  getUsersWithTheSameCompany();
console.log(result);




