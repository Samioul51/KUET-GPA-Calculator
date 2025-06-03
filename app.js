const countInput = document.querySelector("#course");
const form = document.querySelector("#gradeForm");
const enter = document.querySelector(".enter");

countInput.required = true;
countInput.min = 1;
countInput.max = 100;

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
        inputCredit.min = 0;
        inputCredit.max = 10;
        inputCredit.classList.add("form-control");
        const inputMarks = document.createElement("input");
        inputMarks.type = "number";
        inputMarks.name = `CourseMark${i}`;
        inputMarks.placeholder = "Enter Marks";
        inputMarks.required = true;
        inputMarks.min = 0;
        inputMarks.max = 300;
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
    
    btn.addEventListener('click',function(e){
        e.preventDefault();

        const dataset=[];

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
        tab.innerHTML="";
        const tabHead= document.createElement("thead");
        const headRow=document.createElement("tr");
        const num=document.createElement('th');
        const coursename=document.createElement('th');
        const coursecredit=document.createElement('th');
        const coursegrade=document.createElement('th');
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

        let totalCredit=0,qualityPoints=0;
        const tabBody=document.createElement("tbody");
        for(let i=0;i<count;i++){
            const newRow=document.createElement("tr");
            const cellnum=document.createElement("td");
            const cellcoursename=document.createElement("td");
            const cellcoursecredit=document.createElement("td");
            const cellcoursegrade=document.createElement("td");
            const obj=dataset[i];
            cellnum.textContent=`${i+1}`;
            cellcoursename.textContent=obj.name;
            cellcoursecredit.textContent=obj.credit;
            const currentscore=parseFloat(obj.marks);
            const currentcredit=parseFloat(obj.credit);
            totalCredit+=currentcredit;
            if(currentscore>=240){
                cellcoursegrade.textContent="A+";
                qualityPoints+=(currentcredit*4.0);
            }
            else if(currentscore>=225){
                cellcoursegrade.textContent="A";
                qualityPoints+=(currentcredit*3.75);
            }
            else if(currentscore>=210){
                cellcoursegrade.textContent="A-";
                qualityPoints+=(currentcredit*3.5);
            }
            else if(currentscore>=195){{
                cellcoursegrade.textContent="B+";
                qualityPoints+=(currentcredit*3.25);
            }}
            else if(currentscore>=180){
                cellcoursegrade.textContent="B";
                qualityPoints+=(currentcredit*3.00);
            }
            else if(currentscore>=165){
                cellcoursegrade.textContent="B-";
                qualityPoints+=(currentcredit*2.75);
            }
            else if(currentscore>=150){
                cellcoursegrade.textContent="C+";
                qualityPoints+=(currentcredit*2.50);
            }
            else if(currentscore>=135){
                cellcoursegrade.textContent="C";
                qualityPoints+=(currentcredit*2.25);
            }
            else if(currentscore>=120){
                cellcoursegrade.textContent="D";
                qualityPoints+=(currentcredit*2.00);
            }
            else if(currentscore<120){
                cellcoursegrade.textContent="F";
                qualityPoints+=(currentcredit*0.0);
            }
            newRow.appendChild(cellnum);
            newRow.appendChild(cellcoursename);
            newRow.appendChild(cellcoursecredit);
            newRow.appendChild(cellcoursegrade);
            tabBody.appendChild(newRow);
            
        }
        let gpa=(qualityPoints/totalCredit).toFixed(2);
        const resultRow=document.createElement("tr");
        const gpaIs=document.createElement("td");
        gpaIs.textContent="GPA is: ";
        const res=document.createElement("td");
        res.textContent=`${gpa}`;
        resultRow.appendChild(gpaIs);
        resultRow.appendChild(res);
        tabBody.appendChild(resultRow);
        tab.appendChild(tabBody);
    });
    
}