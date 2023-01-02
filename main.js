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
	'++': ' ',
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

let offsets = [];

let mappingKeys = Object.keys(mappings);

let changedSelections = [];

function parseJOXXERCode(lines){
	let output = [];
	lines.forEach((line, index)=>{
		let code = line.replaceAll('+', '++');
		let count = 0;
		console.log('Code['+index+']:', code);
		changedSelections.push([]);
	    let newCode = [];
	    let chars = code.split('');
	    // debugger;
	    for(let i=0;i<chars.length; i+=2){
	        if(chars[i+1]){
	        	let str = chars[i]+chars[i+1];
	            let newVal = getSubstitution(str);
	            if(newVal == ''){
	            	newVal = getSubstitution(chars[i]);
	            	if(newVal != ''){
		            	newCode.push(newVal);
		    			changedSelections[index][count++] = chars[i];
	                	i--;
	            	}
	            } else {
	            	let singleChar = getSubstitution(chars[i]);
	            	if(singleChar != ''){
						newCode.push([newVal, singleChar]);
	            	} else {
            			newCode.push(newVal);
            		}
	    			changedSelections[index][count++] = chars[i];
	    			changedSelections[index][count++] = chars[i+1];
            	}
	        } else {
	            newCode.push(chars[i]);
	    		changedSelections[index][count++] = chars[i];
	            i--;
	        }
	    }
	    console.log('JOXXER['+index+']:', newCode);
	    console.log('expected_output:',expected_output[index]); 
	    output.push(newCode);
	})
	console.log(output);
	return output;
}

function updateJOXXERCode(lines){
	let output = [];

	lines.forEach((line, index)=>{
		let code = line.replaceAll('+', '++');
		let count = 0;
		console.log('Code['+index+']:', code);
	    let newCode = [];
	    let chars = code.split('');
	    // debugger;
	    for(let i=0;i<chars.length; i+=2){
	        if(chars[i+1]){
	        	let str = chars[i]+chars[i+1];
	            let newVal = getSubstitution(str);
	            if(newVal == ''){
	            	newVal = getSubstitution(chars[i]);
	            	if(newVal != ''){
		            	newCode.push(newVal);
	                	i--;
	                	count--;
	            	}
	            } else {
	            	let singleChar = getSubstitution(chars[i]);
	            	if(singleChar != ''){
						if(changedSelections[index][count] == chars[i]){
							newCode.push([newVal, singleChar]);
						} else if (changedSelections[index][count] != chars[i]){
							newCode.push(singleChar);
							i--;
							count--;
						} else if(singleChar != ''){
							newCode.push([newVal, singleChar]);
						} else {
							newCode.push(newVal);
						}
	            	} else {
            			newCode.push(newVal);
            		}
            	}
	        } else {
	            newCode.push(chars[i]);
	            i--;
	            count--;
	        }
	        count+=2;
	    }
	    console.log('JOXXER['+index+']:', newCode);
	    console.log('expected_output:',expected_output[index]); 
	    output.push(newCode);
	})
	console.log(output);
	return output;
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

function decode(){
	let input = document.getElementById('inputs').value.split('\n');
	let output = parseJOXXERCode(input);
	let textOutput = '';
	output.forEach((o)=>{
		o.forEach((c)=>{
			if(typeof c === 'string'){
				textOutput += c;
			} else {
				textOutput += '['+c.join('|')+']';
			}
		});
		textOutput += '\n';
	})
	document.getElementById('output').value = textOutput;

	buildChooser(output);
}

function buildChooser(output){
	let chooser = document.getElementById('chooser');
	chooser.innerHTML = '';
	output.forEach((o, index)=>{
		let div = document.createElement('div');
		o.forEach((c, j)=>{
			if(typeof c === 'string'){
				let text = document.createElement('input');
				text.type = 'text';
				text.value = c;
				div.appendChild(text);
			} else {
				let offset = 0;
				for(let i=0; i<j*2 ; i++){
					let c = changedSelections[index][i];
					if(c == 'A' || c == 'B' || c == 'C' || c == 'H'){
						offset++;
					}
				}
				let select = document.createElement('select');
				select.onchange = updateSelection;
				select.id = index+'_'+j;
				c.forEach((a)=>{
					let option = document.createElement('option');
					option.innerHTML = a;
					option.value = a;
					if(changedSelections[index][j*2-offset] == a){
						option.selected = true;
					}
					select.appendChild(option);
				})
				div.appendChild(select);
			}
		});
		chooser.appendChild(div);
	})
}

function updateSelection(){
	let val = this.value;
	let ids = this.id.split('_');
	let index = parseInt(ids[0]);
	let j = parseInt(ids[1]);

	let offset = 0;
	for(let i=0; i<j*2 ; i++){
		let c = changedSelections[index][i];
		if(c == 'A' || c == 'B' || c == 'C' || c == 'H'){
			offset++;
		}
	}
	changedSelections[index][j*2-offset] = val;


	let input = document.getElementById('inputs').value.split('\n');
	let output = updateJOXXERCode(input);
	let textOutput = '';
	output.forEach((o)=>{
		o.forEach((c)=>{
			if(typeof c === 'string'){
				textOutput += c;
			} else {
				textOutput += '['+c.join('|')+']';
			}
		});
		textOutput += '\n';
	})
	document.getElementById('output').value = textOutput;
	buildChooser(output);
}

window.addEventListener('load', ()=>{
	decode();
})
