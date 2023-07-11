/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../src/components";
import { CURRENT_YEAR } from "../src/constants/appConstants";
import { iSEO } from "../src/shared/interfaces";
import { BsGithub } from "react-icons/bs";


const AboutUs = () => {
    const PAGE_SEO: iSEO = {
        title: 'About Us',
        description: `Hi we are WebExpe. This is an open source blog template which can help you start a simple static blog.`,
        keywords: 'webexpx, contact us, webexpe13@gmail.com, next js blog template',
        author: 'Mayur Nalwala, Rupali Yadav'
    }


    function instagram(){
        window.location.href="https://instagram.com/arman.mondal.821"
    }
    
    function facebook(){
        window.location.href="https://facebook.com/arman.mondal.821"
    }
    
    function github(){
        window.location.href="https://github.com/arman-mondal"
    }
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <section className='container px-3 md:pb-20 md:pt-10 pt-20'>
                <div className="">
                   
                    <Text title className='mb-5 mt-10 dark:text-sky-400 text-sky-600'>
                        Hi i am Tech Arman.
                    </Text>
                    <Text subtitle className='text-xl mb-5'>
                       We post latest offers tricks and tech related news.
                    </Text>


                    <div className="flex justify-center items-center w-full" >
                        <img className="rounded-full mt-5" height="200" width="200" src="https://avatars.githubusercontent.com/u/132995280?v=4" /> 
            </div>
<div className="w-full justify-center items-center flex mt-8" >
<Text className="text-center text-5xl font-medium " >Arman Mondal</Text>
        
</div>
<div  className="w-full justify-center items-center flex" >
<img onClick={github} className="cursor-pointer hover:bg-gray-400  scale-100 hover:scale-90 ease-in duration-500 rounded-full " width="70" height="70" src="https://img.icons8.com/3d-fluency/70/github.png" alt="github"/> 
<img onClick={facebook} className="cursor-pointer  scale-100 hover:scale-90 ease-in duration-500 hover:bg-gray-400 rounded-full " width="70" height="70" src="https://img.icons8.com/3d-fluency/70/facebook-circled.png" alt="facebook-circled"/>
<img onClick={instagram} className="cursor-pointer scale-100 hover:scale-90 ease-in duration-500 hover:bg-gray-400  rounded-full  "  width="70" height="70" src="https://img.icons8.com/3d-fluency/70/instagram-new.png" alt="instagram-new"/>
</div>



               </div>
            </section>
        </PageLayout>
    )
}

export default AboutUs