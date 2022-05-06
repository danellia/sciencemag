db.articles.insertMany([
    {
        "title": "Molecular kitchen",
        "authors": ["Vincent French", "Caius Weston"],
        "publication_date": new Date("2005.07.18"),
        "contents": "Molecular gastronomy is the scientific approach of nutrition from primarily the perspective of chemistry.",
        "tags": ["cooking", "chemistry"],
        "comments": [
            {
                "name": "Ira Roche",
                "message": "Awesome! I learned a lot from this article.",
                "rating": 10
            },
            {
                "name": "Lucien Hancock",
                "message": "Didn't understand a lot from this though I'm an experienced scientist.",
                "rating": 6
            }
        ]
    },
    {
        "title": "Virtue names in history",
        "authors": ["Kiara Crouch", "Suraj Mccoy", "Mai Frye"],
        "publication_date": new Date("2017.12.07"),
        "contents": "Virtue names, also known as grace names, are used as personal names in a number of cultures.",
        "tags": ["history", "philology"],
        "comments": [
            {
                "name": "Dane Hunt",
                "message": "This was a rather interesting article.",
                "rating": 9
            }
        ]
    },
    {
        "title": "The Genius of Berserk Manga",
        "authors": ["Rylee Connor", "Daisy-May Drew"],
        "publication_date": new Date("1999.01.22"),
        "contents": "Berserk is a Japanese manga series written and illustrated by Kentaro Miura.",
        "tags": ["manga", "graphics", "art"],
        "comments": [
            {
                "name": "Jedd Kaufman",
                "message": "100% agree",
                "rating": 10
            },
            {
                "name": "Walter Fritz",
                "message": "I wouldn't say Griffith is a good character. Anyways, nice work.",
                "rating": 9
            },
            {
                "name": "Arfa Meyers",
                "message": "I need more articles like this",
                "rating": 10
            },
            {
                "name": "Khalid Butler",
                "message": "The best manga in history, but I can't agree with the authors in some points.",
                "rating": 8
            }
        ]
    },
    {
        "title": "The applications of the least squares method",
        "authors": ["Scarlett-Rose Burton", "Sienna Lowery", "Anaiya Schneider"],
        "publication_date": new Date("2006.05.05"),
        "contents": "The method of least squares is a standard approach in regression analysis to approximate the solution of overdetermined systems.",
        "tags": ["mathematics", "regression analysis"],
        "comments": [
            {
                "name": "Emrys Sanders",
                "message": "Didn't find anything new for myself here.",
                "rating": 5
            },
            {
                "name": "Jake Nairn",
                "message": "Props to the authors for rather comprehensive explanations for such a math dummy like me!",
                "rating": 8
            }
        ]
    },
    {
        "title": "9 questions about Books of Chronicles",
        "authors": ["Kavita Hudson", "Haiden Cantrell"],
        "publication_date": new Date("2012.09.26"),
        "contents": "The Book of Chronicles is a book in the Hebrew Bible, found as two books (1–2 Chronicles) in the Christian Old Testament.",
        "tags": ["religion", "judaism"],
        "comments": [
            {
                "name": "Julie Atkins",
                "message": "You are questioning the book too much. It's not the point of religion.",
                "rating": 4
            }
        ]
    },
    {
        "title": "Crab Rangoon as an example of ska punk",
        "authors": ["Jerome Drake", "Kavita Hudson"],
        "publication_date": new Date("2011.11.11"),
        "contents": "Crab Rangoon is the third studio album by American ska punk band MU330, released on Asian Man Records in 1997.",
        "tags": ["music", "art", "ska punk"],
        "comments": [
            {
                "name": "Tymon Mann",
                "message": "A good choice for an album to present in an article, it's my favorite.",
                "rating": 9
            },
            {
                "name": "Genevieve Stewart",
                "message": "Agree with Tymon!",
                "rating": 9
            }
        ]
    },
    {
        "title": "The Women's Peace Crusade movement chronicles",
        "authors": ["George Wu", "Dixie Wolf", "Adem Werner"],
        "publication_date": new Date("2010.02.09"),
        "contents": "The Women's Peace Crusade was a grassroots socialist movement that spread across Great Britain between 1916 and 1918.",
        "tags": ["history", "movement"],
        "comments": [
            {
                "name": "Reon Byers",
                "message": "Really? Why this exact movement to tell about? It's been known to have a problematic leader.",
                "rating": 3
            }
        ]
    }
])