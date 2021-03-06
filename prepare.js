function prepareArgs(args){
	var prepared = [], key, value;

	for(key in args){
		value = args[key];
		if( typeof key === 'number' ){
			prepared.push(value);
		}
		else{
			prepared.push(key + '=' + value);
		}
	}
	return prepared;
}

return prepareArgs;