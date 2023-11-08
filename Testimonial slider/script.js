const testimonial = [
    {
        name:"virat kohli...",
        photourl:"https://www.cricbuzz.com/a/img/v1/152x152/i1/c332891/virat-kohli.jpg",
        text: "A spunky, chubby teenager with gelled hair shot to fame after leading India to glory in the Under-19 World Cup at Kuala Lumpur in early 2008. In an Indian team filled with saint-like icons worthy of their own hagiographies, Virat Kohli, with his most un-Indian, 'bad-boy' intensity, would clearly be an outcast."
    },
    {
        name:"rohit sharma...",
        photourl:"https://www.cricbuzz.com/a/img/v1/152x152/i1/c352478/rohit-sharma.jpg",
        text:"Talent , an apparently heartening term that has followed Rohit Sharma around like a shadow; even haunted him at times. It seems to be a burden that the cricketing fraternity has enforced upon him and, after more than a decade in the national setting, he has been weighed down by the label."
    },
    {
        name:"Surya...",
        photourl:"https://www.cricbuzz.com/a/img/v1/152x152/i1/c352481/suryakumar-yadav.jpg",
        text:"Suryakumar Yadav made his first-class debut against Delhi during the 2010-11 Ranji season. He had a great start to his career as he top-scored for Mumbai with a ell compiled 73 and was the only player to score a fifty in Mumbai's first innings. Since then, he has been a regular member of the side and has scored reasonably well in every season."
    }
];

const img1 = document.querySelector("img")
const Text1 = document.querySelector(".text")
const username1 = document.querySelector(".username")
let idx=0;
function updatetestimonial(){
    const {name,photourl,text}=testimonial[idx];
    img1.src=photourl;
    Text1.innerHTML=text;
    username1.innerHTML=name;
    idx++
    if(idx==testimonial.length){
        idx=0
        
    }
    setTimeout(function(){
       updatetestimonial();
    },2000)

}

updatetestimonial();
