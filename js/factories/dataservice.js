
(function(){

    /*
     * Declaring a factory service as part of the existing gotQuiz Module.
     */
    angular
        .module("gotQuiz")
        .factory("DataService", DataService);

    /*
     * Actual definition of the function used for this factory
     */
    function DataService(){
        /*
         * dataObj is used to simulate getting the data from a backend server
         * The object will hold data which will then be returned to the other
         * factory declared in js/factory/quiz.js which has this factory
         * as a dependency
         */

        var dataObj = {
            charactersData: charactersData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        // returning the dataObj to anything that uses this factory as a
        // dependency
        return dataObj;
    }

    /*
     * all of the below variables are simulating data that would typically be
     * retrieved using an HTTP call to an API endpoint.
     *
     * correctAnswers variable will be retrieved when the user has
     * finished the quiz and would be used to mark the users answers with
     * the correct answers
     *
     * the quizQuestions is an array of objects, each containing data
     * pertaining to a single question. This includes:
     *                          - The type of question: image or text
     *                          - Text of the question (aka the actual question)
     *                          - A set of 4 possible answers, either text or
     *                              images as indicated above
     *                          - a selected flag which will be used to know if
     *                              the user has selected
     *                          an answer yet.
     *                          - Whether the user got the question correct or
     *                              not
     *
     * The final charactersData variable hold the information that will be
     * displayed in the list view when the app loads. This includes the name
     * and an image of each character as well as other information such as the
     * location and the size of the characters
     *
     */

    var correctAnswers = [1, 0, 2, 2, 3, 1, 1, 3, 3, 1];

    var quizQuestions  = [
        {
            type: "text",
            text: "Who is Tysha?",
            possibilities: [
                {
                    answer: "Jaime Lannisters' lover."
                },
                {
                    answer: "Tyrion Lannisters' ex-wife"
                },
                {
                    answer: "Tywin Lannisters' wife"
                },
                {
                    answer: "Peter Baelishs' ex-lover"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What's the name of Roose Bolton wife?",
            possibilities: [
                {
                    answer: " Fat Walda Frey"
                },
                {
                    answer: "Shae"
                },
                {
                    answer: "Ygritte"
                },
                {
                    answer: "Tyene Sand"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of the following is Not from the Stark family?",
            possibilities: [
                {
                    answer: "http://img1.wikia.nocookie.net/__cb20111220103938/gameofthrones/de/images/3/32/Robb_Stark_2.jpg"
                },
                {
                    answer: "http://cdn.idigitaltimes.com/sites/idigitaltimes.com/files/styles/image_embed/public/2014/08/28/2014/04/16/17984.jpg"
                },
                {
                    answer: "http://vignette3.wikia.nocookie.net/gameofthrones/images/3/3d/Renly_profile.jpg/revision/latest?cb=20130116113034"
                },
                {
                    answer: "http://vignette2.wikia.nocookie.net/gameofthrones/images/d/d9/Battle_of_the_Bastards_42.jpg/revision/latest/scale-to-width-down/270?cb=20160621185459"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of the following is Not Cersei Lannisters' children.",
            possibilities: [
                {
                    answer: "http://vignette4.wikia.nocookie.net/gameofthrones/images/4/4c/Joffrey-Baratheon-Profile-HD.png/revision/latest?cb=20140514092040"
                },
                {
                    answer: "http://vignette1.wikia.nocookie.net/gameofthrones/images/e/e1/Myrcella_baratheon_season2.jpg/revision/latest?cb=20120316174935"
                },
                {
                    answer: "http://vignette1.wikia.nocookie.net/gameofthrones/images/9/92/Myranda.jpg/revision/latest/scale-to-width-down/270?cb=20150427213635"
                },
                {
                    answer: "https://upload.wikimedia.org/wikipedia/en/e/e5/Tommen_Baratheon-Dean-Charles_Chapman.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who were Daenerys' parents?'",
            possibilities: [
                {
                    answer: "Duncan & Daenerys"
                },
                {
                    answer: "Aegon & Rhaenys"
                },
                {
                    answer: "Aemon & Ellia"
                },
                {
                    answer: "'Mad King' & Rhaella"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of the following does not represent Melisandre?",
            possibilities: [
                {
                    answer: "She is a Red Priestess of the Lord of Light."
                },
                {
                    answer: "Originally born a princess of Essos."
                },
                {
                    answer: "She claims to wield the power of prophecy."
                },
                {
                    answer: "She convinced Stannis to convert his household to her religion."
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Who was Jaime Lannister supposed to marry?",
            possibilities: [
                {
                    answer: "Sansa Stark"
                },
                {
                    answer: "Lysa Arryn"
                },
                {
                    answer: "Meera Reed"
                },
                {
                    answer: "Cersei Lannister"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Which of the following Dragons do not belong to Daenerys?",
            possibilities: [
                {
                    answer: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_g1iOKkBkYGLG3IAQrvlwq50Mg0x8K-N1qQYjHSLEiXw6bQEng"
                },
                {
                    answer: "http://vignette1.wikia.nocookie.net/gameofthrones/images/5/57/Rhaegal_Season_4.png/revision/latest?cb=20140617072751"
                },
                {
                    answer: "http://vignette1.wikia.nocookie.net/gameofthrones/images/c/c9/Viserion.png/revision/latest?cb=20130630201843"
                },
                {
                    answer: "https://45.media.tumblr.com/d8f1e8c51ee6843ee5e9e292f4f02021/tumblr_n5unl2H3Jp1s1qe1go1_250.gif"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of the following title/nickname is Not known as Petyr Baelish?",
            possibilities: [
                {
                    answer: "Littlefinger"
                },
                {
                    answer: "Lord protector of the Vale"
                },
                {
                    answer: "Master of Coin"
                },
                {
                    answer: "Lord of the Dreadfort"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of the following is False regarding Ramsay Bolton?",
            possibilities: [
                {
                    answer: "Ramsay Snow was Lord Roose Bolton's bastard son and the product of rape."
                },
                {
                    answer: "He was given the title Lord of the Seven Kingdom later in the chapters."
                },
                {
                    answer: "He was in a relationship with the kennelmaster's daughter, Myranda."
                },
                {
                    answer: "Ramsay kept a pack of dogs, which he employs for hunting."
                }
            ],
            selected: null,
            correct: null
        }
    ];




    var charactersData = [
        {
            name: "Jon Snow",
            image_url: "http://vignette3.wikia.nocookie.net/gameofthrones/images/4/49/Battle_of_the_Bastards_08.jpg/revision/latest/scale-to-width-down/270?cb=20160615184845",
            title: "998th Lord Commander of the Night's Watch (formerly)",
            also_known_as: "Lord Snow",
            age: "21 years old",
            origin: "Winterfell",
            description: "Jon Snow is the bastard son of Lord Eddard Stark of Winterfell, the head of House Stark and Lord Paramount of the North. Eddard never told anyone, including Jon, who his mother is - an unusual position for a bastard, as they normally know who their mother is but not their father. When Eddard left for the south to fight in Robert's Rebellion, he left his pregnant new bride Lady Catelyn Tully at Riverrun while he continued on campaign, and she later gave birth to his first lawful son, Robb Stark. When Eddard returned from the war, however, he brought with him an infant boy, which he said was his bastard son that he fathered during the war. Eddard once told King Robert Baratheon that , but he refused to elaborate any further. Eddard never even told Jon himself whether his mother was alive or dead, though he later promised that when he later returned from serving King Robert in King's Landing, he would tell Jon about her (as by then he would have reached the age of adulthood)"
        },
        {
            name: "Sansa Stark",
            image_url: "http://vignette1.wikia.nocookie.net/gameofthrones/images/c/cf/Sansa_Battle_of_Bastards_main.jpg/revision/latest/scale-to-width-down/270?cb=20160621005428",
            title: "Lady of Winterfell",
            also_known_as: "Little Dove, Little Bird, Alayne Stone (alias)",
            age: "18 years old",
            origin: "Winterfell",
            description: "Sansa was born and raised at Winterfell. She has an older brother, Robb, two younger brothers, Bran and Rickon, a younger sister, Arya and a bastard half-brother, Jon Snow. Sansa enjoys proper 'lady-like' pursuits, and is good at sewing, embroidering, poetry, singing, dancing, literature and music. When she was young she dreamed of being a regal Queen like Cersei Lannister, and that just like in the epic songs she would meet her knight in shining armor. She has inherited her mother's Tully coloring, unlike most of her siblings, and Lady Catelyn thinks Sansa will be even more beautiful than she was when she was younger. She is often seen in contrast with her sister, Arya Stark who has neither her looks nor her accomplishments in feminine activities and comportment."
        },

        {
            name: "Arya Stark",
            image_url:"http://vignette3.wikia.nocookie.net/gameofthrones/images/7/70/No_One_28.jpg/revision/latest/scale-to-width-down/270?cb=20160618003318",
            title: "Princess",
            also_known_as: "Arry, Lanna, Mercy, No One",
            age: "16 years old",
            origin: "Winterfell",
            description: "Arya rejects the notion that she must become a lady and marry for influence and power, instead she believes she can forge her own destiny. She is fascinated by warfare and training in the use of arms, and is bored by embroidery and other 'lady-like' pursuits. She takes after her father and has a quarrelsome relationship with her sister Sansa, due to their contrasting interests and personalities. She is close to her half-brother Jon, who is also something of an outcast"
        },
        {
            name: "Cersei Lannister",
            image_url: "http://vignette3.wikia.nocookie.net/gameofthrones/images/6/62/Cersei6x08.png/revision/latest/scale-to-width-down/270?cb=20160609062254",
            title: "Dowager Queen, Queen Regent, Queen",
            also_known_as: "Lady of Casterly Rock, Lady Paramount of the Westerlands ",
            age: "42 years old",
            origin: "Casterly Rock, the Westerlands",
            description: "After the end of the civil war which ended the reign of House Targaryen, Cersei was married to King Robert Baratheon, a political marriage Robert agreed to in thanks for her father's last-minute alliance. She was only 19 when she married Robert and became Queen.[7] At first, Cersei was infatuated with the handsome Robert, but their love begun to wane when he called her 'Lyanna' on their wedding night.[8] She nevertheless bore Robert a son who died shortly after his birth. Cersei was devastated by her son's loss and refused to have the body taken from her, forcing Robert to hold her while they took her son from her.[9] In time, Cersei's feelings for Robert turned to hatred and she returned to her brother as a result. Her three children, Joffrey, Myrcella and Tommen, are officially Robert's, but in reality are the products of her incestuous relationship with Jaime."
        },
        {
            name: "Tyrion Lannister",
            image_url: "http://vignette4.wikia.nocookie.net/gameofthrones/images/9/9d/Tyrion6x082.png/revision/latest/scale-to-width-down/270?cb=20160609061404",
            title: "Master of Coin",
            also_known_as: "The Imp, Halfman, The Little Lion, Demon Monkey, The Bloody Hand",
            age: "36 years old",
            origin: "Casterly Rock",
            description: "When Tyrion was 16, he met a wheelwright's daughter named Tysha on the road, apparently the victim of an attempted rape. While his brother Jaime ran off the attackers, Tyrion helped Tysha recover from the ordeal, and they became lovers. They found a drunken, wandering septon willing to marry them and briefly, they lived as husband and wife. That is, until Lord Tywin learned what had happened. Jaime confessed that he organized the incident to make his brother happy, and Tysha was actually a prostitute. As a lesson, Tywin gave Tysha to his guards, paying her a silver coin for each man and forcing Tyrion to watch. By the end, there were so many silver coins that they were running out of her hands onto the ground. Tyrion has reciprocated Tywin's hatred ever since."
        },

        {
            name: "Margaery Tyrell",
            image_url: "http://vignette4.wikia.nocookie.net/gameofthrones/images/7/7e/6x07_Margaery_Tyrell.png/revision/latest/scale-to-width-down/270?cb=20160603012912",
            title: "Queen Consort",
            also_known_as: "Lady",
            age: "22 years old",
            origin: "Highgarden",
            description: "Margaery is the only daughter of Lord Mace Tyrell and Lady Alerie Tyrell, granddaughter of Lady Olenna Tyrell and sister of Ser Loras Tyrell. Through her marriage to King Joffrey Baratheon, and later his younger brother Tommen Baratheon following his death, she is Queen Consort. Margaery was raised in privilege in the family seat and regional capital of Highgarden. She is close to her brother, Ser Loras Tyrell, the Knight of Flowers. She is also close to her handmaidens, Sera Durwell and Mira Forrester, who followed her to King's Landing from Highgarden. She is said to be as beautiful as she is clever."
        },
        {
            name: "Melisandre",
            image_url: "http://vignette4.wikia.nocookie.net/gameofthrones/images/6/60/S06E00_-_Melisandre_Cropped.png/revision/latest/scale-to-width-down/270?cb=20160603022517",
            title: "Melisandre of Asshai",
            also_known_as: "Lady Melisandre, The Red Woman",
            age: "Over 400 years",
            origin: "Asshai",
            description: "Originally born a slave in Essos centuries ago, Melisandre is a Red Priestess of the Lord of Light, a deity that is not widely worshiped in Westeros. Hailing from Asshai, a country located in the far east of the continent of Essos, she claims to wield powerful magical abilities, particularly the power of prophecy. Melisandre wears a large ruby necklace that seems to glow whenever she performs her magic. Some years ago she crossed the Narrow Sea and came to the court of Lord Stannis Baratheon on the island stronghold of Dragonstone, to preach her faith. Stannis and the majority of his household have now converted to her religion, and she has become a close adviser to Stannis himself"
        },
        {
            name: "Ramsay Bolton",
            image_url: "http://vignette2.wikia.nocookie.net/gameofthrones/images/d/d2/Ramsay_S06E09_RESZIED_FOR_INFOBOX.jpg/revision/latest/scale-to-width-down/270?cb=20160622071734",
            title: "Lord of the Dreadfort, Lord of Winterfell ",
            also_known_as: "Ramsay Snow, The Bastard of Bolton",
            age: "21 years old",
            origin: "The Dreadfort",
            description: "Ramsay Snow was Lord Roose Bolton's bastard son and the product of rape: years ago Roose discovered that a miller had wed without his permission. He had the miller hanged and raped his wife. Ramsay was born shortly afterwards, and his mother brought him to the Dreadfort, his father's castle, for Roose to acknowledge as his son. Roose very nearly killed both Ramsay and his mother, but relented upon realizing that the child was indeed his.Ramsay was Roose's only living child following the death of Domeric Bolton, as well as the only possible heir to House Bolton until the birth of a child by Roose's new wife, Fat Walda Frey. He stayed behind as castellan of the Dreadfort when his father left for the south to fight in the War of the Five Kings.Ramsay kept a pack of dogs, which he employs for hunting. He was also in a relationship with the kennelmaster's daughter, Myranda, whom he supposedly planned to marry before his father ultimately had him legitimized."
        },
        {
            name: "Petyr Baelish",
            image_url: "http://vignette1.wikia.nocookie.net/gameofthrones/images/2/29/Petyr_littlefinger_s6_The_Door.jpg/revision/latest/scale-to-width-down/270?cb=20160530232347",
            title: "Lord Protector of the Vale",
            also_known_as: "Lord of Harrenhal (nominally),Lord Protector of the Vale,Master of Coin (formerly)",
            age: "32 years old",
            origin: "Baelish castle",
            description: "Petyr Baelish is the head of House Baelish, and the lord an extremely minor holding, so small it has neither name nor maester, located in a small area within the Fingers, a coastal region in the northeastern shores of the Vale of Arryn. He is currently House Baelish's only living member. At Riverrun he befriended Hoster's daughters Catelyn and Lysa Tully. Their brother Edmure mockingly nicknamed him 'Littlefinger' at the time, in reference to his small height at the time and the location of his minor landholdings. The nickname would stick with him throughout his life. Eventually even Petyr sarcastically embraced the nickname, due to the fact that it demonstrated how far he had risen, from an impoverished noble-born boy from an insignificant minor House in the 'little Finger' peninsula of the Vale, to one of the most powerful officials at the royal court."
        },
        {
            name: "Daenerys Targaryen",
            image_url: "http://vignette4.wikia.nocookie.net/gameofthrones/images/8/8d/Battle_of_bastards_Dany_main.jpg/revision/latest/scale-to-width-down/270?cb=20160621231046",
            title: "'Queen of the Andals, the Rhoynar', Khaleesi of the Great Grass Sea, Breaker of Chains, Mother of Dragons",
            also_known_as: "Mhysa, Dany, The One Who Was Promised",
            age: "21 years old",
            origin: "Dragonstone",
            description: "Daenerys is the only daughter and youngest child of King Aerys II Targaryen, the 'Mad King', and his sister-wife Rhaella. Her father died during the Sack of King's Landing, before she was even born. The usurper Robert Baratheon installed himself as king, having defeated Aerys in the conquest known as Robert's Rebellion. Her pregnant mother and young brother Viserys, fled to the island of Dragonstone, the ancestral home of House Targaryen, to escape Robert. Daenerys's brother Rhaegar Targaryen was also killed in the war and the forces of House Lannister murdered his wife, Elia Martell, and children, Daenerys's niece and nephew, during the Sack of King's Landing.On the night Daenerys was born on Dragonstone, a vast storm raged. For this reason, she is sometimes called 'Daenerys Stormborn'. Her mother died soon after she was born, leaving her an orphan. As a baby, she was taken into exile in the Free Cities with her brother, Viserys, by loyal retainers, among them Ser Willem Darry."
        },

    ];

})();
