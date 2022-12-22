let codes = [
'<.:|><><.|:>', // JOXXER known code
'>..|<|.|>.+>.:|:<:<',
':>||>..:|>>+|>:|...|',
'...|>.|||.|..+...|>>.|<:<:',
'>:|>>.|+:<<<.|.|>:+>:|>>.|',
'.<|:>.>.+|.|><|.||>>::|>:||+.|::>|>',
'.<|:<.>+||.||>+|.>>+.<|>>:||::<+|>:|<<',
':<:.:||>>:||>|.:||::<+<:|>>.|::<>:|.:||>',
'...||>:>+:|.<+>>|.|>..+|.:<+...||>:>+:<.|>..<',
'>.|.>>|.>::<+|:>.|+>>|...|+>::|+..|+.:>:|.>.||>',
'<:>.||>:|.:||>+|.:<+>:>.|+.|.:>>:>+:|.<+>:>.|+:<:||:>.',
'>::>|:.|+<||>.|:.|+|.:<+.<:||:|>..+:||>>.||+|.|>+<:>.||>:|.:||>',
'.>|>:|<<>..|...:.|+|.:<+>:>.|+.<:||:|>..|>:|.:||>+:|.<+:.:|<<.|:>',
'>::>||>:<.<:|>>|>:|.:||>+|.:<+>:>.|+:.|>:>+>::|+:..|:>.<.|<>:|.:||>',
'..:>.||>>:<+|:>.|+>:>.|+..:|:|:><<|||+|.|>>::|+|+|>.|<<+:>.||>.|.>:||',
'>:>.|+:||::>:|.:|:>:|:<+|.:<+>:>.|+:<>:||>..|+>::|+..||>:+>:>|.:<+|:>>>>:|',
'...|:<>::>|:<>:|.:||>+|.:<+>:>.|+<>|.:<.|>.+>:>|>:+:<<|:>.:.>::<+>:>.|+<<:|:>>...',
'>:>:|:<.|+:.:|>.|.>:|.<|.||>:<+>|<|.|+|>:|+|....||+<<>|>:+>:.|||+|:>.|+:>.||>.>.||+:<|.>:>:|.|>.:+:||>',
'<<|.>.>.+||:||:+:<:|>.<|.|+>>||+<:|...|+:|+|>.<<|||:<+<<:||>...|:>+<<>|>:+<<|:<+<<:>|.>:>:.||>+>:>.||>+>.:|:<>:',
'>>||+>.|..<.|+>::>|:>.||+..|.:||>+<<>.||>+|.+.<|.:>:<>:+:>:|...|+>:>.|+:<:||::><.|+:<>::>.||>>+>::|+>:>.|+<:|:>.|'
];

let known = ['<.',':|','><','.|',':>'];

let uniquePairs = {};

codes.forEach((code)=>{
    code = code.replaceAll('+', '');
    let chars = code.split('');
    for(let i=0;i<code.length; i+=2){
        if(code[i+1]){
            if(!uniquePairs[code[i]+code[i+1]]){
                uniquePairs[code[i]+code[i+1]] = 0;
            }
            uniquePairs[code[i]+code[i+1]]++;
        }
    }
})

console.log(uniquePairs)
console.log('uniquePairs count', Object.keys(uniquePairs).length)
let keys = Object.keys(uniquePairs);
console.log('keys:',keys.length)
let sortable = [];
keys.forEach((key)=>{
    sortable.push([key, uniquePairs[key]]);
});

sortable.sort(function(a, b) {
    return b[1] - a[1];
});

console.log(sortable)

// Original // let mappings = ['A', 'I', 'T', 'N', 'S', 'L', 'C', 'U', 'D', 'P', 'M', 'H', 'G', 'B', 'F', 'Y', 'W', 'K', 'V', 'Z', 'Q'];
let mappings = ['A', 'S', 'I', 'N', 'T', 'L', 'C', 'U', 'D', 'P', 'M', 'H', 'G', 'B', 'F', 'W', 'Y', 'K', 'V', 'Z', 'Q'];

let newMappings = {};
let count = 0;
sortable.forEach((pair, i)=>{
    let code = pair[0];
    let letter = mappings[count];
    if(known.indexOf(code) == -1){
        newMappings[code] = letter;
        count++;
    }
});
newMappings[known[0]] = 'J';
newMappings[known[1]] = 'O';
newMappings[known[2]] = 'X';
newMappings[known[3]] = 'E';
newMappings[known[4]] = 'R';

console.log('newMappings', newMappings);
console.log('newMappings count:', Object.keys(newMappings).length);


let output = [];
codes.forEach((code)=>{
    let keys = Object.keys(newMappings);
    let newCode = '';
    let chars = code.split('');
    for(let i=0;i<chars.length; i+=2){
        keys.forEach((key)=>{
            if(chars[i+1]){
                let c = chars[i]+chars[i+1];
                if(c == key){
                    newCode += newMappings[key] ? newMappings[key] : '?';
                }
            }
        })
    }
    output.push(newCode);
})
console.log(output);
