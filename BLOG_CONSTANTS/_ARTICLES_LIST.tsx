import { iArticle } from "../src/shared/interfaces";

// Import author profiles, just type the name you have set in _BLOG_SETUP inside the curly brackets
import { ARMAN, } from "./_BLOG_SETUP";

// main article list to display all atricles
/**
 * Example article object
 * 
 {
    path: '/pages/tutorial/tutorial/how-to-setup-blog',
    featureArticle: true,
    preview: {
        // the author object you created in _BLOG_SETUP file
        author: MAYUR,
        date: "March 03 2022",
        articleTitle: "How to setup this plog template",
        tags: "demo, blog setup",
        thumbnail: "/images/tutorials/demo-image.jpg",
        shortIntro: "These are the steps to setup your blog",
    },
    seo: {
        title: "These are the steps to setup your blog",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        keywords: "demo, blog setup",
        ogImage: "/images/tutorials/demo-image.jpg",
        twitterHandle: "@mayur_nalwala",
    }
}
 */

// clear this article list and add your own
const ARTICLES_LIST: iArticle[] = [

  {
    path: "/pages/offers/groww_24_06_2023.tsx",
    featureArticle : true,
    preview: {
      author: ARMAN,
      date: "June 23 2023",
      articleTitle: "(🔥 धमाल) Groww App – ₹100 Signup Bonus In Bank + ₹400/Refer In Bank | Verified",
      shortIntro:
        "Groww Referral Code Sign Up & Get ₹101 Free Bank Cash Instantly From Groww App Refer & Earn Groww App",
      tags: "groww,refer&earn,instant,verified",
      thumbnail: "/public/imp_assets/offers/groww-24-06-2023.jpg",
      category: "Refer and Earn",
    },
    seo: {
      keywords:
        "demo, all components, style guide, styling, css, tailwind css, tailwind, webexpe, webexpe.com, styling tutorial, icons, how to use icons in website",
      ogImage: "/public/imp_assets/tutorials/how-to-write-first-article.svg",
    },
  },
];

export const SORTED_ARTICLES_BY_DATE = ARTICLES_LIST.sort((a, b) =>
  new Date(a.preview.date) > new Date(b.preview.date) ? -1 : 1
);
