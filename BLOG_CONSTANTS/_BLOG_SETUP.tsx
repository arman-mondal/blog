import { LogoType, NavbarType } from "../src/shared/enums";
import { IAuthor, iNavSetup, iSEO } from "../src/shared/interfaces";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

/**
 * EXAMPLE AUTHOR
 * 
 export const AUTHOR_NAME: IAuthor = {
    name: "Full Name",
    designation: "Work Designation",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
     social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/'
        },
    ]
}
 */

export const ARMAN: IAuthor = {
    name: "Arman Mondal",
    designation: "Software Engineer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "https://avatars.githubusercontent.com/u/132995280?v=4",
    social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/arman-mondal'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/in/ARMAN-/'
        },
    ]
}


// This can your company name / your name etc for SEO purposes
export const WEBSITE_NAME: string = 'Tech Arman ';
export const WEBSITE_URL: string = 'https://blogs.armanmondal.in';

/**
 * This is the main navigation setup.
 * This includes the main navbar and the side drawer.
 */
export const PRIMARY_NAV: iNavSetup = {
    type: NavbarType.DEFAULT,
    // max logo image height 40px
    // you can add logo light version if using image
    logo: {
        type: LogoType.TEXT,
      logo: 'Tech Arman',
    },
    // navLinks are the main navbar links that apper on top of every page
    navLinks: [
        {
            label: 'Home',
            path: '/'
        },
        
        {
            label: 'About Us',
            path: '/about-us'
        },
        {
            // to open a link in new tab pass newTab: true
            label: 'Support Us',
            path: 'https://www.buymeacoffee.com/armanmondal',
            newTab: true
        },
      
        {
            label: 'Contact Us',
            path: '/contact-us'
        }
    ],
    // sideNavLinks are the links which appear when you open the side menu after clicking the burger menu icon.
    sideNavLinks: [
        {
            label: 'Home',
            path: '/'
        },
       
        {
            label: 'About Us',
            path: '/about-us'
        },
        {
            label: 'Support Us',
            path: 'https://www.buymeacoffee.com/armanmondal',
            newTab: true
        },
       
        {
            label: 'Contact Us',
            path: '/contact-us'
        }
    ],
    socials: [
        {
            link: 'https://www.facebook.com/arman.mondal.821',
            icon:  <img  className="cursor-pointer  scale-100 hover:scale-90 ease-in duration-500 hover:bg-gray-400 rounded-full " width="50" height="50" src="https://img.icons8.com/3d-fluency/50/facebook-circled.png" alt="facebook-circled"/>
            
            
                  },
        {
            link: 'https://www.instagram.com/arman.mondal.821',
            icon: <img  className="cursor-pointer scale-100 hover:scale-90 ease-in duration-500 hover:bg-gray-400  rounded-full  "  width="50" height="50" src="https://img.icons8.com/3d-fluency/50/instagram-new.png" alt="instagram-new"/>
        },
        {
            link: 'https://github.com/arman-mondal',
            icon:  <img  className="cursor-pointer hover:bg-gray-400  scale-100 hover:scale-90 ease-in duration-500 rounded-full " width="50" height="50" src="https://img.icons8.com/3d-fluency/50/github.png" alt="github"/> 
        },
    ]
}

export const DEFAULT_SEO: iSEO = {
    title: "Tech Arman",
    description: "Latest and cool tricks to earn money online.",
    keywords: "Blog, next js, template, next js blog, blog setup, typescript, nextjs typescript, react js blog template, responsive blog template",
    url: WEBSITE_URL,
    author: `${ARMAN.name}`,
    twitterHandle: '@WebExpe',
    ogImage: '/public/images/og-image.jpg'
}