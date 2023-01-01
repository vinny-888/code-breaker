let codes = [
	'>..|<|.|>.+>.:|:<:<',
	// LEVEL LOSS

	':>||>..:|>>+|>:|...|',
	// RANDOM NODE

	'...|>.|||.|..+...|>>.|<:<:',
	// DELAYED DEMEZZ

	'>:|>>.|+:<<<.|.|>:+>:|>>.|',
	// HOME SWEET HOME

	'.<|:>.>.+|.|><|.||>>::|>:||+.|::>|>',
	// FULL INVENTORY BURN

	'.<|:<.>+||.||>+|.>>+.<|>>:||::<+|>:|<<',
	// FUCK YEAH IM FAMOUS NOW

	':<:.:||>>:||>|.:||::<+<:|>>.|::<>:|.:||>',
	// SPONTANIOUS COMBUSTION

	'...||>:>+:|.<+>>|.|>..+|.:<+...||>:>+:<.|>..<',
	// DEATH OF MIND IS DEATH SELF

	'>.|.>>|.>::<+|:>.|+>>|...|+>::|+..|+.:>:|.>.||>',
	// LIMITS ARE MEANT TO BE BROKEN

	'<:>.||>:|.:||>+|.:<+>:>.|+.|.:>>:>+:|.<+>:>.|+:<:||:>.',
	// CREATION IS THE BIRTH OF THE SOUL

	'>::>|:.|+<||>.|:.|+|.:<+.<:||:|>..+:||>>.||+|.|>+<:>.||>:|.:||>',
	// TRUE VALUE IS FOUND ONLY IN CREATION

	'.>|>:|<<>..|...:.|+|.:<+>:>.|+.<:||:|>..|>:|.:||>+:|.<+:.:|<<.|:>',
	// KNOWLEDGE IS THE FOUNDATION OF POWER

	'>::>||>:<.<:|>>|>:|.:||>+|.:<+>:>.|+:.|>:>+>::|+:..|:>.<.|<>:|.:||>',
	// TRANSFOMATION IS THE PATH TO PERFECTION

	'..:>.||>>:<+|:>.|+>:>.|+..:|:|:><<|||+|.|>>::|+|+|>.|<<+:>.||>.|.>:||',
	// DREAMS ARE THE DOORWAY INTO A NEW REALITY

	'>:>.|+:||::>:|.:|:>:|:<+|.:<+>:>.|+:<>:||>..|+>::|+..||>:+>:>|.:<+|:>>>>:|',
	// THE OUROBOROS IS THE STYLE TO BEAT THIS UMMO

	'...|:<>::>|:<>:|.:||>+|.:<+>:>.|+<>|.:<.|>.+>:>|>:+:<<|:>.:.>::<+>:>.|+<<:|:>>...',
	// DESTRUCTION IS THE CHISEL THAT SCULPTS THE WORLD

	'>:>:|:<.|+:.:|>.|.>:|.<|.||>:<+>|<|.|+|>:|+|....||+<<>|>:+>:.|||+|:>.|+:>.||>.>.||+:<|.>:>:|.|>.:+:||>',
	// THOSE POLITICIANS HAVE NO IDEA WHAT TEY ARE REALLY SITTING ON

	'<<|.>.>.+||:||:+:<:|>.<|.|+>>||+<:|...|+:|+|>.<<|||:<+<<:||>...|:>+<<>|>:+<<|:<+<<:>|.>:>:.||>+>:>.||>+>.:|:<>:',
	// WILL YOU SOLVE MY CODE O ALWAYS WONDER WHAT WAS WRITTEN THEN LOST

	'>>||+>.|..<.|+>::>|:>.||+..|.:||>+<<>.||>+|.+.<|.:>:<>:+:>:|...|+>:>.|+:<:||::><.|+:<>::>.||>>+>::|+>:>.|+<:|:>.|',
	// MY LIFE TRULY BEGAN WHEN I FIRST RODE THE SOURCE STREAM TO THE CORE
];

let expected_output = [
	'LEVEL LOSS',
	'RANDOM NODE',
	'DELAYED DEMEZZ',
	'HOME SWEET HOME',
	'FULL INVENTORY BURN',
	'FUCK YEAH IM FAMOUS NOW',
	'SPONTANIOUS COMBUSTION',
	'DEATH OF MIND IS DEATH SELF',
	'LIMITS ARE MEANT TO BE BROKEN',
	'CREATION IS THE BIRTH OF THE SOUL',
	'TRUE VALUE IS FOUND ONLY IN CREATION',
	'KNOWLEDGE IS THE FOUNDATION OF POWER',
	'TRANSFOMATION IS THE PATH TO PERFECTION',
	'DREAMS ARE THE DOORWAY INTO A NEW REALITY',
	'THE OUROBOROS IS THE STYLE TO BEAT THIS UMMO',
	'DESTRUCTION IS THE CHISEL THAT SCULPTS THE WORLD',
	'THOSE POLITICIANS HAVE NO IDEA WHAT TEY ARE REALLY SITTING ON',
	'WILL YOU SOLVE MY CODE O ALWAYS WONDER WHAT WAS WRITTEN THEN LOST',
	'MY LIFE TRULY BEGAN WHEN I FIRST RODE THE SOURCE STREAM TO THE CORE'
];

let mappings = {
	'+': ' ',
	'|': 'A',
	'.': 'B',
	'<': 'C',
	'..': 'D',
	'.|': 'E',
	'.<': 'F',
	'.:': 'G',
	'>': 'H',
	'|.': 'I',
	'<.': 'J',
	'.>': 'K',
	'>.': 'L',
	'>>': 'M',
	'|>': 'N',
	':|': 'O',
	':.': 'P',
	'?': 'Q',
	':>': 'R',
	':<': 'S',
	'>:': 'T',
	'|:': 'U',
	'<|': 'V',
	'<<': 'W',
	'><': 'X',
	'||': 'Y',
	'<:': 'Z'
};

let mappingKeys = Object.keys(mappings);

function parseJOXXERCode(lines){
	let output = [];

	lines.forEach((code, index)=>{
		console.log('Code['+index+']:', code);
	    let newCode = '';
	    let chars = code.split('');
	    // debugger;
	    for(let i=0;i<chars.length; i+=2){
	        if(chars[i+1]){
	        	let str = chars[i]+chars[i+1];
	            let newVal = getSubstitution(str);
	            if(newVal == ''){
	            	newVal = getSubstitution(chars[i]);
	            	if(newVal != ''){
		            	newCode += newVal;
	                	i--;
	            	}
	            } else {
	            	let singleChar = getSubstitution(chars[i]);
	            	if(singleChar != ''){
						newCode += '['+singleChar + '|' + newVal + ']';
	            	} else {
            			newCode += newVal;
            		}
            	}
	        } else {
	            newCode += chars[i];
	            i--;
	        }
	    }
	    console.log('JOXXER['+index+']:', newCode);
	    console.log('expected_output:',expected_output[index]); 
	    output.push(newCode);
	})
	console.log(output);
}

function getSubstitution(str){
	let newCode = '';
	for(let j=0; j<mappingKeys.length; j++){
		let key = mappingKeys[j];
	    if(str == key){
	        newCode += mappings[key] ? mappings[key] : '?';
	        break;
	    }
	}
	return newCode;
}

parseJOXXERCode(codes);
