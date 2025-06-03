# 🎓 KUET GPA Calculator

A responsive, interactive GPA calculator tailored for KUET (Khulna University of Engineering & Technology) students. Easily calculate your GPA by entering your course information, credit hours, and marks — get instant results with a clean, Bootstrap-powered UI.

---

## 🚀 Features

- 📌 Dynamic form generation based on the number of courses entered
- 📊 GPA calculation using KUET’s 240-mark grading system
- 🎨 Clean and responsive UI (Bootstrap 4 + Google Fonts)
- 📱 Mobile-friendly design
- 💡 Shows grade, credit, and GPA instantly in a structured table

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3** (Custom + Bootstrap 4)
- **JavaScript (Vanilla JS)**
- **Google Fonts:** Poppins, Playfair Display, Tinos
- **Bootstrap CDN**

---

## 🧠 How It Works

1. The user enters the number of courses.
2. Input fields are generated dynamically for:
   - Course name
   - Credit hours
   - Marks (out of 300)
3. On form submission:
   - GPA is calculated using credit-weighted grade points
   - Grades are assigned based on mark thresholds
   - A table is rendered showing all course data and grades

---

## 📊 Grading Scale

| Marks (out of 240) | Grade | Grade Point |
|--------------------|-------|-------------|
| 240 and above      | A+    | 4.00        |
| 225 - 239          | A     | 3.75        |
| 210 - 224          | A−    | 3.50        |
| 195 - 209          | B+    | 3.25        |
| 180 - 194          | B     | 3.00        |
| 165 - 179          | B−    | 2.75        |
| 150 - 164          | C+    | 2.50        |
| 135 - 149          | C     | 2.25        |
| 120 - 134          | D     | 2.00        |
| Below 120          | F     | 0.00        |

---

## 🖥️ File Structure

```
KUET-GPA-Calculator/
├── index.html          # Main HTML layout
├── style.css           # Custom styling and background colors
├── app.js              # Dynamic logic and GPA computation
└── README.md           # Project documentation
```

---

## 🧪 How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/kuet-gpa-calculator.git
   cd kuet-gpa-calculator
