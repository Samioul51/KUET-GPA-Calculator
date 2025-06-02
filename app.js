const countInput = document.querySelector("#course");
const form = document.querySelector("#gradeForm");
const enter = document.querySelector(".enter");

enter.addEventListener("click", function (e) {
    e.preventDefault();
    take();
});

function take() {
    form.innerHTML = "";
    const count = parseInt(countInput.value);
    for (let i = 1; i <= count; i++) {
        const labelCourse = document.createElement("label");
        labelCourse.textContent = `Course ${i} Name: `;
        const labelCredit = document.createElement("label");
        labelCredit.textContent = `Course ${i} Credit Hours: `;
        const labelMarks = document.createElement("label");
        labelMarks.textContent = `Marks for Course ${i}: `;
        const inputCourse = document.createElement("input");
        inputCourse.type = "string";
        inputCourse.name = `Course${i}`;
        inputCourse.placeholder = "Enter Course Name";
        inputCourse.required = true;
        inputCourse.classList.add("form-control");
        const inputCredit = document.createElement("input");
        inputCredit.type = "number";
        inputCredit.name = `CourseCredit${i}`;
        inputCredit.placeholder = "Enter Credit Hours";
        inputCredit.required = true;
        inputCredit.classList.add("form-control");
        const inputMarks = document.createElement("input");
        inputMarks.type = "number";
        inputMarks.name = `CourseMark${i}`;
        inputMarks.placeholder = "Enter Marks";
        inputMarks.required = true;
        inputMarks.min = 0;
        inputMarks.max = 100;
        inputMarks.classList.add("form-control");
        const wrapper1 = document.createElement("div");
        wrapper1.classList.add("form-group", "mb-3");
        wrapper1.appendChild(labelCourse);
        wrapper1.appendChild(inputCourse);
        const wrapper2 = document.createElement("div");
        wrapper2.classList.add("form-group", "mb-3");
        wrapper2.appendChild(labelCredit);
        wrapper2.appendChild(inputCredit);
        const wrapper3 = document.createElement("div");
        wrapper3.classList.add("form-group", "mb-3");
        wrapper3.appendChild(labelMarks);
        wrapper3.appendChild(inputMarks);
        form.appendChild(wrapper1);
        form.appendChild(wrapper2);
        form.appendChild(wrapper3);
    }
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-primary", "mb-2", "formButton");
    btn.textContent = "Enter";
    form.appendChild(btn);
    const dataset=[];
    btn.addEventListener('click',function(e){
        e.preventDefault();
        for(let i=1;i<=count;i++){
            const courseName=form.querySelector(`[name="Course${i}"]`).value;
            const courseCredit=parseFloat(form.querySelector(`[name="CourseCredit${i}"]`).value);
            const courseMarks=parseFloat(form.querySelector(`[name="CourseMark${i}"]`).value);
            dataset.push({
                name:courseName,
                credit:courseCredit,
                marks:courseMarks
            });
        }
        const tab=document.querySelector(".table");
        const tabHead= document.createElement("thead");
        const headRow=document.createElement("tr");
        const num=document.createElement('td');
        const coursename=document.createElement('td');
        const coursecredit=document.createElement('td');
        const coursegrade=document.createElement('td');
        num.textContent="No.";
        coursename.textContent="Course Name";
        coursecredit.textContent="Credit Hours";
        coursegrade.textContent="Grade";
        headRow.appendChild(num);
        headRow.appendChild(coursename);
        headRow.appendChild(coursecredit);
        headRow.appendChild(coursegrade);
        tabHead.appendChild(headRow);
        tab.appendChild(tabHead);
        
    });
    
}