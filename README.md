# Prime Instructor Code Challenge

## Implementation Notes

I approached this project as if I were going to build it with a group of students. There are certainly things I would add or do differently if it were meant for production. The code is very much sequential, and I feel that is better for students to understand before working on refactoring code and making it DRY. While working on the project, I believe I spent more time thinking about what I would not put into this project since this would be a presentation for students.

Here are a couple other items I had to stop myself from adding:

- Accessibility concerns and aria tags
- Form validation
- I originally used array filter and reduce, but realized that would most likely be too advanced for the students when they are working on this project. I replaced them with for of loops instead.

It was important to me to use semantic HTML when building this project. Semantic HTML is important to learn, but it can be difficult to figure out what element is appropriate to use. Giving students examples of semantic HTML early should help them start to see patterns and understand it is something that they should use.

I enjoy working with and writing custom CSS. However for styling this project, I thought it would easier to use an existing CSS library. I don't remember doing too much custom CSS when I was a student at Prime. I remember we mostly relied on styling and component libraries. In this project, I used the CSS only components from the Materialize library. There is no perfect CSS only framework, but this one worked well enough and had the components that I wanted. There are a few minor style overrides in the style.css file.

If I were to do a code along presentation of this project, I would probably present it in this order

- Setup the HTML, CSS, and Javascript files
- Create an initial layout of the screen using semantic HTML based on the wire frame
- Add the Materialize CSS library apply some of the initial component styles (cards, inputs)
- Walk the students through creating an outline of functionality requirements for adding a new employee and deleting an employee
- Begin to fill functionality outline with Javascript
- After the core functionality is implemented, review the UI and see if the students think there is anything we should change (currency formatting, layout, etc.)
- Make final updates for styles and any improvements students want to see

## Welcome

This application challenge is intended to give you a chance to demonstrate your technical skills using HTML, CSS, and JavaScript. This is a similar challenge given to students early on in the program so as such, it is intentionally simplified and not expected to be a production-ready application.

Unit tests and authentication are certainly great, but not here. Please focus on the functional components and providing solid code **you could use to teach beginning programmers.**

## Do

- Follow the instructions below
- Demonstrate what you feel to be best practices in terms of code style and organization
- Consider the usability of your application
- Use CSS libraries/frameworks as you like (CSS only!)
- Have Fun!

## Do Not

- Invent features
- Use any JavaScript frameworks or libraries
- Include any build tools, unit tests, or authentication layer

## The Client Side Salary Calculator

Create an application that manages employee salaries and adds salaries up to report monthly costs. This is to be a client-side only application - no server or database.

![Wireframe](salary-calc-wireframe.png)

### Functional Requirements

The application needs to be able to gather the information (see wireframe), store it, and display it back on the DOM. The user needs to get a total summary of the MONTHLY salary cost. If the total monthly cost exceeds $20,000, notify the user in some way.

Users need to be able to delete each entry and the monthly calculation needs to reflect it.

### Files Provided

No files have been provided and this repo is private. Please clone this repo and push to your own GitHub repo, do NOT fork.

---

## Challenge Submission

Ensure your GitHub repo has your final work. Email your contact when you have finished.
