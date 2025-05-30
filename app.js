const countInput = document.querySelector("#course");
const form = document.querySelector("#gradeForm");
const enter = document.querySelector(".enter");

enter.addEventListener("click", function(e){
    e.preventDefault();
    take();
});

function take() {
    form.innerHTML = "";
    const count=parseInt(countInput.value);
    for (let i = 1; i <= count; i++) {
        const label = document.createElement("label");
        label.textContent = `Marks for Course ${i}: `;
        const input = document.createElement("input");
        input.type = "number";
        input.name = `Course${i}`;
        input.required = true;
        input.min = 0;
        input.max = 100;
        input.classList.add("form-control");
        const wrapper=document.createElement("div");
        wrapper.classList.add("form-group", "mb-3");
        wrapper.appendChild(label);
        wrapper.appendChild(input);
        form.appendChild(wrapper);
    }
    const btn = document.createElement("button");
    btn.classList.add("btn","btn-primary","mb-2");
    btn.textContent = "Enter";
    form.appendChild(btn);
}