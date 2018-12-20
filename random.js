function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}



var n;
var t;
var AOL=2;//amount of random lists
for(var i=0;i<AOL;i++){
n="";
t=[];
t.length=charlist[0].length;
for(var i=0;i<t.length;i++){
t[i]=ogchars.charAt(i);
}
t=shuffle(t);
for(var i=0;i<t.length;i++){
n+=t[i];
}
console.log(n);
console.log('');
console.log('');
console.log('');
}
