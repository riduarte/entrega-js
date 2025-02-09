const createUrl = (words)=>{

const endPoint ='.'+ words.slice(words.length -1)
let newUrl = words.slice(0,words.length -1).join('/').concat(endPoint)
return newUrl   
}

const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
    ]
    // create your function here
const uno = createUrl(input1); // 'Downloads/Videos/capture.mp4'

const input2 = [
    'CodinGame',
    'python',
    'py',
    ];
    const dos =createUrl(input2); // 'CodinGame/python.py'

const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
    ]
const tres =createUrl(input3);
    // 'programming/languages/easy/beginner/useful/pythonstuff.py'

    console.log(uno)
    console.log(dos)
    console.log(tres)