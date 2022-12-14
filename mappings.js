let codes = [
'<.:|><><.|:>', // JOXXER known code
'>|:.:.||++|>.|<<++||.||:>', // >APPY NEW YER
'>..|<|.|>.++>.:|:<:<', // LEVEL LOSS
':>||>..:|>>++|>:|...|', // RANDOM NODE
'...|>.|||.|..++...|>>.|<:<:', // DELAYED DEMESS
'>:|>>.|++:<<<.|.|>:++>:|>>.|', // HOME SWEET HOME
'.<|:>.>.++|.|><|.||>>::|>:||++.|::>|>',
'.<|:<.>++||.||>++|.>>++.<|>>:||::<++|>:|<<',
':<:.:||>>:||>|.:||::<++<:|>>.|::<>:|.:||>',
'...||>:>++:|.<++>>|.|>..++|.:<++...||>:>++:<.|>..<',
'>.|.>>|.>::<++|:>.|++>>|...|++>::|++..|++.:>:|.>.||>',
'<:>.||>:|.:||>++|.:<++>:>.|++.|.:>>:>++:|.<++>:>.|++:<:||:>.',
'>::>|:.|++<||>.|:.|++|.:<++.<:||:|>..++:||>>.||++|.|>++<:>.||>:|.:||>',
'.>|>:|<<>..|...:.|++|.:<++>:>.|++.<:||:|>..|>:|.:||>++:|.<++:.:|<<.|:>',
'>::>||>:<.<:|>>|>:|.:||>++|.:<++>:>.|++:.|>:>++>::|++:..|:>.<.|<>:|.:||>',
'..:>.||>>:<++|:>.|++>:>.|++..:|:|:><<|||++|.|>>::|++|++|>.|<<++:>.||>.|.>:||',
'>:>.|++:||::>:|.:|:>:|:<++|.:<++>:>.|++:<>:||>..|++>::|++..||>:++>:>|.:<++|:>>>>:|',
'...|:<>::>|:<>:|.:||>++|.:<++>:>.|++<>|.:<.|>.++>:>|>:++:<<|:>.:.>::<++>:>.|++<<:|:>>...',
'>:>:|:<.|++:.:|>.|.>:|.<|.||>:<++>|<|.|++|>:|++|....||++<<>|>:++>:.|||++|:>.|++:>.||>.>.||++:<|.>:>:|.|>.:++:||>', // THOSE+:.:|>.|.>:|.<|.||>:<+HAVE+NO+IDEA+WHAT+>:.|||+ARE+:>.||>.>.||+SITTING+ON 
'<<|.>.>.++||:||:++:<:|>.<|.|++>>||++<:|...|++:|++|>.<<|||:<++<<:||>...|:>++<<>|>:++<<|:<++<<:>|.>:>:.||>++>:>.||>++>.:|:<>:',
'>>||++>.|..<.|++>::>|:>.||++..|.:||>++<<>.||>++|.++.<|.:>:<>:++:>:|...|++>:>.|++:<:||::><.|++:<>::>.||>>++>::|++>:>.|++<:|:>.|' // MY+LiFE+>::>|:>.||+BEGAN+WHEN+i+FIRST+RODE+THE+:<:||::><.|+:<>::>.||>>+TO+THE+CORE
];

// let unmapped = [ Q', 'S', 'U', 'Z'];
let known_s = ['++', '<.',':|','><','.|',':>', ':.', '|>', '<<', '||', '.<', '.:', '.>', '..', '>.', '<|', '>>', ':<'];
let known_a = [' ',  'J', 'O', 'X',  'E', 'R',  'P',  'N', 'W',  'Y',  'F',  'G',  'K',  'D',  'L', 'V', 'M', 'S'];
let known_s1 = ['>', '|', '.', '<', ':'];
let known_a1 = ['H', 'A', 'B', 'C', 'T'];

let mappings = {};
let index = 0;
known_s.forEach((k)=>{
    mappings[k] = known_a[index++];
});

console.log('newMappings', mappings);
console.log('newMappings count:', Object.keys(mappings).length);

let output = [];
codes.forEach((code)=>{
    let keys = Object.keys(mappings);
    let newCode = '';
    let chars = code.split('');
    for(let i=0;i<chars.length; i+=2){
        let foundKey = false;
        if(chars[i+1]){
            keys.forEach((key)=>{
                let c = chars[i]+chars[i+1];
                if(c == key){
                    foundKey = true;
                    newCode += mappings[key] ? mappings[key] : '?';
                }
            })
            if(!foundKey){
                newCode += chars[i];
                i--;
            }
        } else {
            newCode += chars[i];
            i--;
        }
    }
    output.push(newCode);
})
console.log(output);

mappings = {};
index = 0;
known_s1.forEach((k)=>{
    mappings[k] = known_a1[index++];
});

console.log('newMappings2', mappings);
console.log('newMappings2 count:', Object.keys(mappings).length);

let output2 = [];
output.forEach((code)=>{
    let keys = Object.keys(mappings);
    let newCode = '';
    let chars = code.split('');
    for(let i=0;i<chars.length; i++){
        let foundKey = false;
        keys.forEach((key)=>{
            let c = chars[i];
            if(c == key){
                foundKey = true;
                newCode += mappings[key] ? mappings[key] : '?';
            }
        })
        if(!foundKey){
            newCode += chars[i];
        }
    }
    output2.push(newCode);
})
console.log(output2);

