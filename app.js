function showChapter(event){
    event.preventDefault();
    
let b=document.querySelector("#firstChapter");
    b.classList.toggle("display");

}
function showFirstBook(event){
    event.preventDefault();
   
    let book=document.querySelector("#firstBook");
    book.classList.toggle("display");
    
}
let a=document.querySelector("#firtChapterButon");
a.addEventListener("click",showChapter);

let first=document.querySelector("#firstBookButton");
first.addEventListener("click", showFirstBook);

//second book////////////////////////////////////////////////
function showChaptertwo(event){
    event.preventDefault();
let b=document.querySelector("#secondChapter");
    b.classList.toggle("display");

}
function showSecondBook(event){
    event.preventDefault();
    let book=document.querySelector("#secondBook");
    book.classList.toggle("display");
    
}
let b=document.querySelector("#secondChapterButon");
b.addEventListener("click",showChaptertwo);

let second=document.querySelector("#secondBookButton");
second.addEventListener("click", showSecondBook);
//third///////////////////////////////////////////////
function showChapterThree(event){
    event.preventDefault();
let c=document.querySelector("#thirdChapter");
    c.classList.toggle("display");

}
function showThirdBook(event){
    event.preventDefault();
    let bookThree=document.querySelector("#thirdBook");
    bookThree.classList.toggle("display");
}
let chapterThree=document.querySelector("#thirdChapterButon");
chapterThree.addEventListener("click",showChapterThree)

let third=document.querySelector("#thirdBookButton");
third.addEventListener("click", showThirdBook);