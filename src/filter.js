const filter = {
	dateFormat:function(dateStr,time) {

		var date = new Date(dateStr*1000);
		var year = date.getFullYear();
		//ES6语法填充：var month = (date.getMonth()+1).toString().padStart(2, '0');
		var month = date.getMonth()+1<10 ? '0'+ (date.getMonth()+1) : date.getMonth()+1;
		var day = date.getDate()<10 ? '0' + date.getDate() : date.getDate();
		var hh = date.getHours()<10 ? '0' + date.getHours() : date.getHours();
		var mm = date.getMinutes()<10 ? '0' + date.getMinutes() : date.getMinutes();
		var ss = date.getSeconds()<10 ? '0' + date.getSeconds() : date.getSeconds();

		//return `${year}-${month}-${day}`;

		if(time&&time.toLowerCase() === 'yyyy-mm-dd'){
			return `${year}年${month}月${day}日`;
		}else if(time&&time.toLowerCase() === 'hh:mm:ss'){
			return `${hh}:${mm}`;
        }else if(time&&time.toLowerCase() === 'mm-dd hh:mm:ss'){
            return `${month}月${day}日 ${hh}:${mm}`;
		}else if(time&&time.toLowerCase() === 'yyyy-mm-dd hh:mm:ss'){
			return `${year}.${month}.${day} ${hh}:${mm}`;
		}else{
			return `${year}年${month}月${day}日 ${hh}:${mm}`;
		}
	},

	stateChange: function(status) {
		switch(status) {
			case 10: 
			  return {text: '已激活', class: 'active'};
			  break;
		  default: return {text: '未激活', class: 'not-active'};
			  break;
		}
	},

	idCardDesensitization(id_card) {
		let value = id_card.substring(0, 4) + "**********" + id_card.substring(14, 18);
		return value;
	},

	mobileDesensitization(mobile) {
		let value = mobile.substring(0, 3) + "*****" + mobile.substring(8,11);
		return value;
	}

}

export default filter;
