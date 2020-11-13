/** ============================== Toggle menu Navbar =============================== */

let toggleBtn = document.querySelector(".links-container .toggle-menu");

let tLink = document.querySelector(".links-container .links");

toggleBtn.onclick = function (e) {
  // Stop Propagation
  e.stopPropagation();

  toggleBtn.classList.toggle("menu-active");

  // tLink.forEach((ul) => {
  //     ul.classList.toggle("open");
  // });

  // // Toggle Class 'menu-active' On Button
  // this.classList.toggle('menu-active');

  // Toggle Class 'open' On Links
  tLink.classList.toggle("open");
};

// Click Anywhere Outside Menu And Toggle Button

// document.addEventListener('click', (e) => {
//     if (e.target !== toggleBtn && e.target !== tLink) {
//         // Check If Menu Is Open

//         if (tLink.classList.contains('open')) {
//             // Toggle Class 'menu-active' On Button
//             toggleBtn.classList.toggle('menu-active');

//             // Toggle Class 'open' On Links
//             tLink.classList.toggle('open');
//         }
//     }
// });

// Stop Propagation On Menu
tLink.onclick = function (e) {
  // Stop Propagation
  e.stopPropagation();
};
