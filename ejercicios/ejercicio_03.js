const createUrl = (words)=>{

let endPoint ='.'+ words.slice(words.length -1)
let newUrl = words.join('/') + endPoint
return newUrl   
}

const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
    ]
    // create your function here
createUrl(input1); // 'Downloads/Videos/capture.mp4'

const input2 = [
    'CodinGame',
    'python',
    'py',
    ];
createUrl(input2); // 'CodinGame/python.py'

const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
    ]
createUrl(input3);
    // 'programming/languages/easy/beginner/useful/pythonstuff.py'
