//QUESTION 1
const ARTICLE_TITLES = [
    "Streaming wars drive media groups to spend more than $100bn on new content",
    "Amazon Prime Video India country head: streaming is driving a TV revolution",
    "Aerospace chiefs prepare for bumpy ride in recovery of long-haul flights",
    "British companies look to muscle in on US retail investing boom",
    "Libor to take firm step towards oblivion on New Year's Day",
    "Audit profession unattractive to new recruits, says PwC boss",
    "Chinese social media users blast Elon Musk over near miss in space",
    "Companies raise over $12tn in 'blockbuster' year for global capital markets",
    "The three questions that dominate investment",
    "Brussels urges Chile's incoming president to endorse EU trade deal",
];

// Write a function which takes the list of article titles as a parameter,
//  and returns the sum of all words in all the titles.
//  (you can assume words will always be seperated by a space)


//QUESTION 2
const STOCKS = [
	{
		ticker: "aapl",
		pricesLast5Days: [179.19, 180.33, 176.28, 175.64, 172.99],
	},
	{
		ticker: "msft",
		pricesLast5Days: [340.69, 342.45, 334.69, 333.2, 327.29],
	},
	{
		ticker: "amzn",
		pricesLast5Days: [3384.44, 3393.39, 3421.37, 3420.74, 3408.34],
	},
	{
		ticker: "googl",
		pricesLast5Days: [2951.88, 2958.13, 2938.33, 2928.3, 2869.45],
	},
	{
		ticker: "tsla",
		pricesLast5Days: [1101.3, 1093.94, 1067.0, 1008.87, 938.53],
	},
];

// Write a function which takes the stocks array as a parameter,
//  and returns the largest positive price change for any stock.
//  (the pricesLast5Days arrays contain stock prices in chronological order)


// QUESTION 3
// Imagine you are a teacher and your students have taken a test.
// The tests are marked with one of the following grades: A+, A, B, C, D, or F
// You want to find out the average score of the class as a number.
// For this, you can assume A+ is worth 100, A is 90, B is 80,
//      C is 70, D is 60 and F is 50.
// Write a function which,
//      given an array of grades (which are either A+, A, B, C, D, or F)
//      returns the average score of the class as a number


// QUESTION 4
// Months are represented as three-letter strings
//      ("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul".....).
// Write a function solution that, 
//      given a string S representing the month
//      and an integer K, 
//      returns the month of the year that is K months later.
// For example,
//  Given S = "Mar" and K = 2, the function should return "May".
//  Given S = "Dec" and K = 23, the function should return "Nov".

// QUESTION 5
// The month and year are represented by an object,
//      For example, { month: 'Jan', year: 2023 }
// Write a function which,
//      Given an object representing the month and year (like above)
//      and a number n,
//      returns the month and year which is n months later 
//      using the same type of object
// For example,
//  Given { month: 'Jan', year: 2023 } and n = 25,
//      the function should return { month: 'Mar', year: 2025 }