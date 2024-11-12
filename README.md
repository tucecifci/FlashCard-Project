# Flash Cards

Hello everybody! 👋 </br>
✨ Welcome to the Flash Card! This is a simple, interactive flash card application built with React, designed to help users study and memorize information through a question-answer format.
## 👀 Overview

### 📷 Screenshot

![screencapture-localhost-5173-2024-11-12-13_12_03](https://github.com/user-attachments/assets/f187640a-7e37-40c3-a715-8f3e49a74057)
![screencapture-localhost-5173-2024-11-12-13_12_18](https://github.com/user-attachments/assets/dcb9072c-b974-43f5-9962-e442ecbf1ffe)


### 🔗 Links


## My process

### Technologies Used
- React: For building the UI components.
- JavaScript (ES6): For core application logic.
- CSS: For styling the application.


### 🧠 What I learned

While building this Flash Card Application, I gained valuable experience and knowledge in the following areas:

- React Basics: Developed a better understanding of React components, props, and state management, allowing for a modular and interactive application structure.
- Component Lifecycle: Explored the lifecycle methods of React to manage component updates and user interactions effectively.
- Handling User Input: Implemented forms for creating and editing flash cards, learning how to manage user input and form validation in React.
- Conditional Rendering: Used conditional rendering techniques to display different UI elements based on the application’s state, enhancing user experience.
- CSS Styling: Practiced styling React components with CSS to create a clean and responsive layout.
- Project Structuring: Organized the project files and folders to maintain a clean and scalable structure, which improved the readability and maintainability of the code.
- Basic Git & GitHub Usage: Improved skills in using Git for version control and GitHub for code hosting and collaboration.

```jsx
 function FlashCard({questions} ) {
    const [selectedId, setselectedId] = useState(null);
function handleClick(id){
setselectedId(id !== selectedId ? id : null);
}

  return (
  <div className='flashcards'>
    {questions.map((question) => (
        <div key={question.id}
        onClick={() => handleClick(question.id)}
        className={question.id === selectedId ? "selected" : ""}>
            <p>
                {question.id === selectedId ? question.answer : question.question} 
            </p>
        </div>
    ))}
  </div>
  )
}

```

### 👩🏼‍💻 Features

- User-Friendly Interface: Easy-to-use interface for smooth navigation between flash cards.
- Add/Edit/Delete Cards: Users can create new flash cards, edit existing ones, or delete them as needed.
- Random Card Display: Option to view flash cards in random order for a more challenging experience.
- Progress Tracking: Keeps track of answered and unanswered questions to measure learning progress.

### 🤔 Installation

1. Clone the repesitory
```
git clone https://github.com/yourusername/flash-card-app.git
```
2. Navigate to the project directory:

```
cd flash-card-app
```
3. Install dependencies:
```
npm install
```
4. Start the application:
```
npm start
```
5. Open http://localhost:3000 to view it in the browser.


## 🏳️‍🌈 Author

- Tuğçe Çifci - [@tucecifci](https://github.com/tucecifci)
- Frontend Mentor - [@tucecifci](https://www.frontendmentor.io/profile/tucecifci)
