import self from "../img/self.png"
import mock1 from "../img/mock1.PNG"
import mock2 from "../img/mock2.PNG"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.PNG"
import mock5 from "../img/mock5.png"
import mock6 from "../img/mock6.PNG"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Shubh",
    lastName: "Patel",
    initials: "Sp", // the example uses first and last, but feel free to use three or more if you like.
    position: "full-time Blockchain Degen",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '👩🏻‍💻',
            text: 'Integration Engineer at Push Protocol'
        },
        {
            emoji: '🌎',
            text: 'based in the India'
        },
        {
            emoji: "🛠️",
            text: "Ethereum India Fellow"
        },
        {
            emoji: "📧",
            text: "shubhamashishpatel@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://instagram.com/aeyshubh",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/aeyshubh",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/devshub21",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/aeyshubh",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello!,I am Shubham Patel,Integration engineer at Push Protocol and a final year student of Computer Science .I have been developring in Web3 since past 1 year and those are for sure best months of my life.",
    skills:
        {
            proficientWith: ['Solidity', 'Javascript','Typescript', 'Python', 'git', 'react', 'SoftSkills'],
            exposedTo: ['nodejs', 'C++', 'PHP']
        }
    ,
    hobbies: [
        {
            label: 'Anime',
            emoji: '☮️'
        },
        {
            label: 'Swimming',
            emoji: '🏊🏻‍♂️'
        },
        {
            label: 'Trekking',
            emoji: '🌄'
        },
        {
            label: 'Travelling',
            emoji: '🗺️'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    Achies: [
        {
            label: ': It was a 8-weeks program sponsored by ethereum foundation in which we explored Ethereum and created dapps on it.',
            emoji: 'Ethereum India Fellowship by Devfolio'
        },
        {
            label: 'It was a 4-Weeks program by Covalent in which i explored how to query on-Chain Data using Covalents "Increment" platform',
            emoji: 'Data Alchemist by @CovalentHq : '
        },
        {
            label: 'Our project PeerStreams was winner of this hackathon in which we integrated Superfluids money stream with a Live video stream on Livepeer network',
            emoji: 'Winner of Superfluid Wavepool#5 : '
        },
        {
            label: 'Our project PeerStreams won 2 Pool-Prizes of Covalent and Push in the hackathon,it was largest Ethereum hackathon of world',
            emoji: 'Won Pool-Prize at Ethindia~22 : '
        },
        {
            label: 'We got a grant from Push Dao for using it as a Notification and chatting service ',
            emoji: 'Push Grantee : '
        },
        {
            label: 'We got a grant from Livepeer for using it as a Video Transcoding service ',
            emoji: 'Livepeer Grantee : '
        },
        {
            label: 'It was my first Dapp,in this we created a Crowd-Funding dapp with custom ERC20 tokens for voting projects eligible for funding',
            emoji: 'Winner of Tic-Tech-Toe hackathon at DAIICT Ahmedabad'
        },

// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    
    portfolio: [ // This is where your portfolio projects will be detailed
        {title : "Lens-Phite is a 2 player game build on Lens protocol and Phala network in which your Attack power depends on the following,follower,post count on lens protocol.",
         live :"https://github.com/aeyshubh/lens-Phite2",
         image:mock5
        },
        {
            title: "PeerStreams : Decentralized Video streaming platform over Livepeer and Push",
            live: "https://www.peerstreams.tv/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
     // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Gm : It is a Chatting application built on Xmtp which you can send Payments in crypto and share your Nfts througn Chat",
            live: "https://gm-gm.surge.sh/",
            image: mock2
        },
        {
            title: "Green Inc DAO : A Blockchain based Voting and funding application with NFTs for early users.",
            live: "https://github.com/aeyshubh/Green-Inc.-DAO-",
            image: mock3
        },
        {
            title: "Stalk Nfts : Stalk Nfts of any public address,built over Covalent",
            live: "https://stalknfts.vercel.app/",
            image: mock4
        }
    ]
}
