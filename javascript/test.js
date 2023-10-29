//matematika +//
var a = 120568
var b = 66794

a += 37485
b += 77459

console.log(a);
console.log(b);

//pengurangan//
var a = 5748933
var b = 7459932

a -= 34764
b -= 74598

console.log(a);
console.log(b);

//perkalian//
var a = 345
var b = 500

a *= 45
b *= 25

console.log(a);
console.log(b);

//pembagian//
var a = 15000
var b = 30000

a /= 32
b /= 64

console.log(a);
console.log(b);

function tolol(a,b) {
    console.log(a + b);
}
tolol (120, 120);

var nama = prompt("nama:");
var kelas = prompt("kelas:");

if(nama.toUpperCase() == "JIDAN"){
    if(kelas == "IX"){
        document.write("<p>kamu sudah terdaftar</p>");
    } else {
        document.write("<p>kelas yang kamu masukkan salah, coba lagi</p>");
    }
} else {
    document.write("<p>kamu belum terdaftar</p>");
}