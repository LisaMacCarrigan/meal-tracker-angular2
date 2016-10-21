Meal Tracker
Create a meal tracking application. Users should be able to log foods they've eaten each day, including details about the meal and its number of calories. You may assume foods being logged are for a single day (you are not required to keep track of multiple days' meals).

For example:

---------
Name: "Hamburger"
Details: "Didn't get a soda or cheese on my burger!"
Calories: 354
---------

---------
Name: "Fries"
Details: "I only ate half of them."
Calories: 365
---------
As a user…

I want to log a food I have eaten by submitting a form with food name, calories and details.
I want to view a list of foods I have logged.
I want options to view all foods, only high-calorie foods (more than 500 calories), or only lower-calorie foods (less than 500 calories).
I want to click a food to edit its name, details or calories (in case I decide to pretend my fries were 100 calories instead of 365).
Further Exploration
If you have completed all objectives, consider additional features such as:

Custom SASS styling with corresponding Gulp tasks to compile.
Display of the total number of calories consumed in a day, and/or the average number of calories consumed in a day.
Add a property that records when each food was eaten. The user could enter a date and time, or the app can generate a timestamp.
Expand the application to display multiple days of food logs. Group the food entries by day. Then include a component to display the total calories for whichever day the user selects.
Add a new master component to average the total calories consumed per day so that the user can figure out how much exercise they should be getting on a regular basis.
Objectives
Your code will be reviewed for the following objectives:

Does the application work as expected?
Is the app structured in a logical way, including a model, multiple components and TypeScript? (Interfaces are not required).
Can the application create and edit new instances of a model?
Does the app allow you to view a list of foods?
Can the application filter foods based on their calories?
Are dependencies managed with npm and Bower?
Does the app include a gulp-based asset pipeline with a development server?
Does code meet standards from previous weeks?
Is the project in a presentable, portfolio-quality state?
Project demonstrates understanding of concepts covered this week. If prompted, you are able to discuss your code with an instructor using correct terminology.
