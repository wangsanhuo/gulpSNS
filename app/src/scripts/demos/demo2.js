angular.module("myApp",[])
.controller("myController",["$scope",function($scope){
	$scope.col='FirstName';
	$scope.desc=0;
	var friends=[
        {
        	FirstName:"FANG",
            LastName:"Vane",
            Gender:"Male",
            Salary:"12,333,50",
            Birthday:"2007-07-11"
        },
        {
        	FirstName:"SARA",
            LastName:"rose",
            Gender:"Female",
            Salary:"232,334,23",
            Birthday:"1997-02-03"
        },
        {
        	FirstName:"AAM",
            LastName:"hot",
            Gender:"Male",
            Salary:"66,880,50",
            Birthday:"1986-03-04"
        },
        {
        	FirstName:"MARK",
            LastName:"bear",
            Gender:"Male",
            Salary:"68,000,00",
            Birthday:"1968-03-22"
        }
	]
	$scope.friends=friends;
	//$scope.searchText="";
	/*$scope.search=function(obj){
		if($scope.searchText!=""){
            if(obj.FirstName.toLowerCase().indexOf($scope.searchText.toLowerCase())!=-1 || ){
                
            }
		}else{
			return true;
		}
	}*/
}])