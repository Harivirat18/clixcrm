
// clickable function

var close = document.getElementById("close");
var ham = document.getElementById("ham");
var mobile = document.getElementById("mobile");

// for bar button

ham.addEventListener("click", function () {
    if (mobile.style.display === "none" || mobile.style.display === "") {
        mobile.style.display = "block";
        ham.style.display = "none";
        close.style.display = "block";
    }
});

// for close button

close.addEventListener("click", function () {
    mobile.style.display = "none";
    close.style.display = "none";
    ham.style.display = "block";
});

// scroll sticky function

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    var scrollThreshold = 100; // Adjust this value as needed

    if (window.scrollY > scrollThreshold) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
})


var toggleBtns = document.querySelectorAll(".toggle-btn");
var toggleSymbols = document.querySelectorAll(".toggle-symbol");

//  toggle button using forEach
toggleBtns.forEach(function (toggleBtn, index) {
    // event listener to each toggle button
    toggleBtn.addEventListener("click", function () {
        // Toggle the visibility of the corresponding toggle symbol
        toggleSymbols[index].classList.toggle("hidden");
    });
});



// testimonial slide

let data = [
    {
        id: 1,
        name: "John Phill",
        role: "Project Executive",
        text: " Simple and easy to use CRM tool, its a great tool for SMEs. Our sales teem is finding it very vivid tool for lead management. Thanks to ClixCRM team, keep up your very good team work.",
    },
    {
        id: 2,
        name: "Joseph Ken",
        role: "Project Manager",
        text: "ClixCRM software has revolutionized the way businesses interact with their customers. It allows organizations to manage and analyze customer interactions and data throughout the customer life cycle. From sales and marketing to customer service, ClixCRM software streamlines business processes, enhances customer satisfaction, and drives revenue growth.",
    },
    {
        id: 3,
        name: "Mike John",
        role: "CEO of Zlimo",
        text: "ClixCRM software has proven to be a valuable tool for businesses of all sizes and industries. It helped our organization build stronger relationships with our valuable customers, boost productivity, and increase revenue.",
    },
];

// getting element

let leftBtn = document.getElementById("left-btn");
let rightBtn = document.getElementById("right-btn");
let Name = document.getElementById("name");
let Role = document.getElementById("role");
let Text = document.getElementById("text");
let index = 0;

window.addEventListener("DOMContentLoaded",function () {
    let testimonial = data[0];
    load(testimonial);
});

// load content from html doc

function load(data) {
    Name.textContent = data.name;
    Role.textContent = data.role;
    Text.innerHTML = `<i class="fa fa-quote-left text-gray-400 mr-2.5" aria-hidden="true"></i>${data.text}<i class="fa fa-quote-right ml-2.5 text-gray-400 font-extrabold" aria-hidden="true"></i>`;
};

// next slide

    rightBtn.addEventListener("click", function() {
        index++;
        if (index >= data.length) {
            index = 0;
        }
        load(data[index]);
    });

// previous slide

    leftBtn.addEventListener("click", function() {
        index--;
        if (index < 0) {
            index = data.length - 1;
        }
        load(data[index]);
    });

// autoplay slider

function autoload () {
    index++;
    if (index >= data.length) {
        index = 0;
    }
    if (index < 0) {
        index = data.length - 1;
    }
    load(data[index]);
};

setInterval(autoload, 5000);

