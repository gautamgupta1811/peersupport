document.addEventListener("DOMContentLoaded", function () {
    let EducationDropdown = document.querySelector(".EducationDropdown");
    let WorkDropdown = document.querySelector(".WorkDropdown");
    let InternshipsDropdown = document.querySelector(".InternshipsDropdown");
    let CourseDropdown = document.querySelector(".CourseDropdown");
    let SocialDropdown = document.querySelector(".SocialDropdown");
    let ExamDropdown = document.querySelector(".ExamDropdown");

    let EducationForm = document.querySelectorAll(".EducationForm");
    let WorkForm = document.querySelectorAll(".WorkForm");
    let InternshipsForm = document.querySelectorAll(".InternshipsForm");
    let CourseForm = document.querySelectorAll(".CourseForm");
    let SocialForm = document.querySelectorAll(".SocialForm");
    let ExamForm = document.querySelectorAll(".ExamForm");

    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let addButtons = document.querySelectorAll(".add");

    function toggleForms(dropdown, forms) {
        console.log("forms")
        console.log(forms)
        forms.forEach((form) => {
            console.log("form")
            console.log(form)
            form.classList.toggle("hide");
        });

        let chevronIcon = dropdown.querySelector(".fa-solid");
        chevronIcon.classList.toggle("fa-chevron-down");
        chevronIcon.classList.toggle("fa-chevron-right");
    }

    function dropdownClickHandler(dropdown, forms) {
        return function () {
            toggleForms(dropdown, forms);
        };
    }

    EducationDropdown.addEventListener("click", dropdownClickHandler(EducationDropdown, EducationForm));

    let workDropdownClickHandler = dropdownClickHandler(WorkDropdown, WorkForm);
    WorkDropdown.addEventListener("click", workDropdownClickHandler);

    let InternDropdownClickHandler = dropdownClickHandler(InternshipsDropdown, InternshipsForm);
    InternshipsDropdown.addEventListener("click", InternDropdownClickHandler);

    let CourseDropdownClickHandler = dropdownClickHandler(CourseDropdown, CourseForm);
    CourseDropdown.addEventListener("click", CourseDropdownClickHandler);

    let SocialDropdownClickHandler = dropdownClickHandler(SocialDropdown, SocialForm);
    SocialDropdown.addEventListener("click", SocialDropdownClickHandler);

    let ExamDropdownClickHandler = dropdownClickHandler(ExamDropdown, ExamForm);
    ExamDropdown.addEventListener("click",ExamDropdownClickHandler );


    function plusclick() {
        let newNode = document.createElement("input");
        let br = document.createElement("br");
        let parentExtra = this.closest('.extra');
        parentExtra.appendChild(newNode);
        parentExtra.appendChild(br);
    }

    // Attach event listener to all elements with class 'plus'
    let plusButtons = document.querySelectorAll('.plus');
    plusButtons.forEach((button) => {
        button.addEventListener('click', plusclick);
    });

    // Add event listener to all checkboxes
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', function () {
            let hide = this.closest('.no');
            if (this.checked) {
                hide.classList.add('hide');
            } else {
                hide.classList.remove('hide');
            }
        });
    });

    // Add event listener to all "Add" buttons
    addButtons.forEach((addButton) => {
        addButton.addEventListener('click', function () {
            WorkDropdown.removeEventListener("click", workDropdownClickHandler);
            InternshipsDropdown.removeEventListener("click", InternDropdownClickHandler);
            CourseDropdown.removeEventListener("click",CourseDropdownClickHandler);
            SocialDropdown.removeEventListener("click",SocialDropdownClickHandler);
            ExamDropdown.removeEventListener("click",ExamDropdownClickHandler);

            let parent = this.closest('.no');
            let clone = parent.querySelector('.clone');
            let newForm = clone.cloneNode(true);
            parent.appendChild(newForm);

            // Attach event listener to the 'plus' button in the cloned form
            let newPlusButton = newForm.querySelector('.plus');
            if (newPlusButton) {
                newPlusButton.addEventListener('click', plusclick);    
            }

            let newWorkForm = document.querySelectorAll(".WorkForm");
            let newInternshipsForm = document.querySelectorAll(".InternshipsForm");
            let newCourseForm = document.querySelectorAll(".CourseForm");
            let newSocialForm = document.querySelectorAll(".SocialForm");
            let newExamForm = document.querySelectorAll(".ExamForm");



            workDropdownClickHandler = dropdownClickHandler(WorkDropdown, newWorkForm);
            WorkDropdown.addEventListener("click", workDropdownClickHandler);
            
            InternDropdownClickHandler = dropdownClickHandler(InternshipsDropdown, newInternshipsForm);
            InternshipsDropdown.addEventListener("click", InternDropdownClickHandler);
            
            CourseDropdownClickHandler = dropdownClickHandler(CourseDropdown, newCourseForm);
            CourseDropdown.addEventListener("click", CourseDropdownClickHandler);

            SocialDropdownClickHandler = dropdownClickHandler(SocialDropdown, newSocialForm);
            SocialDropdown.addEventListener("click", SocialDropdownClickHandler);

            ExamDropdownClickHandler = dropdownClickHandler(ExamDropdown, newExamForm);
            ExamDropdown.addEventListener("click", ExamDropdownClickHandler);
        });
    });
});
