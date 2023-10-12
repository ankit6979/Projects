$('#awesomeBtn').hover(
    function(){
        $(this).html("<strong>location:</strong>Your house");
    },
    function(){
        $(this).html("<strong>location:</strong>Tree house adoption centre");
    }
)

var students= [
    {name : "Maddy"},
    {name : "Ankit"},
    {name : "Ravi"}
];

students.forEach(function(student){
    console.log(student.name);
});